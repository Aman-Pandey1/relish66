import dotenv from 'dotenv';
import connectDB from '../utils/connectDB.js';
import Category from '../models/Category.js';
import Product from '../models/Product.js';
import User from '../models/User.js';
import Promotion from '../models/Promotion.js';

dotenv.config();

const categories = [
	{ name: 'Beer', slug: 'beer', emoji: '🍺' },
	{ name: 'Wine', slug: 'wine', emoji: '🍷' },
	{ name: 'Spirits', slug: 'spirits', emoji: '🥃' },
	{ name: 'Groceries', slug: 'groceries', emoji: '🛒' },
	{ name: 'Specialty / Local', slug: 'specialty-local', emoji: '🌾' },
];

const products = [
	{
		title: 'Kicking Horse Lager',
		slug: 'kicking-horse-lager-6pk',
		description: 'Crisp mountain-brewed lager. 6 x 355ml',
		price: 13.99,
		thumbnail: '/images/beer/lager.jpg',
		attributes: { abv: '5%', volumeMl: 355, flavourNotes: 'Crisp, clean' },
		isFeatured: true,
		categorySlug: 'beer',
	},
	{
		title: 'Rocky Ridge Pinot Noir',
		slug: 'rocky-ridge-pinot-noir',
		description: 'Elegant red with cherry and spice notes',
		price: 24.99,
		thumbnail: '/images/wine/pinot-noir.jpg',
		attributes: { abv: '13%', volumeMl: 750, flavourNotes: 'Cherry, spice' },
		isFeatured: true,
		categorySlug: 'wine',
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
	const toInsert = products.map((p) => ({ ...p, category: slugToId[p.categorySlug] }));
	await Product.insertMany(toInsert);
	await User.create({ name: 'Admin', email: 'admin@kickinghorse.store', password: 'Admin123!', role: 'admin' });
	await Promotion.create({ title: 'Winter Warmers', subtitle: '10% off select spirits', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c76ef?q=80&w=1600&auto=format&fit=crop', ctaText: 'Shop Spirits', ctaLink: '/shop', order: 1, active: true });
	console.log('Seeded categories, products, admin user, and promotions');
	process.exit(0);
})();