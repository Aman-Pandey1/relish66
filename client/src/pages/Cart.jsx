import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
	const { items, remove, updateQty, subtotal } = useCart();
	const safeItems = Array.isArray(items)? items : [];
	return (
		<div className="container-pad py-8">
			<h1 className="font-serif text-3xl mb-4">Your Cart</h1>
			{safeItems.length === 0 ? (
				<div>
					<p>Your cart is empty.</p>
					<a href="https://shoppage.onrender.com/s/Relishon66" target="_blank" rel="noreferrer" className="btn-primary mt-3 inline-block">Continue Ordering</a>
				</div>
			) : (
				<div className="grid md:grid-cols-3 gap-6">
					<div className="md:col-span-2 space-y-3">
						{safeItems.map((it) => (
							<div key={it.slug} className="border rounded p-3 flex gap-3 items-center">
								{it.thumbnail && <img src={it.thumbnail} className="w-20 h-20 object-cover rounded" />}
								<div className="flex-1">
									<div className="font-medium">{it.title}</div>
									<div className="text-neutral-500">${Number(it.price||0).toFixed(2)}</div>
								</div>
								<input type="number" min={1} value={it.quantity||1} onChange={(e) => updateQty(it.slug, Number(e.target.value))} className="border rounded w-20 px-2 py-1" />
								<button onClick={() => remove(it.slug)} className="ml-2 text-red-600">Remove</button>
							</div>
						))}
					</div>
					<div className="border rounded p-4 h-max">
						<div className="flex justify-between mb-2"><span>Subtotal</span><span>${Number(subtotal||0).toFixed(2)}</span></div>
						<Link to="/checkout" className="btn-primary w-full inline-block text-center mt-3">Checkout</Link>
					</div>
				</div>
			)}
		</div>
	);
}