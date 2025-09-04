import Category from '../models/Category.js';

export const getCategories = async (_req, res, next) => {
	try {
		const categories = await Category.find({}).sort({ name: 1 });
		res.json(categories);
	} catch (err) {
		next(err);
	}
};

export const createCategory = async (req, res, next) => {
	try {
		const { name, slug, icon, emoji, image, description } = req.body;
		const exists = await Category.findOne({ slug });
		if (exists) return res.status(400).json({ message: 'Category exists' });
		const category = await Category.create({ name, slug, icon, emoji, image, description });
		res.status(201).json(category);
	} catch (err) {
		next(err);
	}
};

export const updateCategory = async (req, res, next) => {
	try {
		const cat = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!cat) return res.status(404).json({ message: 'Not found' });
		res.json(cat);
	} catch (e) { next(e); }
};

export const deleteCategory = async (req, res, next) => {
	try {
		await Category.findByIdAndDelete(req.params.id);
		res.json({ ok: true });
	} catch (e) { next(e); }
};