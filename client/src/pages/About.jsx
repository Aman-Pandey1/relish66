import PageBanner from '../components/PageBanner.jsx';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Seo } from '../components/Seo.jsx';
import { Link } from 'react-router-dom';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const refs = {
    intro: useRef(null),
    values: useRef(null),
    mission: useRef(null),
    timeline: useRef(null),
    team: useRef(null),
    cta: useRef(null)
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

  return (
    <div className="overflow-hidden">
      <Seo title="About Relish on 66" description="Authentic Indian flavors in Edmonton — live tandoor, street food, upscale dining." />
      <PageBanner
        title="About Relish on 66"
        subtitle="Mountain roots. Authentic flavors. Modern vibes."
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
            Welcome to Our Indian Kitchen
          </h2>
          <p className="text-lg">
            Rooted in the heart of Edmonton, Relish on 66 is more than just a restaurant – it’s a culinary hub for authentic Indian food and modern dining experiences. From live tandoor specialties to curated Indian street food and upscale dining, our kitchen celebrates both tradition and innovation.
          </p>
          <p className="text-lg">
            We are proud to be the sister company of Chilli Peppers, known across Edmonton for authentic Indo-Chinese Hakka cuisine, Delhi-style chole bhature, and street-food favorites.
          </p>
          <p className="text-lg font-semibold text-[#D42127]">
            📍 6933 Ellerslie Road SW, Edmonton, AB T6X 2A1
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
                icon: "👥",
                color: "from-[#06507D]/10 to-[#D42127]/10"
              },
              {
                title: "Quality",
                desc: "Authentic Indian cuisine crafted with fresh, carefully selected ingredients.",
                icon: "⭐",
                color: "from-[#D42127]/10 to-[#06507D]/10"
              },
              {
                title: "Hospitality",
                desc: "Warm, friendly, and knowledgeable service that makes every visit special.",
                icon: "🤝",
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
                  {value.icon}
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
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h3 className="font-semibold text-xl mb-4 text-[#06507D] relative z-10">Our Mission</h3>
            <p className="text-gray-700 relative z-10">To bring authentic Indian flavors, street-style delights, and upscale dining to the Edmonton community with curated experiences and heartfelt hospitality.</p>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="p-8 border border-[#D42127]/20 rounded-2xl bg-gradient-to-b from-white to-[#D42127]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D42127]/5 to-[#06507D]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-[#D42127] to-[#06507D] rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg">
              <span className="text-2xl text-white">🔭</span>
            </div>
            <h3 className="font-semibold text-xl mb-4 text-[#D42127] relative z-10">Our Vision</h3>
            <p className="text-gray-700 relative z-10">To be Edmonton’s go-to Indian kitchen – where food, culture, and community come together through modern dining and traditional tastes.</p>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Timeline Section */}
      <section ref={refs.timeline} className="bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 py-16 md:py-24">
        <div className="container-pad">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate={inView.timeline ? "visible" : "hidden"}
            className="font-serif text-4xl text-center mb-12 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent"
          >
            Our Story
          </motion.h2>
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-8 mx-auto"></div>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#06507D] to-[#D42127] rounded-full"></div>
            
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={inView.timeline ? "visible" : "hidden"}
              className="space-y-8 md:space-y-12 relative"
            >
              {[
                { year: "2015", text: "Launched with a small but mighty menu rooted in authentic Indian street food." },
                { year: "2019", text: "Expanded offerings to include catering, live tandoor, and chaat bars." },
                { year: "2024", text: "Introduced upscale dining, live music nights, and launched online ordering with pickup & delivery across Edmonton." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center md:space-x-8 md:space-x-reverse-${index % 2 !== 0}`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Content Card */}
                  <motion.div 
                    className="w-full md:w-1/2 p-6 bg-white/80 backdrop-blur-sm border border-[#06507D]/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="font-serif font-bold text-2xl text-[#D42127] mb-3 relative z-10">{item.year}</div>
                    <p className="text-gray-700 relative z-10">{item.text}</p>
                  </motion.div>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    className="hidden md:flex flex-col items-center relative z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] border-4 border-white shadow-lg relative z-10"></div>
                    <div className="w-0.5 h-20 bg-gradient-to-b from-[#06507D] to-[#D42127] absolute top-8"></div>
                  </motion.div>
                  
                  {/* Spacer for alternating */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section ref={refs.team} className="container-pad py-16 md:py-24">
        <motion.h2 
          variants={fadeIn}
          initial="hidden"
          animate={inView.team ? "visible" : "hidden"}
          className="font-serif text-4xl text-center mb-12 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent"
        >
          Meet the Team
        </motion.h2>
        <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-8 mx-auto"></div>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={inView.team ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { 
              src: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop", 
              name: "Chef Karan Sarna",
              role: "Executive Chef"
            }
          ].map((member, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative text-center overflow-hidden rounded-2xl shadow-lg"
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img 
                  className="w-full h-72 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={member.src} 
                  alt={member.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06507D]/80 via-[#D42127]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-center relative z-10"
                  >
                    <div className="font-bold text-xl mb-1">{member.name}</div>
                    <div className="text-sm font-medium">{member.role}</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-center max-w-3xl mx-auto text-neutral-700 mt-8">
          Chef Karan Sarna – The culinary mind behind Relish on 66, specializing in live Indian kitchens, tandoor artistry, and street food innovation. With years of experience, Chef Karan curates every menu to balance authentic flavors with modern dining vibes.
        </p>
      </section>
      
      {/* CTA Section */}
      <section ref={refs.cta} className="bg-gradient-to-r from-[#06507D] to-[#D42127] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-pad text-center relative z-10">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate={inView.cta ? "visible" : "hidden"}
            className="font-serif text-3xl md:text-4xl mb-6"
          >
            Visit Us Today
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate={inView.cta ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8 text-white/90 text-lg"
          >
            Experience the Relish on 66 difference – not just a meal, but a journey through authentic Indian cuisine, live cooking, and community spirit.
            <br />📍 6933 Ellerslie Road SW, Edmonton, AB T6X 2A1
            <br />📞 (Add Contact Number)
          </motion.p>
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={inView.cta ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link to="/contact" className="bg-white text-[#06507D] px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 text-lg">
              Plan Your Visit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}