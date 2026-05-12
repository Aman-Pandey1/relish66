import PageBanner from '../components/PageBanner.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

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
			name: 'Harpreet Singh (Gurudwara Committee)', 
			text: 'We arranged langar-style catering for a community gathering, and everything was fresh, warm, and on time. The team handled service very respectfully.',
			role: ''
		},
		{ 
			name: 'Priyanka Sharma (Temple Volunteer)', 
			text: 'For our temple event, they provided a clean sattvik menu exactly as discussed. Guests appreciated the taste and the neat packaging.',
			role: ''
		},
		{ 
			name: 'Ayesha Khan (Community Group)', 
			text: 'We booked catering during Ramadan evenings and the coordination was smooth. Portions were good and delivery timing was reliable.',
			role: ''
		},
		{ 
			name: 'Thomas Dsouza (Church Coordinator)', 
			text: 'They catered our church fellowship dinner with great professionalism. Food quality stayed consistent even for a large group.',
			role: ''
		},
		{ 
			name: 'Jasmeet Kaur (Family Event Host)', 
			text: 'We placed a mixed veg and non-veg order for a religious ceremony at home. Every tray arrived hot and guests loved the flavor.',
			role: ''
		},
		{ 
			name: 'Manpreet Gill (Youth Seva Team)', 
			text: 'The live tandoor setup added great energy to our seva fundraiser event. Staff was polite, efficient, and easy to work with.',
			role: ''
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
								{/* Content */}
								<div className="flex-1 min-w-0">
									<motion.div
										className="font-semibold text-lg mb-1 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent group-hover:scale-x-105 transition-transform duration-300"
										whileHover={{ scale: 1.02 }}
									>
										{testimonial.name}
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
												<FaStar />
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

		</div>
	);
}