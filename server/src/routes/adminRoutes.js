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

// Excel template for menu-style import
router.get('/excel-template/menu', (_req, res) => {
	const rows = [
		['Drinks'],
		['Strawberry Shake', '7.66'],
		['Mango Milk Shake', '7.66'],
		['Cold Coffee', '7.66'],
		['Mango Lassi', '5.66'],
		['Lassi Salted', '5.66'],
		['Lassi Sweet', '5.66'],
		['Aam Panna', '5.66'],
		['Lemon Soda', '5.66'],
		['Indian Chai tea', '3.66'],
		['Pop Coke Products', '2.66'],
		['Juice', '2.66'],
		['Tandoori Chai', '3.66'],
		['Green Tea', '2.66'],
		['Coffee Nscafe', '3.66'],
		['Black Coffee', '2.66'],
		['Edible tea cup', '1.25'],
		['Desserts (House Made)'],
		['Rasamalai Roll', '6.66'],
		['Moong Dal Halwa', '6.66'],
		['Gulab Jamun Hot', '6.66'],
		['Malai Kulfi', '6.66'],
		['Casata Ice Cream', '6.66'],
		['Brownie with Vanilla Ice Cream', '6.66'],
	];
	const sheet = XLSX.utils.aoa_to_sheet(rows);
	const wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, sheet, 'MenuTemplate');
	const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
	res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
	res.setHeader('Content-Disposition', 'attachment; filename="menu_template.xlsx"');
	res.send(buf);
});

export default router;