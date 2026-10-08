import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { Seo } from '../components/Seo.jsx';
import { PAGE_SEO, IMAGE_ALTS, HOME_H1 } from '../seo/pageSeo.js';
import JsonLd from '../components/JsonLd.jsx';
import { buildRestaurantSchema, buildFaqSchema } from '../seo/schema.js';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  MdLunchDining,
  MdRoomService,
  MdLocalDining,
  MdFastfood,
  MdRestaurant,
  MdOutdoorGrill,
  MdCelebration,
  MdMic,
  MdFamilyRestroom,
  MdBrunchDining,
  MdStars
} from 'react-icons/md';
import { FaMusic, FaUtensils } from 'react-icons/fa6';
import homeFlavorsGallery from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.12 AM (3).jpeg';
import newBanner1 from '../assets/newbanner1.jpeg';
import newBanner2 from '../assets/newbanner2.jpeg';
// Replace with an actual winter-themed image
import localImage1 from '../assets/Chicken Biryani.jpg';
import localImage2 from '../assets/b2.jpg';
import localImage3 from '../assets/b4.jpg';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const refs = {
    services: useRef(null),
    local: useRef(null)
  };
  
  const inView = {};
  Object.keys(refs).forEach(key => {
    inView[key] = useInView(refs[key], { once: true, margin: "-100px" });
  });

  // Banner carousel data
  const bannerSlides = [
    {
      image: newBanner1,
      showText: false
    },
    {
      image: newBanner2,
      showText: false
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [bannerSlides.length]);

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

  const experienceHighlights = [
    "Live tandoor and sizzling tawa stations",
    "Interactive chaat bar that celebrates street flavors",
    "Chef-driven classics with modern twists",
    "Warm, family-friendly dining for every occasion"
  ];

  const serviceCards = [
    { title:'Tiffin services', icon: MdLunchDining },
    { title:'Catering', icon: MdRoomService },
    { title:'Live kitchen', icon: MdLocalDining },
    { title:'Chaat bars', icon: MdFastfood },
    { title:'Street food favorites', icon: MdRestaurant },
    { title:'Live tandoor', icon: MdOutdoorGrill },
    { title:'Upscale dining', icon: FaUtensils },
    { title:'Live music nights', icon: FaMusic },
    { title:'Open mic evenings', icon: MdMic },
    { title:'Family celebrations', icon: MdFamilyRestroom },
    { title:'Chef-led tastings', icon: MdCelebration },
    { title:'Tandoor specialties', icon: MdOutdoorGrill },
    { title:'Dinner dining', icon: MdBrunchDining },
  ];

  return (
    <div className="overflow-hidden">
      <Seo
        path={PAGE_SEO.home.path}
        metaTitle={PAGE_SEO.home.metaTitle}
        description={PAGE_SEO.home.description}
        ogTitle={PAGE_SEO.home.ogTitle}
        ogDescription={PAGE_SEO.home.ogDescription}
      />
      <JsonLd data={buildRestaurantSchema()} />
      <JsonLd data={buildFaqSchema()} />
     
      {/* Hero: width-first (w-full h-auto) = edge-to-edge; height follows banner aspect so top/bottom stay uncropped */}
      <section className="relative w-full min-h-[200px] overflow-hidden bg-black" aria-label="Relish on 66 homepage hero">
        <h1 className="sr-only">{HOME_H1}</h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full leading-none"
          >
            <img
              src={bannerSlides[currentSlide].image}
              alt={IMAGE_ALTS.homeHero}
              className="block w-full h-auto"
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06507D]/10 to-[#D42127]/10"></div>
        
        {/* Banner Content */}
        {bannerSlides[currentSlide].showText && (
          <div className="relative z-10 w-full max-w-7xl mx-auto text-center text-white px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
            <div className="flex flex-col items-center justify-center min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4 font-bold text-white drop-shadow-2xl leading-tight break-words"
                  style={{ wordBreak: 'break-word', hyphens: 'auto' }}
                >
                  {bannerSlides[currentSlide].heading}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 md:mb-6 max-w-xl sm:max-w-2xl mx-auto text-white drop-shadow-lg leading-relaxed break-words px-1"
                  style={{ wordBreak: 'break-word' }}
                >
                  {bannerSlides[currentSlide].subheading}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Slide Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-5 sm:w-6 md:w-8' : 'bg-white/50 w-1.5 sm:w-2 md:w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Live Kitchen Overview */}
      <section className="container-pad py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-2">Relish on 66 Restaurant and Bar</p>
              <h2 className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
                About Relish on 66
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Relish on 66 is a must-visit destination for food lovers and anyone seeking a unique dining experience. Our live tandoor, sizzling tawa stations, and bustling chaat bar bring vibrant street flavors to Edmonton.</p>
              <p>Indulge in authentic yet redefined cuisine crafted with passion and innovation by Chef Karan Sarna and our dedicated kitchen team. From beloved classics to modern twists, every menu is designed to take you on a culinary journey.</p>
              <p>Join us for a warm and welcoming dining experience—perfect for families, friends, and colleagues. Our attentive staff will guide you through the menu and ensure every visit feels special.</p>
              <p>Come visit us today and taste rich flavors, reimagined for the modern palate.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {experienceHighlights.map((highlight, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-[#06507D]/15 bg-white/80 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-3">
                  <MdStars className="text-[#D42127] text-xl mt-0.5" />
                  <p className="text-gray-800 text-sm font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="w-full rounded-3xl shadow-2xl border-4 border-white/40 object-cover aspect-[4/3] md:aspect-[5/4]"
              src={homeFlavorsGallery}
              alt={IMAGE_ALTS.homeFlavors}
              loading="lazy"
            />
          </motion.div>
        </div>
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
              Dining Experience
            </h2>
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a live kitchen, heartfelt hospitality, and chef-driven menus designed for every experience.
          </p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={inView.services ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {serviceCards.map((s, idx)=> (
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
                  <s.icon className="w-7 h-7" />
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
              Our Menu
            </h2>
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Signature dishes, live tandoor action, and chaat bar favorites — from tandoor flames to street-food theatrics.
            </p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={inView.local ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { img: localImage1, title: "Signature Dishes", desc: "Watch skewers and breads kissed by the flames right before they reach your table.", color: "from-[#06507D]", alt: IMAGE_ALTS.homeHighlightTandoor },
              { img: localImage2, title: "Family Dining Options", desc: "Savor sizzling tawa delicacies and tangy chaat inspired by vibrant street food.", color: "from-[#D42127]", alt: IMAGE_ALTS.homeHighlightTawa },
              { img: localImage3, title: "Private Event Booking", desc: "Settle in for heartfelt service, cozy ambiance, and family-style sharing.", color: "from-[#06507D]", alt: IMAGE_ALTS.homeHighlightDining }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-white/20"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
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

      {/* Events & Reservations */}
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
              Events &amp; Reservations
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us for an unforgettable culinary journey through rich flavors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/menu"
                className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#06507D] transition-all duration-300 inline-flex items-center gap-3"
              >
                View Menu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link
                to="/reservation"
                className="px-10 py-4 bg-white text-[#06507D] rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-pad py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Link
            to="/blog/indian-catering-services-edmonton"
            className="block overflow-hidden rounded-2xl border border-[#06507D]/15 bg-white/80 shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="/indian-catering-services-edmonton.png"
              alt="Authentic Indian catering buffet in Edmonton by Relish on 66"
              className="w-full h-auto object-contain bg-[#f3ecdc]"
            />
            <div className="p-6">
              <p className="text-sm font-semibold text-[#D42127] mb-2">From the Blog</p>
              <h2 className="font-serif text-2xl text-gray-900 mb-3">
                Indian Catering Services in Edmonton
              </h2>
              <p className="text-gray-600 mb-4">
                Weddings, corporate events, and private parties with authentic Indian catering from Relish on 66.
              </p>
              <span className="font-semibold text-[#06507D]">Read the article →</span>
            </div>
          </Link>
          <Link
            to="/blog/sizzling-tawa-specialties-indian-restaurants-edmonton"
            className="block overflow-hidden rounded-2xl border border-[#06507D]/15 bg-white/80 shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="/sizzling-tawa-specialties.png"
              alt="Sizzling tawa specialties at Relish on 66 in Edmonton"
              className="w-full h-auto object-contain bg-[#f3ecdc]"
            />
            <div className="p-6">
              <p className="text-sm font-semibold text-[#D42127] mb-2">From the Blog</p>
              <h2 className="font-serif text-2xl text-gray-900 mb-3">
                Sizzling Tawa Specialties in Edmonton
              </h2>
              <p className="text-gray-600 mb-4">
                Discover Relish on 66’s live tawa station and family-friendly Indian dining in South Edmonton.
              </p>
              <span className="font-semibold text-[#06507D]">Read the article →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Location in Edmonton */}
      <section className="container-pad py-16 md:py-24">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
            Location in Edmonton
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            6933 Ellerslie Road SW, Edmonton, AB — best Indian food on Ellerslie Road with dine-in, takeout, and catering.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl border border-[#06507D]/15 h-80 md:h-96">
          <iframe
            title="Relish on 66 restaurant location on Ellerslie Road Edmonton"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=6933+Ellerslie+Road+SW,+Edmonton,+AB+T6X+2A1&output=embed"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}