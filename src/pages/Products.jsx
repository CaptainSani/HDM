import React from 'react'
import Navbar from '../components/Navbar'
import { ContactSection } from '../components/aboutSections/ContactSection'
import Footer from '../components/Footer'
import HeroSection from '../components/productsSections/HeroSection'
import BrandsSection from '../components/productsSections/brandsSection'
import CategorySection from '../components/productsSections/CategorySection'
import TransmissionSection from '../components/productsSections/TransmissionSection'
import IndutrialSection from '../components/productsSections/IndutrialSection'
import SpecialtySection from '../components/productsSections/SpecialtySection'

const Products = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <CategorySection />
      <TransmissionSection />
      <IndutrialSection />
      <SpecialtySection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Products