import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TREATMENTS = [
  {
    number: "01", label: "Refresh", title: "Anti-Wrinkle Treatments",
    description: "Soften the appearance of fine lines while preserving natural expression.",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "02", label: "Balance", title: "Dermal Fillers",
    description: "Restore volume, balance facial proportions and enhance natural contours.",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "03", label: "Glow", title: "Skin Boosters",
    description: "Improve hydration, radiance and overall skin quality from within.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "04", label: "Restore", title: "Exosomes",
    description: "Advanced regenerative skin support for a refreshed, healthier-looking complexion.",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "05", label: "Wellness", title: "IV Skin Drips",
    description: "Wellness-focused support designed to complement your glow journey.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "06", label: "Skin Health", title: "Medical-Grade Skincare",
    description: "Personalised skincare guidance to support long-term skin health.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop",
  },
];

function TreatmentCard({ treatment, onBookNow }) {
  return (
    <div
      className="group relative bg-cream rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-lg"
      style={{ border: "0.5px solid #D8C3A5" }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={treatment.img}
          alt={treatment.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay so card stays airy */}
        <div className="absolute inset-0" style={{ background: "rgba(247,241,232,0.18)" }} />
        {/* Label pill on image */}
        <span
          className="absolute top-3 left-3 font-body text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "rgba(255,253,248,0.85)", color: "#B89B72", border: "0.5px solid #D8C3A5" }}
        >
          {treatment.label}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-champagne">
          {treatment.number}
        </span>
        <h3 className="font-display text-xl md:text-2xl text-deep-olive leading-tight">
          {treatment.title}
        </h3>
        <p className="font-body text-sm text-warm-brown leading-relaxed flex-1">
          {treatment.description}
        </p>
        <button
          onClick={onBookNow}
          className="font-body text-xs tracking-[0.12em] uppercase text-soft-gold hover:text-deep-olive transition-colors duration-200 focus-glow rounded-sm flex items-center gap-2 w-fit"
        >
          Book Now <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default function TreatmentsSection({ onBookNow }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="treatments" className="py-20 md:py-32 bg-ivory" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Centred header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Treatments
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1] mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Treatments designed around your natural glow.
          </motion.h2>
          <motion.p
            className="font-body text-sm text-warm-brown leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Considered aesthetic treatments focused on refreshment, balance, skin quality and confidence.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {TREATMENTS.map((t) => (
            <TreatmentCard key={t.number} treatment={t} onBookNow={onBookNow} />
          ))}
        </motion.div>

        {/* View Pricing link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-warm-brown hover:text-deep-olive transition-colors duration-200 focus-glow rounded-sm"
          >
            View Full Pricing
            <span className="text-soft-gold">↓</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}