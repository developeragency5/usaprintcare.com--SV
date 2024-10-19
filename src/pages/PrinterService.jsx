import React from 'react';
import PreNavBar from '../Components/PreNavBar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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
            Is this happening to you? Your IT team doesn’t want to repair printers, and when Kevin in Accounting enthusiastically says “I can fix it!” you know things are going to get worse... way, way worse. We are here to help! Our printer repair techs repair printers all day, every day. It’s all they do! They are able to diagnose printer problems quickly and advise on the most cost-effective solution. We repair laser printers, large-format printers, and label printers. We service HP, Lexmark, Dell, IBM, Brother, Zebra, Sato, and most other major printer brands. Call <a href="tel:8669719080" className="text-blue-500 font-bold">866-971-9080</a> to get help with a printer today!
          </p>

          {/* Added Services Section */}
          <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Printer Repairs</h4>
              <p className="text-gray-500">
                Fast and reliable repairs for all printer brands. Our technicians specialize in diagnosing and fixing printer issues on-site.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Maintenance Plans</h4>
              <p className="text-gray-500">
                Regular maintenance to prevent downtime. We offer tailored plans for businesses to ensure their printers run smoothly.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Supply Services</h4>
              <p className="text-gray-500">
                We provide toner, ink, and other supplies at competitive prices. Keep your printers stocked and ready to go!
              </p>
            </div>
          </div>

          {/* Customer Testimonials */}
          <h3 className="text-2xl font-semibold mb-6">What Our Clients Say</h3>
          <div className="max-w-2xl mx-auto mb-12">
            <blockquote className="border-l-4 border-gray-900 pl-4 italic">
              "US Laser, Inc. saved our business! Their quick response time and expert knowledge are unmatched."
              <cite className="block mt-2 text-right">- Sarah T., Office Manager</cite>
            </blockquote>
            <blockquote className="border-l-4 border-gray-900 pl-4 italic mt-4">
              "We rely on US Laser for all our printer needs. They are professional and always go the extra mile."
              <cite className="block mt-2 text-right">- John D., IT Director</cite>
            </blockquote>
          </div>
        </div>

        {/* Bottom Call-to-Action Section */}
        <div className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <p className="text-lg font-semibold mb-4">
              FOR EMERGENCY PRINTER REPAIRS OR EXPEDITED SERVICE, PLEASE CALL <span className="font-bold">866-971-9080</span>.
            </p>
            <a href="/get-a-quote" className="bg-transparent border border-white text-white px-6 py-3 inline-block hover:bg-white hover:text-gray-900 transition">
              REQUEST SERVICE OR GET A QUOTE
            </a>
          </div>
        </div>
      </section>

<Footer></Footer>

    </div>
  );
};

export default Office;
