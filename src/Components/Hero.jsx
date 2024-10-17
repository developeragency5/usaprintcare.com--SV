import React, { useState } from 'react';
import img from '../assets/Printer 1.jpg'

const Hero = () => {        
    return (
        <div className="bg-gray-50">
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 flex justify-center items-center">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        <div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">USAPRINT CARE</h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

                                <form action="#" method="POST" className="mt-8 sm:mt-10">
                                    {/* Form element hidden */}
                                </form>

                                <p className="mt-2 text-xxl text-gray-600 sm:mt-8 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
                            </div>
                        </div>

                        {/* Image container hidden */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
