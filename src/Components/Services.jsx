import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import officeEquipImage from '../assets/officequip.jpg';
import printerServiceImage from '../assets/printerservice.jpg';
import managedImage from '../assets/managedimage.jpg';
import testimonialBg from '../assets/IMG_0372.jpg'; // Testimonial background image
import contactBg from '../assets/6098365076965802901.jpg'; // Contact background image

// Card component
const OfficeEquipmentCard = ({ imageSrc, heading, subheading, paragraph, route, reverse }) => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center bg-white p-8 max-w-6xl mx-auto`}>
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img className="w-full h-full object-cover rounded-lg" src={imageSrc} alt={heading} />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 pl-0 md:pl-10 flex flex-col justify-center">
        {/* Headings */}
        <h1 className="text-4xl font-bold text-gray-900 uppercase">{heading}</h1>
        <h1 className="text-4xl font-bold text-[#0075B1] uppercase mb-6">{subheading}</h1>
        <p className="text-lg text-gray-700 mb-6 pr-12">{paragraph}</p>

        {/* Button with navigation */}
        <button
          className="bg-[#0075B1] text-white py-2 px-4 rounded-lg font-semibold text-lg w-full md:w-32"
          onClick={() => navigate(route)} // Navigate to the specified route
        >
          Request Service
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
        <p className="text-xl italic mb-4">"USA PRINT transformed our office with their reliable equipment and service!"</p>
        <footer className="font-semibold">- Happy Customer</footer>
      </blockquote>
    </div>
  );
};

// Contact Me Banner Component
const ContactMeBanner = () => {
  const navigate = useNavigate(); // Use useNavigate for routing

  return (
    <div
      className="relative bg-cover bg-center w-full h-64 flex items-center justify-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-white text-center p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Have questions? We're here to help!</p>
        <button className="bg-[#0075B1] text-white py-2 px-4 rounded-lg font-semibold"
          onClick={() => navigate('/contact')}
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
        paragraph={
          <>
            <p>Looking for office equipment near you? We provide a variety of reliable copiers, scanners, and multifunction printers to meet your needs.</p>
            <p>Whether you need new equipment or maintenance services, we are your local experts in office solutions.</p>
          </>
        }
        route="/contact" // Define the route for this card
      />

      {/* Testimonial Banner */}
      <TestimonialBanner />

      {/* Second Card - Printer Service */}
      <OfficeEquipmentCard
        imageSrc={printerServiceImage}
        heading="Printer"
        subheading="Service"
        paragraph={
          <>
            <p>Our printer service and repair offerings are designed to keep your machines running efficiently.</p>
            <p>Whether you need help with a printer near you or require urgent repairs, our experienced technicians are ready to assist you.</p>
          </>
        }
        route="/printer-service" // Define the route for this card
        reverse={true} // Now this prop is used to reverse the layout
      />

      {/* Contact Me Banner */}
      <ContactMeBanner />

      {/* Third Card - Managed Print Solutions */}
      <OfficeEquipmentCard
        imageSrc={managedImage}
        heading="Managed"
        subheading="Print Solutions"
        paragraph={
          <>
            <p>Explore our managed print solutions that offer tailored services to optimize your printing processes.</p>
            <p>We provide support for your entire fleet of printers and copiers, ensuring you have what you need when you need it.</p>
          </>
        }
        route="/managed-print" // Define the route for this card
      />
    </div>
  );
};

export default App;
