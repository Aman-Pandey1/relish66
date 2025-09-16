import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import api from '../utils/api';
import ProductCard from '../components/ProductCard.jsx';
import { Link, useSearchParams } from 'react-router-dom';
import CartSidebar from '../components/CartSidebar.jsx';
import CategoryIcon from '../components/CategoryIcon.jsx';

export default function OrderOnline() {
	const { add } = useCart();
	const [items, setItems] = useState([]);
	const [specials, setSpecials] = useState([]);
	const [categories, setCategories] = useState([]);
	const [filters, setFilters] = useState({ category: '', sort: '', q: '' });
	const [also,setAlso]=useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [showCart, setShowCart] = useState(false);

	useEffect(() => { api.get('/categories').then((res) => setCategories(res.data)); }, []);
	useEffect(() => {
		const category = searchParams.get('category') || '';
		const q = searchParams.get('q') || '';
		const sort = searchParams.get('sort') || '';
		setFilters((prev) => ({ ...prev, category, q, sort }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		setFilters((prev) => {
			const category = searchParams.get('category') || '';
			const q = searchParams.get('q') || '';
			const sort = searchParams.get('sort') || '';
			if (prev.category === category && prev.q === q && prev.sort === sort) return prev;
			return { ...prev, category, q, sort };
		});
	}, [searchParams]);
	useEffect(() => {
		api.get('/products', { params: filters }).then((r) => setItems(r.data));
		api.get('/products', { params: { sort:'popular', limit:6 } }).then(r=> setAlso(r.data));
		api.get('/products', { params: { category: 'chef-special', limit: 8 } }).then(r=> setSpecials(r.data));
	}, [filters]);

	useEffect(() => {
		const next = new URLSearchParams();
		if(filters.category) next.set('category', filters.category);
		if(filters.q) next.set('q', filters.q);
		if(filters.sort) next.set('sort', filters.sort);
		setSearchParams(next, { replace:true });
	}, [filters, setSearchParams]);

	return (
		<div className="container-pad py-8">
			<h1 className="font-serif text-4xl mb-2">Order Online</h1>
			<p className="text-neutral-600 mb-6">Pickup only • Chef Specials highlighted first</p>

			{categories.length>0 && (
				<section className="mb-8">
					<h2 className="font-serif text-2xl md:text-3xl mb-3 text-brandBlue">Browse Categories</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
						{categories.map((c)=> (
							<button key={c._id} onClick={()=>setFilters({ ...filters, category:c.slug })} className={`group border rounded-2xl p-4 text-center hover:shadow-lg transition bg-white ${filters.category===c.slug? 'ring-2 ring-[color:var(--brand-primary)]' : ''}`}>
								<div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-gradient-to-br from-brandBlue/10 to-white border border-brandBlue/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
									<CategoryIcon slug={c.slug} />
								</div>
								<div className="font-medium group-hover:text-brandBlue">{c.name}</div>
							</button>
						))}
					</div>
				</section>
			)}

			{specials.length > 0 && (
				<section className="mb-8">
					<h2 className="font-serif text-2xl md:text-3xl mb-3 text-brandBlue">Chef Specials</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{specials.map(p => (
							<ProductCard key={p._id} product={p} />
						))}
					</div>
				</section>
			)}

			<div className="flex gap-3 mb-4">
				<button className={`px-3 py-1 border rounded ${filters.sort===''?'bg-brandBlue text-white':''}`} onClick={()=>setFilters({ ...filters, sort:'' })}>Best Sellers</button>
				<button className={`px-3 py-1 border rounded ${filters.sort==='newest'?'bg-brandBlue text-white':''}`} onClick={()=>setFilters({ ...filters, sort:'newest' })}>New Arrivals</button>
				<button className="ml-auto md:hidden btn-primary" onClick={()=>setShowCart(true)}>View Cart</button>
			</div>
			<div className="grid md:grid-cols-[22rem_1fr] gap-6">
				<div className="hidden md:block"><CartSidebar /></div>
				<section>
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
						<div className="flex gap-2">
							<button className={`px-3 py-1 border rounded ${filters.sort===''?'bg-brandBlue text-white':''}`} onClick={()=>setFilters({ ...filters, sort:'' })}>Best Sellers</button>
							<button className={`px-3 py-1 border rounded ${filters.sort==='newest'?'bg-brandBlue text-white':''}`} onClick={()=>setFilters({ ...filters, sort:'newest' })}>New Arrivals</button>
						</div>
						<div className="flex-1 md:max-w-md">
							<input className="border rounded px-3 py-2 w-full" placeholder="Search menu items" value={filters.q} onChange={(e)=>setFilters({ ...filters, q: e.target.value })} />
						</div>
					</div>
					<div className="flex gap-2 flex-wrap mb-4">
						<button className={`px-3 py-1.5 border rounded ${filters.category===''?'bg-neutral-900 text-white':''}`} onClick={()=>setFilters({ ...filters, category:'' })}>All</button>
						{categories.map((c)=> (
							<button key={c._id} className={`px-3 py-1.5 border rounded flex items-center gap-2 ${filters.category===c.slug?'bg-neutral-900 text-white':''}`} onClick={()=>setFilters({ ...filters, category:c.slug })}>
								<span className="inline-flex items-center justify-center w-6 h-6"><CategoryIcon slug={c.slug} /></span>
								<span className="whitespace-nowrap">{c.name}</span>
							</button>
						))}
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{items.map((p) => (
							<ProductCard key={p._id} product={p} />
						))}
					</div>
					<div className="mt-10">
						<h3 className="font-serif text-2xl mb-3">More to Love</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{also.map(p=> (
								<Link key={p._id} to={`/product/${p.slug}`} className="border rounded overflow-hidden flex flex-col hover:shadow">
									{p.thumbnail && <img src={p.thumbnail} alt={p.title} className="w-full h-32 object-cover" />}
									<div className="p-3">
										<div className="font-medium line-clamp-1">{p.title}</div>
										<div className="text-brandBlue font-semibold">${p.price.toFixed(2)}</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>
			</div>
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

