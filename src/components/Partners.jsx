import { useState } from 'react';
import { Shristi, DWIT, Siphal, UNCT } from '../assets';

// Component for individual partner logo
const PartnerLogo = ({ name, website, logoPath }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={website} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center justify-center p-6 transition-all duration-300 
                  bg-gray-200 rounded-lg ${isHovered ? 'shadow-xl' : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: '180px' }}
    >
      {/* Logo image with hover effects */}
      <div 
        className={`flex items-center justify-center transition-transform duration-300 ease-in-out
                   ${isHovered ? 'scale-110' : 'scale-100'}`}
      >
        <img 
          src={logoPath} 
          alt={`${name} logo`} 
          className="max-h-24 max-w-full object-contain"
        />
      </div>
    </a>
  );
};

// Main partners section component
const Partners = () => {
  // Partners data
  const partners = [
    { name: "Shristi International School", website: "https://shristiacademy.edu.np", logoPath: Shristi },
    { name: "Deerwalk Siphal School", website: "https://deerwalk.edu.np/sifal-school", logoPath: Siphal },
    { name: "DWIT College", website: "https://deerwalk.edu.np/DWIT/", logoPath: DWIT },
    { name: "United Nations Nepal", website: "https://un.org.np", logoPath: UNCT },
    // { name: "UNDP", website: "https://www.undp.org", logoPath: partnerImages.undp },
    // { name: "Nepali Red Cross Society", website: "https://nrcs.org", logoPath: partnerImages.redCross },
  ];

  return (
    <div className="flex flex-col items-center w-full p-8 mx-auto my-16 bg-gray-100">
      <h1 className="mb-16 text-6xl font-bold text-center text-navy-900">Our Partners</h1>
      
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl p-8 rounded-3xl shadow-sm">
          {partners.map((partner, index) => (
            <PartnerLogo 
              key={`partner-${index}`}
              name={partner.name}
              website={partner.website}
              logoPath={partner.logoPath}
            />
          ))}
        
      </div>
    </div>
  );
};

export default Partners;