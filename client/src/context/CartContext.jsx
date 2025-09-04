import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'kh_cart';

export function CartProvider({ children }){
	const [items, setItems] = useState(() => {
		try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
	});
	useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }, [items]);

	const add = (item) => {
		setItems((prev) => {
			const idx = prev.findIndex((p) => p.slug === item.slug);
			if (idx >= 0) {
				const next = [...prev];
				next[idx] = { ...next[idx], quantity: (next[idx].quantity || 1) + (item.quantity || 1) };
				return next;
			}
			return [...prev, { ...item, quantity: item.quantity || 1 }];
		});
	};

	const remove = (slug) => setItems((prev) => prev.filter((p) => p.slug !== slug));
	const updateQty = (slug, quantity) => setItems((prev) => prev.map((p) => (p.slug === slug ? { ...p, quantity } : p)));
	const clear = () => setItems([]);
	const subtotal = useMemo(() => items.reduce((sum, it) => sum + Number(it.price || 0) * Number(it.quantity || 1), 0), [items]);

	const value = useMemo(() => ({ items, add, remove, updateQty, clear, subtotal }), [items, subtotal]);
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(){
	const ctx = useContext(CartContext);
	if(!ctx) throw new Error('useCart must be used within CartProvider');
	return ctx;
}