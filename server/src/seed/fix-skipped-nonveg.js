import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from '../utils/connectDB.js';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import { ensureAllowedCategoriesExist, toSlug } from '../utils/allowedCategories.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

function buildImageUrl(title) {
  const base = 'https://source.unsplash.com/600x400/?';
  const cleanTitle = String(title || '')
    .replace(/\(.*?\)/g, '')
    .replace(/[0-9]/g, '')
    .trim();
  const terms = ['indian food', cleanTitle];
  return `${base}${encodeURIComponent(terms.filter(Boolean).join(','))}`;
}

async function main() {
  await connectDB();
  await ensureAllowedCategoriesExist(Category);
  const nonVeg = await Category.findOne({ slug: 'non-veg-appetizers' });
  if (!nonVeg) {
    console.error('Category non-veg-appetizers not found');
    process.exit(1);
  }

  const items = [
    { title: 'Mutton Ghungroo Kabab', price: 16.66 },
    { title: 'Chicken Tangri Kabab', price: 15.66 },
    { title: 'Fish Tikka Nurani', price: 14.66 },
    { title: 'Tandoori Prawns Ajwaini', price: 19.66 },
    { title: 'Meat Platter', price: 28.66 },
  ];

  let inserted = 0;
  const skipped = [];
  for (const it of items) {
    const slug = toSlug(it.title);
    const exists = await Product.findOne({ slug });
    if (exists) { skipped.push({ title: it.title, reason: 'Already exists' }); continue; }
    await Product.create({
      title: it.title,
      slug,
      price: it.price,
      category: nonVeg._id,
      discountPercent: 0,
      isFeatured: false,
      thumbnail: buildImageUrl(it.title),
    });
    inserted++;
  }

  console.log(JSON.stringify({ inserted, skipped }, null, 2));
  process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });
