import nodemailer from 'nodemailer';

const getTransport = () => {
	if (!process.env.SMTP_HOST) return null;
	return nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT || 587),
		secure: false,
		auth: process.env.SMTP_USER
			? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
			: undefined,
	});
};

export const sendContact = async (req, res, next) => {
	try {
		const { name, email, phone, message } = req.body;
		if (!name || !email || !message) return res.status(400).json({ message: 'Missing fields' });
		const transporter = getTransport();
		if (!transporter) return res.json({ message: 'Contact received' });
		await transporter.sendMail({
			from: process.env.SMTP_FROM || 'no-reply@localhost',
			to: process.env.SMTP_TO || process.env.SMTP_USER,
			subject: `New Contact from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
		});
		res.json({ message: 'Sent' });
	} catch (err) {
		next(err);
	}
};