import express from 'express';
import { requireAuth, requireAdmin } from '../middleware/authMiddleware.js';
import { stats } from '../controllers/adminController.js';
import XLSX from 'xlsx';

const router = express.Router();

router.use(requireAuth, requireAdmin);
router.get('/stats', stats);

// Excel template for product import
router.get('/excel-template/products', (_req, res) => {
	const rows = [[
		'title','slug','description','price','categorySlug','discountPercent','image','isFeatured','abv','volumeMl','origin','flavourNotes'
	]];
	const sheet = XLSX.utils.aoa_to_sheet(rows);
	const wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, sheet, 'ProductsTemplate');
	const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
	res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
	res.setHeader('Content-Disposition', 'attachment; filename="products_template.xlsx"');
	res.send(buf);
});

export default router;