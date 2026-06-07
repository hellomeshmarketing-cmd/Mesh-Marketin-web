import { Mail, MessageCircle, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const companyLogo = "https://photos.fife.usercontent.google.com/pw/AP1GczMTX_H9mxmIVz9gJfaTG5egF68yViIrfN_99SBJ4zmuWVAhzC_mhQM=w500-h500-s-no-gm?authuser=0";

  return (
    <footer className="bg-[#080808] border-t border-gold/15 relative pt-16 pb-12 px-6 md:px-12 overflow-hidden">
      
      {/* Decorative linear glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-gold/5">
          
          {/* Logo container */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-gold/30 flex items-center justify-center bg-black">
              <img 
                src={companyLogo} 
                alt="Mesh Marketing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute font-serif font-black text-xs text-gold">M</span>
            </div>
            <div>
              <span className="block font-serif text-[#C9A84C] text-xl font-bold tracking-widest leading-none">
                MESH MARKETING
              </span>
              <span className="block font-sans text-[9px] text-[#e5e5e5]/40 tracking-[0.25em] uppercase mt-0.5">
                Kisii, Kenya · Premium Digital Marketing
              </span>
            </div>
          </div>

          {/* Social connections in golden detail */}
          <div className="flex items-center gap-4">
            <a 
              href="mailto:hello.meshmarketing@gmail.com" 
              className="w-9 h-9 border border-gold/10 hover:border-gold/40 flex items-center justify-center text-gold hover:text-gold-light bg-black/40 transition-colors duration-300"
              aria-label="Email Inbox"
            >
              <Mail size={15} />
            </a>
            <a 
              href="https://wa.me/254740242611?text=Hello%20Mesh%20Marketing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 border border-gold/10 hover:border-gold/40 flex items-center justify-center text-gold hover:text-gold-light bg-black/40 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
            <a 
              href="https://instagram.com/meshmarketing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 border border-gold/10 hover:border-gold/40 flex items-center justify-center text-gold hover:text-gold-light bg-black/40 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a 
              href="https://linkedin.com/company/meshmarketing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 border border-gold/10 hover:border-gold/40 flex items-center justify-center text-gold hover:text-gold-light bg-black/40 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a 
              href="https://twitter.com/meshmarketing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 border border-gold/10 hover:border-gold/40 flex items-center justify-center text-gold hover:text-gold-light bg-black/40 transition-colors duration-300"
              aria-label="Twitter X"
            >
              <Twitter size={15} />
            </a>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          <div className="font-sans text-[10px] md:text-xs text-[#e5e5e5]/50 tracking-widest space-y-2">
            <p>© {currentYear} Mesh Marketing. All Rights Reserved.</p>
            <p className="font-mono text-[9px] text-[#e5e5e5]/25">
              Designed for luxury results, brand positioning, and elite conversions in Kisii & Beyond.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-sans text-[9px] md:text-xs text-[#e5e5e5]/60">
            <a href="mailto:hello.meshmarketing@gmail.com" className="text-gold hover:text-gold-light transition-colors duration-300 font-semibold tracking-wider">
              hello.meshmarketing@gmail.com
            </a>
            <span className="text-white/10">|</span>
            <a href="https://wa.me/254740242611" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors duration-300 font-semibold tracking-wider">
              +254 740 242 611
            </a>
            <span className="text-white/10 hidden md:inline">|</span>
            <button 
              onClick={handleScrollTop}
              className="hidden md:flex items-center gap-1.5 text-[#C9A84C] hover:text-gold-light tracking-widest uppercase text-[10px] focus:outline-none"
            >
              Back To Top
              <ArrowUp size={11} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
