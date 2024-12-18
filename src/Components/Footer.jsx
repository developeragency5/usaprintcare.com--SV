import React from 'react';

// Footer Component
const Footer = () => {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <p className="text-base leading-relaxed text-gray-600 mt-7">
              At USA PRINT CARE, we specialize in top-notch printer service and repair. Whether you need assistance with your printer  or a reliable scanner copier printer, our expert technicians are ready to help. Trust us for all your copier  needs, ensuring your printing operations run smoothly and efficiently.
              </p>
             

              <ul className="flex items-center space-x-3 mt-9">
                {/* Add more social icons as needed */}
              </ul>
            </div>

            {/* Links for Company Section */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
              <ul className="mt-6 space-y-2">
                <li>
                  <a href="/" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Home </a>
                </li>
                <li>
                  <a href="/about" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> About </a>
                </li>
{/*                 <li>
                  <a href="/products" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Products </a>
                </li> */}
                <li>
                  <a href="/service" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Services </a>
                </li>
                <li>
                  <a href="/contact" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Contact </a>
                </li>
                <li>
                  <a href="/privacy" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Privacy Policies </a>
                </li>
                <li>
                  <a href="/terms" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Terms & Conditions</a>
                </li>
                <li>
                  <a href="/return&refund" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Return & Refund</a>
                </li>
                <li>
                  <a href="/disclaimer" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Disclaimer</a>
                </li>
              </ul>
            </div>

            {/* <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="/privayPolicies" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> PrivacyPolicies </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Terms & Conditions </a>
                </li>
                <li>
                  <a href="/refund-policies" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Refund Policies </a>
                </li>
                <li>
                  <a href="/disclaimer" className="flex text-base text-black transition-all duration-200 hover:text-blue-600"> Disclaimer </a>
                </li>
              </ul>
            </div> */}

            

            {/* Subscribe to Newsletter */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>
              <form action="#" method="POST" className="mt-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                  />
                </div>
                <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-[#0075B1] rounded-md hover:bg-[#0076b1bb]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>  

          <hr className="mt-16 mb-10 border-gray-200" />
          <p className="text-sm text-center text-gray-600">© Copyright 2021, All Rights Reserved by USA PRINT CARE</p>
        </div>
      </section>
    </div>
  );
};

// Updated Layout Component with only Footer
const Layout = () => {
  return (
    <>
      <Footer />
    </>
  );
};

export default Layout;
