import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner.jsx';
import { Link } from 'react-router-dom';

export default function Catering() {
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
		<div className="overflow-hidden">
			<PageBanner
				title="Catering"
				subtitle="Live Indian Kitchen • 500+ servings available"
				image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
				height="h-[35vh]"
				overlay="bg-gradient-to-r from-[#06507D]/60 to-[#D42127]/60"
			/>
			
			<motion.section
				variants={staggerChildren}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="container-pad py-16 bg-gradient-to-br from-gray-50/50 to-white"
			>
				{/* Availability Alert */}
				<motion.div
					variants={fadeInUp}
					whileHover={{ scale: 1.02 }}
					className="bg-gradient-to-r from-[#06507D]/10 to-[#D42127]/10 border border-[#06507D]/20 text-[#06507D] px-6 py-4 rounded-2xl mb-8 shadow-lg relative overflow-hidden"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5"></div>
					<div className="relative z-10 flex items-center gap-3">
						<div className="w-2 h-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full animate-pulse"></div>
						<div className="font-semibold">
							<span className="text-[#D42127] mr-2">🎉</span>
							500+ servings available
						</div>
					</div>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Contact Form */}
					<motion.form
						variants={fadeInUp}
						whileHover={{ scale: 1.01 }}
						className="md:col-span-2 relative overflow-hidden border border-[#06507D]/10 rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/2 via-transparent to-[#D42127]/2"></div>
						<motion.div className="relative z-10 space-y-6">
							<motion.div
								variants={fadeInUp}
								className="flex items-center gap-3 mb-4"
							>
								<div className="w-2 h-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
								<h2 className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
									Get Your Quote
								</h2>
							</motion.div>

							<motion.div variants={fadeInUp}>
								<label className="block text-sm font-medium mb-2 text-gray-700">
									Number of Guests
								</label>
								<input 
									type="number" 
									min={1}
									className="border-2 border-[#06507D]/20 rounded-xl px-4 py-3 w-full focus:border-[#06507D]/50 focus:outline-none focus:ring-2 focus:ring-[#06507D]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-500" 
									placeholder="e.g. 120" 
								/>
							</motion.div>

							<motion.div variants={fadeInUp}>
								<label className="block text-sm font-medium mb-2 text-gray-700">
									Comments & Preferences
								</label>
								<textarea 
									rows={6} 
									className="border-2 border-[#06507D]/20 rounded-xl px-4 py-3 w-full focus:border-[#06507D]/50 focus:outline-none focus:ring-2 focus:ring-[#06507D]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-500 resize-none" 
									placeholder="Menu preferences, dates, budget, live stations, dietary requirements, etc." 
								/>
							</motion.div>

							<motion.button
								variants={fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								type="button"
								className="w-full bg-gradient-to-r from-[#06507D] to-[#D42127] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
							>
								<span>Request Your Quote</span>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</motion.button>
						</motion.div>
					</motion.form>

					{/* Highlights Sidebar */}
					<motion.aside
						variants={fadeInUp}
						whileHover={{ x: 5 }}
						className="relative overflow-hidden border border-[#D42127]/10 rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-[#D42127]/5 to-[#06507D]/5"></div>
						<motion.div className="relative z-10 space-y-6">
							<motion.div
								variants={fadeInUp}
								className="flex items-center gap-3 mb-4"
							>
								<div className="w-2 h-2 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full"></div>
								<h3 className="font-serif text-xl md:text-2xl bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">
									Our Highlights
								</h3>
							</motion.div>

							<motion.ul
								variants={staggerChildren}
								className="space-y-4"
							>
								{[
									{ icon: "🍽️", text: "Elegant Food Trays" },
									{ icon: "👨‍🍳", text: "Professional Chef Team" },
									{ icon: "🔥", text: "Live Tandoor Station" },
									{ icon: "🍢", text: "Interactive Chaat Bars" }
								].map((item, index) => (
									<motion.li
										key={index}
										variants={fadeInUp}
										whileHover={{ x: 5 }}
										className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/50 to-transparent hover:bg-[#06507D]/5 transition-all duration-200"
									>
										<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 flex items-center justify-center flex-shrink-0 shadow-sm">
											<span className="text-lg">{item.icon}</span>
										</div>
										<span className="font-medium text-gray-800">{item.text}</span>
									</motion.li>
								))}
							</motion.ul>

							<motion.div
								variants={fadeInUp}
								className="p-4 rounded-xl bg-gradient-to-r from-[#06507D]/10 to-[#D42127]/10 border border-[#06507D]/20 text-[#06507D] relative overflow-hidden"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5"></div>
								<div className="relative z-10 flex items-center gap-2">
									<div className="w-2 h-2 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full animate-pulse"></div>
									<span className="font-semibold">Live Indian Kitchen Experience</span>
								</div>
							</motion.div>

							{/* Quick Links */}
							<motion.div
								variants={fadeInUp}
								className="pt-4 mt-4 border-t border-[#06507D]/10 space-y-2"
							>
								<motion.p
									className="text-sm text-gray-600 mb-3"
									whileHover={{ color: '#06507D' }}
								>
									Ready to plan your event? 
									<Link 
										to="/contact" 
										className="text-[#D42127] font-semibold hover:underline transition-colors"
									>
										Contact us today
									</Link>
								</motion.p>
							</motion.div>
						</motion.div>
					</motion.aside>
				</div>

				{/* Features Grid */}
				<motion.section
					variants={staggerChildren}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="mt-16"
				>
					<motion.div
						variants={fadeInUp}
						className="text-center mb-12"
					>
						<div className="inline-block w-20 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
						<h2 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
							Perfect for Any Occasion
						</h2>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="grid md:grid-cols-3 gap-6"
					>
						{[
							{
								icon: "💍",
								title: "Weddings",
								desc: "Unforgettable feasts for your special day with personalized menus and live cooking stations"
							},
							{
								icon: "🎉",
								title: "Corporate Events",
								desc: "Professional catering services tailored for business functions and team celebrations"
							},
							{
								icon: "🎂",
								title: "Private Parties",
								desc: "Intimate gatherings with authentic Indian flavors and attentive service"
							}
						].map((feature, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								whileHover={{ 
									y: -10, 
									scale: 1.02,
									transition: { duration: 0.3 }
								}}
								className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#06507D]/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="relative z-10 space-y-4">
									<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06507D] to-[#D42127] flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
										<span>{feature.icon}</span>
									</div>
									<h3 className="font-semibold text-xl text-center text-gray-800 relative z-10">
										{feature.title}
									</h3>
									<p className="text-gray-600 text-center text-sm relative z-10 leading-relaxed">
										{feature.desc}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* CTA Section */}
				<motion.section
					variants={fadeInUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="mt-16 text-center py-12 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-3xl relative overflow-hidden"
				>
					<div className="absolute inset-0 bg-black/20"></div>
					<div className="relative z-10">
						<div className="inline-block w-20 h-1 bg-white/30 rounded-full mb-4"></div>
						<h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">
							Ready to Plan Your Event?
						</h2>
						<p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
							Let us create a memorable culinary experience for your special occasion. From intimate gatherings to grand celebrations, our team is ready to serve you.
						</p>
						<motion.div 
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
							whileHover="hover"
						>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-white text-[#06507D] px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center gap-2"
							>
								Get Quote Now
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</motion.button>
							<motion.button
								variants={{
									hover: { scale: 1.05, rotate: [0, -5, 5, -5, 0] }
								}}
								whileTap={{ scale: 0.95 }}
								className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#06507D] transition-all duration-300 flex items-center gap-2"
							>
								View Gallery
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
								</svg>
							</motion.button>
						</motion.div>
					</div>
				</motion.section>
			</motion.section>
		</div>
	);
}