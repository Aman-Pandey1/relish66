import { useState, useRef, useEffect } from 'react';
import { Seo } from '../components/Seo.jsx';
import { PAGE_SEO, IMAGE_ALTS, FAQ_ITEMS } from '../seo/pageSeo.js';
import JsonLd from '../components/JsonLd.jsx';
import { buildFaqSchema } from '../seo/schema.js';
import { fetchSiteFields, submitContactForm } from '../config/contactApi.js';
import { motion, useInView } from 'framer-motion';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheck } from 'react-icons/fa';
import faqImage from '../assets/relishlogo.jpg';

const faqs = FAQ_ITEMS;

const inputClass =
  'w-full px-4 py-3 border border-[#06507D]/20 rounded-xl focus:ring-2 focus:ring-[#06507D]/30 focus:border-[#06507D]/50 transition-all duration-300 bg-white/50 backdrop-blur-sm';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Contact() {
  const [dynamicFields, setDynamicFields] = useState([]);
  const [loadingFields, setLoadingFields] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [msg, setMsg] = useState('');
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const loadFields = async () => {
      try {
        setLoadingFields(true);
        setMsg('');
        const fields = await fetchSiteFields();
        setDynamicFields(fields);
        const initial = {};
        fields.forEach((f) => {
          if (f?.fieldName) initial[f.fieldName] = '';
        });
        setFormData((prev) => ({ ...prev, ...initial }));
      } catch (e) {
        console.error('Fields load failed:', e);
        setMsg(e.message || 'Could not load form fields');
      } finally {
        setLoadingFields(false);
      }
    };
    loadFields();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMsg('');
    try {
      await submitContactForm(formData);
      setSent(true);
      const resetDynamic = {};
      dynamicFields.forEach((f) => {
        if (f?.fieldName) resetDynamic[f.fieldName] = '';
      });
      setFormData({ name: '', email: '', message: '', ...resetDynamic });
    } catch (error) {
      console.error('Error sending message:', error);
      setMsg(error.message || 'Network error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5">
      <Seo path={PAGE_SEO.contact.path} metaTitle={PAGE_SEO.contact.metaTitle} description={PAGE_SEO.contact.description} />
      <JsonLd data={buildFaqSchema()} />
      {/* Hero Section */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop)' }}
        role="img"
        aria-label={IMAGE_ALTS.contactLocation}
      >
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
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#06507D]/70">Address</div>
                  <div className="font-medium text-gray-800">6933 Ellerslie Road SW, Edmonton, AB T6X 2A1</div>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 hover:from-[#06507D]/10 hover:to-[#D42127]/10 transition-colors duration-300 border border-[#06507D]/10">
                <div className="w-10 h-10 bg-gradient-to-br from-[#06507D] to-[#D42127] rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <FaPhoneAlt className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#06507D]/70">Phone</div>
                  <div className="font-medium text-gray-800 space-y-1">
                    <a href="tel:+17807846642" className="block hover:text-[#06507D] transition-colors">
                      780 784 6642
                    </a>
                    <a href="tel:+17807846643" className="block hover:text-[#06507D] transition-colors">
                      780 784 6643
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#06507D]/5 to-[#D42127]/5 hover:from-[#06507D]/10 hover:to-[#D42127]/10 transition-colors duration-300 border border-[#06507D]/10">
                <div className="w-10 h-10 bg-gradient-to-br from-[#06507D] to-[#D42127] rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <FaEnvelope className="text-white" />
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
                  <span>Monday:</span>
                  <span className="font-medium text-[#D42127]">Closed</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-[#06507D]/5">
                  <span>Tue - Thu &amp; Sun:</span>
                  <span className="font-medium text-[#D42127]">1pm - 11pm</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-[#06507D]/5">
                  <span>Fri - Sat:</span>
                  <span className="font-medium text-[#D42127]">1pm - 12am</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#06507D]/20">
            <h2 className="font-serif text-2xl mb-6 bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">Follow Us</h2>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61579174366831" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#06507D] to-[#D42127] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="https://www.instagram.com/relishon66" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#D42127] to-[#06507D] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="text-xl" />
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
                  <FaCheck className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">Message Sent!</h3>
                <p className="text-neutral-600 mb-6">Thanks for reaching out! We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => { setSent(false); setMsg(''); }}
                  className="px-6 py-2 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name *</label>
                    <input
                      id="name"
                      name="name"
                      className={inputClass}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={inputClass}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {loadingFields ? (
                  <p className="text-neutral-600">Loading form...</p>
                ) : (
                  dynamicFields.map((f) => (
                    <div key={f.fieldName} className="space-y-2">
                      <label htmlFor={f.fieldName} className="block text-sm font-medium text-gray-700">
                        {f.fieldLabel}
                        {f.required ? ' *' : ''}
                      </label>
                      {f.fieldType === 'textarea' ? (
                        <textarea
                          id={f.fieldName}
                          name={f.fieldName}
                          value={formData[f.fieldName] || ''}
                          onChange={handleChange}
                          required={!!f.required}
                          rows={5}
                          className={inputClass}
                          placeholder={f.placeholder || ''}
                        />
                      ) : f.fieldType === 'select' && Array.isArray(f.options) ? (
                        <select
                          id={f.fieldName}
                          name={f.fieldName}
                          value={formData[f.fieldName] || ''}
                          onChange={handleChange}
                          required={!!f.required}
                          className={inputClass}
                        >
                          <option value="" disabled>
                            {f.placeholder || `Select ${f.fieldLabel}`}
                          </option>
                          {f.options.map((opt) => (
                            <option key={String(opt.value ?? opt.label)} value={opt.value ?? opt.label}>
                              {opt.label ?? opt.value}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={f.fieldType || 'text'}
                          id={f.fieldName}
                          name={f.fieldName}
                          value={formData[f.fieldName] || ''}
                          onChange={handleChange}
                          required={!!f.required}
                          className={inputClass}
                          placeholder={f.placeholder || ''}
                        />
                      )}
                    </div>
                  ))
                )}

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={inputClass}
                    rows="6"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || loadingFields}
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

                {msg ? <p className="text-red-600 text-sm">{msg}</p> : null}
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
                src="https://www.google.com/maps?q=6933+Ellerslie+Road+SW,+Edmonton,+AB+T6X+2A1&output=embed"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="container-pad py-16 md:py-24 bg-gradient-to-br from-white to-gray-50/50">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={faqInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answers about our Indian restaurant, reservations, hours, and catering in Edmonton
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={faqInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
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
            alt={IMAGE_ALTS.contactLogo}
          />
        </motion.div>
      </section>
    </div>
  );
}