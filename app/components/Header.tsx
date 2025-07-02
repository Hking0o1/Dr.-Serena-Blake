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
      {/* Spacer to prevent layout shift when header becomes fixed */}
      <div className={scrolled ? "h-32" : ""} />
      <header
        className={`top-0 left-0 right-0 z-50 duration-500 ease-in-out transition-all ${
          scrolled
            ? "fixed bg-white/80 backdrop-blur-md shadow-sm"
            : "relative bg-white"
        } h-32`}
        style={{
          boxShadow: scrolled
            ? "0 2px 16px 0 rgba(0,0,0,0.06)"
            : "none",
          transition: "background 0.5s, box-shadow 0.5s, backdrop-filter 0.5s",
        }}
      >
        <div className="container mx-auto px-20 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-yellow-600 font-serif font-bold text-7xl">S</span>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-semibold text-dark-text">
                  Dr. Serena Blake
                </span>
                <span className="text-lg text-medium-text">Clinical Psychologist</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
