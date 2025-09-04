import Coupon from '../models/Coupon.js';

export const applyCoupon = async (req, res, next) => {
	try {
		const { code, subtotal } = req.body;
		const coupon = await Coupon.findOne({ code: code?.toUpperCase(), isActive: true });
		if (!coupon) return res.status(404).json({ message: 'Invalid coupon' });
		if (coupon.expiresAt && coupon.expiresAt < new Date()) return res.status(400).json({ message: 'Coupon expired' });
		if (coupon.minOrderValue && subtotal < coupon.minOrderValue)
			return res.status(400).json({ message: `Min order ${coupon.minOrderValue}` });
		let discount = 0;
		if (coupon.discountPercent) discount = (subtotal * coupon.discountPercent) / 100;
		if (coupon.discountFixed) discount = Math.max(discount, coupon.discountFixed);
		res.json({ code: coupon.code, discount });
	} catch (err) {
		next(err);
	}
};

export const listCoupons = async (_req, res, next) => {
	try { res.json(await Coupon.find({}).sort({ createdAt: -1 })); } catch (e) { next(e); }
};
export const createCoupon = async (req, res, next) => {
	try { const c = await Coupon.create(req.body); res.status(201).json(c); } catch (e) { next(e); }
};
export const updateCoupon = async (req, res, next) => {
	try { const c = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(c); } catch (e) { next(e); }
};
export const deleteCoupon = async (req, res, next) => {
	try { await Coupon.findByIdAndDelete(req.params.id); res.json({ ok: true }); } catch (e) { next(e); }
};