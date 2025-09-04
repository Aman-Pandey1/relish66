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
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/70" />
        <div className="relative container-pad pb-10 text-white">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl">We'd love to hear from you. Reach out with questions, feedback, or just to say hello!</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-pad py-16 grid lg:grid-cols-3 gap-10">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
            <h2 className="font-serif text-2xl mb-6 text-amber-700">Visit Our Store</h2>
            
            <div className="space-y-4">
              <div className="flex items-start p-4 rounded-xl bg-amber-50/50 hover:bg-amber-100/50 transition-colors duration-300">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-amber-700">📍</span>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Address</div>
                  <div className="font-medium">123 Mountain Rd, Golden, BC</div>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-amber-50/50 hover:bg-amber-100/50 transition-colors duration-300">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-amber-700">📞</span>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Phone</div>
                  <div className="font-medium">(604) 555-0123</div>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-amber-50/50 hover:bg-amber-100/50 transition-colors duration-300">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-amber-700">✉️</span>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Email</div>
                  <div className="font-medium">hello@kickinghorse.store</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-amber-100">
              <h3 className="font-semibold mb-2 text-amber-700">Store Hours</h3>
              <div className="space-y-1 text-neutral-600">
                <div className="flex justify-between">
                  <span>Mon - Sat:</span>
                  <span className="font-medium">9am – 9pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">10am – 6pm</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
            <h2 className="font-serif text-2xl mb-6 text-amber-700">Follow Us</h2>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Twitter'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 hover:bg-amber-200 hover:text-amber-800 transition-colors duration-300"
                  aria-label={`Follow us on ${platform}`}
                >
                  {platform === 'Instagram' ? '📷' : platform === 'Facebook' ? '📘' : '🐦'}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Form and Map */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
            <h2 className="font-serif text-3xl mb-6 text-amber-700">Send Us a Message</h2>
            
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-green-600">✓</span>
                </div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">Message Sent!</h3>
                <p className="text-neutral-600 mb-6">Thanks for reaching out! We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSent(false)}
                  className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-neutral-700">Your Name</label>
                    <input 
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300" 
                      placeholder="John Doe" 
                      value={form.name} 
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-neutral-700">Email Address</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300" 
                      placeholder="john@example.com" 
                      value={form.email} 
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-700">Phone Number (Optional)</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300" 
                    placeholder="(123) 456-7890" 
                    value={form.phone} 
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-700">Your Message</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300" 
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
                  className="px-8 py-4 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700 disabled:bg-amber-400 transition-all duration-300 flex items-center justify-center"
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
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100">
            <div className="p-6 border-b border-amber-100">
              <h2 className="font-serif text-2xl text-amber-700">Find Us</h2>
            </div>
            <div className="h-96 w-full">
              <iframe 
                title="Kicking Horse General Store Location" 
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
          <h2 className="font-serif text-3xl text-center mb-12 text-amber-700">Frequently Asked Questions</h2>
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
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-2 text-amber-700">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}