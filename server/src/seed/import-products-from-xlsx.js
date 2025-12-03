import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from '../utils/connectDB.js';
import { importProductsFromExcel } from '../controllers/productController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from server/.env
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

function createReq(filePath) {
  return { file: { path: filePath } };
}

function createRes() {
  return {
    statusCode: 200,
    headers: {},
    status(code) { this.statusCode = code; return this; },
    setHeader(name, value) { this.headers[name] = value; },
    json(payload) { console.log(JSON.stringify(payload, null, 2)); },
    send(payload) { console.log(payload); },
  };
}

async function main() {
  const workspaceRoot = path.resolve(__dirname, '../../..');
  const defaultInput = path.resolve(workspaceRoot, 'server', 'uploads', 'menu_products_with_images.xlsx');
  const inputPath = path.resolve(process.cwd(), process.argv[2] || defaultInput);

  if (!fs.existsSync(inputPath)) {
    console.error('Input file not found:', inputPath);
    process.exit(1);
  }

  await connectDB();

  const req = createReq(inputPath);
  const res = createRes();
  const next = (err) => { if (err) { console.error(err); process.exit(1); } };

  await importProductsFromExcel(req, res, next);
  process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });
