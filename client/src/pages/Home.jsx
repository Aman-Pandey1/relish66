import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { Seo } from '../components/Seo.jsx';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
// Import local images
import aboutImage1 from '../assets/banner2.jpg';
import aboutImage2 from '../assets/b1.png';
import aboutImage3 from '../assets/b3.jpg';
import aboutImage4 from '../assets/b4.jpg';
import newBanner1 from '../assets/newbanner1.jpeg';
import newBanner2 from '../assets/newbanner2.jpeg';
// Replace with an actual winter-themed image
import localImage1 from '../assets/Chicken Biryani.jpg';
import localImage2 from '../assets/b2.jpg';
import localImage3 from '../assets/b4.jpg';
import faqImage from '../assets/relishlogo.jpg';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const refs = {
    services: useRef(null),
    local: useRef(null),
    testimonials: useRef(null),
    faq: useRef(null)
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

  const visitDetails = [
    { label: "Address", value: "6933 Ellerslie Road SW, Edmonton, AB T6X 2A1" },
    { label: "Days", value: "Mon - Sun" },
    { label: "Hours", value: "11:00 am - 11:00 pm" },
    { label: "Phone", value: "+1 (780) 690-0746" }
  ];

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
    { title:'Brunch, Lunch, Dinner', icon: MdBrunchDining },
  ];

  return (
    <div className="overflow-hidden">
      <Seo title="Home" description="Authentic cuisine at Relish on 66 Restaurant and Bar." />
     
      {/* Hero: width-first (w-full h-auto) = edge-to-edge; height follows banner aspect so top/bottom stay uncropped */}
      <section className="relative w-full min-h-[200px] overflow-hidden bg-black">
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
              alt="Relish Banner"
              className="block w-full h-auto"
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

      {/* About Relish66 Section */}
      <section className="container-pad py-16 md:py-24 bg-gradient-to-br from-gray-50/50 to-white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
              Our Story, Our Heart
            </h2>
            <div className="space-y-4 mb-8 text-gray-700 leading-relaxed">
              <p>
                At Relish on 66 Restaurant and Bar, we're more than just a restaurant - we're a family. We believe that food brings people together, and we're passionate about sharing our culture and traditions with you.
              </p>
              <p>
                Growing up, our family gatherings were filled with laughter, love, and the most delicious aromas wafting from the kitchen. Everyone had a role, everyone contributed, and everyone was welcomed with open arms.
              </p>
              <p>
                That's the same energy you experience when you step into Relish on 66. Our team is dedicated to making you feel like part of the family, where every guest is treated like the most important person in the room.
              </p>
              <p>
                We pour our hearts into every dish, every moment, and every interaction. We want you to feel at home, to relax, and to savor every bite.
              </p>
              <p className="font-semibold text-[#06507D]">
                Come, join us, and let's relish every moment together!
              </p>
            </div>
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
              className="rounded-2xl h-48 w-full object-contain md:object-cover bg-white shadow-lg border-2 border-white/50 hover:border-[#D42127]/30 transition-all duration-300"
              src={aboutImage1}
              alt="Store"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="rounded-2xl h-48 w-full object-contain md:object-cover bg-white mt-8 shadow-lg border-2 border-white/50 hover:border-[#06507D]/30 transition-all duration-300"
              src={aboutImage2}
              alt="Team"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="rounded-2xl h-48 w-full object-contain md:object-cover bg-white shadow-lg border-2 border-white/50 hover:border-[#D42127]/30 transition-all duration-300"
              src={aboutImage3}
              alt="Cuisine"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="rounded-2xl h-48 w-full object-contain md:object-cover bg-white mt-8 shadow-lg border-2 border-white/50 hover:border-[#06507D]/30 transition-all duration-300"
              src={aboutImage4}
              alt="Community"
            />
          </motion.div>
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
                Experience the Flavors
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
            className="space-y-6"
          >
            <div className="grid gap-4">
              {visitDetails.map((detail) => (
                <div key={detail.label} className="p-5 rounded-2xl bg-white/90 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-1">{detail.label}</p>
                  <p className="text-lg font-semibold text-[#06507D]">{detail.value}</p>
                </div>
              ))}
            </div>
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl shadow-2xl border-4 border-white/40"
              src={aboutImage3}
              alt="Relish on 66 live kitchen"
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
              Why Choose Us
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
              Live Kitchen Highlights
            </h2>
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From tandoor flames to chaat theatrics, every station celebrates the vibrant spirit of street food.
            </p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={inView.local ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { img: localImage1, title: "Live Tandoor Action", desc: "Watch skewers and breads kissed by the flames right before they reach your table.", color: "from-[#06507D]" },
              { img: localImage2, title: "Tawa & Chaat Theater", desc: "Savor sizzling tawa delicacies and tangy chaat inspired by vibrant street food.", color: "from-[#D42127]" },
              { img: localImage3, title: "Warm Hospitality", desc: "Settle in for heartfelt service, cozy ambiance, and family-style sharing.", color: "from-[#06507D]" }
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
                question: "Do you offer local delivery?",
                answer: "Yes! We offer delivery and pickup services. Please contact us or order online for more details."
              },
              {
                question: "Can I special order products?",
                answer: "Absolutely! We're happy to special order products we don't regularly stock."
              },
              {
                question: "Book your Birthday or family parties with us.",
                answer: "We'd love to host your special celebrations! Contact us to book your birthday or family party."
              },
              {
                question: "Do you offer catering and takeout?",
                answer: "Yes! We offer catering services and takeout options. Please contact us for more details."
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}