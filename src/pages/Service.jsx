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

      {/* Page Title */}
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
        <h1 className="text-4xl font-bold text-gray-900 uppercase">Our</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">Services</h1>
      </div>

      {/* Grid with 6 service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto my-10">
        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <WrenchIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Comprehensive Printer Repair</h3>
            <p>Fast and reliable repair services for all major printer brands.</p>
          </div>
        </div>

        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <ShieldCheckIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Managed Print Services (MPS)</h3>
            <p>We handle all aspects of your printer fleet, from supplies to troubleshooting.</p>
          </div>
        </div>

        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <CogIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Printer Installation & Setup</h3>
            <p>Expert setup and configuration of network printers, wireless printing, and more.</p>
          </div>
        </div>

        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <UserGroupIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Customer Support</h3>
            <p>24/7 support for printer issues, with quick response times.</p>
          </div>
        </div>

        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <CubeTransparentIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Printer Supply Management</h3>
            <p>We ensure that your printer never runs out of toner or ink.</p>
          </div>
        </div>

        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <ShieldCheckIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Fleet Management</h3>
            <p>Centralized management of your printer fleet for efficiency and savings.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto my-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16 text-center">Need Our Services?</h2>
        <p className="text-center text-lg text-gray-700 mb-6">Contact us today and let us help you manage your printing needs effectively.</p>
        <button className="px-6 py-2 bg-[#0075B1] text-white font-semibold rounded-md hover:bg-[#005F8C] transition">
          Get in Touch
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
