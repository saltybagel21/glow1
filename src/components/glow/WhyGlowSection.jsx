import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const POINTS = [
  { number: "01", title: "Doctor-led approach", description: "Every treatment is guided by medical expertise, precision and professional care." },
  { number: "02", title: "Natural-looking results", description: "Subtle enhancements that refresh and restore, never dramatic or overdone." },
  { number: "03", title: "Personalised treatment planning", description: "Each plan is tailored to your skin, goals and individual features." },
  { number: "04", title: "Premium techniques and products", description: "Only trusted, high-quality treatment methods and formulations are used." },
  { number: "05", title: "Calm, discreet client experience", description: "A relaxed, private atmosphere where your comfort is the priority." },
  { number: "06", title: "Convenient Cape Town locations", description: "Two accessible locations across Cape Town for your convenience." },
];

export default function WhyGlowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 bg-ivory" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Centred header */}
        <div ref={ref} className="text-center mb-12">
          <motion.p
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Why Glow
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Quiet confidence.{" "}
            <em className="not-italic text-warm-brown">Considered care.</em>
          </motion.h2>
        </div>

        {/* Points list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {POINTS.map((p, i) => (
            <div
              key={p.number}
              className="flex gap-5 py-5"
              style={{ borderBottom: i < POINTS.length - 1 ? "0.5px solid #D8C3A5" : "none" }}
            >
              <span className="font-body text-xs tracking-[0.2em] text-champagne pt-0.5 w-7 flex-shrink-0">
                {p.number}
              </span>
              <div>
                <h3 className="font-display text-xl text-deep-olive mb-1">{p.title}</h3>
                <p className="font-body text-sm text-warm-brown leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}