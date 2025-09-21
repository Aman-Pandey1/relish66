import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const fallbackImg = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c76ef?q=80&w=800&auto=format&fit=crop';

export default function ProductCard({ product, special = false }) {
	const { items: wishlist, toggle } = useWishlist();
	const { add } = useCart();
	const inWishlist = wishlist.includes(product._id);
	const hasDiscount = Number(product.discountPercent || 0) > 0;
	const basePrice = Number(product.price || 0);
	const finalPrice = hasDiscount ? basePrice * (1 - Number(product.discountPercent) / 100) : basePrice;

	const handleAddToCart = (e) => {
		e.preventDefault();
		e.stopPropagation();
		add({ 
			slug: product.slug, 
			title: product.title, 
			price: Number(finalPrice), 
			thumbnail: product.thumbnail || fallbackImg,
			quantity: 1 
		});
		toast.success('Added to cart! 🛒', {
			style: {
				background: 'linear-gradient(90deg, #06507D 0%, #D42127 100%)',
				color: 'white',
				borderRadius: '10px',
			},
			iconTheme: {
				primary: 'white',
				secondary: '#06507D',
			},
		});
	};

	const handleWishlistToggle = (e) => {
		e.preventDefault();
		e.stopPropagation();
		toggle(product._id);
		toast.success(inWishlist ? 'Removed from wishlist ❤️' : 'Added to wishlist ❤️', {
			style: {
				background: 'linear-gradient(90deg, #D42127 0%, #06507D 100%)',
				color: 'white',
				borderRadius: '10px',
			},
			iconTheme: {
				primary: 'white',
				secondary: '#D42127',
			},
		});
	};

	return (
		<motion.div 
			whileHover={{ 
				y: -8, 
				scale: 1.02,
				rotateX: 3,
				boxShadow: "0 25px 50px -12px rgba(6, 80, 125, 0.25), 0 0 0 1px rgba(212, 33, 39, 0.05)"
			}} 
			whileTap={{ scale: 0.98 }}
			transition={{ 
				type: 'spring', 
				stiffness: 300, 
				damping: 20 
			}}
			className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-[#06507D]/10 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
		>
			{/* Background Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/3 via-transparent to-[#D42127]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

			{/* Price Badge */}
			<motion.div
				className="absolute top-3 left-3 z-20 bg-gradient-to-br from-[#D42127] to-[#06507D] text-white text-xs sm:text-sm rounded-full px-3 py-1.5 shadow-lg font-bold transform -rotate-2"
				initial={{ opacity: 0, scale: 0.8, x: -20 }}
				animate={{ opacity: 1, scale: 1, x: 0 }}
				transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
			>
				${finalPrice.toFixed(2)}
			</motion.div>

			{/* Discount Badge */}
			{hasDiscount && (
				<motion.div
					className="absolute top-3 right-2 z-20 bg-gradient-to-br from-[#06507D] to-[#D42127] text-white text-xs sm:text-sm rounded-full px-3 py-1.5 shadow-lg font-bold transform rotate-2"
					initial={{ opacity: 0, scale: 0.8, x: 20 }}
					animate={{ opacity: 1, scale: 1, x: 0 }}
					transition={{ delay: 0.25, type: "spring", stiffness: 400 }}
				>
					-{Math.round(Number(product.discountPercent))}%
				</motion.div>
			)}

			{/* Wishlist Button */}
			<motion.button 
				aria-label="Wishlist" 
				className="absolute top-3 right-3 z-30 bg-white/95 hover:bg-white/100 rounded-full p-2 shadow-lg border border-[#06507D]/20 hover:border-[#D42127]/30 transition-all duration-300 backdrop-blur-sm"
				onClick={handleWishlistToggle}
				whileHover={{ scale: 1.15, rotate: 180 }}
				whileTap={{ scale: 0.9 }}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
			>
				<motion.span 
					className={`text-lg sm:text-xl transition-all duration-300 ${
						inWishlist ? 'text-[#D42127]' : 'text-gray-400'
					}`}
					animate={inWishlist ? { scale: 1.2, color: '#D42127' } : { scale: 1, color: '#06507D' }}
					transition={{ duration: 0.2, type: "spring" }}
				>
					{inWishlist ? '💖' : '🤍'}
				</motion.span>
			</motion.button>

			{/* Product Image */}
			<motion.div 
				className="relative z-10 overflow-hidden aspect-[4/3]"
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.6 }}
			>
				<Link to={`/product/${product.slug}`} className="block w-full h-full relative">
					<img 
						loading="lazy" 
						src={product.thumbnail || fallbackImg} 
						alt={product.title} 
						className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
					/>
					{/* Image Shine Effect */}
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100 z-10"></div>
				</Link>
			</motion.div>

			{/* Product Content */}
			<motion.div
				className="relative z-10 p-4 sm:p-5 bg-gradient-to-t from-white/70 via-white/90 to-transparent"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.6 }}
			>
				{/* Title */}
				<motion.div 
					className="mb-2"
					whileHover={{ color: '#06507D' }}
				>
					<Link 
						to={`/product/${product.slug}`} 
						className="font-semibold line-clamp-2 text-sm sm:text-base text-gray-800 hover:text-[#06507D] transition-colors duration-300 block"
					>
						{product.title}
					</Link>
				</motion.div>

				{/* Category */}
				<motion.div
					className="mb-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
				>
					<span className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#06507D]/70 font-medium bg-[#06507D]/5 px-2 py-1 rounded-full">
						<span className="w-1.5 h-1.5 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></span>
						{product.category?.name || 'Specialty'}
					</span>
				</motion.div>

				{/* Price Display */}
				{hasDiscount ? (
					<motion.div
						className="mb-4"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
					>
						<div className="flex items-center gap-3">
							<span className="text-[#D42127] font-bold text-lg sm:text-xl bg-gradient-to-r from-[#D42127] to-[#06507D] bg-clip-text">
								${finalPrice.toFixed(2)}
							</span>
							<span className="text-gray-400 line-through text-sm sm:text-base">
								${basePrice.toFixed(2)}
							</span>
						</div>
					</motion.div>
				) : (
					<motion.div
						className="mb-4"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
					>
						<span className="text-[#D42127] font-bold text-lg sm:text-xl bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text">
							${finalPrice.toFixed(2)}
						</span>
					</motion.div>
				)}

				{/* Add to Cart Button */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
				>
					<motion.button
						whileHover={{ 
							scale: 1.02,
							boxShadow: "0 8px 25px rgba(6, 80, 125, 0.3)"
						}}
						whileTap={{ scale: 0.98 }}
						onClick={handleAddToCart}
						className="w-full relative overflow-hidden bg-gradient-to-r from-[#06507D] to-[#D42127] text-white py-3 sm:py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2 group"
					>
						{/* Shine Effect */}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
						
						<svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
						</svg>
						<span className="relative z-10">Add to Cart</span>
					</motion.button>
				</motion.div>
			</motion.div>

			{/* Hover Overlay */}
			<motion.div 
				className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06507D]/10 via-transparent to-[#D42127]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5"
				initial={{ opacity: 0 }}
			/>
		</motion.div>
	);
}