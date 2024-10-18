import React from "react";
import bg from '../assets/6096119865631949531.jpg';
import { useNavigate } from 'react-router-dom'; // assuming you're using react-router for navigation

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
            <div className="relative flex flex-col items-start justify-center h-full px-20 text-white"> {/* Adjusted padding for right-side alignment */}
                <h1 className="text-7xl font-bold mb-6">USAPRINT</h1> {/* Increased font size */}
                <p className="text-2xl mb-10 max-w-lg">
                    Dedicated to lowering the cost of printer ownership by providing quality toner cartridges and office equipment with fast, reliable service and support.
                </p> {/* Increased font size */}
                
                <div className="flex space-x-8">
                    {/* Clickable button without shadow */}
                    <button
                        onClick={() => navigate('/office-equipment')}
                        className="relative text-center py-8 px-6 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 hover:scale-105 transition duration-300 ease-in-out shadow-none w-64"
                    >
                        <div className="text-6xl mb-4 text-[#fc6c2c]">💼</div> {/* Enlarged Icon */}
                        <p className="text-xl text-white">Office <br/> Equipment </p> {/* Increased label size */}
                    </button>

                    <button
                        onClick={() => navigate('/printer-service')}
                        className="relative text-center py-8 px-6 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 hover:scale-105 transition duration-300 ease-in-out shadow-none w-64"
                    >
                        <div className="text-6xl mb-4 text-[#fc6c2c]">🔧</div> {/* Enlarged Icon */}
                        <p className="text-xl text-white">Printer Service <br/>& Repair</p> {/* Increased label size */}
                    </button>

                    <button
                        onClick={() => navigate('/managed-print')}
                        className="relative text-center py-8 px-6 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 hover:scale-105 transition duration-300 ease-in-out shadow-none w-64"
                    >
                        <div className="text-6xl mb-4 text-[#fc6c2c]">📋</div> {/* Enlarged Icon */}
                        <p className="text-xl text-white">Managed Print <br/>Solutions</p> {/* Increased label size */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
