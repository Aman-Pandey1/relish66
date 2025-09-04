import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema(
	{
		product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: false },
		title: { type: String, required: true },
		price: { type: Number, required: true },
		quantity: { type: Number, required: true, min: 1 },
		thumbnail: { type: String },
	},
	{ _id: false }
);

const orderSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		items: [orderItemSchema],
		customer: {
			name: String,
			email: String,
			phone: String,
			address: String,
			city: String,
			postalCode: String,
			instructions: String,
		},
		fulfillment: {
			type: { type: String, enum: ['delivery', 'pickup'], required: true },
			scheduledFor: { type: Date },
		},
		coupon: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' },
		amounts: {
			subtotal: Number,
			discount: Number,
			deliveryFee: Number,
			tax: Number,
			total: Number,
			currency: { type: String, default: 'CAD' },
		},
		payment: {
			method: { type: String, enum: ['card', 'paypal', 'upi', 'cash'], required: true },
			status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
			transactionId: String,
		},
		rewardPointsEarned: { type: Number, default: 0 },
		status: { type: String, enum: ['new', 'processing', 'fulfilled', 'cancelled'], default: 'new' },
	},
	{ timestamps: true }
);

export default mongoose.model('Order', orderSchema);