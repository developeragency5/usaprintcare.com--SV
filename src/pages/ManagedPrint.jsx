import React from 'react'
import PreNavBar from '../Components/PreNavBar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import image from '../assets/manged-print-img.jpg.webp'

const ManagedPrint = () => {
  return (
    <div>
      <PreNavBar />
      <Navbar />
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
        {/* Center the content and add margin */}
        <h1 className="text-4xl font-bold text-gray-900 uppercase">OUR</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">SERVICES</h1>
        <div className="flex flex-col items-center justify-center w-[60%] mx-auto mt-16">
          <p>
            Managed Print Solutions can help your company streamline its
            printing and reduce costs by turning over the day-to-day upkeep to a
            company that specializes in printers and printer supplies.{' '}
            <strong>USA PRINT CARE</strong> will maintain your fleet of printers
            when you enroll in the Managed Print Solutions program and purchase
            USA PRINT Care premium remanufactured toner cartridges. As a seamless
            addition to your IT staff, <strong>USA PRINT CARE</strong> will
            handle everything printer-related in your day-to-day operations,
            from providing supplies to printer repair. Managed Print Solutions
            through <strong>USA PRINT CARE</strong> will free up your IT staff,
            and the “soft cost savings” will add up quickly.
          </p>
          <p className="mt-4">
            If your fleet is large enough, <strong>USA PRINT CARE</strong> will
            place a technician on-site, free of charge. An on-site technician
            ensures quick desktop supply delivery, rapid response time for
            repairs, and real-time updates for printer issues.
          </p>
        </div>
        <img src={image} alt="Managed Print Services" className="pt-10" />

        {/* Additional Content with Keywords */}
        <div className="flex flex-col items-center justify-center w-[60%] mx-auto mt-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Why Choose USA PRINT CARE for Printer Service and Repair
          </h2>
          <p>
            Finding reliable <strong>printer service and repair near me</strong> can
            be a challenge, but with <strong>USA PRINT CARE</strong>, we make it
            easy. Our expert technicians are certified and experienced in
            servicing all types of printers, including multi-function devices
            like <strong>scanner copier printers</strong>. Whether you need on-site
            service for a <strong>printer near me</strong> or a
            comprehensive Managed Print Solution, we are here to help.
          </p>

          <p className="mt-4">
            In addition to printer service, we offer full support for
            businesses looking to optimize their print environments. Our Managed
            Print Solutions not only reduce costs but also improve efficiency.
            By outsourcing your printer management to <strong>USA PRINT CARE</strong>,
            you can focus on what truly matters: running your business. 
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-6 text-gray-800">
            Get Professional Copier and Printer Solutions Near You
          </h2>
          <p>
            If you are searching for a reliable <strong>copier near me</strong> or need
            assistance with your office equipment, <strong>USAPRINT Care</strong> has you
            covered. We specialize in offering tailor-made solutions for
            businesses that require high-performance printers, copiers, and
            scanners. With our managed services, we ensure that all your devices
            are operating smoothly, providing regular maintenance and rapid
            repairs whenever necessary.
          </p>

          <p className="mt-4">
            Our experts work closely with your IT team to ensure seamless
            integration of <strong>copier, scanner, and printer</strong> systems.
            Whether you need a new printer setup or want to repair an existing
            machine, <strong>USAPRINT Care</strong> is the partner you can rely on for
            all your printing needs.
          </p>
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default ManagedPrint
