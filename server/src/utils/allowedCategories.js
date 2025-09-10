// Central definition of allowed categories derived from the provided menu

export function toSlug(value) {
	return String(value || '')
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

const allowedCategories = [
	{ name: 'Breakfast / Lunch', slug: 'breakfast-lunch', emoji: '🍽️' },
	{ name: 'Lunch Combo / Thali', slug: 'thali', emoji: '🍱' },
	{ name: 'Chaat - Cold Items', slug: 'chaat-cold', emoji: '🥗' },
	{ name: 'Chaat - Tawa Items', slug: 'chaat-tawa', emoji: '🍳' },
	{ name: 'Chaat - Frying Items', slug: 'chaat-frying', emoji: '🍟' },
	{ name: 'Veg Appetizers', slug: 'veg-appetizers', emoji: '🥦' },
	{ name: 'Non Veg Appetizers', slug: 'non-veg-appetizers', emoji: '🍗' },
	{ name: 'Veg Main Course', slug: 'veg-main-course', emoji: '🥬' },
	{ name: 'Non Veg Main Course', slug: 'non-veg-main-course', emoji: '🍖' },
	{ name: 'Rice', slug: 'rice', emoji: '🍚' },
	{ name: 'Breads', slug: 'breads', emoji: '🥖' },
	{ name: 'Extras', slug: 'extras', emoji: '🧂' },
	{ name: 'Soup', slug: 'soup', emoji: '🥣' },
	{ name: 'Drinks', slug: 'drinks', emoji: '🥤' },
	{ name: 'Desserts', slug: 'desserts', emoji: '🍰' },
	{ name: 'Chef Special Menu', slug: 'chef-special', emoji: '👨‍🍳' },
];

export default allowedCategories;

export const allowedSlugs = new Set(allowedCategories.map((c) => c.slug));

const synonyms = new Map([
	['desserts-house-made', 'desserts'],
	['house-made-desserts', 'desserts'],
	['cold-items', 'chaat-cold'],
	['chaat-cold-items', 'chaat-cold'],
	['cold', 'chaat-cold'],
	['tawa-items', 'chaat-tawa'],
	['chaat-tawa-items', 'chaat-tawa'],
	['tawa', 'chaat-tawa'],
	['frying-items', 'chaat-frying'],
	['fried-items', 'chaat-frying'],
	['chaat-frying-items', 'chaat-frying'],
	['frying', 'chaat-frying'],
	['lunch-combo', 'thali'],
	['lunch-combo-thali', 'thali'],
	['combo-thali', 'thali'],
	['veg-main', 'veg-main-course'],
	['vegetarian-main-course', 'veg-main-course'],
	['non-veg-main', 'non-veg-main-course'],
	['nonveg-main-course', 'non-veg-main-course'],
	['chef-special', 'chef-special'],
	['chef-special-menu', 'chef-special'],
	['eat-as-much-as-you-can', 'chef-special'],
]);

export function getAllowedSlugForName(name) {
	const raw = String(name || '').trim();
	if (!raw) return null;
	const s = toSlug(raw);
	if (allowedSlugs.has(s)) return s;
	if (synonyms.has(s)) return synonyms.get(s);
	// Try fuzzy match on allowed names
	const byName = allowedCategories.find((c) => toSlug(c.name) === s);
	if (byName) return byName.slug;
	return null;
}

export function getAllowedCategoryBySlug(slug) {
	const s = String(slug || '').trim().toLowerCase();
	return allowedCategories.find((c) => c.slug === s) || null;
}

export async function ensureAllowedCategoriesExist(CategoryModel) {
	const ensured = [];
	for (const c of allowedCategories) {
		let doc = await CategoryModel.findOne({ slug: c.slug });
		if (!doc) {
			doc = await CategoryModel.create({ name: c.name, slug: c.slug, emoji: c.emoji });
		}
		ensured.push(doc);
	}
	return ensured;
}

