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
		let membershipApplied = false;
		let deliveryFee = fulfillment?.type === 'delivery' ? 5 : 0;
		let member = null;
		if (userId) {
			member = await User.findById(userId);
			if (member?.membership?.active) {
				membershipApplied = true;
				deliveryFee = 0;
				discount += Math.round(subtotal * 0.10 * 100) / 100;
			}
		}
		if (couponCode) {
			coupon = await Coupon.findOne({ code: couponCode.toUpperCase(), isActive: true });
			if (coupon) {
				if (coupon.discountPercent) discount = (subtotal * coupon.discountPercent) / 100;
				if (coupon.discountFixed) discount = Math.max(discount, coupon.discountFixed);
			}
		}
		const tax = Math.round((subtotal - discount) * 0.05 * 100) / 100;
		const total = Math.max(0, subtotal - discount + tax + deliveryFee);
		const earnedPoints = member?.membership?.active ? Math.floor(Math.max(0, subtotal - discount)) : 0;
		const order = await Order.create({
			items,
			user: member?._id,
			customer,
			fulfillment,
			coupon: coupon?._id,
			amounts: { subtotal, discount, tax, deliveryFee, total, currency: 'CAD' },
			payment,
			rewardPointsEarned: earnedPoints,
			status: 'new',
		});
		let updatedUser = null;
		if (earnedPoints > 0) {
			updatedUser = await User.findByIdAndUpdate(member._id, { $inc: { rewardPoints: earnedPoints } }, { new: true });
		}
		const publicUser = updatedUser ? { id: updatedUser._id, name: updatedUser.name, email: updatedUser.email, role: updatedUser.role, membership: updatedUser.membership, rewardPoints: updatedUser.rewardPoints } : null;
		res.status(201).json({ order, user: publicUser });
	} catch (err) {
		next(err);
	}
};