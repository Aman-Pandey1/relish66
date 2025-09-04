import Wishlist from '../models/Wishlist.js';
import Product from '../models/Product.js';

const getOrCreate = async (userId) => {
	let wl = await Wishlist.findOne({ user: userId });
	if (!wl) wl = await Wishlist.create({ user: userId, products: [] });
	return wl;
};

export const getWishlist = async (req, res, next) => {
	try {
		const wl = await Wishlist.findOne({ user: req.user._id }).populate('products');
		res.json(wl || { user: req.user._id, products: [] });
	} catch (e) { next(e); }
};

export const addToWishlist = async (req, res, next) => {
	try {
		const { productId } = req.body;
		const product = await Product.findById(productId);
		if (!product) return res.status(404).json({ message: 'Product not found' });
		const wl = await getOrCreate(req.user._id);
		if (!wl.products.find((p) => p.toString() === productId)) wl.products.push(productId);
		await wl.save();
		res.status(201).json(wl);
	} catch (e) { next(e); }
};

export const removeFromWishlist = async (req, res, next) => {
	try {
		const { productId } = req.params;
		const wl = await getOrCreate(req.user._id);
		wl.products = wl.products.filter((p) => p.toString() !== productId);
		await wl.save();
		res.json(wl);
	} catch (e) { next(e); }
};

export const toggleWishlist = async (req, res, next) => {
	try {
		const { productId } = req.body;
		const wl = await getOrCreate(req.user._id);
		const idx = wl.products.findIndex((p) => p.toString() === productId);
		if (idx >= 0) wl.products.splice(idx, 1);
		else wl.products.push(productId);
		await wl.save();
		res.json(wl);
	} catch (e) { next(e); }
};