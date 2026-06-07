import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { MapPin, Mail, MessageCircle, Send, Check, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessType: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.reveal-contact');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSend = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct rich message templates dynamically
    const baseText = "Hello Mesh Marketing, I'd like to work with you.%0A%0A";
    const details = `*Name:* ${encodeURIComponent(formData.fullName || 'Not specified')}%0A` +
                    `*Email:* ${encodeURIComponent(formData.email || 'Not specified')}%0A` +
                    `*Business:* ${encodeURIComponent(formData.businessType || 'Not specified')}%0A` +
                    `*Message:* ${encodeURIComponent(formData.message || 'Interest raised from web inquiry')}`;
    
    const waUrl = `https://wa.me/254740242611?text=${baseText}${details}`;
    
    // Open WhatsApp link
    window.open(waUrl, '_blank');
    setIsSent(true);
    setShowToast(true);
    
    setTimeout(() => {
      setIsSent(false);
    }, 4000);
    
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-[#0c0c0c] border-t border-gold/10 relative px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION LABEL */}
        <div className="mb-16 md:mb-24 flex flex-col items-start reveal-contact reveal-on-scroll">
          <span className="font-sans text-[10px] md:text-sm text-[#C9A84C] font-semibold tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Get In Touch
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT COLUMN: INFRASTRUCTURE INFO */}
          <div className="lg:col-span-5 flex flex-col justify-between reveal-contact reveal-on-scroll delay-100">
            <div>
              <h3 className="font-serif text-3xl md:text-5xl text-[#e5e5e5] font-light leading-tight mb-6">
                Let's Build <br/>
                Something <span className="italic font-normal text-[#C9A84C]">Great</span>
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#e5e5e5]/60 hoverable leading-relaxed font-light mb-12 max-w-sm">
                Ready to separate your business from the noise? Contact our core offices in Kisii, Kenya directly or send a WhatsApp proposal below.
              </p>

              {/* CONTACT ROWS */}
              <div className="space-y-8">
                
                {/* Loc Row */}
                <div className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center text-gold group-hover:border-gold/30 bg-black/40 transition-colors duration-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] text-[#e5e5e5]/40 tracking-widest uppercase">Office Location</span>
                    <span className="block font-sans text-xs md:text-sm text-[#e5e5e5]/80 group-hover:text-gold transition-colors duration-300">Kisii, Kenya</span>
                  </div>
                </div>

                {/* Email Row */}
                <a href="mailto:hello.meshmarketing@gmail.com" className="flex items-center gap-5 group outline-none">
                  <div className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center text-gold group-hover:border-gold/30 bg-black/40 transition-colors duration-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] text-[#e5e5e5]/40 tracking-widest uppercase">Email Inbox</span>
                    <span className="block font-sans text-xs md:text-sm text-[#e5e5e5]/80 group-hover:text-gold transition-colors duration-300 duration-300">hello.meshmarketing@gmail.com</span>
                  </div>
                </a>

                {/* WhatsApp Row */}
                <a 
                  href="https://wa.me/254740242611?text=Hello%20Mesh%20Marketing%2C%20I%27d%20like%20to%20work%20with%20you." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-5 group outline-none"
                >
                  <div className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center text-gold group-hover:border-gold/30 bg-black/40 transition-colors duration-300">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] text-[#e5e5e5]/40 tracking-widest uppercase">Direct WhatsApp</span>
                    <span className="block font-sans text-xs md:text-sm text-[#e5e5e5]/80 group-hover:text-gold transition-colors duration-300">+254 740 242 611</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Sub-text geographic coords signature */}
            <div className="hidden lg:block font-mono text-[9px] text-[#e5e5e5]/20 tracking-widest">
              GRID COORDS: 0.6865° S, 34.7766° E · KISII KE
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM BOX */}
          <div className="lg:col-span-7 reveal-contact reveal-on-scroll delay-300">
            <div className="bg-[#101010] p-8 md:p-12 border border-gold/5 hover:border-gold/10 transition-colors duration-500 rounded-none h-full flex flex-col justify-between">
              
              <form onSubmit={handleWhatsAppSend} className="space-y-8 flex-1 flex flex-col justify-between">
                <div className="space-y-8">
                  
                  {/* FULL NAME */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="block w-full py-2 bg-transparent border-b border-[#303030] focus:border-gold focus:outline-none text-xs md:text-sm text-white peer transition-colors duration-300"
                    />
                    <label 
                      htmlFor="fullName"
                      className="absolute left-0 top-2 text-[10px] md:text-xs text-[#e5e5e5]/35 uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-translate-y-6"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* EMAIL ADDRESS */}
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="block w-full py-2 bg-transparent border-b border-[#303030] focus:border-gold focus:outline-none text-xs md:text-sm text-white peer transition-colors duration-300"
                    />
                    <label 
                      htmlFor="email"
                      className="absolute left-0 top-2 text-[10px] md:text-xs text-[#e5e5e5]/35 uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-translate-y-6"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* BUSINESS TYPE */}
                  <div className="relative">
                    <select 
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="block w-full py-2 bg-transparent border-b border-[#303030] focus:border-gold focus:outline-none text-xs md:text-sm text-white transition-colors duration-300 cursor-pointer text-[#e5e5e5]/80"
                    >
                      <option value="" disabled className="bg-[#101010] text-[#e5e5e5]/40">Select Business Type</option>
                      <option value="E-Commerce & Retail" className="bg-[#101010] text-white">E-Commerce & Retail</option>
                      <option value="Local Business / Service" className="bg-[#101010] text-white">Local Service Shop</option>
                      <option value="SaaS / Real Estate / Agency" className="bg-[#101010] text-white">Corporate B2B</option>
                      <option value="Elite Personal Brand" className="bg-[#101010] text-white">Personal Brand</option>
                      <option value="Other Service Category" className="bg-[#101010] text-white">Other</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div className="relative">
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="block w-full py-2 bg-transparent border-b border-[#303030] focus:border-gold focus:outline-none text-xs md:text-sm text-white peer transition-colors duration-300 resize-none"
                    />
                    <label 
                      htmlFor="message"
                      className="absolute left-0 top-2 text-[10px] md:text-xs text-[#e5e5e5]/35 uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-translate-y-6"
                    >
                      Message details
                    </label>
                  </div>

                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-6 mt-8">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 font-sans text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#C9A84C] via-[#E8C97A] to-[#A9872D] text-[#080808] py-4 rounded-none hover:opacity-90 active:scale-[0.99] transition-all duration-300"
                  >
                    {isSent ? (
                      <>
                        COMPILING WHATSAPP...
                        <Check size={14} />
                      </>
                    ) : (
                      <>
                        Send via WhatsApp
                        <Send size={14} />
                      </>
                    )}
                  </button>
                  <span className="block text-center text-[10px] text-[#e5e5e5]/30 tracking-wider mt-3 uppercase font-mono">
                    Secure 1-click submission drafts directly onto your device
                  </span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Gold-Themed Success Toast Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto w-[340px] max-w-sm bg-[#121212] border border-[#C9A84C]/40 shadow-2xl p-5 rounded-none flex gap-4 relative overflow-hidden group"
            >
              {/* Decorative top-border matching design theme */}
              <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold-light via-gold to-gold-dark" />
              
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#C9A84C]/25 flex items-center justify-center bg-gold/5 text-gold self-start">
                <Sparkles size={18} className="animate-pulse" />
              </div>

              {/* Content */}
              <div className="flex-1 pr-6">
                <h4 className="font-serif text-[#E8C97A] text-sm font-semibold tracking-wider mb-1 uppercase">
                  Proposal Compiled!
                </h4>
                <p className="font-sans text-[11px] text-[#e5e5e5]/70 font-light leading-relaxed">
                  Your customized inquiry has been styled. Passing seamlessly to WhatsApp...
                </p>
                <div className="mt-2.5 flex gap-2 items-center text-[8px] text-[#C9A84C]/70 tracking-widest font-mono">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C9A84C]"></span>
                  </span>
                  <span>SSL SECURE SYSTEM PASS</span>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowToast(false)}
                className="absolute top-4 right-4 text-[#e5e5e5]/30 hover:text-[#C9A84C] transition-colors duration-300 focus:outline-none"
                aria-label="Close notification"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
