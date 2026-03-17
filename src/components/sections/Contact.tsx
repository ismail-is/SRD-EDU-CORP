"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create form data payload matching Google Apps Script structure
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('phone', formState.phone);
      formData.append('message', formState.message);

      // Replace this URL with your actual Google Apps Script Web App URL!
      const GOOGLE_SCRIPT_URL ='https://script.google.com/macros/s/AKfycbxS9A76KxdtOCLoEycHcycsCdvCZTKiegQ3M1LmKZSd22787j9b9eSQ5RtxGF87WBIH/exec'

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Google Scripts requires no-cors for simple form posts without preflight headers
      });

      // Since mode is no-cors, we won't get a transparent response status, but if promise resolves it mostly succeeded
      setSubmitStatus('success');
      setFormState({ name: '', email: '', phone: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-primary-dark text-white pt-24 pb-24">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Ready to explore opportunities or have a question? Our team is here to help. Reach out to us through any of our channels.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <HiOutlineLocationMarker size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Office Address</h4>
                <p className="text-gray-300 leading-relaxed">
                  SRD EDU CORP<br/>
                  DF Creations, #122, 3rd Floor<br/>
                  Opposite Brigade Tower<br/>
                  Brigade Road, Woodstreet<br/>
                  Bangalore - 560025
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <HiOutlinePhone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Phone Number</h4>
                <a href="https://wa.me/919036041206" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors block">+91 9036041206</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <HiOutlineMail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email Address</h4>
                <a href="mailto:srdeducorp@gmail.com" className="text-gray-300 hover:text-accent transition-colors block">srdeducorp@gmail.com</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-srd p-8 md:p-10 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Send us a message</h3>
            
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-srd border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-srd border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-srd border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-srd border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-srd text-sm font-medium"
                >
                  Thank you for your message! We will get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-srd text-sm font-medium"
                >
                  Oops! Something went wrong. Please try again or email us directly.
                </motion.div>
              )}

              <motion.button 
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 rounded-srd shadow-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed text-stone-100' : 'bg-accent hover:bg-opacity-90 text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                ) : (
                  "Submit Message"
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
        
      </div>
    </Section>
  );
}
