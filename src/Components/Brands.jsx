import React from 'react';

const LogoRow = () => {
  // List of brand logos (these are placeholders, use actual logos in your project)
  const logos = [
    { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/HP_logo_2012.svg' },
    { name: 'Brother', url: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Brother_logo.svg' },
    { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
    { name: 'Canon', url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Canon_logo.svg' },
    { name: 'Lexmark', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Lexmark_Logo.svg' },
    { name: 'Sharp', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Sharp_logo.svg' },
    { name: 'Xerox', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Xerox_logo.svg' },
  ];

  return (
    <div className="bg-gray-200 py-6">
      <div className="container mx-auto flex justify-center space-x-10">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.url}
            alt={logo.name}
            className="h-12"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoRow;