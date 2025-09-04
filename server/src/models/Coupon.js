import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema(
	{
		code: { type: String, required: true, unique: true, uppercase: true },
		description: { type: String },
		discountPercent: { type: Number, min: 0, max: 100 },
		discountFixed: { type: Number, min: 0 },
		minOrderValue: { type: Number, min: 0 },
		expiresAt: { type: Date },
		isActive: { type: Boolean, default: true },
		usageCount: { type: Number, default: 0 },
		maxUsages: { type: Number },
	},
	{ timestamps: true }
);

export default mongoose.model('Coupon', couponSchema);