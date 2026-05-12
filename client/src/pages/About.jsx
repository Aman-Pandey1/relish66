import PageBanner from '../components/PageBanner.jsx';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Seo } from '../components/Seo.jsx';
import { MdGroups, MdStar, MdHandshake, MdGppGood, MdVisibility } from 'react-icons/md';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const refs = {
    intro: useRef(null),
    experience: useRef(null),
    values: useRef(null),
    mission: useRef(null)
  };

  const inView = {};
  Object.keys(refs).forEach(key => {
    inView[key] = useInView(refs[key], { once: true, margin: "-100px" });
  });

  useEffect(() => {
    setIsVisible(true);
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

  const visitDetails = [
    { label: "Address", value: "6933 Ellerslie Road SW, Edmonton, AB T6X 2A1" },
    { label: "Days", value: "Mon - Sun" },
    { label: "Hours", value: "11:00 am - 11:00 pm" },
    { label: "Phone", value: "+1 (780) 690-0746" }
  ];

  const experienceHighlights = [
    "Live tandoor & sizzling tawa stations",
    "Interactive chaat bar experiences",
    "Chef Karan Sarna's modern twists",
    "Family-friendly dining and celebrations"
  ];

  return (
    <div className="overflow-hidden">
      <Seo title="About Relish on 66" description="Relish on 66 Restaurant and Bar in Edmonton with live tandoor, street food, and upscale dining." />
      <PageBanner
        title="About Relish on 66"
       
        image="https://images.unsplash.com/photo-1542000550-85cd0f37f13b?q=80&w=1600&auto=format&fit=crop"
        height="h-[40vh]"
        overlay="bg-gradient-to-r from-[#06507D]/50 to-[#D42127]/50"
      />
      
      {/* Introduction Section */}
      <section ref={refs.intro} className="container-pad py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white to-gray-50/50">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView.intro ? "visible" : "hidden"}
          className="space-y-6 text-gray-700 leading-relaxed"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
            Our Story, Our Heart
          </h2>
          <p className="text-lg">
            At Relish on 66 Restaurant and Bar, we're more than just a restaurant - we're a family. We believe that food is a way to bring people together, and we're passionate about sharing our culture and traditions with you.
          </p>
          <p className="text-lg">
            Growing up, our family gatherings were filled with laughter, love, and the most delicious aromas wafting from the kitchen. Everyone had a role, everyone contributed, and everyone was welcomed with open arms.
          </p>
          <p className="text-lg">
            That's the same energy you experience when you step into Relish on 66. Our team is dedicated to making you feel like part of the family, where every guest is treated like the most important person in the room.
          </p>
          <p className="text-lg">
            We pour our hearts into every dish, every moment, and every interaction. We want you to feel at home, to relax, and to savor every bite.
          </p>
          <p className="text-lg font-semibold text-[#06507D]">
            Come, join us, and let's relish every moment together!
          </p>
        </motion.div>
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate={inView.intro ? "visible" : "hidden"}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
          <motion.img 
            className="relative rounded-lg shadow-xl border-4 border-white/50 hover:border-[#D42127]/30 transition-all duration-300"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop" 
            alt="Our team at Relish66" 
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </section>

      {/* About Experience - Distinct from Home */}
      <section ref={refs.experience} className="container-pad py-16 md:py-24 bg-gradient-to-br from-[#06507D]/5 via-white to-[#D42127]/5">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView.experience ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-3">What Makes Relish Different</p>
          <h2 className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
            More Than a Meal
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            While our Home page showcases what we serve, this section highlights what defines the Relish on 66 experience every day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {experienceHighlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              initial="hidden"
              animate={inView.experience ? "visible" : "hidden"}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 bg-white border border-[#06507D]/15 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#06507D] to-[#D42127] text-white flex items-center justify-center mb-4 font-semibold">
                {idx + 1}
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">{highlight}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView.experience ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-3xl p-6 md:p-8 bg-white border border-[#D42127]/15 shadow-lg">
            <h3 className="font-serif text-2xl text-[#06507D] mb-4">Visit Snapshot</h3>
            <div className="grid gap-3">
              {visitDetails.map((detail) => (
                <div key={detail.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-1">{detail.label}</p>
                  <p className="font-semibold text-[#06507D]">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-[#06507D] to-[#D42127] text-white shadow-lg">
            <h3 className="font-serif text-2xl mb-4">By the Numbers</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-3xl font-bold">12+</p>
                <p className="text-sm text-white/90">Total Chefs</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-sm text-white/90">Happy Customers</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-3xl font-bold">150+</p>
                <p className="text-sm text-white/90">Dishes</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-3xl font-bold">7</p>
                <p className="text-sm text-white/90">Days Open</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Values Section */}
      <section ref={refs.values} className="bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 py-16 md:py-24">
        <div className="container-pad">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate={inView.values ? "visible" : "hidden"}
            className="font-serif text-4xl text-center mb-12 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent"
          >
            Our Values
          </motion.h2>
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-8 mx-auto"></div>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={inView.values ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Community",
                desc: "Celebrating local vendors and supporting Edmonton’s farmers’ markets.",
                icon: MdGroups,
                color: "from-[#06507D]/10 to-[#D42127]/10"
              },
              {
                title: "Quality",
                desc: "Authentic cuisine crafted with fresh, carefully selected ingredients.",
                icon: MdStar,
                color: "from-[#D42127]/10 to-[#06507D]/10"
              },
              {
                title: "Hospitality",
                desc: "Warm, friendly, and knowledgeable service that makes every visit special.",
                icon: MdHandshake,
                color: "from-[#06507D]/10 to-[#D42127]/10"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                className="p-6 rounded-2xl border border-[#06507D]/20 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${value.color} text-2xl group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg`}>
                  <value.icon className="w-7 h-7 text-[#06507D]" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-[#06507D] relative z-10">{value.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors relative z-10">{value.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section ref={refs.mission} className="container-pad py-16 md:py-24">
        <motion.h2 
          variants={fadeIn}
          initial="hidden"
          animate={inView.mission ? "visible" : "hidden"}
          className="font-serif text-4xl text-center mb-12 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent"
        >
          Mission & Vision
        </motion.h2>
        <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-8 mx-auto"></div>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={inView.mission ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="p-8 border border-[#06507D]/20 rounded-2xl bg-gradient-to-b from-white to-[#06507D]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-[#06507D] to-[#D42127] rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg">
              <MdGppGood className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-xl mb-4 text-[#06507D] relative z-10">Our Mission</h3>
            <p className="text-gray-700 relative z-10">To bring authentic flavors, street-style delights, and upscale dining to the Edmonton community with curated experiences and heartfelt hospitality.</p>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="p-8 border border-[#D42127]/20 rounded-2xl bg-gradient-to-b from-white to-[#D42127]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D42127]/5 to-[#06507D]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-[#D42127] to-[#06507D] rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg">
              <MdVisibility className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-xl mb-4 text-[#D42127] relative z-10">Our Vision</h3>
            <p className="text-gray-700 relative z-10">To be Edmonton's go-to kitchen – where food, culture, and community come together through modern dining and traditional tastes.</p>
          </motion.div>
        </motion.div>
      </section>
      
    </div>
  );
}