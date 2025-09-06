import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import connectDB from './utils/connectDB.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
// newsletter removed
import contactRoutes from './routes/contactRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import promotionRoutes from './routes/promotionRoutes.js';
import Category from './models/Category.js';
import Product from './models/Product.js';
import Promotion from './models/Promotion.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import User from './models/User.js';
import wishlistRoutes from './routes/wishlistRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import compression from 'compression';

async function bootstrapData() {
	const count = await Category.countDocuments();
	if (count === 0) {
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
		const catDocs = await Category.insertMany(categories);
		const slugToId = Object.fromEntries(catDocs.map((c) => [c.slug, c._id]));
		const products = [
			{
				title: 'Chole Bhature (2 pcs)',
				slug: 'chole-bhature-2pcs',
				description: 'Fluffy bhature served with spicy chickpea curry',
				price: 12.66,
				thumbnail: 'https://images.unsplash.com/photo-1604908176997-431682cd12d1?q=80&w=1600&auto=format&fit=crop',
				isFeatured: true,
				discountPercent: 0,
				category: slugToId['breakfast-lunch'],
			},
			{
				title: 'Veg Thali',
				slug: 'veg-thali',
				description: 'Daal, paneer, rice, bread, raita, salad, and sweet',
				price: 14.66,
				thumbnail: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1600&auto=format&fit=crop',
				isFeatured: true,
				discountPercent: 0,
				category: slugToId['thali'],
			},
			{
				title: 'Mango Lassi',
				slug: 'mango-lassi',
				description: 'Refreshing mango yogurt drink',
				price: 5.66,
				thumbnail: 'https://images.unsplash.com/photo-1627662164325-2f4a75e21b93?q=80&w=1600&auto=format&fit=crop',
				isFeatured: true,
				discountPercent: 0,
				category: slugToId['drinks'],
			},
		];
		await Product.insertMany(products);
		await Promotion.create({ title: 'Chef Specials', subtitle: 'Seasonal favorites', image: 'https://images.unsplash.com/photo-1604908554026-3b4b7bdbaff3?q=80&w=1600&auto=format&fit=crop', ctaText: 'View Menu', ctaLink: '/shop', order: 1, active: true });
		console.log('Bootstrapped initial data');
	}
	const adminExists = await User.findOne({ role: 'admin' });
	if (!adminExists) {
		await User.create({ name: 'Admin', email: 'admin@relish66.com', password: 'Admin123!', role: 'admin' });
		console.log('Created default admin user: admin@relish66.com / Admin123!');
	}
}

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}

// static uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
app.use('/uploads', express.static(uploadsDir));

app.get('/api/health', (_req, res) => {
	res.json({ status: 'ok', timestamp: Date.now() });
});

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/coupons', couponRoutes);
// app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/promotions', promotionRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/admin', adminRoutes);

// Serve client build in production
if (process.env.NODE_ENV === 'production') {
    const clientDist = path.join(__dirname, '..', '..', 'client', 'dist');
    if (fs.existsSync(clientDist)) {
        app.use(express.static(clientDist));
        app.get('*', (_req, res) => {
            res.sendFile(path.join(clientDist, 'index.html'));
        });
    }
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB()
	.then(async () => {
		await bootstrapData();
		app.listen(PORT, () => console.log(`Server listening on :${PORT}`));
	})
	.catch((err) => {
		console.error('DB connection failed', err);
		process.exit(1);
	});