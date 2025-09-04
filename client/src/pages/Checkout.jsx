import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import api from '../utils/api';

export default function Checkout() {
	const { items, subtotal, clear } = useCart();
	const { user } = useAuth();
	const [customer, setCustomer] = useState({ name: '', email: '', phone: '', address: '' });
	const [fulfillment, setFulfillment] = useState({ type: 'pickup' });
	const [payment, setPayment] = useState({ method: 'cash' });
	const [couponCode, setCouponCode] = useState('');
	const [discount, setDiscount] = useState(0);
	const [placing, setPlacing] = useState(false);
	const [errors, setErrors] = useState({});
	const tax = Math.round((subtotal - discount) * 0.05 * 100) / 100;
	const deliveryFee = (fulfillment.type === 'delivery' ? 5 : 0);
	const total = Math.max(0, subtotal - discount + tax + deliveryFee);

	const validate = () => {
		const e = {};
		if (!customer.name) e.name = 'Name required';
		if (!customer.email) e.email = 'Email required';
		if (!customer.address && fulfillment.type==='delivery') e.address = 'Address required for delivery';
		setErrors(e);
		return Object.keys(e).length === 0;
	};

	const applyCoupon = async (e) => {
		e.preventDefault();
		try {
			const { data } = await api.post('/coupons/apply', { code: couponCode, subtotal });
			setDiscount(data.discount);
		} catch (e) {
			setDiscount(0);
		}
	};

	const placeOrder = async () => {
		if (!validate()) return;
		setPlacing(true);
		try {
			const { data } = await api.post('/orders', {
				items,
				customer,
				fulfillment,
				payment,
				couponCode,
				userId: user?.id,
			});
			clear();
			alert('Order placed!');
		} catch (e) {
			alert('Failed to place order');
		} finally {
			setPlacing(false);
		}
	};

	return (
		<div className="container-pad py-8">
			<h1 className="font-serif text-3xl mb-4">Checkout</h1>
			<div className="grid md:grid-cols-3 gap-6">
				<div className="md:col-span-2 space-y-6">
					<section className="border rounded p-4">
						<h3 className="font-semibold mb-2">Customer Details</h3>
						<div className="grid md:grid-cols-2 gap-3">
							<div>
								<input className="border rounded px-3 py-2 w-full" placeholder="Name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
								{errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
							</div>
							<div>
								<input className="border rounded px-3 py-2 w-full" placeholder="Email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
								{errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
							</div>
							<input className="border rounded px-3 py-2 w-full" placeholder="Phone" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
							<div className="md:col-span-2">
								<input className="border rounded px-3 py-2 w-full" placeholder="Address" value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} />
								{errors.address && <div className="text-red-600 text-sm mt-1">{errors.address}</div>}
							</div>
						</div>
					</section>

					<section className="border rounded p-4">
						<h3 className="font-semibold mb-2">Delivery or Pickup</h3>
						<div className="flex gap-4">
							<label className="flex items-center gap-2"><input type="radio" checked={fulfillment.type==='pickup'} onChange={() => setFulfillment({ type: 'pickup' })} /> Pickup</label>
							<label className="flex items-center gap-2"><input type="radio" checked={fulfillment.type==='delivery'} onChange={() => setFulfillment({ type: 'delivery' })} /> Delivery</label>
						</div>
					</section>

					<section className="border rounded p-4">
						<h3 className="font-semibold mb-2">Payment</h3>
						<div className="grid md:grid-cols-2 gap-3">
							<select className="border rounded px-3 py-2" value={payment.method} onChange={(e) => setPayment({ method: e.target.value })}>
								<option value="cash">Cash on Pickup</option>
								<option value="card">Credit/Debit</option>
								<option value="paypal">PayPal</option>
								<option value="upi">UPI</option>
							</select>
							<form onSubmit={applyCoupon} className="flex gap-2">
								<input className="border rounded px-3 py-2 w-full" placeholder="Coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
								<button className="btn-primary" type="submit">Apply</button>
							</form>
						</div>
					</section>
				</div>

				<aside className="border rounded p-4 h-max">
					<h3 className="font-semibold mb-2">Order Summary</h3>
					<div className="space-y-1 text-sm">
						<div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
						<div className="flex justify-between"><span>Discount</span><span>-${discount.toFixed(2)}</span></div>

						<div className="flex justify-between"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
						<div className="flex justify-between"><span>Delivery</span><span>${deliveryFee.toFixed(2)}</span></div>
						<div className="flex justify-between font-semibold border-t pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
						<button disabled={placing} className="btn-primary w-full mt-3" onClick={placeOrder}>{placing ? 'Placing...' : 'Place Order'}</button>
					</div>
				</aside>
			</div>
		</div>
	);
}