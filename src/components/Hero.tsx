import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-teal-500 to-cyan-600 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            <span className="block">CCEYA Self-Test Certification</span>
            <span className="block mt-2">Early Childhood Education Portfolio</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-white opacity-90">
            Showcasing artifacts, experiences, and leadership in early childhood education
          </p>
          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#artifacts"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-150"
              >
                View Artifacts
              </a>
            </div>
            <div className="ml-3 rounded-md shadow">
              <a
                href="#podcast"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-800 md:py-4 md:text-lg md:px-10 transition duration-150"
              >
                Leadership Podcast
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default Hero;