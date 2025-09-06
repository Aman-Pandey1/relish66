import PageBanner from '../components/PageBanner.jsx';
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">
      <PageBanner
        title="About Relish66"
        subtitle="Mountain roots. Curated selection. Friendly faces."
        image="https://images.unsplash.com/photo-1542000550-85cd0f37f13b?q=80&w=1600&auto=format&fit=crop"
        height="h-[40vh]"
        overlay="bg-black/40"
      />
      
      {/* Introduction Section */}
      <section className={`container-pad py-16 grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-6 text-neutral-700 leading-relaxed">
          <h2 className="font-serif text-3xl text-neutral-800">Welcome to Our Mountain Home</h2>
          <p className="text-lg">Rooted in the spirit of the mountains, Relish66 is a community hub for quality food and everyday staples. From local craft producers to global classics, we curate our shelves with care and hospitality.</p>
          <p className="text-lg">We believe great stores are built on great relationships. Our team is here to help you find the perfect bottle, snack, or gift for any occasion.</p>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
          <img 
            className="relative rounded-lg shadow-xl transform transition duration-700 group-hover:scale-105" 
            src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop" 
            alt="Our team at Relish66" 
          />
        </div>
      </section>
      
      {/* Values Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-amber-50 py-16">
        <div className="container-pad">
          <h2 className="font-serif text-4xl text-center mb-12 text-neutral-800">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community",
                desc: "Celebrating local makers and giving back to our mountain town.",
                icon: "👥"
              },
              {
                title: "Quality",
                desc: "Curated selection of authentic Indian dishes and daily essentials.",
                icon: "⭐"
              },
              {
                title: "Hospitality",
                desc: "Friendly, knowledgeable service to make every visit easy.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-amber-100 bg-white shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="font-semibold text-xl mb-3 text-amber-700">{value.title}</h3>
                <p className="text-neutral-600 group-hover:text-neutral-800 transition-colors">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="container-pad py-16">
        <h2 className="font-serif text-4xl text-center mb-12 text-neutral-800">Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 border border-amber-100 rounded-2xl bg-gradient-to-b from-white to-amber-50 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-xl mb-4 text-amber-700">Our Mission</h3>
            <p className="text-neutral-700">To bring the best of mountain culture to our community with a curated selection and exceptional hospitality.</p>
          </div>
          <div className="p-8 border border-amber-100 rounded-2xl bg-gradient-to-b from-white to-amber-50 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔭</span>
            </div>
            <h3 className="font-semibold text-xl mb-4 text-amber-700">Our Vision</h3>
            <p className="text-neutral-700">To be the go-to general store for locals and visitors alike, celebrating quality, community, and the outdoors.</p>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="bg-neutral-50 py-16">
        <div className="container-pad">
          <h2 className="font-serif text-4xl text-center mb-12 text-neutral-800">Our Story</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
            
            <div className="space-y-12 relative">
              {[
                { year: "2015", text: "Doors open with a small but mighty selection." },
                { year: "2019", text: "Expanded categories and introduced local features." },
                { year: "2024", text: "Launched online shopping with pickup & delivery." }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className="w-1/2 pr-8">
                    <div className="p-6 bg-white border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                      <div className="font-semibold text-amber-700 text-lg mb-2">{item.year}</div>
                      <p className="text-neutral-700">{item.text}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 border-4 border-white z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="container-pad py-16">
        <h2 className="font-serif text-4xl text-center mb-12 text-neutral-800">Meet the Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              src: "https://images.unsplash.com/photo-1558944351-5f8c0d0b3c4b?q=80&w=800&auto=format&fit=crop", 
              name: "Sarah Johnson",
              role: "Founder & Curator"
            },
            { 
              src: "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=800&auto=format&fit=crop", 
              name: "Michael Chen",
              role: "Head of Hospitality"
            },
            { 
              src: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=800&auto=format&fit=crop", 
              name: "Emma Rodriguez",
              role: "Head Chef"
            },
            { 
              src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop", 
              name: "James Wilson",
              role: "Operations Manager"
            }
          ].map((member, index) => (
            <div key={index} className="group relative text-center">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  className="w-full h-72 object-cover transform transition duration-700 group-hover:scale-110" 
                  src={member.src} 
                  alt={member.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                  <div className="text-white text-center">
                    <div className="font-semibold">{member.name}</div>
                    <div className="text-sm">{member.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-amber-600 text-white py-16">
        <div className="container-pad text-center">
          <h2 className="font-serif text-3xl mb-6">Visit Us Today</h2>
          <p className="max-w-2xl mx-auto mb-8 text-amber-100">Experience the Relish66 difference. We're more than just a store—we're your neighbors, your friends, and your partners in finding the perfect products for any occasion.</p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Plan Your Visit
          </button>
        </div>
      </section>
    </div>
  );
}