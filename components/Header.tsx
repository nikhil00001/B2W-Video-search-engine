import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          <img 
            src="https://www.b2w.tv/hs-fs/hubfs/B2W_LogoA177X51.png?width=1308&height=193&name=B2W_LogoA177X51.png" 
            alt="Broadcast2World" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>
        
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-b2w-dark">
          <a href="#" className="hover:text-b2w-orange transition-colors">Services</a>
          <a href="#" className="hover:text-b2w-orange transition-colors">Packages</a>
          <a href="#" className="hover:text-b2w-orange transition-colors">Portfolio</a>
          <a href="#" className="hover:text-b2w-orange transition-colors">Company</a>
        </div>

        <div>
          <button className="bg-b2w-orange text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#d94018] transition-all shadow-md transform hover:-translate-y-0.5">
            Talk to us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
