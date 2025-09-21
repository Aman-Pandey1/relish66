import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';
import { Link } from 'react-router-dom';
import CategoryIcon from './CategoryIcon.jsx';

export default function CategoryStrip() {
	const [cats, setCats] = useState([]);
	const [activeCategory, setActiveCategory] = useState(null);
	
	useEffect(() => { 
		api.get('/categories').then(r => setCats(r.data)); 
	}, []);

	if (!cats.length) return null;

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20, scale: 0.9 },
		visible: { 
			opacity: 1, 
			y: 0, 
			scale: 1,
			transition: { 
				duration: 0.4,
				ease: "easeOut"
			} 
		}
	};

	const hoverVariants = {
		hover: {
			y: -8,
			scale: 1.05,
			rotateX: 5,
			transition: { 
				duration: 0.3, 
				type: "spring", 
				stiffness: 300 
			}
		}
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="container-pad py-8 bg-gradient-to-br from-[#06507D]/3 to-[#D42127]/3 rounded-3xl overflow-hidden relative"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-gradient-to-r from-[#06507D]/10 via-transparent to-[#D42127]/10 opacity-50"></div>
			
			{/* Header */}
			<motion.div
				variants={itemVariants}
				className="text-center mb-8 relative z-10"
			>
				<motion.div 
					className="inline-flex items-center gap-3 mb-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
				>
					<div className="w-3 h-3 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full relative">
						<div className="absolute inset-0 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full animate-ping opacity-75"></div>
					</div>
					<h3 className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
						Explore Categories
					</h3>
				</motion.div>
				<motion.div
					className="inline-block w-20 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"
					initial={{ scaleX: 0, originX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
				/>
			</motion.div>

			{/* Mobile: Horizontal Scroll */}
			<motion.div
				variants={itemVariants}
				className="-mx-4 px-4 md:mx-0 md:px-0 relative z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				<div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
					{cats.map((c, index) => (
						<motion.div
							key={c._id}
							variants={itemVariants}
							className="snap-start flex-shrink-0 w-[85vw] max-w-[200px]"
						>
							<Link 
								to={`/order-online?category=${c.slug}`} 
								className={`block h-full group border rounded-2xl p-5 text-center transition-all duration-500 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl ${
									activeCategory === c.slug 
										? 'ring-2 ring-[#D42127]/50 bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 shadow-[#D42127]/20' 
										: 'border-[#06507D]/20 hover:border-[#06507D]/40'
								}`}
								onMouseEnter={() => setActiveCategory(c.slug)}
								onMouseLeave={() => setActiveCategory(null)}
							>
								{/* Icon Container */}
								<motion.div 
									className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 border border-[#06507D]/20 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
										activeCategory === c.slug 
											? 'bg-gradient-to-br from-[#06507D]/20 to-[#D42127]/20 shadow-[#D42127]/20 border-[#D42127]/30' 
											: ''
									}`}
									whileHover={{ rotate: [0, -5, 5] }}
								>
									<motion.div
										animate={activeCategory === c.slug ? { rotate: 360 } : {}}
										transition={{ duration: 0.6 }}
									>
										<CategoryIcon 
											slug={c.slug} 
											className={`text-2xl sm:text-3xl transition-colors duration-300 ${
												activeCategory === c.slug 
													? 'text-[#D42127]' 
													: 'text-[#06507D] group-hover:text-[#D42127]'
											}`} 
										/>
									</motion.div>
								</motion.div>
								
								{/* Category Name */}
								<motion.div 
									className={`text-sm sm:text-base font-medium transition-all duration-300 ${
										activeCategory === c.slug 
											? 'text-[#D42127] font-semibold' 
											: 'text-gray-700 group-hover:text-[#06507D]'
									}`}
									whileHover={{ y: -2 }}
								>
									{c.name}
								</motion.div>
								
								{/* Active Indicator */}
								{activeCategory === c.slug && (
									<motion.div
										className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full opacity-0"
										initial={{ opacity: 0, scaleX: 0 }}
										animate={{ opacity: 1, scaleX: 1 }}
										transition={{ delay: 0.2, duration: 0.3 }}
									/>
								)}
							</Link>
						</motion.div>
					))}
				</div>

				{/* Desktop: Grid Layout */}
				<motion.div
					variants={itemVariants}
					className="hidden md:grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 relative z-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					{cats.map((c, index) => (
						<motion.div
							key={c._id}
							variants={itemVariants}
							className="group relative"
						>
							<Link 
								to={`/order-online?category=${c.slug}`} 
								className={`block h-full border rounded-2xl p-4 sm:p-5 text-center transition-all duration-500 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl ${
									activeCategory === c.slug 
										? 'ring-2 ring-[#D42127]/50 bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 shadow-[#D42127]/20 border-[#D42127]/30 transform scale-105' 
										: 'border-[#06507D]/20 hover:border-[#06507D]/40 hover:shadow-lg'
								}`}
								onMouseEnter={() => setActiveCategory(c.slug)}
								onMouseLeave={() => setActiveCategory(null)}
							>
								{/* Icon Container */}
								<motion.div 
									className={`w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 border border-[#06507D]/20 flex items-center justify-center shadow-sm transition-all duration-300 ${
										activeCategory === c.slug 
											? 'bg-gradient-to-br from-[#06507D]/20 to-[#D42127]/20 shadow-[#D42127]/20 border-[#D42127]/30 transform scale-110' 
											: 'group-hover:scale-110 group-hover:shadow-lg'
									}`}
									whileHover={{ rotate: [0, -3, 3] }}
									whileTap={{ scale: 0.95 }}
								>
									<motion.div
										animate={activeCategory === c.slug ? { rotate: 360 } : {}}
										transition={{ duration: 0.6, type: "spring" }}
									>
										<CategoryIcon 
											slug={c.slug} 
											className={`text-xl sm:text-2xl lg:text-3xl transition-all duration-300 ${
												activeCategory === c.slug 
													? 'text-[#D42127] drop-shadow-lg' 
													: 'text-[#06507D] group-hover:text-[#D42127]'
											}`} 
										/>
									</motion.div>
								</motion.div>
								
								{/* Category Name */}
								<motion.div 
									className={`text-sm sm:text-base font-medium transition-all duration-300 ${
										activeCategory === c.slug 
											? 'text-[#D42127] font-semibold drop-shadow-sm' 
											: 'text-gray-700 group-hover:text-[#06507D]'
									}`}
									whileHover={{ y: -1 }}
								>
									{c.name}
								</motion.div>
								
								{/* Active Indicator Line */}
								{activeCategory === c.slug && (
									<motion.div
										className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full opacity-0"
										initial={{ opacity: 0, scaleX: 0, originX: 0.5 }}
										animate={{ opacity: 1, scaleX: 1 }}
										transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
									/>
								)}
								
								{/* Hover Glow Effect */}
								{activeCategory === c.slug && (
									<motion.div
										className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D42127]/20 to-[#06507D]/20 blur-xl opacity-0"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3, duration: 0.3 }}
									/>
								)}
							</Link>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			{/* Scroll Indicator for Mobile */}
			<motion.div
				className="md:hidden flex justify-center mt-4 relative z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
			>
				<div className="flex gap-2">
					{cats.slice(0, 3).map((_, index) => (
						<motion.div
							key={index}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								index === 0 ? 'bg-gradient-to-r from-[#06507D] to-[#D42127] scale-110' : 'bg-[#06507D]/30'
							}`}
							whileHover={{ scale: 1.3 }}
						/>
					))}
					{cats.length > 3 && (
						<motion.div
							className="w-2 h-2 bg-[#06507D]/30 rounded-full relative"
							whileHover={{ scale: 1.3 }}
						>
							<div className="absolute inset-0 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200 transform scale-0 hover:scale-100 origin-center"></div>
							<span className="text-xs text-[#06507D]/50 absolute -top-3 left-1/2 transform -translate-x-1/2">+{cats.length - 3}</span>
						</motion.div>
					)}
				</div>
			</motion.div>
		</motion.div>
	);
}