import Order from '../models/Order.js';
import Coupon from '../models/Coupon.js';
import User from '../models/User.js';

const calcTotals = (items) => {
	const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
	return { subtotal };
};

export const createOrder = async (req, res, next) => {
	try {
		const { items, customer, fulfillment, payment, couponCode, userId } = req.body;
		if (!items?.length) return res.status(400).json({ message: 'No items' });
		const { subtotal } = calcTotals(items);
		let discount = 0;
		let coupon;
		let deliveryFee = fulfillment?.type === 'delivery' ? 5 : 0;
		let member = userId ? await User.findById(userId) : null;
		if (couponCode) {
			coupon = await Coupon.findOne({ code: couponCode.toUpperCase(), isActive: true });
			if (coupon) {
				if (coupon.discountPercent) discount = (subtotal * coupon.discountPercent) / 100;
				if (coupon.discountFixed) discount = Math.max(discount, coupon.discountFixed);
			}
		}
		const tax = Math.round((subtotal - discount) * 0.05 * 100) / 100;
		const total = Math.max(0, subtotal - discount + tax + deliveryFee);
		const order = await Order.create({
			items,
			user: member?._id,
			customer,
			fulfillment,
			coupon: coupon?._id,
			amounts: { subtotal, discount, tax, deliveryFee, total, currency: 'CAD' },
			payment,
			status: 'new',
		});
		res.status(201).json({ order });
	} catch (err) {
		next(err);
	}
};