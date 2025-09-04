import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const sign = (user) => jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
const publicUser = (u) => ({ id: u._id, name: u.name, email: u.email, role: u.role });

export const register = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) return res.status(400).json({ message: 'Missing fields' });
		const exists = await User.findOne({ email });
		if (exists) return res.status(400).json({ message: 'Email in use' });
		const user = await User.create({ name, email, password, role: 'customer' });
		const token = sign(user);
		res.status(201).json({ token, user: publicUser(user) });
	} catch (e) {
		next(e);
	}
};

export const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email }).select('+password');
		if (!user) return res.status(401).json({ message: 'Invalid credentials' });
		const ok = await user.comparePassword(password);
		if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
		const token = sign(user);
		res.json({ token, user: publicUser(user) });
	} catch (e) {
		next(e);
	}
};