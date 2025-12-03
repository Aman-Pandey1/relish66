import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext.jsx';
import api from '../utils/api';
import ProductCard from '../components/ProductCard.jsx';
import { Link, useSearchParams } from 'react-router-dom';
import CartSidebar from '../components/CartSidebar.jsx';
import CategoryIcon from '../components/CategoryIcon.jsx';
import { Seo } from '../components/Seo.jsx';

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

	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: { 
			opacity: 1, 
			y: 0, 
			transition: { 
				duration: 0.6,
				ease: "easeOut"
			} 
		}
	};

	const staggerChildren = {
		visible: { 
			transition: { 
				staggerChildren: 0.1 
			} 
		}
	};

	return (
		<div className="container-pad py-8 min-h-screen">
			<Seo title="Order Online" description="Order delicious Indian cuisine from Relish66. Pickup only • Chef Specials highlighted first" />

			{/* Header */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={fadeInUp}
				className="text-center mb-8"
			>
				<h1 className="font-serif text-4xl md:text-5xl mb-2 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
					Order Online
				</h1>
				<p className="text-gray-600 mb-6 text-lg">
					<span className="text-[#D42127] font-semibold">Pickup only</span> • 
					<span className="text-[#06507D] font-semibold">Chef Specials</span> highlighted first
				</p>
				<div className="inline-block w-20 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
			</motion.div>

			{/* Categories Section */}
			{categories.length>0 && (
				<motion.section
					variants={staggerChildren}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="mb-8"
				>
					<motion.h2
						variants={fadeInUp}
						className="font-serif text-2xl md:text-3xl mb-3 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent"
					>
						Browse Categories
					</motion.h2>
					<motion.div
						variants={fadeInUp}
						className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
					>
						{categories.map((c, index) => (
							<motion.button
								key={c._id}
								variants={fadeInUp}
								whileHover={{ 
									scale: 1.05, 
									y: -5,
									boxShadow: "0 20px 25px -5px rgba(6, 80, 125, 0.1), 0 10px 10px -5px rgba(212, 33, 39, 0.04)"
								}}
								whileTap={{ scale: 0.95 }}
								onClick={()=>setFilters({ ...filters, category:c.slug })}
								className={`group relative overflow-hidden border-2 rounded-2xl p-4 text-center transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl ${
									filters.category===c.slug
										? 'ring-2 ring-[#D42127]/50 bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 shadow-[#D42127]/25 border-[#D42127]/30'
										: 'border-[#06507D]/20 hover:border-[#06507D]/40'
								}`}
							>
								<div className={`absolute inset-0 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
								<div className={`relative z-10 w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 border border-[#06507D]/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300 ${
									filters.category===c.slug ? 'bg-gradient-to-br from-[#06507D]/20 to-[#D42127]/20 shadow-[#D42127]/20 border-[#D42127]/30' : ''
								}`}>
									<motion.div
										animate={filters.category===c.slug ? { rotate: 360 } : {}}
										transition={{ duration: 0.6 }}
									>
										<CategoryIcon slug={c.slug} className={`text-xl transition-colors duration-300 ${filters.category===c.slug ? 'text-[#D42127]' : 'text-[#06507D] group-hover:text-[#D42127]'}`} />
									</motion.div>
								</div>
								<div className={`relative z-10 font-medium text-sm transition-colors duration-300 ${
									filters.category===c.slug ? 'text-[#D42127]' : 'text-gray-700 group-hover:text-[#06507D]'
								}`}>
									{c.name}
								</div>
							</motion.button>
						))}
					</motion.div>
				</motion.section>
			)}

			{/* Chef Specials */}
			{specials.length > 0 && (
				<motion.section
					variants={staggerChildren}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="mb-8"
				>
					<motion.h2
						variants={fadeInUp}
						className="font-serif text-2xl md:text-3xl mb-6 bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent relative"
					>
						<span className="relative inline-block">
							Chef Specials
							<span className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#D42127] to-[#06507D] text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">
								🔥
							</span>
						</span>
					</motion.h2>
					<motion.div
						variants={fadeInUp}
						className="grid grid-cols-2 md:grid-cols-4 gap-6 relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5"
					>
						{specials.map((p, index) => (
							<motion.div
								key={p._id}
								variants={fadeInUp}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className="group"
							>
								<ProductCard 
									product={p} 
									special={true}
									className="transform hover:-translate-y-2 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#D42127]/10"
								/>
							</motion.div>
						))}
					</motion.div>
				</motion.section>
			)}

		{/* Filters */}
			<motion.div
				variants={staggerChildren}
				initial="hidden"
				animate="visible"
				className="flex gap-3 mb-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#06507D]/10"
			>
				<motion.button 
					variants={fadeInUp}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
						filters.sort==='' 
							? 'bg-gradient-to-r from-[#06507D] to-[#D42127] text-white shadow-lg' 
							: 'text-gray-700 hover:text-[#06507D] hover:bg-[#06507D]/10 border border-[#06507D]/20'
					}`}
					onClick={()=>setFilters({ ...filters, sort:'' })}
				>
					Best Sellers
				</motion.button>
				<motion.button 
					variants={fadeInUp}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
						filters.sort==='newest' 
							? 'bg-gradient-to-r from-[#06507D] to-[#D42127] text-white shadow-lg' 
							: 'text-gray-700 hover:text-[#06507D] hover:bg-[#06507D]/10 border border-[#06507D]/20'
					}`}
					onClick={()=>setFilters({ ...filters, sort:'newest' })}
				>
					New Arrivals
				</motion.button>
				<motion.button 
					variants={fadeInUp}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="ml-auto md:hidden px-4 py-2 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
					onClick={()=>setShowCart(true)}
				>
					🛒 View Cart
				</motion.button>
			</motion.div>

			<div className="grid md:grid-cols-[22rem_1fr] gap-6">
				{/* Desktop Cart */}
				<motion.div
					variants={fadeInUp}
					className="hidden md:block bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#06507D]/10 overflow-hidden"
				>
					<CartSidebar />
				</motion.div>

				<motion.section
					variants={staggerChildren}
					initial="hidden"
					animate="visible"
				>
					{/* Search and Filters */}
					<motion.div
						variants={fadeInUp}
						className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#06507D]/10"
					>
						<motion.div
							variants={fadeInUp}
							className="flex gap-2"
						>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
									filters.sort==='' 
										? 'bg-gradient-to-r from-[#06507D] to-[#D42127] text-white shadow-md' 
										: 'text-gray-700 hover:text-[#06507D] hover:bg-[#06507D]/10 border border-[#06507D]/20'
								}`}
								onClick={()=>setFilters({ ...filters, sort:'' })}
							>
								Best Sellers
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
									filters.sort==='newest' 
										? 'bg-gradient-to-r from-[#06507D] to-[#D42127] text-white shadow-md' 
										: 'text-gray-700 hover:text-[#06507D] hover:bg-[#06507D]/10 border border-[#06507D]/20'
								}`}
								onClick={()=>setFilters({ ...filters, sort:'newest' })}
							>
								New Arrivals
							</motion.button>
						</motion.div>
						
						<motion.div
							variants={fadeInUp}
							className="flex-1 md:max-w-md relative"
						>
							<div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#06507D]/50">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</div>
							<input 
								className="w-full pl-12 pr-4 py-3 border-2 border-[#06507D]/20 rounded-xl bg-white/50 backdrop-blur-sm focus:border-[#06507D] focus:outline-none focus:ring-2 focus:ring-[#06507D]/20 transition-all duration-300 placeholder-gray-500 text-gray-800"
								placeholder="Search menu items..." 
								value={filters.q} 
								onChange={(e)=>setFilters({ ...filters, q: e.target.value })} 
							/>
						</motion.div>
					</motion.div>

					{/* Category Filter Pills */}
					<motion.div
						variants={staggerChildren}
						className="flex gap-2 flex-wrap mb-6 bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 rounded-xl p-2"
					>
						<motion.button
							variants={fadeInUp}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
								filters.category==='' 
									? 'bg-gradient-to-r from-[#D42127] to-[#06507D] text-white shadow-md' 
									: 'text-gray-700 hover:text-[#D42127] hover:bg-white/50 border border-[#D42127]/20'
							}`}
							onClick={()=>setFilters({ ...filters, category:'' })}
						>
							<span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">🍽️</span>
							All
						</motion.button>
						{categories.map((c, index) => (
							<motion.button
								key={c._id}
								variants={fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
									filters.category===c.slug 
										? 'bg-gradient-to-r from-[#D42127] to-[#06507D] text-white shadow-md' 
										: 'text-gray-700 hover:text-[#D42127] hover:bg-white/50 border border-[#D42127]/20'
								}`}
								onClick={()=>setFilters({ ...filters, category:c.slug })}
							>
								<span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
									<CategoryIcon slug={c.slug} className="text-xs" />
								</span>
								<span className="whitespace-nowrap">{c.name}</span>
							</motion.button>
						))}
					</motion.div>

					{/* Products Grid */}
					<motion.div
						variants={staggerChildren}
						className="grid grid-cols-2 md:grid-cols-3 gap-6"
					>
						{items.map((p, index) => (
							<motion.div
								key={p._id}
								variants={fadeInUp}
								className="group"
							>
								<ProductCard 
									product={p}
									className="transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group-hover:shadow-[#06507D]/10"
								/>
							</motion.div>
						))}
					</motion.div>

					{/* Empty State */}
					{items.length === 0 && (
						<motion.div
							variants={fadeInUp}
							className="col-span-full text-center py-16"
						>
							<div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 flex items-center justify-center shadow-lg">
								<svg className="w-12 h-12 text-[#06507D]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
								</svg>
							</div>
							<h3 className="text-2xl font-serif text-gray-600 mb-2">Nothing found</h3>
							<p className="text-gray-500 text-lg">Try adjusting your search or filters</p>
						</motion.div>
					)}
				</motion.section>
			</div>

			{/* More to Love */}
			{also.length > 0 && (
				<motion.section
					variants={staggerChildren}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="mt-12"
				>
					<motion.h3
						variants={fadeInUp}
						className="font-serif text-2xl mb-6 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent text-center"
					>
						More to Love
					</motion.h3>
					<motion.div
						variants={fadeInUp}
						className="grid grid-cols-2 md:grid-cols-3 gap-4"
					>
						{also.map((p, index) => (
							<motion.div
								key={p._id}
								variants={fadeInUp}
								whileHover={{ 
									y: -5,
									scale: 1.02,
									transition: { duration: 0.3 }
								}}
								className="group"
							>
								<Link 
									to={`/product/${p.slug}`} 
									className="block border rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 border-[#06507D]/10 group-hover:border-[#D42127]/30"
								>
									<div className="relative overflow-hidden aspect-w-4 aspect-h-3">
										{p.thumbnail && (
											<motion.img 
												src={p.thumbnail} 
												alt={p.title} 
												className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
											/>
										)}
										<div className="absolute top-2 right-2 bg-gradient-to-br from-[#D42127] to-[#06507D] text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
											Quick View
										</div>
									</div>
									<div className="p-4">
										<motion.div 
											className="font-medium text-gray-800 line-clamp-1 mb-2 group-hover:text-[#06507D] transition-colors"
										>
											{p.title}
										</motion.div>
										<div className="text-[#D42127] font-bold text-lg">${p.price.toFixed(2)}</div>
									</div>
								</Link>
							</motion.div>
						))}
					</motion.div>
				</motion.section>
			)}

			{/* Mobile Cart Modal */}
			{showCart && (
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 md:hidden" 
					role="dialog" 
					aria-modal="true"
				>
					<motion.div 
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="absolute inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl rounded-l-2xl overflow-hidden"
					>
						<div className="p-6 flex flex-col h-full">
							<div className="flex items-center justify-between mb-6 border-b border-[#06507D]/10 pb-4">
								<motion.h2 
									className="font-serif text-xl bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent"
									whileHover={{ scale: 1.02 }}
								>
									Your Cart
								</motion.h2>
								<motion.button 
									whileHover={{ scale: 1.1, rotate: 90 }}
									whileTap={{ scale: 0.9 }}
									className="text-2xl text-gray-400 hover:text-[#D42127] transition-all duration-200" 
									aria-label="Close" 
									onClick={()=>setShowCart(false)}
								>
									✕
								</motion.button>
							</div>
							<div className="flex-1 overflow-y-auto">
								<CartSidebar />
							</div>
							<motion.div 
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="mt-6 pt-4 border-t border-[#06507D]/10"
							>
								<motion.button
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full bg-gradient-to-r from-[#06507D] to-[#D42127] text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
									onClick={() => {
										setShowCart(false);
									}}
								>
									<div className="flex items-center justify-center gap-2">
										Proceed to Checkout
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</div>
								</motion.button>
							</motion.div>
						</div>
					</motion.div>
					<motion.div 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
						onClick={()=>setShowCart(false)}
					/>
				</motion.div>
			)}

			{/* Floating Cart Button */}
			<motion.div
				className="fixed bottom-6 right-6 md:hidden z-40"
				whileHover={{ scale: 1.05, y: -2 }}
				whileTap={{ scale: 0.95 }}
			>
				<button className="bg-gradient-to-r from-[#06507D] to-[#D42127] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 relative">
					<div className="flex items-center gap-2">
						🛒 Cart
						<span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#D42127] font-bold text-xs shadow-md animate-pulse">
							0
						</span>
					</div>
				</button>
			</motion.div>
		</div>
	);
}