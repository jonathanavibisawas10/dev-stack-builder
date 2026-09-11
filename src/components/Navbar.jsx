import { useState } from "react";
import logoText from "../assets/logo-text.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        
        {/* Mobile Hamburger Button (Left) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-[#B341C3] focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Logo & Brand Name */}
        <div>
          <a href="#" className="flex items-center gap-2">
            <img
              src={logoText}
              alt="Dev Stack Logo"
              className="h-9 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeLink === link;
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveLink(link)}
                style={{ color: isActive ? '#B341C3' : undefined }}
                className={
                  isActive
                    ? "font-semibold transition-colors"
                    : "text-gray-700 hover:text-[#B341C3] transition-colors"
                }
              >
                {link}
              </a>
            );
          })}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="text-sm font-semibold text-gray-700 hover:text-[#B341C3] sm:text-base">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-4 py-1.5 text-sm font-medium text-white shadow-md hover:opacity-95 sm:px-5 sm:py-2 sm:text-base">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link;
              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => {
                    setActiveLink(link);
                    setIsOpen(false);
                  }}
                  style={{
                    color: isActive ? '#B341C3' : undefined,
                    backgroundColor: isActive ? 'rgba(179, 65, 195, 0.1)' : undefined
                  }}
                  className={
                    isActive
                      ? "rounded-md px-3 py-2 text-sm font-semibold"
                      : "rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#B341C3]"
                  }
                >
                  {link}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;