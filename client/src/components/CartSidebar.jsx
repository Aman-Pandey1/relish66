import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function CartSidebar(){
    const { items, remove, updateQty, subtotal } = useCart();
    const safeItems = Array.isArray(items)? items : [];
    return (
        <aside className="border rounded p-4 md:sticky md:top-24 h-max w-full md:w-80 bg-white">
            <h2 className="font-serif text-xl mb-3">Your Cart</h2>
            {safeItems.length === 0 ? (
                <div>
                    <p className="text-sm text-neutral-600">Your cart is empty.</p>
                    <Link to="/shop" className="btn-primary mt-3 inline-block">Shop Products</Link>
                </div>
            ) : (
                <div className="space-y-3">
                    <div className="space-y-3 max-h-[50vh] overflow-auto pr-1">
                        {safeItems.map((it) => (
                            <div key={it.slug} className="border rounded p-3 flex gap-3 items-center">
                                {it.thumbnail && <img src={it.thumbnail} className="w-14 h-14 object-cover rounded" />}
                                <div className="flex-1">
                                    <div className="font-medium line-clamp-1">{it.title}</div>
                                    <div className="text-neutral-500 text-sm">${Number(it.price||0).toFixed(2)}</div>
                                </div>
                                <input aria-label={`Quantity for ${it.title}`} type="number" min={1} value={it.quantity||1} onChange={(e) => updateQty(it.slug, Number(e.target.value))} className="border rounded w-16 px-2 py-1" />
                                <button onClick={() => remove(it.slug)} className="ml-1 text-red-600">✕</button>
                            </div>
                        ))}
                    </div>
                    <div className="pt-2 border-t">
                        <div className="flex justify-between mb-2 text-sm"><span>Subtotal</span><span>${Number(subtotal||0).toFixed(2)}</span></div>
                        <Link to="/checkout" className="btn-primary w-full inline-block text-center mt-2">Checkout</Link>
                        <Link to="/cart" className="mt-2 w-full inline-block text-center text-sm text-burnt-700">View full cart</Link>
                    </div>
                </div>
            )}
        </aside>
    );
}

