import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreNavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#0075B1] p-4">
      <h1
        className="container mx-auto text-white text-3xl font-bold cursor-pointer"
        onClick={() => navigate('/')} // Navigate to home page when clicked
      >
        USAPRINT
      </h1>
    </header>
  );
};

export default PreNavBar;