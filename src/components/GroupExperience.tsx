import React from 'react';

const GroupExperience: React.FC = () => {
  return (
    <section id="experiences" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Group Work Experience</h2>
            <p className="mt-4 text-xl text-gray-600">
              Collaborative professional development in early childhood education
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">Inclusive Education Webinar</h3>
            
            <div className="prose prose-teal max-w-none text-gray-700">
              <p className="mb-4">
                I worked in a group with my classmate Kavita Maan on an assignment where we created a webinar about inclusive education. 
                The purpose was to help others understand the importance of making all children feel included in the classroom, 
                regardless of their abilities, backgrounds, or needs. We aimed to show that every child should have equal 
                opportunities to learn and feel safe and respected at school.
              </p>
              
              <p className="mb-4">
                To ensure successful group work, we used positive strategies like dividing tasks fairly, respecting each other's ideas, 
                and maintaining regular communication to track progress. We provided support and constructive feedback and set 
                deadlines to stay organized.
              </p>
              
              <p className="mb-4">
                My contributions included planning the webinar structure, writing part of the script, recording my voice for my section, 
                suggesting real-life examples to make the content relatable, and reviewing the final version for clarity and accuracy.
              </p>
              
              <p>
                This experience enhanced my teamwork, communication, and time management skills while deepening my understanding 
                of promoting inclusion in education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupExperience;