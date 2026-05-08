import { useState } from "react";
import Header from "../components/glow/Header";
import HeroSection from "../components/glow/HeroSection";
import PhilosophySection from "../components/glow/PhilosophySection";
import TreatmentsSection from "../components/glow/TreatmentsSection";
import EditorialSection from "../components/glow/EditorialSection";
import WhyGlowSection from "../components/glow/WhyGlowSection";
import AboutSection from "../components/glow/AboutSection";
import InstagramGrid from "../components/glow/InstagramGrid";
import LocationsSection from "../components/glow/LocationsSection";
import FaqSection from "../components/glow/FaqSection";
import PricingSection from "../components/glow/PricingSection";
import CtaSection from "../components/glow/CtaSection";
import Footer from "../components/glow/Footer";
import BookingModal from "../components/glow/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F1E8" }}>
      <Header onBookNow={() => setBookingOpen(true)} />

      <main>
        <HeroSection onBookNow={() => setBookingOpen(true)} />
        <PhilosophySection />
        <TreatmentsSection onBookNow={() => setBookingOpen(true)} />
        <PricingSection onBookNow={() => setBookingOpen(true)} />
        <EditorialSection onBookNow={() => setBookingOpen(true)} />
        <WhyGlowSection />
        <AboutSection />
        <InstagramGrid />
        <LocationsSection />
        <FaqSection />
        <CtaSection onBookNow={() => setBookingOpen(true)} />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}