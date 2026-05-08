import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Treatments", href: "#treatments" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
];

export default function Header({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 safe-top"
        style={{
          backgroundColor: scrolled ? "rgba(247, 241, 232, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "0.5px solid #D8C3A5" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex flex-col leading-none focus-glow rounded-sm">
            <span className={`font-display text-lg md:text-xl tracking-wide transition-colors duration-300 ${scrolled ? "text-deep-olive" : "text-cream"}`}>
              Glow
            </span>
            <span className={`font-body text-[9px] tracking-[0.22em] uppercase transition-colors duration-300 ${scrolled ? "text-soft-gold" : "text-champagne/70"}`}>
              Health & Aesthetics
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`font-body text-xs tracking-[0.1em] uppercase transition-colors duration-300 focus-glow rounded-sm ${
                  scrolled ? "text-warm-brown hover:text-deep-olive" : "text-cream/80 hover:text-cream"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onBookNow}
              className={`font-body text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-300 focus-glow ${
                scrolled
                  ? "bg-deep-olive text-cream hover:bg-warm-brown"
                  : "bg-cream/15 text-cream border border-cream/40 hover:bg-cream/25 backdrop-blur-sm"
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden w-9 h-9 flex items-center justify-center focus-glow rounded-sm transition-colors duration-300 ${
              scrolled ? "text-deep-olive" : "text-cream"
            }`}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-ivory flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 h-16 flex items-center justify-between" style={{ borderBottom: "0.5px solid #D8C3A5" }}>
              <span className="font-display text-lg text-deep-olive">Glow</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-deep-olive focus-glow rounded-sm"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-4xl text-deep-olive text-left py-3 hover:text-warm-brown transition-colors focus-glow rounded-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => { setMobileOpen(false); onBookNow(); }}
                className="mt-8 font-body text-xs tracking-[0.15em] uppercase bg-deep-olive text-cream px-6 py-3.5 rounded-lg text-center w-full focus-glow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                Book Now
              </motion.button>
            </nav>

            <div className="px-8 pb-10">
              <p className="font-body text-xs text-warm-brown/50 tracking-wide">
                Doctor-led aesthetic care · Cape Town
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}