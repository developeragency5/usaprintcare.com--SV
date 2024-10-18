import React from 'react';

const Testimonial = () => {
    return (
        <div className="relative overflow-hidden bg-cover bg-center h-[400px] bg-[#0075B1] flex items-center justify-center" style={{ backgroundImage: `url('/path/to/your/image.png')` }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 max-w-2xl text-center">
                <blockquote className="text-white text-xl font-medium mb-4">
                    “ I have been a customer of US Laser for over 15 years! Their printer repair techs are the best! Fast printer repair at a great price! ”
                </blockquote>
                <p className="text-lg text-white font-bold">
                    — Mark Johnson, IT Manager - US Foods
                </p>
            </div>
        </div>
    );
};

export default Testimonial;
