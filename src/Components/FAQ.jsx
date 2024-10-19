import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'What types of printers do you repair?',
            answer: 'We repair a wide variety of printers, including inkjet, laser, and multifunction models from major brands like HP, Canon, Epson, and Brother.',
            open: false
        },
        {
            question: 'How do I know if my printer is worth repairing?',
            answer: 'If your printer is experiencing frequent issues or is several years old, we can evaluate its condition and provide you with an estimate. Generally, if the repair costs are less than half the price of a new printer, it’s worth considering a repair.',
            open: false
        },
        {
            question: 'How long does a typical printer repair take?',
            answer: 'Most repairs are completed within 1-3 business days, depending on the complexity of the issue and the availability of parts. We’ll keep you informed throughout the process.',
            open: false
        },
        {
            question: 'Do you offer a warranty on your repairs?',
            answer: 'Yes, we provide a warranty on all repairs, typically covering parts and labor for 30 to 90 days, depending on the service. This ensures your peace of mind after the repair is completed.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }
            return item;
        }));
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>
                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 text-base mt-9">
                    Didn’t find the answer you are looking for? 
                    <a href="#" title="" className="font-medium text-[#0075B1] transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> Contact our support</a>
                </p>
            </div>

            {/* Conclusion Section */}
            <div className="py-10 bg-white">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">Conclusion</h3> {/* Increased font size */}
                        <p className="text-base leading-relaxed text-gray-700">
                            The exploration of top printer repair services near you sheds light on the diverse options available to address your printing needs. From family-owned businesses to large-scale service providers, these companies offer a range of expertise to handle various printer issues. Their commitment to quick response times, professional technicians, and customer satisfaction stands out as a common thread. This overview gives you a solid starting point to find reliable help when your printer needs fixing.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 mt-4">
                            In the end, the choice of a printer repair service depends on your specific requirements and location. Whether you need on-site repairs, specialized services for particular printer models, or comprehensive IT solutions, there's likely a suitable option in your area. By considering factors such as response time, expertise, and customer reviews, you can make an informed decision to keep your printing equipment in top shape. Remember, a well-maintained printer is key to smooth business operations, so choosing the right repair service is a smart move for long-term productivity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
