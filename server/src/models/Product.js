import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, trim: true },
		slug: { type: String, required: true, unique: true, lowercase: true },
		description: { type: String },
		service: { type: String, enum: ['liquor','general'], default: 'liquor', index: true },
		category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
		price: { type: Number, required: true, min: 0 },
		discountPercent: { type: Number, min: 0, max: 100, default: 0 },
		images: [{ type: String }],
		thumbnail: { type: String },
		stock: { type: Number, default: 0 },
		attributes: {
			abv: { type: String },
			volumeMl: { type: Number },
			origin: { type: String },
			flavourNotes: { type: String },
		},
		isFeatured: { type: Boolean, default: false },
		isActive: { type: Boolean, default: true },
		metrics: {
			views: { type: Number, default: 0 },
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Product', productSchema);