import React from "react";
import Navbar from "../components/Navbar";
import { HeroSection } from "../components/serviceSections/HeroSection";
import { ContactSection } from "../components/aboutSections/ContactSection";
import Footer from "../components/Footer";
import WholesaleDistribution from "../components/serviceSections/WholesaleDistribution";
import { DistributionSection } from "../components/serviceSections/DistributionSection";
import PartnershipOpportunities from "../components/serviceSections/PartnershipOpportunities";

import ExpertSection from "../components/serviceSections/ExpertSection";


const Services = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WholesaleDistribution />
      <ExpertSection />
      <DistributionSection />
      <PartnershipOpportunities />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Services;
