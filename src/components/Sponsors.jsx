import { useState } from 'react';
import { Adbl, Makkuse, EcoSathi } from '../assets';
import Heading  from '../constants/Heading';

// Component for individual sponsor logo
const SponsorLogo = ({ name, website, logoPath, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={website} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center justify-center p-6 m-4 transition-all duration-300 
                  bg-white rounded-lg shadow-md relative
                  ${isHovered ? 'transform scale-105 shadow-lg' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: '400px', height: '240px' }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-lg p-0.5" style={{
        background: 'linear-gradient(45deg, #FFD700, #C0C0C0, #E5E4E2, #CD7F32)',
        backgroundSize: '300% 300%',
        animation: isHovered ? 'gradientShift 2s ease infinite' : 'none',
        zIndex: -1,
      }}>
        <div className="bg-white h-full w-full rounded-md"></div>
      </div>
      
      {/* Logo image */}
      <div className="text-center z-10 flex flex-col items-center">
        <img 
          src={logoPath} 
          alt={`${name} logo`} 
          className={` max-w-full object-contain mb-2 ${className}`}
        />
        <p className="text-lg text-gray-600">{name}</p>
      </div>
      
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </a>
  );
};

// Main sponsors section component
const SponsorsPage = () => {
  // Sponsors data - Replace with your actual sponsors data
  const sponsors = [
    { name: "Makkusé", website: "https://makkuse.com", logoPath: Makkuse, className: "h-20" },
    { name: "Agriculture Development Bank", website: "https://adbl.gov.np/en", logoPath: Adbl, className: "h-12" },
    { name: "Eco Sathi Nepal", website:"https://ecosathinepal.com", logoPath: EcoSathi, className: "h-[10rem] mt-0" },  
  ];

  return (
    <section id='sponsors' >
    <div className="flex flex-col items-center w-full p-8 mx-auto my-12 bg-gray-50 rounded-xl">
      <Heading className="h1 text-color-title bg-blue-650" title="Our Sponsors" />
      {/* <h1 className="mb-16 text-5xl font-bold text-center text-navy-900">Our Sponsors</h1> */}
      
      <div className="flex flex-wrap justify-center">
        {sponsors.map((sponsor, index) => (
          <SponsorLogo 
          key={`sponsor-${index}`}
          name={sponsor.name}
          website={sponsor.website}
          logoPath={sponsor.logoPath}
          className={sponsor.className}
          />
        ))}
      </div>
    </div>
        </section>
  );
};

export default SponsorsPage;