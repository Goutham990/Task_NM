import React from 'react';

interface ArtifactCardProps {
  title: string;
  overview: string;
  materials: string[];
  objectives: string[];
  implementation: string;
  pinterestUrl: string;
  sourceUrl?: string;
  sourceName?: string;
  videoUrl?: string;
}

const ArtifactCard: React.FC<ArtifactCardProps> = ({
  title,
  overview,
  materials,
  objectives,
  implementation,
  pinterestUrl,
  sourceUrl,
  sourceName,
  videoUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-teal-700 mb-4">{title}</h3>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Activity Overview</h4>
          <p className="text-gray-700">{overview}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Materials Used</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Learning Objectives</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Implementation</h4>
          <p className="text-gray-700">{implementation}</p>
        </div>
        
        <div className="mt-6 flex items-center justify-between flex-wrap gap-2">
          <a 
            href={pinterestUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 transition duration-150"
          >
            Explore more activities on Pinterest →
          </a>
          
          {sourceUrl && sourceName && (
            <a 
              href={sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 transition duration-150"
            >
              Source: {sourceName}
            </a>
          )}
        </div>
      </div>
      
      {videoUrl && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden">
            <iframe 
              src={videoUrl} 
              title={`${title} Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-64 object-cover"
            ></iframe>
          </div>
          <p className="mt-2 text-sm text-gray-500 italic">Watch a glimpse of the {title} in action!</p>
        </div>
      )}
    </div>
  );
};

export default ArtifactCard;