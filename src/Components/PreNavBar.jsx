import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'; // Use EnvelopeIcon for email

const PreNavBar = () => {
  const navigate = useNavigate();

  

  return (
    <header className="bg-[#0075B1] p-4 flex justify-between items-center">
      <h1
        className="text-white text-3xl font-bold cursor-pointer"
        onClick={() => navigate('/')} // Navigate to home page when clicked
      >
        USAPRINT CARE
      </h1>
      {/* Centering the email */}
      <div className="flex-grow flex justify-center">
        <a href="mailto:info@gmail.com" className="flex items-center text-white">
          <EnvelopeIcon className="w-5 h-5 mr-1" /> {/* Change to EnvelopeIcon */}
          info@gmail.com
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="tel:+10000000000" className="flex items-center text-white">
          <PhoneIcon className="w-5 h-5 mr-1" />
          +1 000 000 0000
        </a>
      </div>
    </header>
  );
};

export default PreNavBar;
