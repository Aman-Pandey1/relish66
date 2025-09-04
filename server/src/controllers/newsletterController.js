import Newsletter from '../models/Newsletter.js';

export const subscribe = async (req, res, next) => {
	try {
		const { email, name, source } = req.body;
		if (!email) return res.status(400).json({ message: 'Email required' });
		const existing = await Newsletter.findOne({ email: email.toLowerCase() });
		if (existing) return res.json(existing);
		const sub = await Newsletter.create({ email: email.toLowerCase(), name, source, subscribed: true });
		res.status(201).json(sub);
	} catch (err) {
		next(err);
	}
};