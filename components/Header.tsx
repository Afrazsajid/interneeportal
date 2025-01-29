"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, PanelLeftClose, PanelTopClose } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-green-600 p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
            <Image src={`https://www.internee.pk/assets/logo-DKUUqbKl.png`} alt='Internee.pk' width={200} height={100}/>
         
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-lg font-semibold hover:text-green-800 hover:bg-green-100 px-4 py-2 rounded-md transition duration-200 ease-in-out">
            Home
          </Link>
          <Link href="/apply" className="text-lg font-semibold hover:text-green-800 hover:bg-green-100 px-4 py-2 rounded-md transition duration-200 ease-in-out">
            Apply
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-green-600 focus:outline-none"
        >
          {isMenuOpen ? <PanelTopClose  size={30} /> : <Menu size={30}/>}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden mt-4 space-y-4 text-center transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Link href="/" className="w-32 block text-lg font-semibold text-green-600 hover:text-green-800 hover:bg-green-100 px-4 py-2 rounded-md transition duration-200 ease-in-out">
          Home
        </Link>
        <Link href="/apply" className=" w-32  block text-lg font-semibold text-green-600 hover:text-green-800 hover:bg-green-100 px-4 py-2 rounded-md transition duration-200 ease-in-out">
          Apply
        </Link>
      </div>
    </header>
  );
};

export default Header;
