import React from 'react';
import ArtifactCard from './ArtifactCard';

const Artifacts: React.FC = () => {
  // For demonstration purposes, using placeholder URLs
  const pinterestBoardUrl = "https://www.pinterest.com/board/cceya-portfolio-artifacts";
  const sandVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with actual video URL
  const shapesVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with actual video URL

  return (
    <section id="artifacts" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Portfolio Artifacts</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing hands-on early learning activities designed for toddler development
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <ArtifactCard 
            title="Literacy Artifact: Sand Writing Tray Activity"
            overview="In this activity, toddlers used their fingers to trace letters in a tray filled with sand. This tactile approach to letter formation supports early literacy by combining sensory play with pre-writing skills."
            materials={[
              "Shallow trays filled with clean sand",
              "Alphabet flashcards for reference",
              "Optional tools: paintbrushes or sticks for tracing"
            ]}
            objectives={[
              "Develop fine motor skills through finger tracing",
              "Enhance letter recognition and formation",
              "Engage in sensory exploration to reinforce learning"
            ]}
            implementation="Children were encouraged to select a letter flashcard and then trace the corresponding letter in the sand using their finger. Educators provided guidance and support, ensuring each child could participate at their own pace. This activity was particularly effective in maintaining the toddlers' attention and fostering an interest in letters."
            pinterestUrl={pinterestBoardUrl}
            sourceUrl="https://www.twinkl.com"
            sourceName="Twinkl"
            videoUrl={sandVideoUrl}
          />
          
          <ArtifactCard 
            title="Math Artifact: Shape Matching Puzzle Game"
            overview="This activity involved toddlers matching various geometric shapes to their corresponding slots on a puzzle board. It aimed to introduce basic geometric concepts and enhance problem-solving skills."
            materials={[
              "Wooden shape puzzle boards with cut-out shapes",
              "Colorful geometric shape pieces (e.g., circles, squares, triangles)"
            ]}
            objectives={[
              "Recognize and name basic geometric shapes",
              "Develop hand-eye coordination through shape manipulation",
              "Enhance cognitive skills by solving the puzzle"
            ]}
            implementation="Children were presented with the puzzle board and a set of shape pieces. They were encouraged to identify each shape and find its matching slot on the board. Educators facilitated the activity by naming shapes and guiding children as needed. This interactive game promoted both individual learning and cooperative play among toddlers."
            pinterestUrl={pinterestBoardUrl}
            videoUrl={shapesVideoUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Artifacts;