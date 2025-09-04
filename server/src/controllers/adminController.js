import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

export const stats = async (_req, res, next) => {
	try {
		const [ordersCount, productsCount, usersCount, recentOrders] = await Promise.all([
			Order.countDocuments(),
			Product.countDocuments(),
			User.countDocuments(),
			Order.find({}).sort({ createdAt: -1 }).limit(5),
		]);
		const revenue = await Order.aggregate([
			{ $group: { _id: null, total: { $sum: '$amounts.total' } } },
		]);
		res.json({
			ordersCount,
			productsCount,
			usersCount,
			revenue: revenue?.[0]?.total || 0,
			recentOrders,
		});
	} catch (e) { next(e); }
};