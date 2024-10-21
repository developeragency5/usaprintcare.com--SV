import React from 'react';
import PreNavBar from '../Components/PreNavBar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { WrenchIcon, ShieldCheckIcon, CubeTransparentIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline';

const Services = () => {
  return (
    <div>
      <PreNavBar />
      <Navbar />
      <div className='animate-fade-in'>
        <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
          <h1 className="text-4xl font-bold text-gray-900 uppercase">Our</h1>
          <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">Services</h1>
        </div>

        {/* Grid with 8 service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto my-10">
          <ServiceCard 
            icon={<WrenchIcon className="w-12 h-12 text-[#0075B1]" />}
            title="Comprehensive Printer Repair"
            description="Fast and reliable <strong>printer service and repair near me</strong> for all major printer brands."
          />
          <ServiceCard 
            icon={<ShieldCheckIcon className="w-12 h-12 text-[#0075B1]" />}
            title="Managed Print Services (MPS)"
            description="We handle all aspects of your printer fleet, from supplies to troubleshooting, ensuring your <strong>printer near me</strong> needs are met."
          />
          <ServiceCard 
            icon={<CogIcon className="w-12 h-12 text-[#0075B1]" />}
            title="Printer Installation & Setup"
            description="Expert setup and configuration of network printers, including <strong>scanner copier printers</strong>."
          />
          <ServiceCard 
            icon={<UserGroupIcon className="w-12 h-12 text-[#0075B1]" />}
            title="Customer Support"
            description="24/7 support for printer issues, with quick response times for your <strong>copier near me</strong> inquiries."
          />
          <ServiceCard 
            icon={<CubeTransparentIcon className="w-12 h-12 text-[#0075B1]" />}
            title="Printer Supply Management"
            description="We ensure that your printer never runs out of toner or ink, providing peace of mind for your <strong>printer service</strong>."
          />
          <ServiceCard 
            icon={<ShieldCheckIcon className="w-12 h-12 text-[#0075B1]" />}
            title="Fleet Management"
            description="Centralized management of your printer fleet for efficiency and savings—your ultimate <strong>printer service</strong> partner."
          />
          {/* New Service Card 1 */}
          <ServiceCard 
            icon={<WrenchIcon className="w-12 h-12 text-[#0075B1]" />}
            title="On-Site Maintenance"
            description="Convenient on-site maintenance services to keep your printers operating at peak performance."
          />
          {/* New Service Card 2 */}
          <ServiceCard 
            icon={<UserGroupIcon className="w-12 h-12 text-[#0075B1]" />}
            title="Training & Workshops"
            description="Training sessions for your staff on optimal printer use and troubleshooting basic issues."
          />
        </div>

        {/* Additional Section: Our Expertise */}
        <section className="bg-gray-100 p-10 my-10 rounded-lg shadow-md w-[80%] mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Expertise</h2>
          <p className="text-gray-700 mb-4">
            At USAPRINT Repair, we specialize in providing comprehensive <strong>printer service and repair</strong> solutions tailored to meet the needs of businesses of all sizes. With over two decades of experience, we have built a reputation for excellence in <strong>printer repair</strong>, supply management, and customer support.
          </p>
          <p className="text-gray-700 mb-4">
            Our team consists of highly skilled technicians who are dedicated to ensuring your <strong>printer</strong> and <strong>copier</strong> equipment operates smoothly and efficiently. We are committed to delivering exceptional service and support to our clients, making sure their printing operations are never interrupted.
          </p>
        </section>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-center w-[80%] mx-auto my-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16 text-center">Need Our Services?</h2>
          <p className="text-center text-lg text-gray-700 mb-6">Contact us today and let us help you manage your printing needs effectively.</p>
          <button className="px-6 py-2 bg-[#0075B1] text-white font-semibold rounded-md hover:bg-[#005F8C] transition">
            Get in Touch
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description }) => (
  <div className="flex items-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
    {icon}
    <div className="ml-4">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

export default Services;
