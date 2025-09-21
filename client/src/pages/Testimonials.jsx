import PageBanner from '../components/PageBanner.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Testimonials() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: { 
			opacity: 1, 
			y: 0, 
			scale: 1,
			transition: { 
				duration: 0.6,
				ease: "easeOut"
			} 
		}
	};

	const hoverCard = {
		hover: {
			y: -10,
			scale: 1.02,
			rotateX: 5,
			transition: { duration: 0.3 }
		}
	};

	const testimonials = [
		{ 
			name: 'Amelia Thompson', 
			text: 'Absolutely delicious food. The tandoor specialties are a must-try! Authentic flavors that transport you straight to India.',
			img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
			role: 'Food Blogger'
		},
		{ 
			name: 'Rohan Patel', 
			text: "Chef Karan Sarna's specials are outstanding. Rich flavors and authentic taste. Best Indian food we've had in years!",
			img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
			role: 'Local Business Owner'
		},
		{ 
			name: 'Lily Chen', 
			text: 'Friendly staff and quick pickup. Highly recommend for family dinners. The biryani is simply perfection!',
			img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
			role: 'Family of 4'
		},
		{ 
			name: 'Marcus Lee', 
			text: "The catering for our corporate event was flawless. Professional service and incredible food. Will definitely use again!",
			img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
			role: 'Event Planner'
		},
		{ 
			name: 'Sofia Rodriguez', 
			text: 'Love the community focus! Supporting local vendors while serving the best chaat in town. Feels like home.',
			img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
			role: 'Community Volunteer'
		},
		{ 
			name: 'James Wilson', 
			text: "The live tandoor experience was magical! Fresh naan straight from the oven paired with butter chicken—pure bliss.",
			img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
			role: 'Food Enthusiast'
		}
	];

	return (
		<div className="overflow-hidden">
			<PageBanner
				title="Testimonials"
				subtitle="Made in Canada — Proudly local and community-driven"
				image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
				height="h-[35vh]"
				overlay="bg-gradient-to-r from-[#06507D]/60 to-[#D42127]/60"
			/>
			
			{/* Testimonials Section */}
			<motion.section
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="container-pad py-16 bg-gradient-to-br from-gray-50/50 to-white"
			>
				<motion.div
					variants={itemVariants}
					className="text-center mb-12"
				>
					<div className="inline-flex items-center gap-3 mb-4">
						<div className="w-3 h-3 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full animate-ping"></div>
						<h2 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
							Hear From Our Community
						</h2>
					</div>
					<div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
				</motion.div>

				<motion.div
					variants={containerVariants}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={hoverCard}
							whileTap={{ scale: 0.98 }}
							className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-[#06507D]/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
						>
							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/5 via-transparent to-[#D42127]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							
							{/* Quote Mark */}
							<div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#D42127] to-[#06507D] text-white rounded-full flex items-center justify-center text-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
								"
							</div>

							<div className="relative z-10 flex items-start gap-4">
								{/* Profile Image */}
								<motion.div
									className="relative flex-shrink-0"
									whileHover={{ scale: 1.05, rotate: 5 }}
								>
									<img 
										src={testimonial.img} 
										alt={testimonial.name} 
										className="w-16 h-16 rounded-full object-cover ring-2 ring-[#06507D]/20 group-hover:ring-[#D42127]/30 transition-all duration-300 shadow-lg" 
									/>
									<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#D42127] to-[#06507D] text-white rounded-full flex items-center justify-center text-sm font-bold animate-bounce">
										⭐
									</div>
								</motion.div>

								{/* Content */}
								<div className="flex-1 min-w-0">
									<motion.div
										className="font-semibold text-lg mb-1 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent group-hover:scale-x-105 transition-transform duration-300"
										whileHover={{ scale: 1.02 }}
									>
										{testimonial.name}
									</motion.div>
									<motion.div
										className="text-sm text-[#D42127]/70 font-medium mb-3"
										whileHover={{ color: '#D42127' }}
									>
										{testimonial.role}
									</motion.div>
									<motion.p 
										className="text-gray-700 leading-relaxed italic relative z-10"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.2 }}
									>
										"{testimonial.text}"
									</motion.p>
									
									{/* Rating Stars */}
									<motion.div
										className="flex items-center gap-1 mt-3"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3 }}
									>
										{[...Array(5)].map((_, i) => (
											<motion.span
												key={i}
												className="text-[#D42127] text-lg"
												whileHover={{ scale: 1.2 }}
											>
												⭐
											</motion.span>
										))}
									</motion.div>
								</div>
							</div>

							{/* Bottom Gradient Line */}
							<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</motion.div>
					))}
				</motion.div>

				{/* Slider Indicator */}
				<motion.div
					className="flex justify-center mt-12 gap-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				>
					{testimonials.map((_, index) => (
						<motion.div
							key={index}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === 0 ? 'bg-gradient-to-r from-[#06507D] to-[#D42127] scale-110' : 'bg-[#06507D]/20'
							}`}
							whileHover={{ scale: 1.3 }}
						/>
					))}
				</motion.div>
			</motion.section>

			{/* Chef Specials Section */}
			<motion.section
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="container-pad py-16 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 rounded-3xl -mx-4 md:mx-0 md:-mx-8 overflow-hidden"
			>
				<motion.div
					variants={itemVariants}
					className="flex items-center gap-4 mb-8"
				>
					<div className="w-3 h-3 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full relative animate-pulse">
						<div className="absolute inset-0 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full opacity-75 animate-ping"></div>
					</div>
					<h2 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">
						Chef Karan Sarna Specials
					</h2>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="grid md:grid-cols-5 gap-6 items-start relative"
				>
					{/* Chef Image */}
					<motion.div
						className="relative group overflow-hidden rounded-2xl shadow-xl"
						whileHover={{ scale: 1.02 }}
					>
						<img 
							className="md:col-span-2 w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700" 
							src="https://images.unsplash.com/photo-1526312426976-593c69b36f8e?q=80&w=600&auto=format&fit=crop" 
							alt="Chef Karan Sarna" 
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#06507D]/80 via-[#D42127]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
							<div className="text-white">
								<h3 className="font-serif text-2xl font-bold mb-1">Chef Karan Sarna</h3>
								<p className="text-white/90">Master of Authentic Flavors</p>
							</div>
						</div>
						<div className="absolute top-4 right-4 bg-gradient-to-br from-[#D42127] to-[#06507D] text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							Signature Dishes
						</div>
					</motion.div>

					{/* Special Dishes */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-3 grid sm:grid-cols-3 gap-4"
					>
						{[
							{ 
								dish: 'Laal Maas', 
								desc: 'Fiery Rajasthani lamb curry',
								icon: '🔥',
								color: 'from-[#D42127]'
							},
							{ 
								dish: 'Tandoori Paneer Tikka', 
								desc: 'Smoky marinated paneer skewers',
								icon: '🍢', 
								color: 'from-[#06507D]'
							},
							{ 
								dish: 'Chole Bhature', 
								desc: 'Fluffy bread with spicy chickpeas',
								icon: '🍲',
								color: 'from-[#D42127]'
							}
						].map((item, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover={hoverCard}
								className={`group relative overflow-hidden border border-${item.color.replace('from-', '')}/20 rounded-2xl p-5 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300`}
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
								
								<div className="relative z-10 flex items-center gap-3 mb-3">
									<div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
										<span className="text-xl">{item.icon}</span>
									</div>
									<h4 className="font-semibold text-lg text-gray-800 group-hover:text-[#06507D] transition-colors">
										{item.dish}
									</h4>
								</div>
								
								<p className="text-gray-600 text-sm leading-relaxed relative z-10">
									{item.desc}
								</p>
								
								<div className="absolute bottom-2 right-2 w-16 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"></div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</motion.section>

			{/* Community Focus */}
			<motion.section
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="container-pad py-16"
			>
				<motion.div
					variants={itemVariants}
					className="text-center mb-12"
				>
					<div className="inline-flex items-center gap-3 mb-4">
						<div className="w-3 h-3 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
						<h2 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
							Our Community Heart
						</h2>
					</div>
					<div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
				</motion.div>

				<motion.div
					variants={containerVariants}
					className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{[
						{
							title: "Local Vendors",
							desc: "We partner with neighborhood vendors and artisans to bring you the freshest, most authentic ingredients.",
							icon: "🏪",
							color: "from-[#06507D]",
							stats: "50+"
						},
						{
							title: "Farmer Market Products",
							desc: "Fresh, seasonal, and market-centric selections that support our local agricultural community.",
							icon: "🌾",
							color: "from-[#D42127]",
							stats: "Weekly"
						},
						{
							title: "Expert Staff",
							desc: "Knowledgeable team passionate about Indian cuisine, ready to guide your culinary journey.",
							icon: "👥",
							color: "from-[#06507D]",
							stats: "15+ Years"
						}
					].map((item, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={hoverCard}
							className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
						>
							<div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
							
							<div className="relative z-10 space-y-4">
								<div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
									<span className="text-2xl">{item.icon}</span>
								</div>
								
								<motion.div
									className="text-center"
									whileHover={{ scale: 1.02 }}
								>
									<h3 className="font-semibold text-xl mb-2 text-gray-800 group-hover:text-[#06507D] transition-colors">
										{item.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{item.desc}
									</p>
								</motion.div>
								
								<div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-[#06507D]/10">
									<span className="text-[#D42127] font-bold text-lg">{item.stats}</span>
									<span className="text-sm text-gray-500">Local Impact</span>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.section>

			{/* Local Highlights */}
			<motion.section
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="container-pad py-16 bg-gradient-to-br from-[#D42127]/5 to-[#06507D]/5 rounded-3xl overflow-hidden"
			>
				<motion.div
					variants={itemVariants}
					className="text-center mb-12"
				>
					<div className="inline-flex items-center gap-3 mb-4">
						<div className="w-3 h-3 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full animate-pulse"></div>
						<h2 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">
							Golden, BC Highlights
						</h2>
					</div>
					<div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
				</motion.div>

				<motion.div
					variants={containerVariants}
					className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative"
				>
					{[
						{
							title: "Authentic Indian Cuisine",
							desc: "House-made masalas and traditional recipes passed down through generations.",
							icon: "🍛",
							color: "from-[#06507D]",
							bg: "bg-gradient-to-br from-[#06507D]/5"
						},
						{
							title: "Canadian-Indian Fusion",
							desc: "Celebrating the beautiful stories of our diverse community through food.",
							icon: "🇨🇦",
							color: "from-[#D42127]",
							bg: "bg-gradient-to-br from-[#D42127]/5"
						},
						{
							title: "Heart of Golden, BC",
							desc: "Nestled in the beautiful mountains, serving our mountain community with love.",
							icon: "🏔️",
							color: "from-[#06507D]",
							bg: "bg-gradient-to-br from-[#06507D]/5"
						}
					].map((item, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={hoverCard}
							className={`group relative overflow-hidden ${item.bg} border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500`}
						>
							<div className={`absolute inset-0 ${item.color} to-transparent opacity-0 group-hover:opacity-3 transition-opacity duration-300`}></div>
							
							<div className="relative z-10 space-y-4 h-full flex flex-col justify-between">
								<div>
									<div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
										<span className="text-2xl">{item.icon}</span>
									</div>
									
									<motion.div
										className="text-center"
										whileHover={{ scale: 1.02 }}
									>
										<h3 className="font-semibold text-xl mb-3 text-gray-800 group-hover:text-[#06507D] transition-colors">
											{item.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">
											{item.desc}
										</p>
									</motion.div>
								</div>
								
								<motion.div
									className="flex items-center justify-center pt-4 mt-auto border-t border-[#06507D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									initial={{ y: 10 }}
									whileHover={{ y: 0 }}
								>
									<Link 
										to="/order-online"
										className="text-sm font-medium text-[#D42127] hover:underline flex items-center gap-1"
									>
										Order Now
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</Link>
								</motion.div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.section>

			{/* CTA Section */}
			<motion.section
				variants={itemVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="container-pad py-16 text-center"
			>
				<div className="inline-flex items-center gap-3 mb-6">
					<div className="w-3 h-3 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full animate-pulse"></div>
					<h2 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
						Join Our Community
					</h2>
				</div>
				<div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-8"></div>
				
				<motion.p
					className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Experience the warmth of our community and the richness of authentic Indian flavors. 
					Whether you're joining us for a quick lunch or planning a special celebration, 
					we're here to make every moment delicious.
				</motion.p>

				<motion.div 
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-gradient-to-r from-[#06507D] to-[#D42127] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
					>
						Order Online
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</motion.button>
					
					<motion.button
						whileHover={{ scale: 1.05, rotate: [0, -3, 3, -3, 0] }}
						whileTap={{ scale: 0.95 }}
						className="border-2 border-[#06507D] text-[#06507D] px-8 py-4 rounded-full font-semibold hover:bg-[#06507D] hover:text-white transition-all duration-300 flex items-center gap-2"
					>
						Read More Stories
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</motion.button>
				</motion.div>
			</motion.section>
		</div>
	);
}