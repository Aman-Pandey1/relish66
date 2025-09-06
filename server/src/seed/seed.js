import dotenv from 'dotenv';
import connectDB from '../utils/connectDB.js';
import Category from '../models/Category.js';
import Product from '../models/Product.js';
import User from '../models/User.js';
import Promotion from '../models/Promotion.js';

dotenv.config();

const categories = [
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

const products = [
	{
		title: 'Relish66 Special',
		slug: 'relish66-special',
		description: 'Fluffy bhature served with spicy chickpea curry',
		price: 12.66,
		thumbnail: 'https://images.unsplash.com/photo-1604908176997-431682cd12d1?q=80&w=1600&auto=format&fit=crop',
		isFeatured: true,
		categorySlug: 'breakfast-lunch',
	},
	{
		title: 'Veg Thali',
		slug: 'veg-thali',
		description: 'Daal, paneer, rice, bread, raita, salad, and sweet',
		price: 14.66,
		thumbnail: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1600&auto=format&fit=crop',
		isFeatured: true,
		categorySlug: 'thali',
	},
];

const drinks = [
	{
		title: 'Mango Lassi',
		slug: 'mango-lassi',
		description: 'Refreshing mango yogurt drink',
		price: 5.66,
		thumbnail: 'https://images.unsplash.com/photo-1627662164325-2f4a75e21b93?q=80&w=1600&auto=format&fit=crop',
		isFeatured: true,
		categorySlug: 'drinks',
	},
];

(async () => {
	await connectDB();
	await Promise.all([
		Category.deleteMany({}),
		Product.deleteMany({}),
		User.deleteMany({}),
		Promotion.deleteMany({}),
	]);
	const catDocs = await Category.insertMany(categories);
	const slugToId = Object.fromEntries(catDocs.map((c) => [c.slug, c._id]));
	const toInsert = products.concat(drinks).map((p) => ({ ...p, category: slugToId[p.categorySlug] }));
	await Product.insertMany(toInsert);
	await User.create({ name: 'Admin', email: 'admin@relish66.com', password: 'Admin123!', role: 'admin' });
	await Promotion.create({ title: 'Chef Specials', subtitle: 'Seasonal favorites', image: 'https://images.unsplash.com/photo-1604908554026-3b4b7bdbaff3?q=80&w=1600&auto=format&fit=crop', ctaText: 'View Menu', ctaLink: '/shop', order: 1, active: true });
	console.log('Seeded categories, products, admin user, and promotions');
	process.exit(0);
})();