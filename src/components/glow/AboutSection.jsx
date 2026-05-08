import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TRUST_ITEMS = [
  "Doctor-led aesthetic practice",
  "Personalised treatment approach",
  "Commitment to natural-looking results",
  "Trusted Cape Town provider",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-cream" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=900&q=80&auto=format&fit=crop"
                alt="Warm minimal aesthetic clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1] mb-6">
              Led with care, precision and an eye for{" "}
              <em className="not-italic text-warm-brown">natural detail.</em>
            </h2>
            <p className="font-body text-sm md:text-base text-soft-black leading-[1.8] mb-8 max-w-md mx-auto md:mx-0">
              Glow Health & Aesthetics is built around a refined approach to aesthetic medicine: subtle enhancement, personalised guidance and results that feel true to you. Every treatment is delivered with medical precision, warmth and an unwavering commitment to natural-looking outcomes.
            </p>
            <div className="flex flex-col gap-2.5 items-center md:items-start">
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-px flex-shrink-0" style={{ backgroundColor: "#B89B72" }} />
                  <span className="font-body text-sm text-warm-brown">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}