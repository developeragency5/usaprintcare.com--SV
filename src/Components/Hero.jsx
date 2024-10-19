import React, { useEffect, useState } from "react"; // Import useEffect and useState
import bg from '../assets/6096119865631949531.jpg';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false); // State to control fade-in effect

    useEffect(() => {
        // Set the fade-in effect after the component mounts
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 100); // Delay for a smoother effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="relative bg-cover bg-center h-screen sm:h-[80vh]"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative flex flex-col items-center justify-center h-full px-6 sm:px-12 md:px-20 text-white">
                {/* Added transition classes for the heading */}
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-center shadow-md transition-opacity duration-700 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    USAPRINT CARE
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                    {/** Button with animations **/}
                    <button
                        onClick={() => navigate('/office-equipment')}
                        className={`relative text-center py-4 px-6 bg-white bg-opacity-30 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-opacity-40 hover:scale-105 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <div className="text-4xl sm:text-5xl mb-2 text-white">💼</div>
                        <p className="text-sm sm:text-lg text-white">Office <br/> Equipment</p>
                    </button>

                    <button
                        onClick={() => navigate('/printer-service')}
                        className={`relative text-center py-4 px-6 bg-white bg-opacity-30 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-opacity-40 hover:scale-105 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <div className="text-4xl sm:text-5xl mb-2 text-white">🔧</div>
                        <p className="text-sm sm:text-lg text-white">Printer Service <br/> & Repair</p>
                    </button>

                    <button
                        onClick={() => navigate('/managed-print')}
                        className={`relative text-center py-4 px-6 bg-white bg-opacity-30 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-opacity-40 hover:scale-105 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <div className="text-4xl sm:text-5xl mb-2 text-white">📋</div>
                        <p className="text-sm sm:text-lg text-white">Managed Print <br/> Solutions</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
