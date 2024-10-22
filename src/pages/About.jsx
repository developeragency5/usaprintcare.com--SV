import React from 'react';
import PreNavBar from '../Components/PreNavBar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import pic from '../assets/printer-repair-header-bg.jpeg'

const About = () => {
  return (
    <div className="animate-fade-in">
      <PreNavBar />
      <Navbar />

      <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
        <h1 className="text-4xl font-bold text-gray-900 uppercase">ABOUT</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">USAPRINT CARE</h1>
      </div>

      {/* About Us Content */}
      <div className="w-[80%] mx-auto my-10 text-center">
        <p className="text-lg text-gray-800 mb-4">
          At <strong>USAPRINT CARE</strong>, we are dedicated to providing top-notch <strong>printer service and repair</strong> solutions for businesses and individuals alike. Since our establishment in 1997, we have built a reputation as a trusted provider of <strong>printer and copier services</strong>, ensuring that our clients can rely on us for all their printing needs.
        </p>

        {/* <img src={pic} alt="Managed Print Services" className="pt-10" /> */}
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Local Printer Service and Repair Experts</h2>
        <p className="text-lg text-gray-800 mb-4">
          When searching for <strong>printer service and repair near me</strong>, look no further than USAPRINT CARE. Our team of experienced technicians is committed to delivering fast, reliable service tailored to your specific requirements. Whether you need immediate repairs or ongoing maintenance, we are here to help.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Printer Solutions</h2>
        <p className="text-lg text-gray-800 mb-4">
          Our comprehensive offerings include not just <strong>printer repair</strong>, but also services for <strong>scanner copier printers</strong>. We understand the importance of keeping your equipment running smoothly, which is why we offer preventative maintenance plans to ensure your devices operate at peak performance. If you find yourself in need of a <strong>copier near me</strong>, we have you covered with a wide range of models to meet your business demands.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose USAPRINT CARE?</h2>
        <ul className="list-disc list-inside text-lg text-gray-800 mb-4">
          <li className="mb-2"><strong>Expertise You Can Trust:</strong> With over two decades of experience in the industry, our knowledgeable team is well-equipped to handle any printing challenge.</li>
          <li className="mb-2"><strong>Quick Turnaround:</strong> We prioritize your needs and strive to minimize downtime with prompt service and repairs.</li>
          <li className="mb-2"><strong>Affordable Rates:</strong> Our competitive pricing ensures you receive high-quality service without breaking the bank.</li>
          <li className="mb-2"><strong>Customer Satisfaction:</strong> Our commitment to excellence means we go the extra mile to ensure our clients are satisfied with our services.</li>
        </ul>

        <p className="text-lg text-gray-800 mb-4">
          If you're looking for a reliable <strong>printer near me</strong>, or need assistance with <strong>copier services</strong>, reach out to us today. At USAPRINT CARE, we are committed to simplifying your printer management and enhancing your productivity.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-800 mb-4">
          Don’t let printer issues slow you down. Contact us at <strong>866-971-9080</strong> to speak with a support specialist and discover how USAPRINT CARE can assist you with all your printing needs. We are proud to serve our community and look forward to being your trusted partner for <strong>printer service and repair</strong>.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
