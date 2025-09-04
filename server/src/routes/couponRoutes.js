import express from 'express';
import { applyCoupon, listCoupons, createCoupon, updateCoupon, deleteCoupon } from '../controllers/couponController.js';
import { requireAuth, requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', requireAuth, requireAdmin, listCoupons);
router.post('/', requireAuth, requireAdmin, createCoupon);
router.put('/:id', requireAuth, requireAdmin, updateCoupon);
router.delete('/:id', requireAuth, requireAdmin, deleteCoupon);
router.post('/apply', applyCoupon);

export default router;