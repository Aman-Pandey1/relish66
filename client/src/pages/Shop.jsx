import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import api from '../utils/api';
import ProductCard from '../components/ProductCard.jsx';
import { Link, useSearchParams } from 'react-router-dom';
import CartSidebar from '../components/CartSidebar.jsx';
const generalOnlyKey = 'kh_age_general_only';

export default function Shop() {
	const { add } = useCart();
	const [items, setItems] = useState([]);
	const [categories, setCategories] = useState([]);
	const [filters, setFilters] = useState({ category: '', sort: '', q: '', service:'' });
	const [also,setAlso]=useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [showCart, setShowCart] = useState(false);
    const [generalOnly] = useState(() => typeof window !== 'undefined' && localStorage.getItem(generalOnlyKey) === '1');

	useEffect(() => { api.get('/categories').then((res) => setCategories(res.data)); }, []);
	// initialize from URL
	useEffect(() => {
		const category = searchParams.get('category') || '';
		const q = searchParams.get('q') || '';
		const sort = searchParams.get('sort') || '';
		let service = searchParams.get('service') || '';
		if (generalOnly) service = 'general';
		setFilters((prev) => ({ ...prev, category, q, sort, service }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		api.get('/products', { params: filters }).then((r) => setItems(r.data));
		api.get('/products', { params: { sort:'popular', limit:6 } }).then(r=> setAlso(r.data));
	}, [filters]);

	// keep URL in sync when filters change
	useEffect(() => {
		const next = new URLSearchParams();
		if(filters.category) next.set('category', filters.category);
		if(filters.q) next.set('q', filters.q);
		if(filters.sort) next.set('sort', filters.sort);
		if(filters.service) next.set('service', filters.service);
		setSearchParams(next, { replace:true });
	}, [filters, setSearchParams]);

	return (
		<div className="container-pad py-8">
			<h1 className="font-serif text-3xl mb-4">Shop</h1>
			<div className="flex gap-3 mb-4">
				<button className={`px-3 py-1 border rounded ${filters.sort===''?'bg-burnt-600 text-white':''}`} onClick={()=>setFilters({ ...filters, sort:'' })}>Best Sellers</button>
				<button className={`px-3 py-1 border rounded ${filters.sort==='newest'?'bg-burnt-600 text-white':''}`} onClick={()=>setFilters({ ...filters, sort:'newest' })}>New Arrivals</button>
				<button className="ml-auto md:hidden btn-primary" onClick={()=>setShowCart(true)}>View Cart</button>
			</div>
			<div className="grid md:grid-cols-[22rem_1fr] gap-6">
				<div className="hidden md:block"><CartSidebar /></div>
				<section>
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
						<div className="flex gap-2">
							<button className={`px-3 py-1 border rounded ${filters.sort===''?'bg-burnt-600 text-white':''}`} onClick={()=>setFilters({ ...filters, sort:'' })}>Best Sellers</button>
							<button className={`px-3 py-1 border rounded ${filters.sort==='newest'?'bg-burnt-600 text-white':''}`} onClick={()=>setFilters({ ...filters, sort:'newest' })}>New Arrivals</button>
						</div>
						<div className="flex-1 md:max-w-md">
							<input className="border rounded px-3 py-2 w-full" placeholder="Search products" value={filters.q} onChange={(e)=>setFilters({ ...filters, q: e.target.value })} />
						</div>
					</div>
					<div className="flex gap-2 flex-wrap mb-4">
						<button className={`px-3 py-1 border rounded ${filters.category===''?'bg-neutral-900 text-white':''}`} onClick={()=>setFilters({ ...filters, category:'' })}>All</button>
						{categories.map((c)=> (
							<button key={c._id} className={`px-3 py-1 border rounded ${filters.category===c.slug?'bg-neutral-900 text-white':''}`} onClick={()=>setFilters({ ...filters, category:c.slug })}>{c.emoji} {c.name}</button>
						))}
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{items.map((p) => (
							<ProductCard key={p._id} product={p} />
						))}
					</div>
					<div className="mt-10">
						<h3 className="font-serif text-2xl mb-3">You May Also Like</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{also.map(p=> (
								<Link key={p._id} to={`/product/${p.slug}`} className="border rounded overflow-hidden flex flex-col hover:shadow">
									{p.thumbnail && <img src={p.thumbnail} alt={p.title} className="w-full h-32 object-cover" />}
									<div className="p-3">
										<div className="font-medium line-clamp-1">{p.title}</div>
										<div className="text-burnt-600 font-semibold">${p.price.toFixed(2)}</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>
			</div>
			{/* Mobile Cart Drawer */}
			{showCart && (
				<div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
					<div className="absolute inset-0 bg-black/40" onClick={()=>setShowCart(false)} />
					<div className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-xl p-4 flex flex-col">
						<div className="flex items-center justify-between mb-3">
							<h2 className="font-serif text-xl">Your Cart</h2>
							<button className="text-2xl" aria-label="Close" onClick={()=>setShowCart(false)}>×</button>
						</div>
						<div className="flex-1 overflow-auto">
							<CartSidebar />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}