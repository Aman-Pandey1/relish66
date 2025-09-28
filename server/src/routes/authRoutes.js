import express from 'express';
import { login, register } from '../controllers/authController.js';
import { requireAuth } from '../middleware/authMiddleware.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
// membership removed

export default router;

// Bootstrap or align an admin account securely for VPS setups
router.post('/bootstrap-admin', async (req, res, next) => {
	try {
		const providedSecret = req.headers['x-bootstrap-secret'];
		const expectedSecret = process.env.ADMIN_BOOTSTRAP_SECRET;
		if (!expectedSecret || providedSecret !== expectedSecret) {
			return res.status(403).json({ message: 'Forbidden' });
		}

		const targetEmail = process.env.ADMIN_EMAIL || 'admin@relish66.com';
		const targetPassword = process.env.ADMIN_PASSWORD || 'Admin123!';

		let admin = await User.findOne({ role: 'admin' });
		if (!admin) {
			admin = await User.create({ name: 'Admin', email: targetEmail, password: targetPassword, role: 'admin' });
		} else {
			if (admin.email !== targetEmail) {
				admin.email = targetEmail;
			}
			// Allow rotating password via env if provided
			if (process.env.ADMIN_PASSWORD) {
				admin.password = targetPassword;
			}
			await admin.save();
		}

		const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
		res.json({ token, user: { id: admin._id, name: admin.name, email: admin.email, role: admin.role } });
	} catch (e) { next(e); }
});

// Promote or create a specific user as admin using a bootstrap secret
router.post('/promote-admin', async (req, res, next) => {
	try {
		const providedSecret = req.headers['x-bootstrap-secret'];
		const expectedSecret = process.env.ADMIN_BOOTSTRAP_SECRET;
		if (!expectedSecret || providedSecret !== expectedSecret) {
			return res.status(403).json({ message: 'Forbidden' });
		}

		const { email, password, name } = req.body || {};
		if (!email) return res.status(400).json({ message: 'Email required' });
		let user = await User.findOne({ email }).select('+password');
		if (!user) {
			if (!password) return res.status(400).json({ message: 'Password required to create user' });
			user = await User.create({ name: name || email.split('@')[0], email, password, role: 'admin' });
		} else {
			user.role = 'admin';
			if (password) user.password = password;
			await user.save();
		}
		res.json({ ok: true, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
	} catch (e) { next(e); }
});