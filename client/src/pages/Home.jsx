import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Seo } from '../components/Seo.jsx';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Import local images
import bannerImage from '../assets/b2.jpg';
import aboutImage1 from '../assets/banner2.jpg';
import aboutImage2 from '../assets/b1.png';
import aboutImage3 from '../assets/b3.jpg';
import aboutImage4 from '../assets/b4.jpg';
// Replace with an actual winter-themed image
import localImage1 from '../assets/Chicken Biryani.jpg';
import localImage2 from '../assets/b2.jpg';
import localImage3 from '../assets/b4.jpg';
import newsletterImage from '../assets/WhatsApp Image 2025-08-26 at 22.44.10_43dce5cf.jpg';
import faqImage from '../assets/relishlogo.jpg';

export default function Home() {
  const [currentBannerText, setCurrentBannerText] = useState(0);
  
  const refs = {
    services: useRef(null),
    local: useRef(null),
    testimonials: useRef(null),
    newsletter: useRef(null),
    faq: useRef(null)
  };
  
  const inView = {};
  Object.keys(refs).forEach(key => {
    inView[key] = useInView(refs[key], { once: true, margin: "-100px" });
  });

  useEffect(() => {
    // Text rotation for banner
    const interval = setInterval(() => {
      setCurrentBannerText(prev => (prev + 1) % bannerTexts.length);
    }, 4000);
   
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
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

  const bannerTexts = [
    { heading: "Authentic Indian Cuisine", subheading: "Experience the rich flavors of India" },
    { heading: "Crafted with Passion", subheading: "Every dish tells a story of tradition" },
    { heading: "A Culinary Journey", subheading: "From street food to fine dining" }
  ];

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
     
      {/* Custom Banner with responsive height and overlay */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.img
          src={bannerImage}
          alt="Relish Menu"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06507D]/20 to-[#D42127]/20"></div>
        <div className="container-pad relative z-10 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBannerText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 font-bold bg-gradient-to-r from-[#D42127] to-[#06507D] bg-clip-text text-transparent"
            >
              {bannerTexts[currentBannerText].heading}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentBannerText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              >
                {bannerTexts[currentBannerText].subheading}
              </motion.p>
            </AnimatePresence>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <a
                href="https://shoppage.onrender.com/s/Relishon66"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#D42127] to-[#06507D] text-white rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 font-semibold text-lg inline-flex items-center gap-2 hover:scale-105"
              >
                Order Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
        </div>
      </section>

      {/* About Relish66 Section */}
      <section className="container-pad py-16 md:py-24 bg-gradient-to-br from-gray-50/50 to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
              About Relish66
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Serving authentic Indian food with house-made chutneys and masalas. From breakfast specials to chef's tasting menus, enjoy fresh, flavorful dishes all day.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our friendly team is here to help you find the perfect bottle or gift for any occasion — whether you're exploring new flavors or stocking up on favorites.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="px-8 py-4 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-full shadow-xl hover:shadow-red-500/25 transition-all duration-300 inline-flex items-center gap-2 font-semibold"
              >
                Discover Our Story
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="rounded-2xl h-48 w-full object-cover shadow-lg border-2 border-white/50 hover:border-[#D42127]/30 transition-all duration-300"
              src={aboutImage1}
              alt="Store"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="rounded-2xl h-48 w-full object-cover mt-8 shadow-lg border-2 border-white/50 hover:border-[#06507D]/30 transition-all duration-300"
              src={aboutImage2}
              alt="Team"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="rounded-2xl h-48 w-full object-cover shadow-lg border-2 border-white/50 hover:border-[#D42127]/30 transition-all duration-300"
              src={aboutImage3}
              alt="Cuisine"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="rounded-2xl h-48 w-full object-cover mt-8 shadow-lg border-2 border-white/50 hover:border-[#06507D]/30 transition-all duration-300"
              src={aboutImage4}
              alt="Community"
            />
          </motion.div>
        </div>
      </section>

      {/* Static menu highlights */}
      <section className="container-pad py-16 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white/80 backdrop-blur-sm border border-[#06507D]/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06507D] to-[#D42127]"></div>
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#06507D]/10 group-hover:bg-[#06507D]/20 transition-all duration-500"></div>
            <h3 className="font-serif text-3xl mb-6 text-[#06507D] font-bold relative z-10">Refreshing Drinks</h3>
            <ul className="divide-y divide-[#06507D]/10 space-y-3">
              {menuHighlights.filter(i=>i.section==='Drinks').map((i, idx)=> (
                <motion.li
                  key={i.title}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="py-4 flex items-center justify-between text-base group/item"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <span className="font-medium text-gray-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127]"></span>
                    {i.title}
                  </span>
                  <span className="text-[#D42127] font-bold text-lg">${i.price.toFixed(2)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white/80 backdrop-blur-sm border border-[#D42127]/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D42127] to-[#06507D]"></div>
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#D42127]/10 group-hover:bg-[#D42127]/20 transition-all duration-500"></div>
            <h3 className="font-serif text-3xl mb-6 text-[#D42127] font-bold relative z-10">Sweet Delights</h3>
            <ul className="divide-y divide-[#D42127]/10 space-y-3">
              {menuHighlights.filter(i=>i.section==='Desserts').map((i, idx)=> (
                <motion.li
                  key={i.title}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="py-4 flex items-center justify-between text-base group/item"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <span className="font-medium text-gray-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D42127] to-[#06507D]"></span>
                    {i.title}
                  </span>
                  <span className="text-[#06507D] font-bold text-lg">${i.price.toFixed(2)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      <section ref={refs.services} className="bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 py-16 md:py-24">
        <div className="container-pad">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView.services ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of our premium service and curated selections
            </p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={inView.services ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { title:'Tiffin services', icon:'🍱' },
              { title:'Catering', icon:'🍽️' },
              { title:'Live Indian kitchen', icon:'👨‍🍳' },
              { title:'Chaat bars', icon:'🥙' },
              { title:'Street foods', icon:'🌮' },
              { title:'Live tandoor', icon:'🔥' },
              { title:'Upscale dining', icon:'🍷' },
              { title:'Live music', icon:'🎵' },
              { title:'Open mic', icon:'🎤' },
              { title:'Bar', icon:'🍸' },
              { title:'Bottle service', icon:'🍾' },
              { title:'Tandoor specialty', icon:'🍢' },
              { title:'Brunch, Lunch, Dinner', icon:'🍳' },
            ].map((s, idx)=> (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-white/50 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#06507D] to-[#D42127] text-white text-2xl shadow-lg relative z-10">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-lg relative z-10">{s.title}</h3>
                <div className="absolute bottom-2 left-2 right-2 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:h-0.5"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={refs.local} className="py-16 md:py-24 bg-gradient-to-br from-gray-50/50 to-[#06507D]/5">
        <div className="container-pad">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView.local ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
              Local Highlights
            </h2>
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing the best of our regional producers and distilleries
            </p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={inView.local ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { img: localImage1, title: "BC Craft Distilleries", desc: "Supporting local producers across British Columbia", color: "from-[#06507D]" },
              { img: localImage2, title: "Family Dining", desc: "Comforting meals perfect for sharing", color: "from-[#D42127]" },
              { img: localImage3, title: "Warm Hospitality", desc: "Friendly service and memorable experiences", color: "from-[#06507D]" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-white/20"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-[#D42127]/20 via-transparent flex items-end p-8 transform group-hover:translate-y-0 transition-transform duration-700 group-hover:opacity-100 opacity-90`}>
                  <div className="relative z-10">
                    <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">{item.title}</h3>
                    <p className="text-white/90 text-lg drop-shadow-md">{item.desc}</p>
                    <div className="mt-4 h-1 w-20 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={refs.testimonials} className="container-pad py-16 md:py-24 bg-gradient-to-br from-[#D42127]/5 to-[#06507D]/5">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView.testimonials ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied customers about their experience
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={inView.testimonials ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { 
              name: "Alex G.", 
              tag: "Foodie", 
              text: "Amazing selection and super friendly team! Will definitely be coming back for more.",
              color: "#06507D",
              bgColor: "#06507D"
            },
            { 
              name: "Priya S.", 
              tag: "Family", 
              text: "Pickup was quick and easy. The staff helped us choose the perfect dishes for our celebration dinner.",
              color: "#D42127",
              bgColor: "#D42127"
            },
            { 
              name: "Daniel R.", 
              tag: "Explorer", 
              text: "Love the local highlights and curated finds. The seasonal selections are always spot on!",
              color: "#06507D",
              bgColor: "#06507D"
            }
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl relative overflow-hidden group border border-white/30"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#06507D] to-[#D42127]"></div>
              <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[${testimonial.bgColor}]/10 group-hover:bg-[${testimonial.bgColor}]/20 transition-all duration-500`}></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br from-[${testimonial.color}] to-[${testimonial.color}]/80 rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                  <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className={`text-[${testimonial.color}] font-medium text-sm`}>{testimonial.tag} Customer</p>
                </div>
              </div>
              
              <div className="flex mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#D42127]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700 text-lg leading-relaxed relative z-10">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section ref={refs.newsletter} className="bg-gradient-to-br from-[#D42127]/10 to-[#06507D]/10">
        <div className="container-pad py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <h3 className="font-serif text-4xl mb-6 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
                Made in Canada
              </h3>
              <div className="inline-block w-20 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-6"></div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Proudly Canadian — crafted with local ingredients and community spirit.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/testimonials"
                  className="px-8 py-4 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-full shadow-xl hover:shadow-red-500/25 transition-all duration-300 inline-flex items-center gap-2 font-semibold text-lg"
                >
                  Read More Stories
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              <div className="absolute -bottom-4 left-0 w-32 h-32 bg-[#06507D]/5 rounded-full blur-xl"></div>
            </motion.div>
            
            <motion.img
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl shadow-2xl border-4 border-white/30"
              src={newsletterImage}
              alt="Made in Canada"
            />
          </motion.div>
        </div>
      </section>

      <section ref={refs.faq} className="container-pad py-16 md:py-24 bg-gradient-to-br from-white to-gray-50/50">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView.faq ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={inView.faq ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto"
        >
          <div className="space-y-4">
            {[
              {
                question: "What are your delivery options?",
                answer: "We offer local pickup and delivery within Golden, BC. Delivery fees apply based on distance. Orders over $50 qualify for free delivery within a 5km radius."
              },
              {
                question: "Do you offer catering or group bookings?",
                answer: "Yes, we provide catering and group bookings. Contact us with your menu preferences and headcount."
              },
              {
                question: "Can I change or cancel my pre-order?",
                answer: "We accept changes to pre-orders up to 24 hours before pickup or delivery. Please contact us for assistance."
              },
              {
                question: "Do you have vegan, gluten-free, or dairy-free options?",
                answer: "Yes. Please ask your server — many dishes can be prepared vegan, gluten-free, or dairy-free."
              },
              {
                question: "How spicy are your dishes?",
                answer: "We can prepare dishes mild, medium, hot, or extra hot. Let us know your preference."
              }
            ].map((faq, idx) => (
              <Accordion 
                key={idx}
                className="rounded-2xl overflow-hidden shadow-lg border border-[#06507D]/10 hover:border-[#D42127]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-[#D42127] text-xl" />}
                  className="hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 transition-all duration-300 py-4 px-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127]"></div>
                    <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 p-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <motion.img
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl shadow-2xl border-4 border-white/30"
            src={faqImage}
            alt="FAQ"
          />
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[#06507D] to-[#D42127] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-pad relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-white font-bold">
              Ready to Savor?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us for an unforgettable culinary journey through the flavors of India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://shoppage.onrender.com/s/Relishon66"
                target="_blank"
                rel="noreferrer"
                className="px-10 py-4 bg-white text-[#06507D] rounded-full shadow-2xl font-bold text-lg hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
              >
                Order Online Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to="/reservations"
                className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#06507D] transition-all duration-300 inline-flex items-center gap-3"
              >
                Book a Table
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}