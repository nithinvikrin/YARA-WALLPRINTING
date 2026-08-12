import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    'Residential',
    'Commercial Office',
    'Restaurant / Hospitality',
    'Retail Store',
    'Feature Wall',
    'Other / Custom',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-white text-[#080533] relative border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#080533]">
                Let's Transform Your Space
              </h2>

              <p className="text-[#526079] text-base sm:text-lg leading-relaxed">
                Tell us about your wall printing project and our specialist team will get back to you with wall preparation advice, artwork sizing, and a custom estimate.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm flex items-center gap-4 hover:border-[#CF9F0E]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#080533] text-[#CF9F0E] flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#526079] font-bold uppercase tracking-wider block">Direct Phone</span>
                  <a href="tel:+18005557788" className="text-lg font-bold text-[#080533] hover:text-[#CF9F0E] transition-colors">
                    +1 (800) 555-7788
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm flex items-center gap-4 hover:border-[#CF9F0E]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#080533] text-[#CF9F0E] flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#526079] font-bold uppercase tracking-wider block">Email Inquiries</span>
                  <a href="mailto:info@wallprinting.com" className="text-lg font-bold text-[#080533] hover:text-[#CF9F0E] transition-colors">
                    info@wallprinting.com
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm flex items-center gap-4 hover:border-[#CF9F0E]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#080533] text-[#CF9F0E] flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#526079] font-bold uppercase tracking-wider block">Headquarters</span>
                  <span className="text-base font-bold text-[#080533]">
                    Keizersgracht 421, 1016 EK Amsterdam
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm flex items-center gap-4 hover:border-[#CF9F0E]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#080533] text-[#CF9F0E] flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#526079] font-bold uppercase tracking-wider block">Business Hours</span>
                  <span className="text-base font-bold text-[#080533]">
                    Mon — Sat: 08:00 AM — 07:00 PM
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E5E5] shadow-xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#CF9F0E] text-[#080533] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#080533] font-heading">
                    Quote Request Received!
                  </h3>
                  <p className="text-[#526079] text-sm max-w-md mx-auto">
                    Thank you, <span className="text-[#080533] font-bold">{formData.fullName}</span>. Our wall printing team will review your specifications and reach out within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', projectType: 'Residential', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#080533] text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-extrabold text-[#080533] font-heading">
                    Request a Quote
                  </h3>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#526079] uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-[#DADADA] text-[#080533] placeholder-slate-400 focus:outline-none focus:border-[#CF9F0E] focus:bg-white transition-all text-sm"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#526079] uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-[#DADADA] text-[#080533] placeholder-slate-400 focus:outline-none focus:border-[#CF9F0E] focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#526079] uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-[#DADADA] text-[#080533] placeholder-slate-400 focus:outline-none focus:border-[#CF9F0E] focus:bg-white transition-all text-sm"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#526079] uppercase tracking-wider">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-[#DADADA] text-[#080533] focus:outline-none focus:border-[#CF9F0E] focus:bg-white transition-all text-sm"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#526079] uppercase tracking-wider">
                      Wall Sizing & Project Details
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please include wall dimensions (height x width), wall surface type, or artwork ideas..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-[#DADADA] text-[#080533] placeholder-slate-400 focus:outline-none focus:border-[#CF9F0E] focus:bg-white transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-extrabold text-base shadow-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Request a Quote</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-[#526079]">
                    We respect your privacy. No spam guaranteed.
                  </p>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
