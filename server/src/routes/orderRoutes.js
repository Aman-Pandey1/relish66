import express from 'express';
import { createOrder } from '../controllers/orderController.js';
import { requireAuth } from '../middleware/authMiddleware.js';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', createOrder);

// Get current user's orders
router.get('/my', requireAuth, async (req, res, next) => {
    try {
        const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (e) { next(e); }
});

export default router;