import Promotion from '../models/Promotion.js';

export const listPromotions = async (_req, res, next) => {
	try {
		const promos = await Promotion.find({ active: true }).sort({ order: 1, createdAt: -1 });
		res.json(promos);
	} catch (e) { next(e); }
};

export const createPromotion = async (req, res, next) => {
	try {
		const promo = await Promotion.create(req.body);
		res.status(201).json(promo);
	} catch (e) { next(e); }
};

export const updatePromotion = async (req, res, next) => {
	try {
		const promo = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.json(promo);
	} catch (e) { next(e); }
};

export const deletePromotion = async (req, res, next) => {
	try {
		await Promotion.findByIdAndDelete(req.params.id);
		res.json({ ok: true });
	} catch (e) { next(e); }
};