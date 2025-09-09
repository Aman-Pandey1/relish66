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

// Bootstrap admin if missing (for setup/testing). Returns admin JWT.
router.post('/bootstrap-admin', async (_req, res, next) => {
    try {
        let admin = await User.findOne({ role: 'admin' });
        if (!admin) {
            // Avoid email collision with potential existing customer
            const email = 'admin+dev@relish66.com';
            admin = await User.create({ name: 'Admin', email, password: 'Admin123!', role: 'admin' });
        }
        const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, user: { id: admin._id, name: admin.name, email: admin.email, role: admin.role } });
    } catch (e) { next(e); }
});