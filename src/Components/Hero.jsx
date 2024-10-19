import React from "react";
import bg from '../assets/6096119865631949531.jpg';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const HeroSection = () => {
    const navigate = useNavigate(); // useNavigate hook to navigate to other pages

    return (
        <div
            className="relative bg-cover bg-center h-screen sm:h-[80vh]" // Set height to full on small screens, 80% on larger screens
            style={{ backgroundImage: `url(${bg})` }} // Correctly format the background image
        >
            {/* Overlay for darkening the background image */}
            <div className="absolute inset-0 bg-black bg-opacity-55"></div> {/* Increased opacity for better contrast */}

            {/* Content overlaid on top of the background image */}
            <div className="relative flex flex-col items-center justify-center h-full px-6 sm:px-12 md:px-20 text-white"> {/* Center items and responsive padding */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center shadow-md">USAPRINT</h1> {/* Added text shadow */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-lg text-center shadow-md">
                    Dedicated to lowering the cost of printer ownership by providing quality toner cartridges and office equipment with fast, reliable service and support.
                </p> {/* Added text shadow */}
                
                {/* Flex column on smaller screens */}
                <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-8"> {/* Responsive layout */}
                    {/* Clickable button without shadow */}
                    <button
                        onClick={() => navigate('/office-equipment')}
                        className="relative text-center py-4 px-6 bg-white bg-opacity-30 rounded-lg hover:bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out shadow-none w-full sm:w-60 lg:w-64"
                    >
                        <div className="text-4xl sm:text-5xl mb-2 text-white">💼</div> {/* Changed icon color to white */}
                        <p className="text-sm sm:text-lg text-white">Office <br/> Equipment</p> {/* Responsive label size */}
                    </button>

                    <button
                        onClick={() => navigate('/printer-service')}
                        className="relative text-center py-4 px-6 bg-white bg-opacity-30 rounded-lg hover:bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out shadow-none w-full sm:w-60 lg:w-64"
                    >
                        <div className="text-4xl sm:text-5xl mb-2 text-white">🔧</div> {/* Changed icon color to white */}
                        <p className="text-sm sm:text-lg text-white">Printer Service <br/> & Repair</p> {/* Responsive label size */}
                    </button>

                    <button
                        onClick={() => navigate('/managed-print')}
                        className="relative text-center py-4 px-6 bg-white bg-opacity-30 rounded-lg hover:bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out shadow-none w-full sm:w-60 lg:w-64"
                    >
                        <div className="text-4xl sm:text-5xl mb-2 text-white">📋</div> {/* Changed icon color to white */}
                        <p className="text-sm sm:text-lg text-white">Managed Print <br/> Solutions</p> {/* Responsive label size */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
