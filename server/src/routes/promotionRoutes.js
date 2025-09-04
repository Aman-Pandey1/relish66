import express from 'express';
import { createPromotion, deletePromotion, listPromotions, updatePromotion } from '../controllers/promotionController.js';
import { requireAuth, requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', listPromotions);
router.post('/', requireAuth, requireAdmin, createPromotion);
router.put('/:id', requireAuth, requireAdmin, updatePromotion);
router.delete('/:id', requireAuth, requireAdmin, deletePromotion);

export default router;