import React from 'react';
import PreNavBar from '../Components/PreNavBar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div>
      <PreNavBar />
      <Navbar />

      {/* About Us Heading */}
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
        <h1 className="text-4xl font-bold text-gray-900 uppercase">ABOUT</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">US</h1>
      </div>

      {/* About Us Content */}
      <div className="w-[80%] mx-auto my-10 text-center">
        <p className="text-lg text-gray-800 mb-4">
          US Laser, Inc. is a trusted name in printer solutions, known for providing industry-leading support and services. 
          Since our establishment in 1997, we have been committed to helping businesses maintain high operational efficiency 
          by offering fast, reliable, and comprehensive printer support.
        </p>
        
        <p className="text-lg text-gray-800 mb-4">
          We take pride in being more than just a service provider. With over two decades of experience, our mission is to simplify 
          printer management for our clients. From troubleshooting and repairs to supplies and maintenance, US Laser, Inc. is your one-stop-shop 
          for all your printer-related needs. Whether it's resolving a complex hardware issue or sourcing the right parts, we act quickly 
          and efficiently to minimize downtime and optimize productivity.
        </p>

        {/* Our Core Values */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-800">
            <li className="mb-4">**Customer-Centric:** We put our customers' needs first, tailoring our services to meet their unique requirements.</li>
            <li className="mb-4">**Reliability:** You can count on us for quick responses and solutions that last.</li>
            <li className="mb-4">**Innovation:** We stay ahead of industry trends to bring you the latest in printer technology and solutions.</li>
            <li className="mb-4">**Commitment to Excellence:** We are dedicated to providing high-quality service with precision and care.</li>
            <li className="mb-4">**Sustainability:** Our solutions are eco-conscious, ensuring reduced waste and extended product life cycles.</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <p className="text-lg text-gray-800 mb-4">
            At US Laser, Inc., we specialize in:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800">
            <li className="mb-4">**Printer Repair Services:** From small office printers to industrial machines, our expert technicians are trained to repair a wide range of brands and models.</li>
            <li className="mb-4">**Preventative Maintenance:** Keep your devices running smoothly with our regular maintenance checks to prevent costly breakdowns.</li>
            <li className="mb-4">**Printer Supplies:** We provide top-quality toner cartridges, ink, and parts to ensure your printers are always well-stocked and operational.</li>
            <li className="mb-4">**Printer Fleet Management:** Let us handle the complexities of managing your printer fleet, from monitoring performance to timely repairs and upgrades.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-800 mb-4">
            Choosing US Laser, Inc. means working with a team that’s deeply invested in your success. We understand the frustration and downtime 
            that printer issues can cause, which is why we prioritize fast, reliable service. Our goal is to ensure your printers are operating 
            at peak performance, so you can focus on what matters most—running your business. 
          </p>
          <p className="text-lg text-gray-800 mb-4">
            No problem is too small or too complex. Whether it’s a last-minute repair or a long-term maintenance plan, we’ve got you covered.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8">
          <p className="text-xl font-semibold text-gray-900">
            Speak to a Support Specialist: <span className="text-[#0075B1]">866-971-9080</span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
