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
		'name','slug','description','price','category','imageUrl','isFeatured'
	],[
		'Chole Bhature (2 pcs)','chole-bhature-2pcs','Fluffy bhature with chickpea curry','12.66','Breakfast / Lunch','https://...','false'
	],[
		'Veg Thali','veg-thali','Daal / Paneer / Rice / Bread / Raita / Salad / Sweet','14.66','Lunch Combo / Thali','https://...','true'
	],[
		'Mango Lassi','mango-lassi','Refreshing mango yogurt drink','5.66','Drinks','https://...','true'
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
		['Breakfast / Lunch'],
		['Aloo Poori 4pcs','10.66'],
		['Bedmi Poori (3 pcs)','10.66'],
		['Chole Bhature (2 pcs)','12.66'],
		['Chur Chur Naan (1 pc)','7.66'],
		['Amritsari Kulcha (1 pc)','7.66'],
		['Aloo Pyaz Parantha (1 pc)','4.66'],
		['Paneer Parantha (1 pc)','4.66'],
		['Dahi','2.66'],
		['Lunch Combo / Thali'],
		['Veg Thali','14.66'],
		['Non Veg Thali','15.66'],
		['Chaat - Cold Items'],
		['Chaat Papadi','7.66'],
		['Bhel Puri','5.66'],
		['Dahi Bhalla (4)','8.66'],
		['Gol Gappe (10)','9.66'],
		['Dahi Poori (8)','9.66'],
		['Rajbhog 4pcs','9.66'],
		['Chaat - Tawa Items'],
		['Pav Bhaji','9.66'],
		['Tawa Tikki Chaat (2)','7.66'],
		['Tawa Tikki Chole (2)','7.66'],
		['Nutree Kulcha (1)','9.66'],
		['Vada Pav (2)','7.66'],
		['Chaat - Frying Items'],
		['Samosa','1.25'],
		['Samosa Chat','8.66'],
		['Mix vegetable pakora','8.66'],
		['Ram Ladoo with Lacha Mooli','8.66'],
		['Dahi Kabab (4)','8.66'],
		['Bread Pakora Stuffed','1.66'],
		['Paneer Pakora','9.66'],
		['Veg Appetizers'],
		['Tandoori Paneer Tikka','13.66'],
		['Tandoori Phool','13.66'],
		['Dahi Kabab','12.66'],
		['Achari Soya Chaap','13.66'],
		['Tandoori Mushroom','14.66'],
		['Crispy Vegetables','12.66'],
		['Veg Platter','23.66'],
		['Non Veg Appetizers'],
		['Banjara Chicken Tikka','15.66'],
		['Chicken Lasooni Malai Tikka','15.66'],
		['Tandoori Chicken Half','14.66'],
		['Tandoori Chicken Full','23.66'],
		['Tandoori Makhani Chicken Chop (3)','15.66'],
		['Chicken Seekh Kabab','14.66'],
		['Chicken Ghungroo Kabab','14.66'],
		['Wings Tandoori (12)','14.66'],
		['Mutton Seekh Kabab','16.66'],
		['Mutton Barra Lb/Kg',''],
		['Mutton Ghungroo Kabab','16.66'],
		['Chicken Tangri Kabab','15.66'],
		['Fish Tikka Nurani','14.66'],
		['Fish Pakora',''],
		['Tandoori Prawns Ajwaini','19.66'],
		['Meat Platter','28.66'],
		['Veg Main Course'],
		['Shahi Paneer','15.66'],
		['Palak Paneer','15.66'],
		['Kadahi Paneer','15.66'],
		['Daal Makhani','13.66'],
		['Yellow Dal Tadka','12.66'],
		['Mix Vegetable fresh seasonal','13.66'],
		['Kadahi Masala Mushroom','13.66'],
		['Malai Kofta','15.66'],
		['Non Veg Main Course'],
		['Chicken Tikka Masala','15.66'],
		['Butter Chicken (Bone / No Bone)','15.66'],
		['Kadahi Chicken','15.66'],
		['Palak Chicken','15.66'],
		['Patiyala Chicken Curry','15.66'],
		['Mutton Curry','17.66'],
		['Kashmiri Mutton Rogan Josh','17.66'],
		['Rara Mutton','17.66'],
		['Saag Mutton','17.66'],
		['Mughalai Mutton Handi','22.66'],
		['Murgh Mussalam Bone-in','16.66'],
		['Fish Goan Curry','16.66'],
		['Laal Maas','17.66'],
		['Prawn Masala (with Tail)','17.66'],
		['Rice'],
		['Cumin Rice','5.66'],
		['Ghee Rice','5.66'],
		['Plain Steam Rice','4.66'],
		['Handi Biryani Veg','14.66'],
		['Handi Biryani Chicken','15.66'],
		['Handi Biryani Goat','16.66'],
		['Breads'],
		['Tandoori Roti','2'],
		['Lacha Parantha','3'],
		['Plain Naan','2'],
		['Butter Lachha Naan','3'],
		['Garlic Naan','3'],
		['Bread Basket any 4 assortment','10.99'],
		['Extras'],
		['Raita','3.66'],
		['Plain Yogurt','3.66'],
		['Papad','2.66'],
		['Pickle','1.66'],
		['Chutney','2.66'],
		['Salad Green','5.66'],
		['Masala Onions','3.66'],
		['Sirke Wala Pyaaz','3.66'],
		['Soup'],
		['Tamato Dhaniya Shorba','6.66'],
		['Drinks'],
		['Strawberry Shake','7.66'],
		['Mango Milk Shake','7.66'],
		['Cold Coffee','7.66'],
		['Mango Lassi','5.66'],
		['Lassi Salted','5.66'],
		['Lassi Sweet','5.66'],
		['Aam Panna','5.66'],
		['Lemon Soda','5.66'],
		['Indian Chai tea','3.66'],
		['Pop Coke Products','2.66'],
		['Juice','2.66'],
		['Tandoori Chai','3.66'],
		['Green Tea','2.66'],
		['Coffee Nscafe','3.66'],
		['Black Coffee','2.66'],
		['Edible tea cup','1.25'],
		['Desserts (House Made)'],
		['Rasamalai Roll','6.66'],
		['Moong Dal Halwa','6.66'],
		['Gulab Jamun Hot','6.66'],
		['Malai Kulfi','6.66'],
		['Casata Ice Cream','6.66'],
		['Brownie with Vanilla Ice Cream','6.66'],
		['Chef Special Menu'],
		['Eat As Much As You Can (Veg)','32.66'],
		['Eat As Much As You Can (Meat)','38.66'],
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