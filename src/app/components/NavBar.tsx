import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(2); // This would typically come from a cart context
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path
      ? "text-green-600 font-bold relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[3px] after:w-full after:bg-green-500 after:rounded-md"
      : "text-green-800 hover:text-green-600";
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/95 backdrop-blur-md shadow-md"
          : "py-4 bg-gradient-to-r from-green-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo with Plant Elements */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <svg
              className="w-9 h-9 text-green-700 group-hover:text-green-600 transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L4 6V18L12 22L20 18V6L12 2Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path
                d="M12 6C16 6 18 9 18 12C18 15 16 18 12 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 6C8 6 6 9 6 12C6 15 8 18 12 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 22V13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="13" r="1" fill="currentColor" />
            </svg>
            <span className="animate-pulse absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-400"></span>
          </div>
          <div className="ml-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
              Planto
            </span>
            <span className="block text-[10px] text-green-600 -mt-1 tracking-wider">
              Grow With Nature
            </span>
          </div>
        </Link>

        {/* Leaf Decorations - Top */}
        <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2">
          <svg
            width="40"
            height="15"
            viewBox="0 0 40 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 0C10 0 0 15 0 15H40C40 15 30 0 20 0Z" fill="#dcfce7" />
          </svg>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7 text-sm font-medium">
          <Link
            href="/"
            className={`${isActive(
              "/"
            )} transition-colors relative group overflow-hidden py-1`}
          >
            <span className="group-hover:translate-y-[-20px] block transition-transform duration-300">
              Home
            </span>
            <span className="absolute translate-y-[20px] group-hover:translate-y-0 transition-transform duration-300 text-green-600">
              🌱 Home
            </span>
          </Link>
          <Link
            href="/shop"
            className={`${isActive(
              "/shop"
            )} transition-colors relative group overflow-hidden py-1`}
          >
            <span className="group-hover:translate-y-[-20px] block transition-transform duration-300">
              Shop
            </span>
            <span className="absolute translate-y-[20px] group-hover:translate-y-0 transition-transform duration-300 text-green-600">
              🪴 Shop
            </span>
          </Link>
          <Link
            href="/about"
            className={`${isActive(
              "/about"
            )} transition-colors relative group overflow-hidden py-1`}
          >
            <span className="group-hover:translate-y-[-20px] block transition-transform duration-300">
              About
            </span>
            <span className="absolute translate-y-[20px] group-hover:translate-y-0 transition-transform duration-300 text-green-600">
              🌿 About
            </span>
          </Link>
          <Link
            href="/contact"
            className={`${isActive(
              "/contact"
            )} transition-colors relative group overflow-hidden py-1`}
          >
            <span className="group-hover:translate-y-[-20px] block transition-transform duration-300">
              Contact
            </span>
            <span className="absolute translate-y-[20px] group-hover:translate-y-0 transition-transform duration-300 text-green-600">
              🍃 Contact
            </span>
          </Link>
        </nav>

        {/* Cart, Search and Mobile Menu */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <button className="hidden sm:flex items-center text-green-700 hover:text-green-600 transition-colors group">
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 -top-2 -right-2 h-1.5 w-1.5 rounded-full bg-green-400 transition-all"></span>
            </span>
            <span className="ml-1.5 text-xs hidden lg:inline-block">
              Find Plants
            </span>
          </button>

          {/* Cart Icon - Enhanced */}
          <Link href="/cart" className="relative group">
            <div className="relative bg-green-50 group-hover:bg-green-100 p-2 rounded-full transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-green-700 group-hover:text-green-800 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-br from-green-600 to-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </div>
            <span className="hidden lg:inline-block absolute opacity-0 group-hover:opacity-100 -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] font-medium text-green-700 transition-opacity whitespace-nowrap">
              Your Plants
            </span>
          </Link>

          {/* Today's Special Button */}
          <Link
            href="/special"
            className="hidden sm:flex items-center px-3 py-1.5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white text-xs rounded-full transition-colors group overflow-hidden relative"
          >
            <span className="z-10 flex items-center">
              <svg
                className="w-3.5 h-3.5 mr-1 animate-spin-slow"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C6.47715 2 2 6.47715 2 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Today's Special
            </span>
            <span className="absolute -bottom-10 left-0 w-full h-24 bg-white/20 rotate-12 transform transition-transform group-hover:translate-y-[-30px]"></span>
          </Link>

          {/* Mobile Menu Button - Redesigned */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-green-700 hover:text-green-600 focus:outline-none bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute w-5 flex flex-col items-center justify-center">
              <span
                className={`bg-current transform transition-transform duration-300 h-0.5 w-5 rounded-full ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`bg-current transform transition-all duration-300 h-0.5 rounded-full ${
                  isMenuOpen ? "w-0" : "w-3.5"
                }`}
              ></span>
              <span
                className={`bg-current transform transition-transform duration-300 h-0.5 w-5 rounded-full ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              ></span>
            </div>
            {/* Menu indicator leaf */}
            <span
              className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full transition-colors ${
                isMenuOpen ? "bg-green-600" : "bg-green-400"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Enhanced */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white to-green-50 py-3 px-4 animate-fadeIn shadow-inner">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {/* Search - Mobile */}
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search for plants..."
                className="w-full py-2 pl-10 pr-4 bg-white border border-green-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            {/* Navigation Links */}
            <Link
              href="/"
              className={`${isActive(
                "/"
              )} flex items-center py-3 px-4 hover:bg-white hover:shadow-sm rounded-lg transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-6 h-6 mr-3 flex-shrink-0 text-green-600">
                🌱
              </div>
              Home
            </Link>
            <Link
              href="/shop"
              className={`${isActive(
                "/shop"
              )} flex items-center py-3 px-4 hover:bg-white hover:shadow-sm rounded-lg transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-6 h-6 mr-3 flex-shrink-0 text-green-600">
                🪴
              </div>
              Shop Plants
            </Link>
            <Link
              href="/special"
              className={`${isActive(
                "/special"
              )} flex items-center py-3 px-4 hover:bg-white hover:shadow-sm rounded-lg transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-6 h-6 mr-3 flex-shrink-0 text-orange-500">
                🔥
              </div>
              Today's Special
              <span className="ml-2 text-xs px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full">
                New
              </span>
            </Link>
            <Link
              href="/about"
              className={`${isActive(
                "/about"
              )} flex items-center py-3 px-4 hover:bg-white hover:shadow-sm rounded-lg transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-6 h-6 mr-3 flex-shrink-0 text-green-600">
                🌿
              </div>
              About Us
            </Link>
            <Link
              href="/contact"
              className={`${isActive(
                "/contact"
              )} flex items-center py-3 px-4 hover:bg-white hover:shadow-sm rounded-lg transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-6 h-6 mr-3 flex-shrink-0 text-green-600">
                🍃
              </div>
              Contact
            </Link>

            {/* Cart - Mobile */}
            <Link
              href="/cart"
              className={`flex items-center py-3 px-4 hover:bg-white hover:shadow-sm rounded-lg transition-all border-t border-green-100 mt-2 pt-5`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-6 h-6 mr-3 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
              Your Plants ({cartItemCount})
            </Link>
          </nav>

          {/* Leaf decoration bottom */}
          <div className="w-full flex justify-center mt-6">
            <svg
              width="60"
              height="20"
              viewBox="0 0 60 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 10C45 0 60 10 60 10C60 10 45 20 30 10ZM30 10C15 0 0 10 0 10C0 10 15 20 30 10Z"
                fill="#dcfce7"
              />
            </svg>
          </div>
        </div>
      )}
    </header>
  );
}

// Add this to globals.css or as a style tag
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// @keyframes spin-slow {
//   to { transform: rotate(360deg); }
// }

export default NavBar;
