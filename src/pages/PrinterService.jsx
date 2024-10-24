import React from 'react';
import PreNavBar from '../Components/PreNavBar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import image from '../assets/print-services.webp'

const Office = () => {
  return (
    <div>
      <PreNavBar />
      <Navbar />
      <section className="bg-white text-center py-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
            <h1 className="text-4xl font-bold text-gray-900 uppercase">Our</h1>
            <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">Services</h1>
          </div>

          {/* Paragraph Section */}
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Struggling with printer issues? Look no further! At USAPRINT Care, we offer exceptional printer service and repair near you. Our dedicated technicians handle all types of printer problems, ensuring your printer is up and running in no time. From laser printers to scanner copier printers, we've got you covered. Call <a href="tel:1000000000" className="text-blue-500 font-bold">100-000-0000</a> for immediate assistance with your copier near me!
          </p>

          {/* Image tag to add after the paragraph */}
          <img src={image} alt="Managed Print Solutions" className="mx-auto my-8" />

          {/* Additional content on Managed Print Solutions */}
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Managed Print Solutions can help your company streamline its printing and reduce costs by turning over the day-to-day upkeep to a company that specializes in printers and printer supplies. Precision Printer Services will maintain your fleet of printers when you enroll in the Managed Print Solutions program and purchase PPS premium remanufactured toner cartridges. As a seamless addition to your IT staff, Precision Printer Services will handle everything printer related in your daily operations, from providing supplies to printer repair. Managed Print Solutions through PPS will free up your IT staff, and the “soft costs savings” will add up quickly. If your fleet is large enough, Precision Printer Services will place a technician on-site, free of charge. An on-site technician ensures quick desktop supply delivery, rapid response time for repairs, and real-time updates for printer issues.
          </p>

          {/* Added Services Section */}
          <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Printer Repairs</h4>
              <p className="text-gray-500">
                Fast and reliable printer service and repair near me for all major brands. Our technicians specialize in diagnosing and fixing printer issues on-site.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Maintenance Plans</h4>
              <p className="text-gray-500">
                Regular maintenance to prevent downtime. We offer tailored plans for businesses to ensure their scanner copier printers run smoothly.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Supply Services</h4>
              <p className="text-gray-500">
                We provide toner, ink, and other supplies at competitive prices. Keep your printers stocked and ready to go with our reliable copier near me services!
              </p>
            </div>
          </div>

          {/* Customer Testimonials */}
          <h3 className="text-2xl font-semibold mb-6">What Our Clients Say</h3>
          <div className="max-w-2xl mx-auto mb-12">
            <blockquote className="border-l-4 border-gray-900 pl-4 italic">
              "USAPRINT Care saved our business! Their quick response time and expert knowledge are unmatched."
              <cite className="block mt-2 text-right">- Sarah T., Office Manager</cite>
            </blockquote>
            <blockquote className="border-l-4 border-gray-900 pl-4 italic mt-4">
              "We rely on USAPRINT Care for all our printer needs. They are professional and always go the extra mile."
              <cite className="block mt-2 text-right">- John D., IT Director</cite>
            </blockquote>
          </div>
        </div>

        {/* Bottom Call-to-Action Section */}
        <div className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <p className="text-lg font-semibold mb-4">
              FOR EMERGENCY PRINTER REPAIRS OR EXPEDITED SERVICE, PLEASE CALL <span className="font-bold">100-000-0000</span>.
            </p>
            <a href="/get-a-quote" className="bg-transparent border border-white text-white px-6 py-3 inline-block hover:bg-white hover:text-gray-900 transition">
              REQUEST SERVICE OR GET A QUOTE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Office;
