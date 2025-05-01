import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Narinder Kaur</h3>
            <p className="text-teal-200 text-sm">
              Early Childhood Education Professional
              <br />
              CCEYA Self-Test Certification Portfolio
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio Sections</h3>
            <ul className="space-y-2">
              <li>
                <a href="#artifacts" className="text-teal-200 hover:text-white transition duration-150">Artifacts</a>
              </li>
              <li>
                <a href="#experiences" className="text-teal-200 hover:text-white transition duration-150">Group Experience</a>
              </li>
              <li>
                <a href="#podcast" className="text-teal-200 hover:text-white transition duration-150">Podcast Script</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.pinterest.com/board/cceya-portfolio-artifacts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-200 hover:text-white transition duration-150"
                >
                  Pinterest Board
                </a>
              </li>
              <li>
                <a 
                  href="https://www.twinkl.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-200 hover:text-white transition duration-150"
                >
                  Twinkl
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-teal-700">
          <p className="text-sm text-teal-200 text-center">
            &copy; {new Date().getFullYear()} Narinder Kaur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;