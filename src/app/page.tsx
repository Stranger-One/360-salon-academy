"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import Cources from "@/components/Cources";
import Gallery from "@/components/Gallery";
import Stories from "@/components/Stories";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

const SalonWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Our Story */}
      <OurStory />

      {/* Salon Services */}
      <Services />

      {/* Academy Courses */}
      <Cources />

      {/* Gallery */}
      <Gallery />

      {/* Client Stories */}
      <Stories />

      {/* Get In Touch - Tabbed Form */}
      <GetInTouch />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SalonWebsite;
