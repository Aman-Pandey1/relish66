import Category from '../models/Category.js';
import allowedCategories, { allowedSlugs, getAllowedSlugForName, ensureAllowedCategoriesExist } from '../utils/allowedCategories.js';

export const getCategories = async (_req, res, next) => {
	try {
		// Ensure allowed categories exist and respond in the predefined order
		await ensureAllowedCategoriesExist(Category);
		const docs = await Category.find({ slug: { $in: Array.from(allowedSlugs) } });
		const order = new Map(allowedCategories.map((c, i) => [c.slug, i]));
		docs.sort((a, b) => (order.get(a.slug) ?? 1e9) - (order.get(b.slug) ?? 1e9));
		res.json(docs);
	} catch (err) {
		next(err);
	}
};

export const createCategory = async (req, res, next) => {
	try {
		const { name, slug, icon, emoji, image, description } = req.body;
		const finalSlug = getAllowedSlugForName(slug || name);
		if (!finalSlug || !allowedSlugs.has(finalSlug)) {
			return res.status(400).json({ message: 'Category not allowed' });
		}
		const exists = await Category.findOne({ slug: finalSlug });
		if (exists) return res.status(400).json({ message: 'Category exists' });
		const allowedDef = allowedCategories.find((c) => c.slug === finalSlug);
		const category = await Category.create({
			name: allowedDef?.name || name,
			slug: finalSlug,
			icon,
			emoji: emoji || allowedDef?.emoji,
			image,
			description,
		});
		res.status(201).json(category);
	} catch (err) {
		next(err);
	}
};

export const updateCategory = async (req, res, next) => {
	try {
		const updates = { ...req.body };
		// Prevent changing slug to something not allowed
		if (typeof updates.slug !== 'undefined') {
			const finalSlug = getAllowedSlugForName(updates.slug);
			if (!finalSlug || !allowedSlugs.has(finalSlug)) {
				return res.status(400).json({ message: 'Category slug not allowed' });
			}
			updates.slug = finalSlug;
		}
		// If name provided, normalize it to the canonical allowed name
		if (typeof updates.name !== 'undefined') {
			const finalSlug = getAllowedSlugForName(updates.name);
			if (!finalSlug || !allowedSlugs.has(finalSlug)) {
				return res.status(400).json({ message: 'Category name not allowed' });
			}
			const def = allowedCategories.find((c) => c.slug === finalSlug);
			updates.name = def?.name || updates.name;
			updates.slug = finalSlug;
		}
		const cat = await Category.findByIdAndUpdate(req.params.id, updates, { new: true });
		if (!cat) return res.status(404).json({ message: 'Not found' });
		res.json(cat);
	} catch (e) { next(e); }
};

export const deleteCategory = async (req, res, next) => {
	try {
		const found = await Category.findById(req.params.id);
		if (!found) return res.json({ ok: true });
		if (allowedSlugs.has(found.slug)) {
			return res.status(400).json({ message: 'Cannot delete an allowed category' });
		}
		await Category.findByIdAndDelete(req.params.id);
		res.json({ ok: true });
	} catch (e) { next(e); }
};