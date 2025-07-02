'use client';

import React, { useEffect, useState } from "react";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`top-0 left-0 right-0 z-50 duration-500 ease-in-out transition-all ${
          scrolled
            ? "fixed bg-white/80 backdrop-blur-md shadow-sm header-scrolled"
            : "relative bg-white header-default"
        } h-24 md:h-32`}
      >
        <div className="container mx-auto px-4 sm:px-8 md:px-20 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-yellow-600 font-serif font-bold text-4xl md:text-7xl">S</span>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-serif font-semibold text-dark-text">
                  Dr. Serena Blake
                </span>
                <span className="text-sm md:text-lg text-medium-text">Clinical Psychologist</span>
              </div>
            </div>
            {/* You can add a mobile menu button here if needed */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
