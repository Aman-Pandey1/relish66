import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { getWishlist, addToWishlist, removeFromWishlist, toggleWishlist } from '../controllers/wishlistController.js';

const router = express.Router();

router.use(requireAuth);
router.get('/', getWishlist);
router.post('/', addToWishlist);
router.post('/toggle', toggleWishlist);
router.delete('/:productId', removeFromWishlist);

export default router;