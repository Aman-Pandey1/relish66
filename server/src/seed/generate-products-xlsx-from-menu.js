import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function toSlug(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parsePrice(value) {
  if (value === null || typeof value === 'undefined') return NaN;
  if (typeof value === 'number') return value;
  const s = String(value).replace(/[^0-9.,-]/g, '').replace(',', '.');
  const n = parseFloat(s);
  return isNaN(n) ? NaN : n;
}

// Generate a generic image URL suitable for the product title/category
function buildImageUrl(title, categoryName) {
  const base = 'https://source.unsplash.com/600x400/?';
  const cleanTitle = String(title || '')
    .replace(/\(.*?\)/g, '')
    .replace(/[0-9]/g, '')
    .trim();
  const category = (categoryName || '').toLowerCase();
  let terms = [];
  if (category.includes('drink')) terms = ['indian drink', cleanTitle];
  else if (category.includes('soup')) terms = ['indian soup', cleanTitle];
  else if (category.includes('breads')) terms = ['indian bread', cleanTitle];
  else if (category.includes('rice')) terms = ['indian rice', cleanTitle];
  else if (category.includes('dessert')) terms = ['indian dessert', cleanTitle];
  else terms = ['indian food', cleanTitle];
  const query = encodeURIComponent(terms.filter(Boolean).join(','));
  return `${base}${query}`;
}

(function main() {
  // Default input: workspace/menu_template.xlsx
  const workspaceRoot = path.resolve(__dirname, '../../..');
  const defaultInput = path.resolve(workspaceRoot, 'menu_template.xlsx');
  const inputPath = path.resolve(process.cwd(), process.argv[2] || defaultInput);
  const outputDir = path.resolve(workspaceRoot, 'server', 'uploads');
  ensureDir(outputDir);
  const outputPath = path.resolve(outputDir, 'menu_products_with_images.xlsx');

  if (!fs.existsSync(inputPath)) {
    console.error('Input file not found:', inputPath);
    process.exit(1);
  }

  const wb = XLSX.readFile(inputPath);
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false });

  const outRows = [['name', 'category', 'price', 'imageUrl']];
  let currentCategory = '';

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i] || [];
    const c0 = (row[0] || '').toString().trim();
    const c1 = (row[1] || '').toString().trim();
    if (!c0 && !c1) continue;

    const p0 = parsePrice(c0);
    const p1 = parsePrice(c1);

    // Category header: first col is text and second is not a price
    if (c0 && isNaN(p0) && (c1 === '' || isNaN(p1))) {
      currentCategory = c0; // keep original name; importer maps it later
      continue;
    }

    // Product row: title | price
    if (c0 && !isNaN(p1)) {
      const title = c0;
      const price = Number(p1);
      const imageUrl = buildImageUrl(title, currentCategory);
      outRows.push([title, currentCategory, price, imageUrl]);
      continue;
    }

    // Single column title followed by a price-only row
    if (c0 && (!c1 || isNaN(p1))) {
      const next = rows[i + 1] || [];
      const n0 = (next[0] || '').toString().trim();
      const n1 = (next[1] || '').toString().trim();
      const nextPrice = !isNaN(parsePrice(n1))
        ? Number(parsePrice(n1))
        : !isNaN(parsePrice(n0))
        ? Number(parsePrice(n0))
        : NaN;
      if (!isNaN(nextPrice)) {
        const title = c0;
        const imageUrl = buildImageUrl(title, currentCategory);
        outRows.push([title, currentCategory, nextPrice, imageUrl]);
        i++; // consume the next row as price row
        continue;
      }
    }
  }

  const outSheet = XLSX.utils.aoa_to_sheet(outRows);
  const outWb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(outWb, outSheet, 'Products');
  XLSX.writeFile(outWb, outputPath);
  console.log('Wrote structured products Excel with images to:', outputPath);
})();
