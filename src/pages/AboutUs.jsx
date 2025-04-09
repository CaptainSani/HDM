"use client"

import { HeroSection } from "../components/aboutSections/HeroSection";
import { MissionSection } from "../components/aboutSections/MissionSection";
import { CommitmentSection } from "../components/aboutSections/CommitmentSection";
import { FeaturesSection } from "../components/aboutSections/FeaturesSection";
import { BranchesSection } from "../components/aboutSections/BranchesSection";
import { TestimonialSection } from "../components/aboutSections/TestimonialSection";
import { ContactSection } from "../components/aboutSections/ContactSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <CommitmentSection />
        <FeaturesSection />
        <BranchesSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}