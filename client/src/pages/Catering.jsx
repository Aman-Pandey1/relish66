import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner.jsx';
import { Seo } from '../components/Seo.jsx';
import { PAGE_SEO, IMAGE_ALTS } from '../seo/pageSeo.js';
import { Link } from 'react-router-dom';
import { MdRestaurant, MdGroups, MdLocalFireDepartment, MdFastfood, MdTempleHindu, MdInventory2, MdDeliveryDining, MdWorkspacePremium } from 'react-icons/md';
import karanImage from '../assets/karansarna.jpeg';

const cateringHighlights = [
	{ icon: MdRestaurant, text: 'Elegant Food Trays' },
	{ icon: MdGroups, text: 'Professional Chef Team' },
	{ icon: MdLocalFireDepartment, text: 'Live Tandoor Station' },
	{ icon: MdFastfood, text: 'Interactive Chaat Bars' },
	{ icon: MdTempleHindu, text: 'Catering Available for Religious Places' },
];

const cateringImageModules = import.meta.glob('../assets/Catering/*.{jpeg,jpg,png,JPEG,JPG,PNG}', {
	eager: true,
	import: 'default',
});

const cateringGalleryImages = Object.entries(cateringImageModules)
	.sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
	.map(([, src], index) => ({
		src,
		alt: index === 0 ? IMAGE_ALTS.cateringEvent : IMAGE_ALTS.cateringGallery,
	}));

const cateringBannerImage = cateringGalleryImages[0]?.src;

const MotionLink = motion(Link);

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
			<Seo path={PAGE_SEO.catering.path} metaTitle={PAGE_SEO.catering.metaTitle} description={PAGE_SEO.catering.description} />
			<PageBanner
				title="Catering"
				subtitle="Relish on 66 Restaurant and Bar • Live Kitchen"
				image={cateringBannerImage || karanImage}
				imageAlt={IMAGE_ALTS.cateringEvent}
				height="h-[35vh]"
				overlay="bg-gradient-to-r from-[#06507D]/60 to-[#D42127]/60"
			/>

			<motion.section
				variants={staggerChildren}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="container-pad py-12 md:py-16 bg-gradient-to-br from-gray-50/50 to-white"
			>
				<div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch p-6 md:p-8 bg-gradient-to-br from-[#faf8f5] to-[#06507D]/5 rounded-3xl border-2 border-[#06507D]/15 shadow-lg">
					<motion.div
						variants={fadeInUp}
						className="rounded-2xl overflow-hidden shadow-xl border-4 border-white/80"
						whileHover={{ y: -4 }}
					>
						<img
							src={karanImage}
							alt={IMAGE_ALTS.cateringChef}
							className="w-full h-full min-h-[280px] md:min-h-[420px] object-cover object-[center_18%]"
						/>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="flex flex-col justify-center text-center md:text-left space-y-5 md:pl-2"
					>
						<h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#06507D] tracking-tight">
							The Story of Relish
							<span className="inline-block ml-1 text-[#D42127]" aria-hidden>♥</span>
						</h2>

						<p className="text-gray-800 text-base md:text-lg leading-relaxed">
							Some journeys are written in books…{' '}
							<span className="text-[#D42127] font-semibold">Ours was written in flavors, memories &amp; love.</span>
						</p>

						<p className="text-gray-800 text-base md:text-lg leading-relaxed">
							From the streets of Delhi to building{' '}
							<span className="text-[#D42127] font-semibold">45+ restaurants</span> across the world, Chef{' '}
							<span className="text-[#D42127] font-semibold">Karan Sarna&apos;s</span> journey has always been about{' '}
							<span className="text-[#D42127] font-semibold">passion, culture,</span> and{' '}
							<span className="text-[#D42127] font-semibold">community.</span>
						</p>

						<p className="text-gray-800 text-base md:text-lg leading-relaxed">
							Alongside his wife <span className="text-[#D42127] font-semibold">Sudipta Sarna</span>, this dream continues with one purpose — creating a place where every guest feels like family.
						</p>

						<p className="text-gray-800 text-base md:text-lg leading-relaxed">
							<span className="text-[#D42127] font-semibold">After 18 beautiful years in Edmonton</span>, we are proud to give back to the community that gave us so much.
						</p>

						<div className="pt-4 border-t border-[#06507D]/15 space-y-3">
							<p className="font-serif text-lg md:text-xl text-[#06507D]">
								Welcome to <span className="text-[#D42127] font-bold">Relish on 66</span>
							</p>
							<p className="inline-block px-4 py-1.5 bg-[#06507D] text-white text-xs font-semibold uppercase tracking-[0.2em] rounded">
								Live Indian Kitchen
							</p>
							<p className="font-serif italic text-gray-700 text-base md:text-lg leading-relaxed">
								&ldquo;Where food is cooked live,{' '}
								<span className="text-[#D42127] not-italic font-semibold">stories are shared</span>, and every flavor carries gratitude.&rdquo;
							</p>
						</div>
					</motion.div>
				</div>
			</motion.section>
			
			<motion.section
				variants={staggerChildren}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="container-pad py-16 bg-gradient-to-br from-gray-50/50 to-white"
			>
				<motion.div
					variants={fadeInUp}
					className="w-full rounded-3xl border border-[#06507D]/15 bg-white shadow-xl overflow-hidden"
				>
					<div className="h-1.5 w-full bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D]" />
					<div className="p-6 md:p-10 lg:p-12">
						<div className="text-center mb-8 md:mb-10">
							<div className="inline-block w-16 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4" />
							<h3 className="font-serif text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
								Our Highlights
							</h3>
							<p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
								Everything you need for memorable events—from elegant trays to live kitchen theatre at your venue.
							</p>
						</div>

						<motion.div
							variants={staggerChildren}
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5"
						>
							{cateringHighlights.map((item, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									whileHover={{ y: -6 }}
									className="group flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-gradient-to-b from-white to-[#06507D]/5 border border-[#06507D]/10 hover:border-[#D42127]/30 hover:shadow-lg transition-all duration-300"
								>
									<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06507D] to-[#D42127] text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
										<item.icon className="text-2xl" />
									</div>
									<span className="font-semibold text-gray-800 text-sm md:text-base leading-snug">{item.text}</span>
								</motion.div>
							))}
						</motion.div>

						<motion.div
							variants={fadeInUp}
							className="mt-6 md:mt-8 rounded-2xl bg-gradient-to-r from-[#06507D] to-[#D42127] p-5 md:p-6 text-center text-white shadow-lg"
						>
							<p className="font-serif text-lg md:text-xl font-semibold">Live Kitchen Experience</p>
							<p className="text-white/90 text-sm md:text-base mt-1 max-w-2xl mx-auto">
								Watch tandoor, tawa, and chaat come alive at your celebration.
							</p>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							className="mt-8 pt-8 border-t border-[#06507D]/10 text-center"
						>
							<p className="text-gray-600 text-base md:text-lg">
								Ready to plan your event?{' '}
								<Link
									to="/contact"
									className="text-[#D42127] font-semibold hover:underline underline-offset-4 transition-colors"
								>
									Contact us today
								</Link>
							</p>
						</motion.div>
					</div>
				</motion.div>

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

				<motion.section
					id="catering-gallery"
					variants={staggerChildren}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="mt-16 scroll-mt-28"
				>
					<motion.div variants={fadeInUp} className="text-center mb-10">
						<div className="inline-block w-20 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4" />
						<h2 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
							Catering Gallery
						</h2>
						<p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
							Real events we&apos;ve catered—buffets, live stations, and celebrations across Edmonton.
						</p>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
					>
						{cateringGalleryImages.map(({ src, alt }, index) => (
							<motion.div
								key={src}
								variants={fadeInUp}
								transition={{ delay: (index % 8) * 0.04 }}
								whileHover={{ y: -4 }}
								className="group overflow-hidden rounded-2xl border border-[#06507D]/10 shadow-md hover:shadow-xl bg-white transition-all duration-300"
							>
								<img
									src={src}
									alt={alt}
									className="w-full h-44 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
									loading="lazy"
								/>
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
							Let us create a memorable culinary experience for your special occasion. From intimate gatherings to grand celebrations, our team is ready to serve you. Read more about{' '}
							<Link to="/blog/indian-catering-services-edmonton" className="underline font-semibold text-white">
								Indian catering services in Edmonton
							</Link>
							.
						</p>
						<motion.div 
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
							whileHover="hover"
						>
							<MotionLink
								to="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-white text-[#06507D] px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center gap-2"
							>
								Get Quote Now
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</MotionLink>
							<motion.a
								href="#catering-gallery"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#06507D] transition-all duration-300 inline-flex items-center gap-2"
							>
								View Catering Gallery
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
								</svg>
							</motion.a>
						</motion.div>
					</div>
				</motion.section>
			</motion.section>
		</div>
	);
}