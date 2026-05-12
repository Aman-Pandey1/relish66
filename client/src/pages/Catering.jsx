import { motion } from 'framer-motion';
import { useState } from 'react';
import api from '../utils/api';
import PageBanner from '../components/PageBanner.jsx';
import { Link } from 'react-router-dom';
import { MdRestaurant, MdGroups, MdLocalFireDepartment, MdFastfood, MdTempleHindu, MdKebabDining, MdSoupKitchen, MdCelebration, MdCheck, MdInventory2, MdDeliveryDining, MdWorkspacePremium } from 'react-icons/md';
import karanImage from '../assets/karansarna.jpeg';

export default function Catering() {
	const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
	const [sent, setSent] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			await api.post('/contact', form);
			setSent(true);
		} catch (error) {
			console.error('Error sending catering request:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

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
				subtitle="Relish on 66 Restaurant and Bar • Live Kitchen • 500+ servings available"
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
							<MdCelebration className="inline-block text-[#D42127] mr-2" />
							500+ servings available
						</div>
					</div>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Contact Form */}
					<motion.form
						variants={fadeInUp}
						whileHover={{ scale: 1.01 }}
						onSubmit={submit}
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
									Send Us a Message
								</h2>
							</motion.div>

							{sent ? (
								<div className="text-center py-10">
									<div className="w-16 h-16 bg-gradient-to-br from-[#06507D] to-[#D42127] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
										<MdCheck className="text-3xl text-white" />
									</div>
									<h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">Request Sent!</h3>
									<p className="text-neutral-600 mb-6">Thanks for reaching out! We will get back to you within 24 hours.</p>
									<button
										type="button"
										onClick={() => setSent(false)}
										className="px-6 py-2 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-full hover:shadow-lg transition-all duration-300"
									>
										Send Another Message
									</button>
								</div>
							) : (
								<>
									<div className="grid md:grid-cols-2 gap-6">
										<motion.div variants={fadeInUp}>
											<label className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
											<input
												className="border-2 border-[#06507D]/20 rounded-xl px-4 py-3 w-full focus:border-[#06507D]/50 focus:outline-none focus:ring-2 focus:ring-[#06507D]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-500"
												placeholder="John Doe"
												value={form.name}
												onChange={(e) => setForm({ ...form, name: e.target.value })}
												required
											/>
										</motion.div>
										<motion.div variants={fadeInUp}>
											<label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
											<input
												type="email"
												className="border-2 border-[#06507D]/20 rounded-xl px-4 py-3 w-full focus:border-[#06507D]/50 focus:outline-none focus:ring-2 focus:ring-[#06507D]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-500"
												placeholder="john@example.com"
												value={form.email}
												onChange={(e) => setForm({ ...form, email: e.target.value })}
												required
											/>
										</motion.div>
									</div>

									<motion.div variants={fadeInUp}>
										<label className="block text-sm font-medium mb-2 text-gray-700">Phone Number (Optional)</label>
										<input
											type="tel"
											className="border-2 border-[#06507D]/20 rounded-xl px-4 py-3 w-full focus:border-[#06507D]/50 focus:outline-none focus:ring-2 focus:ring-[#06507D]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-500"
											placeholder="(123) 456-7890"
											value={form.phone}
											onChange={(e) => setForm({ ...form, phone: e.target.value })}
										/>
									</motion.div>

									<motion.div variants={fadeInUp}>
										<label className="block text-sm font-medium mb-2 text-gray-700">Your Message</label>
										<textarea
											rows={6}
											className="border-2 border-[#06507D]/20 rounded-xl px-4 py-3 w-full focus:border-[#06507D]/50 focus:outline-none focus:ring-2 focus:ring-[#06507D]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-500 resize-none"
											placeholder="Menu preferences, dates, budget, live stations, dietary requirements, etc."
											value={form.message}
											onChange={(e) => setForm({ ...form, message: e.target.value })}
											required
										/>
									</motion.div>
								</>
							)}

							<motion.button
								variants={fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								type="submit"
								disabled={isSubmitting || sent}
								className="w-full bg-gradient-to-r from-[#06507D] to-[#D42127] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
							>
								<span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
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
									{ icon: MdRestaurant, text: "Elegant Food Trays" },
									{ icon: MdGroups, text: "Professional Chef Team" },
									{ icon: MdLocalFireDepartment, text: "Live Tandoor Station" },
									{ icon: MdFastfood, text: "Interactive Chaat Bars" },
									{ icon: MdTempleHindu, text: "Catering Available for Religious Places" }
								].map((item, index) => (
									<motion.li
										key={index}
										variants={fadeInUp}
										whileHover={{ x: 5 }}
										className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/50 to-transparent hover:bg-[#06507D]/5 transition-all duration-200"
									>
										<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 flex items-center justify-center flex-shrink-0 shadow-sm">
											<item.icon className="text-xl text-[#06507D]" />
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
									<span className="font-semibold">Live Kitchen Experience</span>
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

				{/* Chef Specials Section */}
				<motion.section
					variants={staggerChildren}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="mt-16 p-6 md:p-8 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/10 rounded-3xl border border-[#06507D]/10"
				>
					<motion.div
						variants={fadeInUp}
						className="flex items-center gap-3 mb-8"
					>
						<div className="w-2 h-2 bg-gradient-to-r from-[#D42127] to-[#06507D] rounded-full"></div>
						<h2 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">
							Chef Karan Sarna Specials
						</h2>
					</motion.div>

					<div className="grid lg:grid-cols-4 gap-6 items-stretch">
						<motion.div
							variants={fadeInUp}
							className="lg:col-span-1 rounded-2xl overflow-hidden shadow-xl border border-white/50 bg-white"
							whileHover={{ y: -4 }}
						>
							<img
								src={karanImage}
								alt="Chef Karan Sarna"
								className="w-full h-64 lg:h-full object-cover"
							/>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							className="lg:col-span-3 grid sm:grid-cols-3 gap-4"
						>
							{[
								{
									title: 'Laal Maas',
									desc: 'Fiery Rajasthani lamb curry',
									icon: MdLocalFireDepartment
								},
								{
									title: 'Tandoori Paneer Tikka',
									desc: 'Smoky marinated paneer skewers',
									icon: MdKebabDining
								},
								{
									title: 'Chole Bhature',
									desc: 'Fluffy bread with spicy chickpeas',
									icon: MdSoupKitchen
								}
							].map((item, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									whileHover={{ y: -6 }}
									className="group bg-white/90 border border-[#06507D]/15 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
								>
									<div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#06507D] to-[#D42127] text-white flex items-center justify-center mb-3 shadow-lg">
										<item.icon className="w-6 h-6" />
									</div>
									<h3 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h3>
									<p className="text-sm text-gray-600">{item.desc}</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</motion.section>

				{/* Our Catering Service Options */}
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
							Our Catering Service Options
						</h2>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
					>
						{[
							{
								icon: MdRestaurant,
								title: "Buffet Style",
								desc: "A variety of dishes beautifully presented for self-serve convenience."
							},
							{
								icon: MdInventory2,
								title: "Pre Package Meals",
								desc: "Elegant, individually served multi-course options."
							},
							{
								icon: MdGroups,
								title: "Food Stations & Action Cooks",
								desc: "Interactive food stations with chefs preparing on demand."
							},
							{
								icon: MdDeliveryDining,
								title: "Drop-Off Catering",
								desc: "Delivery and setup ready to serve — ideal for casual events."
							},
							{
								icon: MdWorkspacePremium,
								title: "Full Service",
								desc: "Setup, service staff, and cleanup included for seamless events."
							}
						].map((service, index) => (
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
										<service.icon className="text-white w-8 h-8" />
									</div>
									<h3 className="font-semibold text-xl text-center text-gray-800 relative z-10">
										{service.title}
									</h3>
									<p className="text-gray-600 text-center text-sm relative z-10 leading-relaxed">
										{service.desc}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Why Choose Our Catering */}
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
							Why Choose Our Catering?
						</h2>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
					>
						{[
							{
								text: "Authentic Indian & Indo-Chinese Taste"
							},
							{
								text: "Fresh, High-Quality Ingredients"
							},
							{
								text: "Custom Menus for Any Event Size"
							},
							{
								text: "Professional & Friendly Staff"
							},
							{
								text: "On-Time Service You Can Trust"
							}
						].map((feature, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								whileHover={{ 
									x: 5,
									transition: { duration: 0.3 }
								}}
								className="group relative p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#06507D]/10 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="relative z-10 flex items-center gap-3">
									<div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] flex items-center justify-center">
										<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<span className="font-medium text-gray-800 text-sm md:text-base">
										{feature.text}
									</span>
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