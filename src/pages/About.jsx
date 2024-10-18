import React from 'react'
import PreNavBar from '../Components/PreNavBar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
      <PreNavBar/>
      <Navbar/>

      {/* About Us Heading */}
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-16">
        <h1 className="text-4xl font-bold text-gray-900 uppercase">ABOUT</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">US</h1>
      </div>

      {/* About Us Content */}
      <div className="w-[80%] mx-auto my-10 text-center">
        <p className="text-lg text-gray-800 mb-4">
          We are a company with a passion for helping.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Founded in 1997, US Laser, Inc. is a print solutions company that is passionate about helping our customers. We are dedicated to providing our customers with the best products and amazing service. Our highly trained, self-motivated employees are here to remove the burden of printer support and supplies from your business. If maintaining your printer fleet has become a hassle, please contact us today! We will not waste your time. We will work swiftly to identify and resolve your pain points!
        </p>

        {/* Contact Info Section */}
        <div className="mt-8">
          <p className="text-xl font-semibold text-gray-900">
            Speak to a Support Specialist: <span className="text-[#0075B1]">866-971-9080</span>
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default About
