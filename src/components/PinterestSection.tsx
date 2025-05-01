import React from 'react';

const PinterestSection: React.FC = () => {
  // Replace with actual Pinterest board URL
  const pinterestBoardUrl = "https://www.pinterest.com/board/cceya-portfolio-artifacts";
  
  const categories = [
    {
      name: "Math Activities",
      examples: ["Shape sorting", "Counting with pom-poms", "Pattern matching", "Size ordering"],
      image: "https://images.pexels.com/photos/4458551/pexels-photo-4458551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Literacy Activities",
      examples: ["Letter tracing in sensory trays", "Felt board storytelling", "Phonics games", "Picture-word matching"],
      image: "https://images.pexels.com/photos/8612931/pexels-photo-8612931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Sensory Learning",
      examples: ["Rice sensory bins", "Water play with letters", "Texture exploration", "Sound discovery"],
      image: "https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Creative Art",
      examples: ["Finger painting", "Tissue paper collages", "Nature-inspired crafts", "Mixed media projects"],
      image: "https://images.pexels.com/photos/3933019/pexels-photo-3933019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Pinterest Board</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of "CCEYA Portfolio Artifacts – Early Learning Activities"
          </p>
        </div>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-teal-700 mb-2">{category.name}</h3>
                <ul className="text-sm text-gray-600 list-disc pl-5">
                  {category.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://in.pinterest.com/kgouthamnayak6103/cceya-portfolio-artifacts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition duration-150"
          >
            Visit Pinterest Board
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Discover 5-10 pins related to toddler activities across math, literacy, sensory learning, and creative art.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PinterestSection;