import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-2xl font-bold text-teal-600">Narinder Kaur</a>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="text-base font-medium text-gray-700 hover:text-teal-600 transition duration-150">
              Home
            </a>
            <a href="#artifacts" className="text-base font-medium text-gray-700 hover:text-teal-600 transition duration-150">
              Artifacts
            </a>
            <a href="#experiences" className="text-base font-medium text-gray-700 hover:text-teal-600 transition duration-150">
              Experiences
            </a>
            <a href="#podcast" className="text-base font-medium text-gray-700 hover:text-teal-600 transition duration-150">
              Podcast
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right`}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-teal-600">Narinder Kaur</span>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a href="#home" className="text-base font-medium text-gray-900 hover:text-teal-600" onClick={toggleMobileMenu}>
                  Home
                </a>
                <a href="#artifacts" className="text-base font-medium text-gray-900 hover:text-teal-600" onClick={toggleMobileMenu}>
                  Artifacts
                </a>
                <a href="#experiences" className="text-base font-medium text-gray-900 hover:text-teal-600" onClick={toggleMobileMenu}>
                  Experiences
                </a>
                <a href="#podcast" className="text-base font-medium text-gray-900 hover:text-teal-600" onClick={toggleMobileMenu}>
                  Podcast
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;