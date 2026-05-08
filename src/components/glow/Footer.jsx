import { Instagram } from "lucide-react";

const NAV_LINKS = [
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
];

const LOCATION_LINKS = [
  {
    label: "NuSkinnovation Cape Town",
    href: "https://www.fresha.com/a/nuskinnovation-cape-town-cape-town-nuskinnovation-cape-town-kuk7j2hm",
  },
  {
    label: "Wax On Wax Off Cape Town",
    href: "https://www.fresha.com/a/wax-on-wax-off-cape-town-13-regent-road-xm6ovq5f",
  },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-soft-black text-cream/70 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12" style={{ borderBottom: "0.5px solid rgba(216,195,165,0.2)" }}>
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-4">
              <span className="font-display text-2xl text-cream tracking-wide">Glow</span>
              <span className="font-body text-[9px] tracking-[0.22em] uppercase text-champagne/60">
                Health & Aesthetics
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,253,248,0.55)" }}>
              Doctor-led aesthetic care for subtle, natural-looking results.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/glowhealthandaesthetics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-champagne/20 text-champagne/60 hover:text-champagne hover:border-champagne/50 transition-all duration-300 focus-glow"
                aria-label="Follow Glow on Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.instagram.com/glowhealthandaesthetics/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-champagne/50 hover:text-champagne transition-colors focus-glow rounded-sm"
              >
                @glowhealthandaesthetics
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-body text-[9px] tracking-[0.2em] uppercase text-champagne/40 mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-sm text-left hover:text-cream/90 transition-colors focus-glow rounded-sm"
                  style={{ color: "rgba(255,253,248,0.55)" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <p className="font-body text-[9px] tracking-[0.2em] uppercase text-champagne/40 mb-4">
              Book
            </p>
            <div className="flex flex-col gap-2.5">
              {LOCATION_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm hover:text-cream/90 transition-colors focus-glow rounded-sm"
                  style={{ color: "rgba(255,253,248,0.55)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row md:items-start justify-between gap-5">
          <p
            className="font-body text-xs leading-relaxed max-w-xl"
            style={{ color: "rgba(255,253,248,0.35)" }}
          >
            Information on this website is for general guidance only and does not replace a professional medical consultation. Treatment suitability and results vary from person to person.
          </p>
          <p
            className="font-body text-xs flex-shrink-0"
            style={{ color: "rgba(255,253,248,0.25)" }}
          >
            © {new Date().getFullYear()} Glow Health & Aesthetics
          </p>
        </div>
      </div>
    </footer>
  );
}