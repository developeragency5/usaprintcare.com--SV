import React, { useEffect, useState } from "react";
import bg from '../assets/6096119865631949531.jpg';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false); // State to control fade-in effect

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="relative bg-cover bg-center h-screen sm:h-[80vh]"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative flex flex-col items-center justify-center h-full px-6 sm:px-12 md:px-20 text-white">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-center shadow-md transition-opacity duration-700 transform ${fadeIn ? 'opacity-100 translate-y-0 animate-bounce' : 'opacity-0 translate-y-10'}`}>
                    USAPRINT CARE
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                    {/* Buttons with bounce animation */}
                    <button
                        className={`relative text-center py-6 px-8 min-w-[200px] bg-white bg-opacity-30 rounded-lg cursor-default ${fadeIn ? 'opacity-100 translate-y-0 animate-bounce' : 'opacity-0 translate-y-10'}`}
                    >
                        <div className="text-4xl sm:text-5xl mb-2 text-white">💼</div>
                        <p className="text-sm sm:text-lg text-white">Office <br /> Equipment</p>
                    </button>

                    <button
                        className={`relative text-center py-6 px-8 min-w-[200px] bg-white bg-opacity-30 rounded-lg cursor-default ${fadeIn ? 'opacity-100 translate-y-0 animate-bounce' : 'opacity-0 translate-y-10'}`}
                    >
                        <div className="text-4xl sm:text-5xl mb-2 text-white">🔧</div>
                        <p className="text-sm sm:text-lg text-white">Printer Service <br /> & Repair</p>
                    </button>

                    <button
                        className={`relative text-center py-6 px-8 min-w-[200px] bg-white bg-opacity-30 rounded-lg cursor-default ${fadeIn ? 'opacity-100 translate-y-0 animate-bounce' : 'opacity-0 translate-y-10'}`}
                    >
                        <div className="text-4xl sm:text-5xl mb-2 text-white">📋</div>
                        <p className="text-sm sm:text-lg text-white">Managed Print <br /> Solutions</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
