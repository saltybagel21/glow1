import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function PhilosophySection() {
  return (
    <section className="py-20 md:py-32 bg-cream" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image */}
          <Reveal delay={0}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=80&auto=format&fit=crop"
                alt="Close-up of glowing, healthy skin with soft botanical shadows"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div className="text-center md:text-left">
            <Reveal delay={0.1}>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-4">
                Our Philosophy
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1] mb-6">
                An aesthetic approach that feels considered,{" "}
                <em className="not-italic text-warm-brown">not overdone.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-sm md:text-base text-soft-black leading-[1.8] max-w-md mx-auto md:mx-0">
                Glow Health & Aesthetics focuses on subtle, personalised treatments that support skin confidence and natural-looking results. Every appointment is guided by care, precision and a deep respect for your individual features.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}