import React from 'react'
import PreNavBar from '../Components/PreNavBar'
import Navbar from '../Components/Navbar'
import image from '../assets/manged-print-img.jpg.webp'

const ManagedPrint = () => {
  return (
    <div>
      <PreNavBar />
      <Navbar />
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16"> {/* Center the content and add margin */}
        <h1 className="text-4xl font-bold text-gray-900 uppercase">OUR</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">SERVICES</h1>
        <div classname = "flex flex-col items-center justify-center w-[60%] mx-auto mt-16">
        <p>Managed Print Solutions can help your company streamline its printing, and reduce costs by turning over the day to day upkeep to a company that specializes in printers and printer supplies. Precision Printer Services will maintain your fleet of printers, when you enroll in the Managed Print Solutions program and purchase PPS premium remanufactured toner cartridges. As a seamless addition to your IT staff, Precision Printer Services will handle everything printer related in your day to day operations, from providing supplies to printer repair. Managed Print Solutions through PPS will free up your IT staff, and the “soft costs savings” will add up quickly.

If your fleet is large enough, Precision Printer Services will place a technician on-site, free of charge. An on-site technician ensures quick desktop supply delivery, rapid response time for repairs, and real-time updates for printer issues.</p>
        </div>
        <img src={image}
        className="pt-10"/>
      </div>
    </div>
  )
}

export default ManagedPrint
