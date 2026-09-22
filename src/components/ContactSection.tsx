import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Compass, Clock } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  isDarkTheme: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDarkTheme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Couture Commission',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link
    const subject = encodeURIComponent(`[${formData.inquiryType}] Atelier Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${DESIGNER_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`relative w-full py-28 px-6 md:px-12 lg:px-20 border-b select-none transition-colors duration-500 ${
        isDarkTheme
          ? 'bg-[#22040E] text-[#FAF2EE] border-[#7D1B31]/40'
          : 'bg-[#FDF6F4] text-[#220814] border-[#EAD5D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#6E1A29] dark:bg-[#D48B96]" />
            <span className="text-[10px] font-sans-modern tracking-[0.35em] uppercase font-bold text-[#6E1A29] dark:text-[#D48B96]">
              07 • COMMISSIONS & DIALOGUE
            </span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold tracking-tight text-[#221B1C] dark:text-[#FAF6F0]"
          >
            Connect with HK Atelier
          </h2>
          <p className="text-xs sm:text-sm font-sans-modern tracking-[0.2em] uppercase opacity-75">
            Haute Couture Commissions, Pattern Engineering, Material Research & Editorial Styling
          </p>
        </div>

        {/* Two-Column Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Atelier Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-serif-luxury font-bold">
                Initiate a Conversation
              </h3>
              <p id="contact-intro-statement" className="text-xs sm:text-sm font-sans-modern leading-relaxed opacity-80">
                Step into my design world—explore the stories, materials and silhouettes behind each creation, and discover the vision that shapes my work.
              </p>
            </div>

            {/* Atelier Details */}
            <div className="space-y-4">
              <div
                className={`p-4 rounded-2xl border flex items-center space-x-4 ${
                  isDarkTheme ? 'bg-white/[0.03] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#6E1A29] text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase opacity-60">PRIMARY EMAIL</span>
                  <a
                    href={`mailto:${DESIGNER_INFO.email}`}
                    className="text-sm font-mono font-bold block text-[#6E1A29] dark:text-[#D48B96] hover:underline"
                  >
                    {DESIGNER_INFO.email}
                  </a>
                </div>
              </div>

              <div
                className={`p-4 rounded-2xl border flex items-center space-x-4 ${
                  isDarkTheme ? 'bg-white/[0.03] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#6E1A29] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase opacity-60">ATELIER BASE</span>
                  <p className="text-xs font-mono font-bold">
                    {DESIGNER_INFO.location}
                  </p>
                </div>
              </div>

              <div
                id="contact-response-time-card"
                className={`p-4 rounded-2xl border flex items-center space-x-4 ${
                  isDarkTheme ? 'bg-white/[0.03] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#6E1A29] text-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase opacity-60">RESPONSE TIME</span>
                  <p id="contact-response-time-text" className="text-xs font-mono font-bold">
                    Within 12 - 24 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div
            className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border shadow-xl ${
              isDarkTheme ? 'bg-[#220814] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
            }`}
          >
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#6E1A29] dark:text-[#D48B96] animate-bounce" />
                <h3 className="text-2xl font-serif-luxury font-bold">
                  Inquiry Initiated
                </h3>
                <p className="text-xs font-sans-modern opacity-80 max-w-md">
                  Your mail client has been opened to connect directly with {DESIGNER_INFO.email}. Hetvi will review your inquiry promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full border border-current/20 text-xs font-mono uppercase mt-4 hover:bg-current/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#6E1A29] dark:text-[#D48B96] font-bold">
                    COMMISSION DOSSIER
                  </span>
                  <h3 className="text-xl font-serif-luxury font-bold">
                    Send Direct Dispatch
                  </h3>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase opacity-70">
                      YOUR FULL NAME *
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      required
                      placeholder="Hetvi Kapadia"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl border border-current/20 bg-current/5 text-xs font-sans-modern focus:outline-none focus:border-[#6E1A29]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase opacity-70">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      placeholder="e.g. elena@vogue.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-current/20 bg-current/5 text-xs font-sans-modern focus:outline-none focus:border-[#6E1A29]"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase opacity-70">
                    DISPATCH NATURE / PURPOSE
                  </label>
                  <select
                    id="contact-form-type"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full p-3 rounded-xl border border-current/20 bg-current/5 text-xs font-sans-modern focus:outline-none focus:border-[#6E1A29]"
                  >
                    <option value="Couture Commission">Couture Garment Commission</option>
                    <option value="Technical Pattern Development">Technical Pattern CAD & CLO3D Development</option>
                    <option value="Exhibition / Editorial Styling">Editorial Styling & Exhibition Loan</option>
                    <option value="Sustainable Collaboration">Zero-Waste & Textile Research Collaboration</option>
                    <option value="Atelier Apprenticeship / Placement">Industry Placement / Recruitment</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase opacity-70">
                    PROJECT DETAILS & SCOPE *
                  </label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={4}
                    placeholder="A curated nine-look portfolio exploring the balance between contemporary Western silhouettes and Indian ethnic forms through thoughtful fabric, colour, surface detailing and refined garment construction."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-current/20 bg-current/5 text-xs font-sans-modern focus:outline-none focus:border-[#6E1A29]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#6E1A29] hover:bg-[#852033] text-white text-[11px] font-mono tracking-[0.2em] uppercase font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit to Hetvi Kapadia</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
