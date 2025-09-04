import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		subtitle: { type: String },
		image: { type: String },
		ctaText: { type: String },
		ctaLink: { type: String },
		active: { type: Boolean, default: true },
		order: { type: Number, default: 0 },
	},
	{ timestamps: true }
);

export default mongoose.model('Promotion', promotionSchema);