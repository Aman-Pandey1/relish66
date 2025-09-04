import express from 'express';
import { getProducts, getProductBySlug, createProduct, updateProduct, deleteProduct, importProductsFromExcel } from '../controllers/productController.js';
import { requireAuth, requireAdmin } from '../middleware/authMiddleware.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
	destination: (_req, _file, cb) => cb(null, uploadsDir),
	filename: (_req, file, cb) => cb(null, Date.now() + '-' + Math.round(Math.random()*1e9) + '-' + file.originalname.replace(/\s+/g,'_')),
});
const fileFilter = (_req, file, cb) => {
	const ok = /image\/(jpeg|png|webp|jpg)/.test(file.mimetype);
	cb(ok ? null : new Error('Invalid file type'), ok);
};
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

const excelUpload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

router.get('/', getProducts);
router.get('/:slug', getProductBySlug);
router.post('/', requireAuth, requireAdmin, upload.single('image'), createProduct);
router.put('/:id', requireAuth, requireAdmin, upload.single('image'), updateProduct);
router.delete('/:id', requireAuth, requireAdmin, deleteProduct);
router.post('/import', requireAuth, requireAdmin, excelUpload.single('file'), importProductsFromExcel);

export default router;