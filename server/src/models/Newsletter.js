import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true, lowercase: true },
		name: { type: String },
		subscribed: { type: Boolean, default: true },
		source: { type: String },
	},
	{ timestamps: true }
);

export default mongoose.model('Newsletter', newsletterSchema);