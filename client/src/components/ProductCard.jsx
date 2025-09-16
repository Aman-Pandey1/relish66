import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import { motion } from 'framer-motion';

const fallbackImg = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c76ef?q=80&w=800&auto=format&fit=crop';

export default function ProductCard({ product }){
	const { items: wishlist, toggle } = useWishlist();
	const { add } = useCart();
	const inWishlist = wishlist.includes(product._id);
	const hasDiscount = Number(product.discountPercent||0) > 0;
	const basePrice = Number(product.price||0);
	const finalPrice = hasDiscount ? basePrice * (1 - Number(product.discountPercent)/100) : basePrice;
	return (
		<motion.div whileHover={{ y:-6, boxShadow:'0 10px 24px rgba(0,0,0,0.12)' }} transition={{ type:'spring', stiffness:250, damping:20 }} className="group border rounded-lg overflow-hidden bg-white transition relative">
			<div className="absolute top-2 left-2 bg-brandBlue text-white text-[10px] sm:text-xs rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 shadow z-10">${finalPrice.toFixed(2)}</div>
			{hasDiscount && (
				<div className="absolute top-2 right-10 sm:right-12 bg-brandBlue text-white text-[10px] sm:text-xs rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 shadow z-10">-{Math.round(Number(product.discountPercent))}%</div>
			)}
			<button aria-label="Wishlist" className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 text-base sm:text-lg shadow" onClick={(e)=>{ e.preventDefault(); toggle(product._id); }}>
				<span className={inWishlist? 'text-red-600' : 'text-neutral-600'}>❤</span>
			</button>
			<Link to={`/product/${product.slug}`} className="relative z-0">
				<img loading="lazy" src={product.thumbnail || fallbackImg} alt={product.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
				<div className="p-3">
					<div className="font-medium line-clamp-1 text-sm sm:text-base">{product.title}</div>
					<div className="text-xs sm:text-sm text-neutral-500">{product.category?.name}</div>
					{hasDiscount && (
						<div className="mt-1">
							<span className="text-brandBlue font-semibold">${finalPrice.toFixed(2)}</span>
							<span className="text-neutral-400 line-through ml-2">${basePrice.toFixed(2)}</span>
						</div>
					)}
				</div>
			</Link>
			<div className="p-3 pt-0 relative z-10">
				<button className="btn-primary w-full text-sm sm:text-base py-2 sm:py-2.5" onClick={()=>add({ slug: product.slug, title: product.title, price: Number(finalPrice), thumbnail: product.thumbnail||fallbackImg })}>Add to Cart</button>
			</div>
			<div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-0" />
		</motion.div>
	);
}