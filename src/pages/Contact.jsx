import React from 'react'
import PreNavBar from '../Components/PreNavBar'
import Navbar from '../Components/Navbar'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ClockIcon, PrinterIcon } from '@heroicons/react/24/outline'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div>
      <PreNavBar/>
      <Navbar/>
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
        <h1 className="text-4xl font-bold text-gray-900 uppercase">CONTACT</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">US</h1>
      </div>
      
      {/* Grid with 6 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto my-10">
        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <MapPinIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Offline Location</h3>
            <p>123 Street Name, City, Country</p>
          </div>
        </div>
        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <PhoneIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Phone</h3>
            <p>+123 456 7890</p>
          </div>
        </div>
        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <PrinterIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Fax</h3>
            <p>+123 456 7891</p>
          </div>
        </div>
        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <ClockIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Offline Hours</h3>
            <p>Mon - Fri: 9am - 6pm</p>
          </div>
        </div>
        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <EnvelopeIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Email</h3>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="flex items-center p-6 border rounded-lg shadow-sm">
          <GlobeAltIcon className="w-12 h-12 text-[#0075B1]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Website</h3>
            <p>www.example.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto my-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16 text-center">Send Us a Message</h2>
        <form className="space-y-6 w-full max-w-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0075B1] focus:border-[#0075B1]" 
              placeholder="Your Name" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0075B1] focus:border-[#0075B1]" 
              placeholder="Your Email" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input 
              type="text" 
              name="subject" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0075B1] focus:border-[#0075B1]" 
              placeholder="Subject" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              name="message" 
              rows="4" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0075B1] focus:border-[#0075B1]" 
              placeholder="Your Message"
            ></textarea>
          </div>

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

      <Footer/>
      
    </div>

    
  )
}

export default Contact
