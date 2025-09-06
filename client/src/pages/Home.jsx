import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import PromoCarousel from '../components/PromoCarousel.jsx';
import { Seo } from '../components/Seo.jsx';
import ProductCard from '../components/ProductCard.jsx';
import CategoryStrip from '../components/CategoryStrip.jsx';
import api from '../utils/api';
import { motion, useInView } from 'framer-motion';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import PageBanner from '../components/PageBanner.jsx';

// Import local images
import bannerImage from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';
import aboutImage1 from '../assets/banner2.jpg';
import aboutImage2 from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';
import aboutImage3 from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';
import aboutImage4 from '../assets/banner2.jpg';
// Replace with an actual winter-themed image
import winterWarmerImage from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';
import localImage1 from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';
import localImage2 from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';
import localImage3 from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';
import newsletterImage from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';
import faqImage from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';

export default function Home() {
	const [featured, setFeatured] = useState([]);
	const [recent, setRecent] = useState([]);
	const [winterImageError, setWinterImageError] = useState(false);
	const refs = {
		featured: useRef(null),
		categories: useRef(null),
		promotions: useRef(null),
		arrivals: useRef(null),
		services: useRef(null),
		local: useRef(null),
		testimonials: useRef(null),
		newsletter: useRef(null),
		faq: useRef(null),
		cta: useRef(null)
	};

	const inView = {};
	Object.keys(refs).forEach(key => {
		inView[key] = useInView(refs[key], { once: true, margin: "-100px" });
	});

	useEffect(() => {
		api.get('/products', { params: { featured: true } }).then(r => setFeatured(r.data));
		api.get('/products', { params: { sort: 'newest', limit: 8 } }).then(r => setRecent(r.data));
	}, []);

	const fadeIn = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
	};

	const staggerChildren = {
		visible: { transition: { staggerChildren: 0.1 } }
	};

	// Winter warmer fallback image
	const winterFallbackImage = 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1075&q=80';

	// Static menu highlights (home: show some products only)
	const menuHighlights = [
		{ title: 'Strawberry Shake', price: 7.66, section: 'Drinks' },
		{ title: 'Mango Lassi', price: 5.66, section: 'Drinks' },
		{ title: 'Indian Chai tea', price: 3.66, section: 'Drinks' },
		{ title: 'Rasamalai Roll', price: 6.66, section: 'Desserts' },
		{ title: 'Gulab Jamun Hot', price: 6.66, section: 'Desserts' },
		{ title: 'Brownie with Vanilla Ice Cream', price: 6.66, section: 'Desserts' },
	];

	return (
		<div className="overflow-hidden">
			<Seo title="Home" description="Authentic Indian cuisine and friendly service." />
			
			{/* Custom Banner with reduced overlay */}
			<section className="relative h-screen min-h-[600px] flex items-center justify-center">
				<img 
					src={bannerImage} 
					alt="Relish Menu" 
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/20"></div> {/* Reduced overlay opacity */}
				<div className="container-pad relative z-10 text-center text-white">
					<motion.h1 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="font-serif text-5xl md:text-6xl mb-4"
					>
						
					</motion.h1>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl md:text-2xl mb-8"
					>
						
					</motion.p>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<Link to="/shop" className="btn-primary text-lg px-8 py-4">Shop Now</Link>
						{/* <a href="#delivery" className="px-8 py-4 border-2 border-burnt-400 text-burnt-400 rounded-lg hover:bg-burnt-400 hover:text-white transition-all text-lg">Delivery Info</a> */}
					</motion.div>
				</div>
			</section>

			{/* About Relish66 Section */}
			<section className="container-pad py-16 md:py-24">
				<div className="grid md:grid-cols-2 gap-10 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
					>
						<h2 className="font-serif text-4xl md:text-5xl mb-4">About Relish66</h2>
						<p className="text-gray-700 leading-relaxed mb-4">Serving authentic Indian food with house-made chutneys and masalas. From breakfast specials to chef’s tasting menus, enjoy fresh, flavorful dishes all day.</p>
						<p className="text-gray-700 leading-relaxed">Our friendly team is here to help you find the perfect bottle or gift for any occasion — whether you're exploring new flavors or stocking up on favorites.</p>
						<Link to="/about" className="btn-primary mt-6 inline-block">Learn More</Link>
					</motion.div>
					<motion.div 
						className="grid grid-cols-2 gap-4"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
					>
						<motion.img 
							whileHover={{ scale: 1.05 }}
							className="rounded-xl h-48 w-full object-cover" 
							src={aboutImage1} 
							alt="Store"
						/>
						<motion.img 
							whileHover={{ scale: 1.05 }}
							className="rounded-xl h-48 w-full object-cover mt-6" 
							src={aboutImage2} 
							alt="Team"
						/>
						<motion.img 
							whileHover={{ scale: 1.05 }}
							className="rounded-xl h-48 w-full object-cover" 
							src={aboutImage3} 
							alt="Cuisine"
						/>
						<motion.img 
							whileHover={{ scale: 1.05 }}
							className="rounded-xl h-48 w-full object-cover mt-6" 
							src={aboutImage4} 
							alt="Community"
						/>
					</motion.div>
				</div>
			</section>

			<div ref={refs.categories}>
				<CategoryStrip />
			</div>

			{/* Static menu highlights */}
			<section className="container-pad py-12">
				<div className="grid md:grid-cols-2 gap-6">
					<div className="bg-white border rounded-lg p-5">
						<h3 className="font-serif text-2xl mb-3">Drinks</h3>
						<ul className="divide-y">
							{menuHighlights.filter(i=>i.section==='Drinks').map((i)=> (
								<li key={i.title} className="py-2 flex items-center justify-between text-sm">
									<span className="font-medium">{i.title}</span>
									<span className="text-navy-700 font-semibold">${i.price.toFixed(2)}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="bg-white border rounded-lg p-5">
						<h3 className="font-serif text-2xl mb-3">Desserts (House Made)</h3>
						<ul className="divide-y">
							{menuHighlights.filter(i=>i.section==='Desserts').map((i)=> (
								<li key={i.title} className="py-2 flex items-center justify-between text-sm">
									<span className="font-medium">{i.title}</span>
									<span className="text-navy-700 font-semibold">${i.price.toFixed(2)}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section ref={refs.featured} className="container-pad py-16 md:py-24">
				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate={inView.featured ? "visible" : "hidden"}
					className="text-center mb-12"
				>
					<h2 className="font-serif text-4xl md:text-5xl mb-4">Chef Specials</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our handpicked seasonal favorites and house specials</p>
				</motion.div>
				<motion.div
					variants={staggerChildren}
					initial="hidden"
					animate={inView.featured ? "visible" : "hidden"}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
				>
					{featured.map((p) => (
						<motion.div 
							key={p._id} 
							variants={fadeIn}
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
						>
							<ProductCard product={p} />
						</motion.div>
					))}
				</motion.div>
			</section>

			{/* Discount Products Section */}
			<section className="container-pad py-16 md:py-24">
				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate={inView.featured ? "visible" : "hidden"}
					className="text-center mb-12"
				>
					<h2 className="font-serif text-4xl md:text-5xl mb-4">Discount Products</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Great deals with 10% off or more</p>
				</motion.div>
				<motion.div
					variants={staggerChildren}
					initial="hidden"
					animate={inView.featured ? "visible" : "hidden"}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
				>
					{recent.filter(p => (p.discountPercent||0) >= 10).slice(0,8).map((p) => (
						<motion.div key={p._id} variants={fadeIn}>
							<ProductCard product={p} />
						</motion.div>
					))}
				</motion.div>
			</section>

			<section ref={refs.promotions} className="py-16 md:py-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-black/30 z-0" /> {/* Reduced overlay opacity */}
				<img 
					src={winterImageError ? winterFallbackImage : winterWarmerImage} 
					alt="Winter Warmer seasonal specials" 
					className="absolute inset-0 w-full h-full object-cover -z-10"
					onError={() => setWinterImageError(true)}
				/>
				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate={inView.promotions ? "visible" : "hidden"}
					className="container-pad relative z-10"
				>
					<div className="max-w-4xl mx-auto text-center text-white">
						<h2 className="font-serif text-4xl md:text-5xl mb-6">Winter Warmers</h2>
						<p className="text-xl mb-8">Cozy up with our seasonal selections perfect for cold winter nights</p>
						<PromoCarousel />
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link to="/promotions" className="inline-block mt-8 px-8 py-3 bg-burnt-500 hover:bg-burnt-600 text-white rounded-lg transition-all">
								View All Promotions
							</Link>
						</motion.div>
					</div>
				</motion.div>
			</section>

			<section ref={refs.arrivals} className="container-pad py-16 md:py-24">
				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate={inView.arrivals ? "visible" : "hidden"}
					className="flex flex-col md:flex-row items-start justify-between mb-12"
				>
					<div>
						<h2 className="font-serif text-4xl md:text-5xl mb-4">New Arrivals</h2>
						<p className="text-xl text-gray-600">Fresh selections just added to our collection</p>
					</div>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Link to="/shop" className="mt-4 md:mt-0 px-6 py-3 border-2 border-burnt-900 text-burnt-900 rounded-lg hover:bg-burnt-900 hover:text-white transition-all">
							Browse All
						</Link>
					</motion.div>
				</motion.div>
				<motion.div
					variants={staggerChildren}
					initial="hidden"
					animate={inView.arrivals ? "visible" : "hidden"}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
				>
					{recent.map((p) => (
						<motion.div 
							key={p._id} 
							variants={fadeIn}
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
						>
							<ProductCard product={p} />
						</motion.div>
					))}
				</motion.div>
			</section>

			<section ref={refs.services} className="bg-burnt-50 py-16 md:py-24">
				<div className="container-pad">
					<motion.div
						variants={fadeIn}
						initial="hidden"
						animate={inView.services ? "visible" : "hidden"}
						className="text-center mb-16"
					>
						<h2 className="font-serif text-4xl md:text-5xl mb-4">Why Choose Us</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the difference of our premium service and curated selections</p>
					</motion.div>
					<motion.div
						variants={staggerChildren}
						initial="hidden"
						animate={inView.services ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
					>
						<motion.div 
							variants={fadeIn} 
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
							className="bg-white p-8 rounded-xl shadow-md text-center"
						>
							<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<LocalShippingIcon className="text-amber-600 text-2xl" />
							</div>
							<h3 className="font-semibold text-xl mb-3">Local Delivery</h3>
							<p className="text-gray-600">Same-day delivery within Golden, BC on eligible orders over $50.</p>
						</motion.div>
						<motion.div 
							variants={fadeIn} 
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
							className="bg-white p-8 rounded-xl shadow-md text-center"
						>
							<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-2xl">🍽️</span>
							</div>
							<h3 className="font-semibold text-xl mb-3">Curated Dishes</h3>
							<p className="text-gray-600">Handpicked specials prepared with our house-made chutneys and masalas.</p>
						</motion.div>
						<motion.div 
							variants={fadeIn} 
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
							className="bg-white p-8 rounded-xl shadow-md text-center"
						>
							<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<GroupsIcon className="text-amber-600 text-2xl" />
							</div>
							<h3 className="font-semibold text-xl mb-3">Community Focus</h3>
							<p className="text-gray-600">We support local makers and community events throughout the year.</p>
						</motion.div>
						<motion.div 
							variants={fadeIn} 
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
							className="bg-white p-8 rounded-xl shadow-md text-center"
						>
							<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<StorefrontIcon className="text-amber-600 text-2xl" />
							</div>
							<h3 className="font-semibold text-xl mb-3">Expert Staff</h3>
							<p className="text-gray-600">Knowledgeable team ready to help you find the perfect spirit for any occasion.</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<section ref={refs.local} className="py-16 md:py-24 bg-gray-100">
				<div className="container-pad">
					<motion.div
						variants={fadeIn}
						initial="hidden"
						animate={inView.local ? "visible" : "hidden"}
						className="text-center mb-16"
					>
						<h2 className="font-serif text-4xl md:text-5xl mb-4">Local Highlights</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">Showcasing the best of our regional producers and distilleries</p>
					</motion.div>
					<motion.div
						variants={staggerChildren}
						initial="hidden"
						animate={inView.local ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						<motion.div 
							variants={fadeIn} 
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
							className="group relative overflow-hidden rounded-2xl"
						>
							<img 
								src={localImage1} 
								alt="Local distillery" 
								className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
								<div>
									<h3 className="text-white text-xl font-semibold mb-2">BC Craft Distilleries</h3>
									<p className="text-amber-200">Supporting local producers across British Columbia</p>
								</div>
							</div>
						</motion.div>
						<motion.div 
							variants={fadeIn} 
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
							className="group relative overflow-hidden rounded-2xl"
						>
							<img 
								src={localImage2} 
								alt="Dining experience" 
								className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
								<div>
									<h3 className="text-white text-xl font-semibold mb-2">Family Dining</h3>
									<p className="text-amber-200">Comforting meals perfect for sharing</p>
								</div>
							</div>
						</motion.div>
						<motion.div 
							variants={fadeIn} 
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
							className="group relative overflow-hidden rounded-2xl"
						>
							<img 
								src={localImage3} 
								alt="Restaurant ambience" 
								className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
								<div>
									<h3 className="text-white text-xl font-semibold mb-2">Warm Hospitality</h3>
									<p className="text-amber-200">Friendly service and memorable experiences</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<section ref={refs.testimonials} className="container-pad py-16 md:py-24 bg-gray-50">
				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate={inView.testimonials ? "visible" : "hidden"}
					className="text-center mb-12"
				>
					<h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from our satisfied customers about their experience</p>
				</motion.div>
				<motion.div
					variants={staggerChildren}
					initial="hidden"
					animate={inView.testimonials ? "visible" : "hidden"}
					className="grid md:grid-cols-3 gap-8"
				>
					<motion.div 
						variants={fadeIn}
						whileHover={{ y: -5, transition: { duration: 0.3 } }}
						className="bg-white p-8 rounded-xl shadow-md relative"
					>
						<div className="absolute top-0 left-0 w-full h-2 bg-amber-500 rounded-t-xl"></div>
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
								<span className="text-amber-600 font-semibold">A</span>
							</div>
							<div>
								<h4 className="font-semibold">Alex G.</h4>
								<p className="text-amber-600 text-sm">Verified Customer</p>
							</div>
						</div>
						<div className="flex mb-3">
							{[...Array(5)].map((_, i) => (
								<svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
						<p className="italic text-gray-600">"Amazing selection and super friendly team! Will definitely be coming back for more."</p>
					</motion.div>
					
					<motion.div 
						variants={fadeIn}
						whileHover={{ y: -5, transition: { duration: 0.3 } }}
						className="bg-white p-8 rounded-xl shadow-md relative"
					>
						<div className="absolute top-0 left-0 w-full h-2 bg-amber-500 rounded-t-xl"></div>
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
								<span className="text-amber-600 font-semibold">P</span>
							</div>
							<div>
								<h4 className="font-semibold">Priya S.</h4>
								<p className="text-amber-600 text-sm">Verified Customer</p>
							</div>
						</div>
						<div className="flex mb-3">
							{[...Array(5)].map((_, i) => (
								<svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
						<p className="italic text-gray-600">"Pickup was quick and easy. The staff helped us choose the perfect dishes for our celebration dinner."</p>
					</motion.div>
					
					<motion.div 
						variants={fadeIn}
						whileHover={{ y: -5, transition: { duration: 0.3 } }}
						className="bg-white p-8 rounded-xl shadow-md relative"
					>
						<div className="absolute top-0 left-0 w-full h-2 bg-amber-500 rounded-t-xl"></div>
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
								<span className="text-amber-600 font-semibold">D</span>
							</div>
							<div>
								<h4 className="font-semibold">Daniel R.</h4>
								<p className="text-amber-600 text-sm">Verified Customer</p>
							</div>
						</div>
						<div className="flex mb-3">
							{[...Array(5)].map((_, i) => (
								<svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
						<p className="italic text-gray-600">"Love the local highlights and curated finds. The seasonal selections are always spot on!"</p>
					</motion.div>
				</motion.div>
			</section>

			{/* Newsletter replaced with contact CTA */}
			<section ref={refs.newsletter} className="bg-neutral-100">
				<div className="container-pad py-16 md:py-24">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						className="grid md:grid-cols-2 gap-8 items-center"
					>
						<div>
							<h3 className="font-serif text-3xl mb-4">Questions or Catering?</h3>
							<p className="text-neutral-600 mb-6">Call (604) 555-0123 or email hello@relish66.com. We're happy to help.</p>
							<Link to="/contact" className="btn-primary px-6 py-3 inline-block w-max">Contact Us</Link>
						</div>
						<motion.img 
							whileHover={{ scale: 1.02 }}
							className="rounded-xl shadow-md" 
							src={newsletterImage} 
							alt="Contact Relish66" 
						/>
					</motion.div>
				</div>
			</section>

			<section ref={refs.faq} className="container-pad py-16 md:py-24">
				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate={inView.faq ? "visible" : "hidden"}
					className="text-center mb-12"
				>
					<h2 className="font-serif text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about our products and services</p>
				</motion.div>
				<motion.div
					variants={staggerChildren}
					initial="hidden"
					animate={inView.faq ? "visible" : "hidden"}
					className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto"
				>
					<div className="space-y-4">
						<Accordion className="rounded-lg overflow-hidden shadow-md">
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<span className="font-semibold">What are your delivery options?</span>
							</AccordionSummary>
							<AccordionDetails>
								We offer local pickup and delivery within Golden, BC. Delivery fees apply based on distance. Orders over $50 qualify for free delivery within a 5km radius.
							</AccordionDetails>
						</Accordion>
						<Accordion className="rounded-lg overflow-hidden shadow-md">
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<span className="font-semibold">Do you offer catering or group bookings?</span>
							</AccordionSummary>
							<AccordionDetails>
								Yes, we provide catering and group bookings. Contact us with your menu preferences and headcount.
							</AccordionDetails>
						</Accordion>
						<Accordion className="rounded-lg overflow-hidden shadow-md">
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<span className="font-semibold">Can I change or cancel my pre-order?</span>
							</AccordionSummary>
							<AccordionDetails>
								We accept changes to pre-orders up to 24 hours before pickup or delivery. Please contact us for assistance.
							</AccordionDetails>
						</Accordion>
						<Accordion className="rounded-lg overflow-hidden shadow-md">
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<span className="font-semibold">Do you have vegan, gluten-free, or dairy-free options?</span>
							</AccordionSummary>
							<AccordionDetails>
								Yes. Please ask your server — many dishes can be prepared vegan, gluten-free, or dairy-free.
							</AccordionDetails>
						</Accordion>
						<Accordion className="rounded-lg overflow-hidden shadow-md">
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<span className="font-semibold">How spicy are your dishes?</span>
							</AccordionSummary>
							<AccordionDetails>
								We can prepare dishes mild, medium, hot, or extra hot. Let us know your preference.
							</AccordionDetails>
						</Accordion>
					</div>
					<motion.img 
						whileHover={{ scale: 1.02 }}
						className="rounded-xl shadow-md" 
						src={faqImage} 
						alt="FAQ" 
					/>
				</motion.div>
			</section>

			<section ref={refs.cta} className="container-pad py-16 md:py-24 bg-burnt-900 text-white rounded-xl my-12 text-center">
				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate={inView.cta ? "visible" : "hidden"}
				>
					<h3 className="font-serif text-4xl md:text-5xl mb-4">Ready to stock up?</h3>
					<p className="text-xl mb-8 max-w-2xl mx-auto">Browse our latest arrivals, seasonal specials, and customer favorites</p>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Link to="/shop" className="btn-primary bg-white text-burnt-900 hover:bg-gray-100 px-8 py-4 text-lg">Shop Now</Link>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}