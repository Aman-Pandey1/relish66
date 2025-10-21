import { useState } from 'react';
import api from '../utils/api';

export default function Contact() {
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
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center flex items-end" style={{ backgroundImage: 'ur[](https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#06507D]/70 via-[#D42127]/30 to-[#06507D]/70" />
        <div className="relative container-pad pb-10 text-white">
          <h1 className="font-serif text-5xl md:text-6xl mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Get In Touch</h1>
          <p className="text-xl max-w-2xl">We'd love to hear from you. Reach out with questions, feedback, or just to say hello!</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-pad py-16 grid lg:grid-cols-3 gap-10">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#06507D]/20">
            <h2 className="font-serif text-2xl mb-6 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">Visit Our Store</h2>
            
          <div className="space-y-4">
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 hover:from-[#06507D]/10 hover:to-[#D42127]/10 transition-colors duration-300 border border-[#06507D]/10">
                <div className="w-10 h-10 bg-gradient-to-br from-[#06507D] to-[#D42127] rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <span className="text-white">📍</span>
                </div>
                <div>
                  <div className="text-sm text-[#06507D]/70">Address</div>
                  <div className="font-medium text-gray-800">6933 Ellerslie Road SW, Edmonton, AB T6X 2A1</div>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 hover:from-[#06507D]/10 hover:to-[#D42127]/10 transition-colors duration-300 border border-[#06507D]/10">
                <div className="w-10 h-10 bg-gradient-to-br from-[#06507D] to-[#D42127] rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <span className="text-white">📞</span>
                </div>
                <div>
                  <div className="text-sm text-[#06507D]/70">Phone</div>
                  <div className="font-medium text-gray-800">+17806905888</div>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 hover:from-[#06507D]/10 hover:to-[#D42127]/10 transition-colors duration-300 border border-[#06507D]/10">
                <div className="w-10 h-10 bg-gradient-to-br from-[#06507D] to-[#D42127] rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <span className="text-white">✉️</span>
                </div>
                <div>
                  <div className="text-sm text-[#06507D]/70">Email</div>
                  <div className="font-medium text-gray-800">Info.relishon66@gmail.com</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-[#06507D]/20">
              <h3 className="font-semibold mb-2 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">Store Hours</h3>
              <div className="space-y-1 text-neutral-600">
                <div className="flex justify-between p-2 rounded-lg bg-[#06507D]/5">
                  <span>Mon - Sat:</span>
                  <span className="font-medium text-[#D42127]">9am – 9pm</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-[#D42127]/5">
                  <span>Sunday:</span>
                  <span className="font-medium text-[#06507D]">10am – 6pm</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#06507D]/20">
            <h2 className="font-serif text-2xl mb-6 bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">Follow Us</h2>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/relishon66?igsh=MTQwa3F3MWVvNW42dQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 from-[#D42127] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form and Map */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#D42127]/20">
            <h2 className="font-serif text-3xl mb-6 bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">Send Us a Message</h2>
            
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#06507D] to-[#D42127] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-3xl text-white">✓</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">Message Sent!</h3>
                <p className="text-neutral-600 mb-6">Thanks for reaching out! We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSent(false)}
                  className="px-6 py-2 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input 
                      className="w-full px-4 py-3 border border-[#06507D]/20 rounded-xl focus:ring-2 focus:ring-[#06507D]/30 focus:border-[#06507D]/50 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                      placeholder="John Doe" 
                      value={form.name} 
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 border border-[#06507D]/20 rounded-xl focus:ring-2 focus:ring-[#06507D]/30 focus:border-[#06507D]/50 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                      placeholder="john@example.com" 
                      value={form.email} 
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 border border-[#06507D]/20 rounded-xl focus:ring-2 focus:ring-[#06507D]/30 focus:border-[#06507D]/50 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                    placeholder="(123) 456-7890" 
                    value={form.phone} 
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Your Message</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-[#06507D]/20 rounded-xl focus:ring-2 focus:ring-[#06507D]/30 focus:border-[#06507D]/50 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                    rows="6" 
                    placeholder="How can we help you?" 
                    value={form.message} 
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Map */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-[#D42127]/20">
            <div className="p-6 border-b border-[#D42127]/20 bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5">
              <h2 className="font-serif text-2xl bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">Find Us</h2>
            </div>
            <div className="h-96 w-full">
              <iframe 
                title="Relish66 Location" 
                className="w-full h-full" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25191.916030464495!2d-116.989!3d51.299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5377d8ffb02e39d7%3A0x6b0da0b2cd4c2a0!2sGolden%2C%20BC!5e0!3m2!1sen!2sca!4v1700000000000"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-pad py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-center mb-12 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Do you offer local delivery?",
                answer: "Yes! We offer free delivery within Golden for orders over $50."
              },
              {
                question: "Can I special order products?",
                answer: "Absolutely! We're happy to special order products we don't regularly stock."
              },
              {
                question: "Do you host tasting events?",
                answer: "Yes, we host monthly tasting events featuring local producers."
              },
              {
                question: "Are you dog-friendly?",
                answer: "Well-behaved dogs are always welcome in our store!"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#06507D]/20 hover:shadow-md transition-shadow duration-300 hover:border-[#D42127]/30">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}