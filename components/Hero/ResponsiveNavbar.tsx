import { useState, useEffect } from "react";
import Link from "next/link";
import DownloadButton from "./Download";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center h-24 relative">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Adamu<span className="text-indigo-600">.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-12 z-50">
            <Link href="#">
              <span className="text-indigo-600 font-bold text-lg cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="#skills">
              <span className="text-slate-900 hover:text-indigo-600 font-semibold text-lg cursor-pointer transition">
                Services
              </span>
            </Link>
            <Link href="#projects">
              <span className="text-slate-900 hover:text-indigo-600 font-semibold text-lg cursor-pointer transition">
                Works
              </span>
            </Link>
            <Link href="#contact">
              <span className="text-slate-900 hover:text-indigo-600 font-semibold text-lg cursor-pointer transition">
                Contact
              </span>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden cursor-pointer z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Full-Screen Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-md flex flex-col pt-32 px-4 h-screen w-screen"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 flex flex-col space-y-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="#">
              <span onClick={() => setIsOpen(false)} className="block text-indigo-600 font-bold text-xl hover:bg-indigo-50 px-4 py-3 rounded-xl transition">
                Home
              </span>
            </Link>
            <Link href="#skills">
              <span onClick={() => setIsOpen(false)} className="block text-slate-900 font-semibold text-xl hover:bg-gray-50 px-4 py-3 rounded-xl transition">
                Services
              </span>
            </Link>
            <Link href="#projects">
              <span onClick={() => setIsOpen(false)} className="block text-slate-900 font-semibold text-xl hover:bg-gray-50 px-4 py-3 rounded-xl transition">
                Works
              </span>
            </Link>
            <Link href="#contact">
              <span onClick={() => setIsOpen(false)} className="block text-slate-900 font-semibold text-xl hover:bg-gray-50 px-4 py-3 rounded-xl transition">
                Contact
              </span>
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <a href="/assets/Frontend-developer.pdf" download="Frontend-developer.pdf" onClick={() => setIsOpen(false)} className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg py-4 rounded-xl shadow-lg transition">
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
