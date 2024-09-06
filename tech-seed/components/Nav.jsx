"use client";
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col w-full fixed top-0 left-0 backdrop-blur-md z-50">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between py-6 px-12">
        <ul className="flex space-x-4 text-[#101828] font-medium">
          <a href=""><li className="text-[#1A906B] font-semibold">Accueil</li></a>
          <a href=""><li>A propos</li></a>
          <a href=""><li>Cours</li></a>
          <a href=""><li>Contact</li></a>
          <a href=""><li>FAQs</li></a>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center justify-between py-6 px-12 md:hidden">
        <div className="text-[#101828] font-medium">
          <span className="font-semibold text-[#1A906B]">Logo</span>
        </div>
        <button onClick={toggleMenu} className="text-[#101828]">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-4 md:hidden transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <a href=""><li className="text-[#1A906B] font-semibold" onClick={toggleMenu}> LiAccueil</li></a>
        <a href=""><li onClick={toggleMenu}>A propos</li></a>
        <a href=""><li onClick={toggleMenu}>Cours</li></a>
        <a href=""><li onClick={toggleMenu}>Contact</li></a>
        <a href=""><li onClick={toggleMenu}>FAQs</li></a>
      </div>
    </div>
  );
}
