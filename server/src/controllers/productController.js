import Product from '../models/Product.js';
import Category from '../models/Category.js';
import XLSX from 'xlsx';

export const getProducts = async (req, res, next) => {
	try {
		const { category, sort, q, min, max, featured, limit, minDiscount } = req.query;
		const filter = { isActive: true };
		if (minDiscount) filter.discountPercent = { $gte: Number(minDiscount) };
		if (category) {
			const cat = await Category.findOne({ slug: category });
			if (cat) filter.category = cat._id;
		}
		if (q) filter.title = { $regex: q, $options: 'i' };
		if (featured) filter.isFeatured = featured === 'true';
		if (min || max) filter.price = { ...(min && { $gte: Number(min) }), ...(max && { $lte: Number(max) }) };
		let query = Product.find(filter).populate('category', 'name slug');
		if (sort === 'price_asc') query = query.sort({ price: 1 });
		else if (sort === 'price_desc') query = query.sort({ price: -1 });
		else if (sort === 'newest') query = query.sort({ createdAt: -1 });
		else if (sort === 'popular') query = query.sort({ 'metrics.views': -1 });
		if (limit) query = query.limit(Number(limit));
		const products = await query.exec();
		res.json(products);
	} catch (err) {
		next(err);
	}
};

export const getProductBySlug = async (req, res, next) => {
	try {
		const product = await Product.findOneAndUpdate(
			{ slug: req.params.slug, isActive: true },
			{ $inc: { 'metrics.views': 1 } },
			{ new: true }
		).populate('category', 'name slug');
		if (!product) return res.status(404).json({ message: 'Product not found' });
		res.json(product);
	} catch (err) {
		next(err);
	}
};

export const createProduct = async (req, res, next) => {
	try {
		const data = req.body;
		if (req.file) data.thumbnail = `/uploads/${req.file.filename}`;
		if (!req.file && data.imageUrl) data.thumbnail = data.imageUrl;
		if (typeof data.discountPercent !== 'undefined') data.discountPercent = Number(data.discountPercent) || 0;
		if (typeof data.isFeatured !== 'undefined') {
			const v = String(data.isFeatured).trim().toLowerCase();
			data.isFeatured = v === 'true' || v === 'yes' || v === '1';
		}
		const exists = await Product.findOne({ slug: data.slug });
		if (exists) return res.status(400).json({ message: 'Product exists' });
		const category = await Category.findOne({ slug: data.categorySlug });
		if (category) data.category = category._id;
		if (!data.category) return res.status(400).json({ message: 'Category is required' });
		if (!data.price) return res.status(400).json({ message: 'Price is required' });
		if (!data.title || !data.slug) return res.status(400).json({ message: 'Title and slug are required' });
		const product = await Product.create(data);
		res.status(201).json(product);
	} catch (err) {
		next(err);
	}
};

export const updateProduct = async (req, res, next) => {
	try {
		const updates = { ...req.body };
		if (req.file) updates.thumbnail = `/uploads/${req.file.filename}`;
		if (!req.file && updates.imageUrl) updates.thumbnail = updates.imageUrl;
		if (typeof updates.discountPercent !== 'undefined') updates.discountPercent = Number(updates.discountPercent) || 0;
		if (updates.categorySlug) {
			const category = await Category.findOne({ slug: updates.categorySlug });
			if (category) updates.category = category._id;
		}
		const product = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
		if (!product) return res.status(404).json({ message: 'Not found' });
		res.json(product);
	} catch (err) { next(err); }
};

export const deleteProduct = async (req, res, next) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.json({ ok: true });
	} catch (err) { next(err); }
};

function toSlug(value) {
	return String(value || '')
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

function parsePrice(value) {
	if (value === null || typeof value === 'undefined') return NaN;
	if (typeof value === 'number') return value;
	const s = String(value).replace(/[^0-9.,-]/g, '').replace(',', '.');
	const n = parseFloat(s);
	return isNaN(n) ? NaN : n;
}

async function ensureCategoryByName(name, cache) {
	const slug = toSlug(name);
	if (cache[slug]) return cache[slug];
	let cat = await Category.findOne({ slug });
	if (!cat) {
		cat = await Category.create({ name: name.trim(), slug });
	}
	cache[slug] = cat._id;
	return cat._id;
}

export const importProductsFromExcel = async (req, res, next) => {
	try {
		if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
		const workbook = XLSX.readFile(req.file.path);
		const sheet = workbook.Sheets[workbook.SheetNames[0]];

		// First try structured import (with headers)
		const rows = XLSX.utils.sheet_to_json(sheet);
		const cats = await Category.find({});
		const slugToId = Object.fromEntries(cats.map((c)=>[c.slug,c._id]));
		const docs = [];
		for (const r of rows) {
			const slug = String(r.slug || r.Slug || (r.name || r.title || '').toString().toLowerCase().replace(/\s+/g,'-')).toLowerCase();
			const title = r.title || r.name || '';
			if (!slug || !title) continue;
			if (await Product.findOne({ slug })) continue;
			let categorySlug = (r.categorySlug || r.category || r.Category || '').toString().toLowerCase();
			let categoryId = slugToId[categorySlug];
			if (!categoryId && categorySlug) {
				const created = await Category.create({ name: (r.category || r.Category), slug: categorySlug });
				categoryId = created._id;
				slugToId[categorySlug] = categoryId;
			}
			if (!categoryId) continue;
			const rawFeatured = r.isFeatured ?? r.Featured ?? r.featured;
			const isFeatured = typeof rawFeatured !== 'undefined'
				? String(rawFeatured).trim().toLowerCase() === 'true' || String(rawFeatured).trim().toLowerCase() === 'yes' || String(rawFeatured).trim() === '1'
				: false;
			docs.push({
				title,
				slug,
				description: r.description || r.Description || '',
				price: Number(r.price || r.Price || 0),
				thumbnail: r.thumbnail || r.imageUrl || r.image || r.Image || '',
				category: categoryId,
				isFeatured,
				discountPercent: 0,
			});
		}

		if (!docs.length) {
			// Fallback: menu-style import (section headers + item/price rows)
			const aoa = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false });
			const catCache = { ...slugToId };
			let currentCategoryId = null;
			for (let i = 0; i < aoa.length; i++) {
				const row = aoa[i] || [];
				const c0 = (row[0] || '').toString().trim();
				const c1 = (row[1] || '').toString().trim();
				if (!c0 && !c1) continue;

				const price1 = parsePrice(c1);
				const price0 = parsePrice(c0);

				// Section header if first col text and not a price and no second col price
				if (c0 && isNaN(price0) && (c1 === '' || isNaN(price1))) {
					// treat as category header
					currentCategoryId = await ensureCategoryByName(c0, catCache);
					continue;
				}

				// Two-column product: title | price
				if (c0 && !isNaN(price1)) {
					const title = c0;
					const price = Number(price1);
					const slug = toSlug(title);
					if (await Product.findOne({ slug })) continue;
					const category = currentCategoryId || (await ensureCategoryByName('General', catCache));
					docs.push({ title, slug, price, category, isFeatured: false, discountPercent: 0 });
					continue;
				}

				// One-column product followed by price-only next row
				if (c0 && (!c1 || isNaN(price1))) {
					const next = aoa[i + 1] || [];
					const n0 = (next[0] || '').toString().trim();
					const n1 = (next[1] || '').toString().trim();
					const nPrice = !isNaN(parsePrice(n1)) ? Number(parsePrice(n1)) : (!isNaN(parsePrice(n0)) ? Number(parsePrice(n0)) : NaN);
					if (!isNaN(nPrice)) {
						const title = c0;
						const slug = toSlug(title);
						if (!(await Product.findOne({ slug }))) {
							const category = currentCategoryId || (await ensureCategoryByName('General', catCache));
							docs.push({ title, slug, price: nPrice, category, isFeatured: false, discountPercent: 0 });
						}
						i++; // consume next row as price row
						continue;
					}
				}
			}
		}

		if (docs.length) await Product.insertMany(docs);
		res.json({ inserted: docs.length });
	} catch (e) { next(e); }
};