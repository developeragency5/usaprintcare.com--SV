import React from 'react';
import PreNavBar from '../Components/PreNavBar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import epson from '../assets/epson.jpg';
import hp from '../assets/hp.jpg';
import brothers from '../assets/brother.jpg';
import hp3 from '../assets/hp3.jpg';

const Office = () => {
  return (
    <div>
      <PreNavBar />
      <Navbar />
      <div className='animate-fade-in'>
        <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
          <h1 className="text-4xl font-bold text-gray-900 uppercase">OUR</h1>
          <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">SERVICES</h1>
        </div>
        <div>
          <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-3xl mx-auto text-center"> {/* Adjusted max-width */}
                <p className="mt-2 text-base font-normal leading-7 text-gray-600">
                  At USAPRINT Care, we are dedicated to providing exceptional printer service and repair solutions tailored to your business needs. Our certified technicians are equipped with the expertise to handle a wide range of printer brands and models, ensuring reliable support that minimizes downtime.
                </p>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                  We understand that efficient printing is crucial for your operations. That’s why our team specializes in both on-site and depot repairs, offering swift, professional service that keeps your printing devices running smoothly. Choose USAPRINT Care for all your printing solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                <div className="relative group">
                  <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={epson} alt="Epson EcoTank Eco 2800" />
                  </div>
                  <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                        <a href="#" title="Epson EcoTank Eco 2800">Epson EcoTank Eco 2800<span className="absolute inset-0" aria-hidden="true"></span></a>
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$99.00</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={hp} alt="HP OfficeJet Pro 8135e Wireless" />
                  </div>
                  <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                        <a href="#" title="HP OfficeJet Pro 8135e Wireless">HP OfficeJet Pro 8135e Wireless<span className="absolute inset-0" aria-hidden="true"></span></a>
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$299.00</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={brothers} alt="Brother HL-L2460DW Wireless Compact" />
                  </div>
                  <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                        <a href="#" title="Brother HL-L2460DW Wireless Compact">Brother HL-L2460DW Wireless Compact<span className="absolute inset-0" aria-hidden="true"></span></a>
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$199.00</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={hp3} alt="HP DeskJet 2855e Wireless" />
                  </div>
                  <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                        <a href="#" title="HP DeskJet 2855e Wireless">HP DeskJet 2855e Wireless<span className="absolute inset-0" aria-hidden="true"></span></a>
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$59.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Office;
