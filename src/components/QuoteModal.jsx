import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, CheckCircle2, Send, Sparkles } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [height, setHeight] = useState(2.5); // meters
  const [width, setWidth] = useState(4.0); // meters
  const [surface, setSurface] = useState('Plaster / Drywall');
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const area = (parseFloat(height || 0) * parseFloat(width || 0)).toFixed(1);
  const estimatedCost = Math.round(area * 75); // approx €75 / m² base estimate

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#080533] border border-[#CF9F0E]/40 rounded-2xl sm:rounded-3xl max-w-xl w-full shadow-2xl relative glass-panel p-4 sm:p-8 my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={handleResetClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#CF9F0E] text-[#080533] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-white font-heading">
                Estimate Submitted!
              </h3>
              <p className="text-slate-300 text-sm">
                Your project estimate for <span className="text-[#CF9F0E] font-bold">{area} m²</span> surface (~€{estimatedCost}) has been registered. Our estimator will review wall details and reach out.
              </p>
              <button
                onClick={handleResetClose}
                className="px-6 py-2.5 rounded-full bg-[#CF9F0E] text-[#080533] font-bold text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#CF9F0E] text-[#080533] flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white font-heading">
                    Instant Wall Estimate
                  </h3>
                  <p className="text-xs text-slate-300">
                    Step {step} of 2 — Quick project quote calculator
                  </p>
                </div>
              </div>

              {step === 1 ? (
                <form onSubmit={handleNextStep} className="space-y-6">
                  {/* Wall Dimension Controls */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Wall Height (Meters)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="1"
                        max="10"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-base focus:border-[#CF9F0E] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Wall Width (Meters)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="1"
                        max="50"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-base focus:border-[#CF9F0E] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Surface Material Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Wall Surface Type
                    </label>
                    <select
                      value={surface}
                      onChange={(e) => setSurface(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#080533] border border-white/15 text-white text-sm focus:border-[#CF9F0E] focus:outline-none"
                    >
                      <option value="Plaster / Drywall">Smooth Plaster / Painted Drywall</option>
                      <option value="Concrete / Brick">Raw Concrete / Exposed Brick</option>
                      <option value="Wood / MDF">Wood / Timber Paneling / MDF</option>
                      <option value="Glass / Metal">Glass / Metal / Acrylic</option>
                      <option value="Textured Wallpaper">Existing Textured Wallpaper</option>
                    </select>
                  </div>

                  {/* Live Calculation Display Box */}
                  <div className="p-5 rounded-2xl bg-[#CF9F0E]/15 border border-[#CF9F0E]/40 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-300 block font-medium">Estimated Print Surface</span>
                      <span className="text-2xl font-extrabold text-white font-heading">{area} m²</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#CF9F0E] block font-bold uppercase tracking-wider">Estimated Cost</span>
                      <span className="text-2xl font-extrabold text-[#CF9F0E] font-heading">~ €{estimatedCost}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg"
                  >
                    Continue to Contact Details
                  </button>
                </form>
              ) : (
                <form onSubmit={handleFinalSubmit} className="space-y-5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between">
                    <span>Selected: <strong className="text-white">{area} m² ({surface})</strong></span>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[#CF9F0E] underline font-bold"
                    >
                      Edit Sizing
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-[#CF9F0E] focus:outline-none"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@domain.com"
                        value={clientInfo.email}
                        onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-[#CF9F0E] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+31 6 12345678"
                        value={clientInfo.phone}
                        onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-[#CF9F0E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Artwork / Notes (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Do you have high-res image files ready, or need custom design assistance?"
                      value={clientInfo.notes}
                      onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-[#CF9F0E] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#CF9F0E] to-[#e6b825] text-[#080533] font-extrabold text-sm uppercase tracking-wider shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Quote Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
