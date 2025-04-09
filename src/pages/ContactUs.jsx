import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ContactSection from "../components/contactSections/ContactSection";
// import GetStartedSection from "../components/contactSections/GetStartedSection";
import GetStartedAndContactSection from "../components/contactSections/GetStartedAndContactSection";

const ContactUs = () => {
  return (
    <section>
      <div>
        <Navbar />
        <GetStartedAndContactSection />
        {/* <GetStartedSection />
        <ContactSection /> */}
        <Footer />
      </div>
    </section>
  );
};

export default ContactUs;
