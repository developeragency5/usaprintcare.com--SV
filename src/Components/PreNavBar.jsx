import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'; // Use EnvelopeIcon for email

const PreNavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#0075B1] p-4 flex flex-col sm:flex-row justify-between items-center">
      <h1
        className="text-white text-2xl sm:text-3xl font-bold cursor-pointer mb-2 sm:mb-0"
        onClick={() => navigate('/')} // Navigate to home page when clicked
      >
        USA PRINT CARE
      </h1>
      {/* Centering the email */}
      <div className="flex-grow flex justify-center mb-2 sm:mb-0">
        <a href="mailto:info@gmail.com" className="flex items-center text-white text-sm sm:text-base">
          <EnvelopeIcon className="w-5 h-5 mr-1" /> {/* Change to EnvelopeIcon */}
          usaprintcare@outlook.com
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="tel:+10000000000" className="flex items-center text-white text-sm sm:text-base">
          <PhoneIcon className="w-5 h-5 mr-1" />
          (949)-273-2422
        </a>
      </div>
    </header>
  );
};

export default PreNavBar;
