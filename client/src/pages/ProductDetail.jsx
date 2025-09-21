import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import api from '../utils/api';
import ProductImageZoom from '../components/ProductImageZoom.jsx';
import { toast } from 'react-hot-toast';

export default function ProductDetail() {
	const { slug } = useParams();
	const { add } = useCart();
	const { items: wishlistItems, toggle } = useWishlist();
	const [product, setProduct] = useState(null);
	const [related, setRelated] = useState([]);
	const [qty, setQty] = useState(1);

	useEffect(() => {
		api.get(`/products/${slug}`).then((res) => {
			setProduct(res.data);
			api.get('/products', { params: { category: res.data.category?.slug } }).then((r) => setRelated(r.data.filter((p) => p.slug !== slug).slice(0, 4)));
		});
	}, [slug]);

	if (!product) return <div className="container-pad py-10">Loading...</div>;
	
	const inWishlist = product && wishlistItems.includes(product._id);
	const priceNumber = Number(product.price || 0);

	// Animation variants
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

	const hoverCard = {
		hover: {
			y: -8,
			scale: 1.02,
			transition: { duration: 0.3 }
		}
	};

	return (
		<div className="container-pad py-12 bg-gradient-to-br from-gray-50/50 to-white min-h-screen">
			{/* Product Header */}
			<motion.div
				variants={staggerChildren}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="grid md:grid-cols-2 gap-12 items-start mb-12"
			>
				{/* Product Image */}
				<motion.div
					variants={fadeInUp}
					className="relative group overflow-hidden rounded-3xl shadow-2xl border border-[#06507D]/10"
					whileHover={{ scale: 1.02 }}
				>
					<div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					{product.thumbnail && (
						<ProductImageZoom 
							src={product.thumbnail} 
							alt={product.title}
							className="w-full h-[500px] object-cover rounded-3xl"
						/>
					)}
					<div className="absolute top-4 right-4 bg-gradient-to-br from-[#D42127] to-[#06507D] text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
						Quick Zoom
					</div>
				</motion.div>

				{/* Product Info */}
				<motion.div
					variants={fadeInUp}
					className="space-y-6 relative z-10"
				>
					{/* Product Title */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="flex items-center gap-3 mb-4"
					>
						<div className="w-2 h-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full animate-pulse"></div>
						<h1 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
							{product.title}
						</h1>
					</motion.div>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-gray-700 leading-relaxed text-lg"
					>
						{product.description}
					</motion.p>

					{/* Price */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4 }}
						className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent"
					>
						${priceNumber.toFixed(2)}
					</motion.div>

					{/* Quantity Selector */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 border border-[#06507D]/10"
					>
						<label className="text-sm font-medium text-[#06507D] whitespace-nowrap">Quantity:</label>
						<div className="flex items-center bg-white rounded-lg shadow-sm border border-[#06507D]/20 overflow-hidden">
							<button
								type="button"
								onClick={() => setQty(Math.max(1, qty - 1))}
								className="w-10 h-10 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white flex items-center justify-center hover:shadow-md transition-all duration-200"
							>
								-
							</button>
							<input 
								type="number" 
								className="w-16 h-10 text-center border-0 focus:outline-none font-semibold text-lg bg-transparent" 
								min={1} 
								value={qty} 
								onChange={(e) => setQty(Number(e.target.value))} 
								readOnly 
							/>
							<button
								type="button"
								onClick={() => setQty(qty + 1)}
								className="w-10 h-10 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white flex items-center justify-center hover:shadow-md transition-all duration-200"
							>
								+
							</button>
						</div>
					</motion.div>

					{/* Action Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="flex flex-col sm:flex-row gap-4"
					>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => { 
								add({ slug: product.slug, title: product.title, price: priceNumber, thumbnail: product.thumbnail, quantity: qty }); 
								toast.success('Added to cart! 🛒', {
									style: {
										background: 'linear-gradient(90deg, #06507D 0%, #D42127 100%)',
										color: 'white',
									},
									iconTheme: {
										primary: 'white',
										secondary: '#06507D',
									}
								});
							}}
							className="flex-1 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5M7 13l-1.5 7.5m8.5-7.5h3.7l-.468 2.325M21 11.5V9a2 2 0 00-2-2h-3.586a2 2 0 00-1.414.586l-1.414 1.414A2 2 0 0013.586 13H11m-3 0h2m0 0h2m0 0H21" />
							</svg>
							Add to Cart
						</motion.button>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => { 
								toggle(product._id); 
								toast.success(inWishlist ? 'Removed from wishlist ❤️' : 'Added to wishlist ❤️', {
									style: {
										background: 'linear-gradient(90deg, #D42127 0%, #06507D 100%)',
										color: 'white',
									},
									iconTheme: {
										primary: 'white',
										secondary: '#D42127',
									}
								});
							}}
							className={`flex-1 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
								inWishlist 
									? 'bg-gradient-to-r from-[#D42127] to-[#06507D] text-white hover:shadow-red-500/25' 
									: 'border-2 border-[#06507D]/30 text-[#06507D] hover:bg-[#06507D]/5'
							}`}
						>
							{!inWishlist && (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							)}
							{inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
						</motion.button>
					</motion.div>

					{/* Category Badge */}
					{product.category && (
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.7 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#06507D]/10 to-[#D42127]/10 rounded-full border border-[#06507D]/20"
						>
							<div className="w-2 h-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
							<span className="text-sm font-medium text-[#06507D]">{product.category.name}</span>
						</motion.div>
					)}
				</motion.div>
			</motion.div>

			{/* Product Details Section */}
			<motion.section
				variants={staggerChildren}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="mt-16 grid md:grid-cols-3 gap-8"
			>
				{/* Main Content */}
				<motion.div
					variants={fadeInUp}
					className="md:col-span-2 space-y-8"
				>
					{/* Details Section */}
					<motion.section
						variants={fadeInUp}
						whileHover={hoverCard}
						className="relative overflow-hidden p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-[#06507D]/10"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
						<motion.div className="relative z-10">
							<motion.div className="flex items-center gap-3 mb-6">
								<div className="w-2 h-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
								<h3 className="font-serif text-xl font-semibold bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">
									Product Details
								</h3>
							</motion.div>
							<motion.p 
								className="text-gray-700 leading-relaxed"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
							>
								{product.description || 'A premium selection crafted with care and tradition. Perfect for any occasion.'}
							</motion.p>
						</motion.div>
					</motion.section>

					{/* Specifications Section */}
					<motion.section
						variants={fadeInUp}
						whileHover={hoverCard}
						className="relative overflow-hidden p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-[#06507D]/10"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
						<motion.div className="relative z-10">
							<motion.div className="flex items-center gap-3 mb-6">
								<div className="w-2 h-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
								<h3 className="font-serif text-xl font-semibold bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">
									Specifications
								</h3>
							</motion.div>
							<motion.ul 
								className="text-gray-700 space-y-3"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
							>
								{[
									{ label: 'Category', value: product.category?.name || 'Specialty' },
									{ label: 'Availability', value: product.stock > 0 ? 'In Stock' : 'Out of Stock' },
									...(product.attributes?.abv ? [{ label: 'ABV', value: `${product.attributes.abv}%` }] : []),
									...(product.attributes?.volumeMl ? [{ label: 'Volume', value: `${product.attributes.volumeMl}ml` }] : []),
									...(product.attributes?.origin ? [{ label: 'Origin', value: product.attributes.origin }] : []),
									...(product.attributes?.flavourNotes ? [{ label: 'Tasting Notes', value: product.attributes.flavourNotes }] : [])
								].map((spec, index) => (
									<motion.li
										key={index}
										className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 border border-[#06507D]/10 hover:bg-[#06507D]/10 transition-all duration-200"
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<span className="text-sm text-gray-600">{spec.label}:</span>
										<span className="font-medium text-gray-800">{spec.value}</span>
									</motion.li>
								))}
							</motion.ul>
						</motion.div>
					</motion.section>

					{/* Reviews Section */}
					<motion.section
						variants={fadeInUp}
						whileHover={hoverCard}
						className="relative overflow-hidden p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-[#06507D]/10"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
						<motion.div className="relative z-10">
							<motion.div className="flex items-center gap-3 mb-6">
								<div className="w-2 h-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
								<h3 className="font-serif text-xl font-semibold bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">
									Customer Reviews
								</h3>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="flex items-center justify-center py-8 text-center"
							>
								<div className="space-y-2">
									<div className="flex justify-center gap-1 mb-2">
										{[...Array(5)].map((_, i) => (
											<span key={i} className="text-2xl text-[#D42127]">⭐</span>
										))}
									</div>
									<p className="text-gray-600 text-sm">Reviews coming soon. Be the first to share your experience!</p>
								</div>
							</motion.div>
						</motion.div>
					</motion.section>
				</motion.div>

				{/* Sidebar */}
				<motion.aside
					variants={fadeInUp}
					className="space-y-6"
				>
					{/* Related Products */}
					<motion.section
						variants={fadeInUp}
						whileHover={hoverCard}
						className="relative overflow-hidden p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-[#D42127]/10 sticky top-6"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-[#D42127]/5 to-[#06507D]/5"></div>
						<motion.div className="relative z-10">
							<motion.div className="flex items-center gap-3 mb-6">
								<div className="w-2 h-2 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full"></div>
								<h3 className="font-serif text-xl font-semibold bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">
									You Might Also Like
								</h3>
							</motion.div>
							<motion.div 
								className="grid grid-cols-2 gap-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
							>
								{related.map((p, index) => (
									<motion.div
										key={p._id}
										variants={staggerChildren}
										whileHover={hoverCard}
										className="group relative overflow-hidden rounded-xl border border-[#06507D]/10 hover:border-[#D42127]/30 transition-all duration-300"
									>
										<Link to={`/product/${p.slug}`}>
											<div className="relative overflow-hidden aspect-w-4 aspect-h-3">
												{p.thumbnail && (
													<img 
														src={p.thumbnail} 
														alt={p.title} 
														className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
													/>
												)}
												<div className="absolute inset-0 bg-gradient-to-t from-[#06507D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
											</div>
											<div className="p-3 bg-gradient-to-b from-white/80 to-transparent">
												<motion.div 
													className="font-medium text-gray-800 line-clamp-2 group-hover:text-[#06507D] transition-colors"
													whileHover={{ color: '#06507D' }}
												>
													{p.title}
												</motion.div>
												<div className="text-[#D42127] font-bold text-lg mt-1">
													${Number(p.price||0).toFixed(2)}
												</div>
											</div>
										</Link>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</motion.section>

					{/* Quick Actions */}
					<motion.section
						variants={fadeInUp}
						whileHover={hoverCard}
						className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 border border-[#06507D]/10"
					>
						<motion.div className="relative z-10 space-y-4">
							<motion.div className="flex items-center gap-3 mb-4">
								<div className="w-2 h-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full animate-pulse"></div>
								<h3 className="font-serif text-xl font-semibold text-[#06507D]">
									Quick Actions
								</h3>
							</motion.div>
							
							<motion.div 
								className="space-y-3"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
							>
								<motion.button
									whileHover={{ scale: 1.02, backgroundColor: '#D42127' }}
									whileTap={{ scale: 0.98 }}
									className="w-full bg-gradient-to-r from-[#06507D] to-[#D42127] text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
									onClick={() => { 
										add({ slug: product.slug, title: product.title, price: priceNumber, thumbnail: product.thumbnail, quantity: qty }); 
										toast.success('Added to cart! 🛒');
									}}
								>
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
									</svg>
									Buy Now
								</motion.button>

								<motion.button
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full border-2 border-[#06507D]/30 text-[#06507D] py-3 rounded-xl font-medium hover:bg-[#06507D]/5 transition-all duration-300 flex items-center justify-center gap-2"
									onClick={() => {
										if (inWishlist) {
											toggle(product._id);
											toast.success('Removed from wishlist ❤️');
										} else {
											toggle(product._id);
											toast.success('Added to wishlist ❤️');
										}
									}}
								>
									{!inWishlist ? (
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
										</svg>
									) : (
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
										</svg>
									)}
									{inWishlist ? 'Remove' : 'Add'} Wishlist
								</motion.button>
							</motion.div>
						</motion.div>
					</motion.section>
				</motion.aside>
			</motion.section>

			{/* Share Section */}
			<motion.section
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="mt-12 text-center py-12 bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 rounded-3xl border border-[#06507D]/10"
			>
				<motion.div className="space-y-4">
					<motion.div className="flex items-center justify-center gap-3 mb-6">
						<div className="w-2 h-2 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full animate-pulse"></div>
						<h3 className="font-serif text-xl font-semibold text-[#06507D]">
							Share This Product
						</h3>
					</motion.div>
					
					<motion.div 
						className="flex justify-center gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
					>
						{[
							{ platform: 'Facebook', icon: '📘', color: 'from-[#06507D]' },
							{ platform: 'Twitter', icon: '🐦', color: 'from-[#D42127]' },
							{ platform: 'WhatsApp', icon: '💬', color: 'from-[#06507D]' },
							{ platform: 'Email', icon: '✉️', color: 'from-[#D42127]' }
						].map((share) => (
							<motion.button
								key={share.platform}
								whileHover={{ scale: 1.1, rotate: 5 }}
								whileTap={{ scale: 0.95 }}
								className={`w-12 h-12 ${share.color} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300`}
							>
								<span className="text-xl">{share.icon}</span>
							</motion.button>
						))}
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	);
}