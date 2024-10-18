import React from "react";
import bg from '../assets/6096119865631949531.jpg';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const HeroSection = () => {
    const navigate = useNavigate(); // useNavigate hook to navigate to other pages

    return (
        <div
            className="relative bg-cover bg-center h-[80vh]" // Set height to 80% of the viewport height
            style={{ backgroundImage: `url(${bg})` }} // Correctly format the background image
        >
            {/* Overlay for darkening the background image */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content overlaid on top of the background image */}
            <div className="relative flex flex-col items-start justify-center h-full px-6 sm:px-12 md:px-20 text-white"> {/* Responsive padding */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-center">USAPRINT</h1> {/* Responsive font size and center alignment */}
                <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-lg text-center">
                    Dedicated to lowering the cost of printer ownership by providing quality toner cartridges and office equipment with fast, reliable service and support.
                </p> {/* Responsive font size */}
                
                {/* Flex column on smaller screens */}
                <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-8 895:flex-col"> {/* Adjusted for custom breakpoint */}
                    {/* Clickable button without shadow */}
                    <button
                        onClick={() => navigate('/office-equipment')}
                        className="relative text-center py-4 px-6 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 hover:scale-105 transition duration-300 ease-in-out shadow-none w-full sm:w-64"
                    >
                        <div className="text-5xl mb-2 text-[#fc6c2c]">💼</div> {/* Responsive icon size */}
                        <p className="text-lg sm:text-xl text-white">Office <br/> Equipment</p> {/* Responsive label size */}
                    </button>

                    <button
                        onClick={() => navigate('/printer-service')}
                        className="relative text-center py-4 px-6 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 hover:scale-105 transition duration-300 ease-in-out shadow-none w-full sm:w-64"
                    >
                        <div className="text-5xl mb-2 text-[#fc6c2c]">🔧</div> {/* Responsive icon size */}
                        <p className="text-lg sm:text-xl text-white">Printer Service <br/> & Repair</p> {/* Responsive label size */}
                    </button>

                    <button
                        onClick={() => navigate('/managed-print')}
                        className="relative text-center py-4 px-6 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 hover:scale-105 transition duration-300 ease-in-out shadow-none w-full sm:w-64"
                    >
                        <div className="text-5xl mb-2 text-[#fc6c2c]">📋</div> {/* Responsive icon size */}
                        <p className="text-lg sm:text-xl text-white">Managed Print <br/> Solutions</p> {/* Responsive label size */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
