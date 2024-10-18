import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import officeEquipImage from '../assets/officequip.jpg';
import printerServiceImage from '../assets/printerservice.jpg';
import managedImage from '../assets/managedimage.jpg';
import testimonialBg from '../assets/IMG_0372.jpg'; // Testimonial background image
import contactBg from '../assets/IMG_0372.jpg'; // Contact background image

// Card component
const OfficeEquipmentCard = ({ imageSrc, heading, subheading, paragraph, route }) => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img className="w-full h-full object-cover rounded-lg" src={imageSrc} alt={heading} />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 pl-0 md:pl-10 flex flex-col justify-center">
        {/* Headings */}
        <h1 className="text-4xl font-bold text-gray-900 uppercase">{heading}</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">{subheading}</h1>
        <p className="text-lg text-gray-700 mb-6">{paragraph}</p>

        {/* Button with navigation */}
        <button
          className="bg-[#0075B1] text-white py-2 px-4 rounded-lg font-semibold text-lg w-full md:w-32"
          onClick={() => navigate(route)} // Navigate to the specified route
        >
          Read More
        </button>
      </div>
    </div>
  );
};

// Testimonial Banner Component
const TestimonialBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-64 flex items-center justify-center"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <blockquote className="relative text-white text-center p-4">
        <p className="text-xl italic mb-4">"USAPRINT transformed our office with their reliable equipment and service!"</p>
        <footer className="font-semibold">- Happy Customer</footer>
      </blockquote>
    </div>
  );
};

// Contact Me Banner Component
const ContactMeBanner = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div
      className="relative bg-cover bg-center w-full h-64 flex items-center justify-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-white text-center p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Have questions? We're here to help!</p>
        <button
          className="bg-[#0075B1] text-white py-2 px-4 rounded-lg font-semibold"
          onClick={() => navigate('/contact')} // Use the navigate function
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

// Main component that renders multiple cards
const App = () => {
  return (
    <div className="p-8 space-y-20">
      {/* First Card - Office Equipment */}
      <OfficeEquipmentCard
        imageSrc={officeEquipImage}
        heading="Office"
        subheading="Equipment"
        paragraph="New Sharp and Xerox copiers and MFPs at competitive prices"
        route="/office-equipment" // Define the route for this card
      />

      {/* Testimonial Banner */}
      <TestimonialBanner />

      {/* Second Card - Printer Service */}
      <OfficeEquipmentCard
        imageSrc={printerServiceImage}
        heading="Printer"
        subheading="Service"
        paragraph="Top-notch printers and software at affordable prices"
        route="/printer-service" // Define the route for this card
        reverse={true} // Reverse prop is included but not used; can be ignored if not needed
      />

      {/* Contact Me Banner */}
      <ContactMeBanner />

      {/* Third Card - Managed Print Solutions */}
      <OfficeEquipmentCard
        imageSrc={managedImage}
        heading="Managed"
        subheading="Print Solutions"
        paragraph="Customized print solutions with 24/7 support and professional services"
        route="/managed-print" // Define the route for this card
      />
    </div>
  );
};

export default App;
