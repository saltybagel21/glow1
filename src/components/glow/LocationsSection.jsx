import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const LOCATIONS = [
  {
    name: "NuSkinnovation Cape Town",
    address: "V&A Waterfront, Portswood Ridge, Level P3",
    hours: "Wednesday – Friday",
    link: "https://www.fresha.com/a/nuskinnovation-cape-town-cape-town-nuskinnovation-cape-town-kuk7j2hm",
    label: "Book at NuSkinnovation",
    ariaLabel: "Select NuSkinnovation location to book via Fresha",
  },
  {
    name: "Wax On Wax Off Cape Town",
    address: "13 Regent Road, 1st Floor, Sea Point",
    hours: "Monday – Tuesday",
    link: "https://www.fresha.com/a/wax-on-wax-off-cape-town-13-regent-road-xm6ovq5f",
    label: "Book at Wax On Wax Off",
    ariaLabel: "Select Wax On Wax Off location to book via Fresha",
  },
];

export default function LocationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="locations" className="py-20 md:py-32 bg-ivory" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Centred header */}
        <div ref={ref} className="text-center max-w-xl mx-auto mb-12">
          <motion.p
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Locations
          </motion.p>
          <motion.h2