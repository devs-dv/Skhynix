import { useState } from "react";
import { Search, Globe, Menu, X } from "lucide-react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div>
      <header className="w-full  border-b border-gray-200">
        <div className="container">
          {/* Desktop Navbar */}
          <div className="hidden lg:flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span>
                  <img src="logo.png" className="w-60 h-auto mb-5 mx-3" />
                </span>
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-6 font-bold">
              <a
                href="/tech"
                className="text-gray-700 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
              >
                TECH &
              </a>
              <a
                href="/ai"
                className="text-gray-700 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
              >
                AI &
              </a>
              <a
                href="/culture"
                className="text-gray-700 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
              >
                CULTURE &
              </a>
              <a
                href="/sustainability"
                className="text-gray-700 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
              >
                SUSTAINABILITY &
              </a>
              <a
                href="/press"
                className="text-gray-700 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
              >
                PRESS
              </a>
              <a
                href="/media-library"
                className="text-gray-700 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
              >
                MEDIA LIBRARY
              </a>
            </nav>

            {/* Search and Language */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="'반도체'를 검색해 보세요"
                  className="pl-2 pr-10 py-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 w-64"
                />
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <button className="p-2">
                <Globe className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="flex lg:hidden items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span>
                  <img src="logo.png" className="w-48 h-auto mb-5" />
                </span>
              </a>
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center space-x-1">
              <button className="p-2">
                <Search className="h-6 w-6 text-gray-700" />
              </button>
              <button className="p-2">
                <Globe className="h-6 w-6 text-gray-700" />
              </button>
              <button className="p-2" onClick={toggleMenu}>
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between mb-8">
                <div className="flex-shrink-0">
                  <a href="/" className="flex items-center">
                    <span>
                      <img src="logo.png" className="w-48 h-auto mb-5" />
                    </span>
                  </a>
                </div>
                <button className="p-2" onClick={toggleMenu}>
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              <nav className="flex flex-col font-bold space-y-4">
                <a
                  href="/tech"
                  className="text-xl text-gray-700 hover:text-black py-2 border-b border-gray-100 transition-colors duration-300"
                >
                  TECH &
                </a>
                <a
                  href="/ai"
                  className="text-xl text-gray-700 hover:text-black py-2 border-b border-gray-100 transition-colors duration-300"
                >
                  AI &
                </a>
                <a
                  href="/culture"
                  className="text-xl text-gray-700 hover:text-black py-2 border-b border-gray-100 transition-colors duration-300"
                >
                  CULTURE &
                </a>
                <a
                  href="/sustainability"
                  className="text-xl text-gray-700 hover:text-black py-2 border-b border-gray-100 transition-colors duration-300"
                >
                  SUSTAINABILITY &
                </a>
                <a
                  href="/press"
                  className="text-xl text-gray-700 hover:text-black py-2 border-b border-gray-100 transition-colors duration-300"
                >
                  PRESS
                </a>
                <a
                  href="/media-library"
                  className="text-xl text-gray-700 hover:text-black py-2 border-b border-gray-100 transition-colors duration-300"
                >
                  MEDIA LIBRARY
                </a>
              </nav>
              <div className="mt-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="'반도체'를 검색해 보세요"
                    className="w-full pl-2 pr-10 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-500"
                  />
                  <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <Search className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
