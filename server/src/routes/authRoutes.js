import express from 'express';
import { login, register, purchaseMembership } from '../controllers/authController.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/membership/purchase', requireAuth, purchaseMembership);

export default router;