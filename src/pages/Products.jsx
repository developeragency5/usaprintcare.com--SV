import React from 'react';
import PreNavBar from '../Components/PreNavBar';
import Navbar from '../Components/Navbar';
import epson from '../assets/epson.jpg'
import hp from '../assets/hp.jpg'
import brothers from '../assets/brother.jpg'
import canon from '../assets/canon.jpg'
import hp3 from '../assets/hp3.jpg'

const Office = () => {
  return (
    <div>
      <PreNavBar />
      <Navbar />
      <div className='animate-fade-in ' > 
        <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16"> {/* Center the content and add margin */}
        <h1 className="text-4xl font-bold text-gray-900 uppercase">OUR</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">SERVICES</h1>
      </div>
      <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={epson} alt="" />
                </div>
               
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                                Epson EcoTank Eco 2800
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                        
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$99.00</p>
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={hp} alt="" />
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                                HP OfficeJet Pro 8135e wireless
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                        
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$299.00</p>
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={brothers} alt="" />
                </div>
                
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                            Brother HL-L2460DW Wireless Compact
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                        
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$199.00</p>
                      
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={hp3} alt="" />
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                            HP DeskJet 2855e Wireless
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
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
      </div></div>
      

    </div>
  );
};

export default Office;
