 import React from 'react';
import PreNavBar from '../Components/PreNavBar';
import Navbar from '../Components/Navbar';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ClockIcon, PrinterIcon } from '@heroicons/react/24/outline';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div>
      <PreNavBar />
      <Navbar />
      <div className='animate-fade-in '>
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
        <h1 className="text-4xl font-bold text-gray-900 uppercase">CONTACT</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">US</h1>
      </div>
      
      {/* Grid with Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto my-10">
        <ContactCard 
          icon={<MapPinIcon className="w-12 h-12 text-[#0075B1]" />}
          title="Address"
          detail="1968 S Coast Hwy #3514 Laguna Beach, CA 92651"
        />
        <ContactCard 
          icon={<PhoneIcon className="w-12 h-12 text-[#0075B1]" />}
          title="Phone"
          detail="+1-949-273-2422"
        />
        <ContactCard 
          icon={<PrinterIcon className="w-12 h-12 text-[#0075B1]" />}
          title="Fax"
          detail="(949)-273-2422"
        />
        <ContactCard 
          icon={<ClockIcon className="w-12 h-12 text-[#0075B1]" />}
          title="Offline Hours"
          detail="Mon - Fri: 9am - 6pm"
        />
        <ContactCard 
          icon={<EnvelopeIcon className="w-12 h-12 text-[#0075B1]" />}
          title="Email"
          detail="usaprintcare@outlook.com"
        />
        <ContactCard 
          icon={<GlobeAltIcon className="w-12 h-12 text-[#0075B1]" />}
          title="Website"
          detail="www.usaprintcare.com"
        />
      </div>

      {/* Contact Form */}
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto my-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16 text-center">Send Us a Message</h2>
        <form className="space-y-6 w-full max-w-lg">
          <FormInput label="Name" type="text" placeholder="Your Name" />
          <FormInput label="Email" type="email" placeholder="Your Email" />
          <FormInput label="Subject" type="text" placeholder="Subject" />
          <FormTextArea label="Message" rows="4" placeholder="Your Message" />
          
          <div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-[#0075B1] text-white font-semibold rounded-md hover:bg-[#005F8C] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* FAQs Section */}
      <div className="bg-gray-100 p-10 my-10 rounded-lg shadow-md w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQ question="What should I do if I need immediate assistance?" answer="If you need immediate assistance, please call our customer support at +123 456 7890." />
          <FAQ question="How long does it take to repair a printer?" answer="Typically, repairs take 1-2 business days, depending on the issue and availability of parts." />
          <FAQ question="Can I track the status of my service request?" answer="Yes, once your request is submitted, you'll receive an email with tracking information." />
        </div>
      </div>

      {/* Commitment to Customer Service */}
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto my-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Your Satisfaction is Our Priority</h2>
        <p className="text-center text-lg text-gray-700 mb-6">At US Laser, Inc., we are committed to providing top-notch service to all our customers. Your feedback helps us improve and serve you better.</p>
      </div>
      </div>
      

      <Footer />
    </div>
  );
};

// Contact Card Component
const ContactCard = ({ icon, title, detail }) => (
  <div className="flex items-center p-6 border rounded-lg shadow-sm">
    {icon}
    <div className="ml-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{detail}</p>
    </div>
  </div>
);

// Form Input Component
const FormInput = ({ label, type, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input 
      type={type} 
      name={label.toLowerCase()} 
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0075B1] focus:border-[#0075B1]" 
      placeholder={placeholder} 
    />
  </div>
);

// Form TextArea Component
const FormTextArea = ({ label, rows, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea 
      name={label.toLowerCase()} 
      rows={rows} 
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0075B1] focus:border-[#0075B1]" 
      placeholder={placeholder}
    ></textarea>
  </div>
);

// FAQ Component
const FAQ = ({ question, answer }) => (
  <div className="border-b pb-4">
    <h3 className="font-semibold text-gray-800">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Contact;
