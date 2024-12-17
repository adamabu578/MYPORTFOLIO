import { useState } from "react";
import Link from "next/link";
import DownloadButton from "./Download";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">MyPortfolio</h1>
          </div> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about">
              <span className="text-orange-500 hover:text-gray-600 cursor-pointer">
                About
              </span>
            </Link>
            <Link href="#skills">
              <span className="text-orange-500 hover:text-gray-600 cursor-pointer">
                Skills
              </span>
            </Link>
            <Link href="#projects">
              <span className="text-orange-500 hover:text-gray-600 cursor-pointer">
                Projects
              </span>
            </Link>
            <Link href="#contact">
              <span className="text-orange-500 hover:text-gray-600 cursor-pointer">
                Contact
              </span>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden cursor-pointer">
            <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-500 hover:text-gray-600 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-10 h-10" // Increased size from w-6 h-6 to w-8 h-8
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-10 h-10" // Increased size from w-6 h-6 to w-8 h-8
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
            </button>
          </div>
        </div>
      </div>
     

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-20 top-14 right-10 bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about">
              <span
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-200"
              >
                About
              </span>
            </Link>
            <Link href="#skills">
              <span
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-200"
              >
                Skills
              </span>
            </Link>
            <Link href="#projects">
              <span
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-200"
              >
                Projects
              </span>
            </Link>
            <Link href="#contact">
              <span
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-200"
              >
                Contact
              </span>
            </Link>
            <div className="flex items-center">
              <div>
                <DownloadButton fileUrl="/assets/ADAMU_CV.pdf" fileName="CV.pdf" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

