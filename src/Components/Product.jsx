// App.js
import React from 'react';
import image1 from '../assets/v1000.3.jpg';
import image2 from '../assets/canon.jpg';

function App() {
  const cardsData = [
    {
      title: "Canon imagePRESS V1000",
      description: "Introducing the imagePRESS V1000 color production digital press. Canon has taken the proven quality, productivity, and versatility of the imagePRESS brand and elevated it...",
      image: image1,
      link: "#"
    },
    {
      title: "Canon Colorado 1630 Printer",
      description: "Reduce your overall costs, expand your application range, and provide excellent print quality with extended color gamut using just CMYK...",
      image: image2,
      link: "#"
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardsData.map((card, index) => (
            <div key={index} className="bg-white">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-64 object-contain" // Larger image size
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
                <a href={card.link} className="text-green-500 font-semibold mt-4 inline-block">
                  Find Out More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
