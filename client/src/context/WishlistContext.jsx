import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import api from '../utils/api';
import { useAuth } from './AuthContext.jsx';

const WishlistContext = createContext(null);
const STORAGE_KEY = 'kh_wishlist';

export function WishlistProvider({ children }){
	const { user } = useAuth();
	const [items, setItems] = useState(() => {
		try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
	});
	useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }, [items]);

	useEffect(() => {
		if (!user) return;
		api.get('/wishlist').then(({ data }) => {
			const ids = (data?.products || []).map((p) => p._id || p);
			setItems(ids);
		});
	}, [user]);

	const toggle = async (productId) => {
		setItems((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]));
		if (user) {
			await api.post('/wishlist/toggle', { productId });
		}
	};

	const value = useMemo(() => ({ items, toggle }), [items]);
	return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist(){
	const ctx = useContext(WishlistContext);
	if(!ctx) throw new Error('useWishlist must be used within WishlistProvider');
	return ctx;
}