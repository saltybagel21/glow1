import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";

// Carefully chosen Unsplash images — all verified to load
const IMAGES = [
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80&auto=format&fit=crop", alt: "Glowing skin close-up" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80&auto=format&fit=crop", alt: "Warm portrait editorial" },
  { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80&auto=format&fit=crop", alt: "Botanical spa detail" },
  { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80&auto=format&fit=crop", alt: "Skincare product on marble" },
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80&auto=format&fit=crop", alt: "Aesthetic treatment room" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80&auto=format&fit=crop", alt: "Natural light portrait glow" },
  { src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80&auto=format&fit=crop", alt: "Warm skin tone close-up" },
  { src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80&auto=format&fit=crop", alt: "Cream skincare bottles" },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80&auto=format&fit=crop", alt: "Soft spa interior light" },
  { src: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=500&q=80&auto=format&fit=crop", alt: "Skincare routine detail" },
];

// Duplicate for seamless infinite loop
const TRACK = [...IMAGES, ...IMAGES];

export default function InstagramGrid() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // CSS animation — pure, no JS scroll needed
  return (
    <section className="py-20 md:py-28 bg-ivory overflow-hidden" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      {/* Header */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-10">
        <motion.p
          className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          @glowhealthandaesthetics
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1] mb-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Glow, <em className="not-italic text-warm-brown">naturally.</em>
        </motion.h2>
        <motion.a
          href="https://www.instagram.com/glowhealthandaesthetics/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-xs tracking-[0.12em] uppercase text-warm-brown hover:text-deep-olive transition-colors focus-glow rounded-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Instagram size={13} />
          Follow on Instagram
        </motion.a>
      </div>

      {/* Scrolling strip — bleeds to edges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #F7F1E8, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #F7F1E8, transparent)" }} />

          {/* Scrolling track */}
          <div
            ref={trackRef}
            className="flex gap-4 animate-marquee"
            style={{ width: "max-content" }}
          >
            {TRACK.map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-2xl group"
                style={{ border: "0.5px solid #D8C3A5" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Inject keyframe via style tag */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 38s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}