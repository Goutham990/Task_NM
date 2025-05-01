import React from 'react';

const PodcastScript: React.FC = () => {
  return (
    <section id="podcast" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">ECE-422 Issue and Leadership</h2>
            <p className="mt-4 text-xl text-gray-600">
              Inclusive Education Podcast Script
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="prose prose-teal max-w-none">
              <p className="mb-4">
                To commence with, inclusive education emphasizes the importance of each individual, regardless of their background 
                or abilities, learning together in the same environment. Unlike traditional models that separate students based on 
                skill level, inclusive education ensures equal opportunities, strengthens social bonds, and promotes personal 
                development. This approach helps students grow academically while fostering empathy and teamwork. Key principles 
                include accessibility, diversity, individualized learning, and active student participation.
              </p>
              
              <p className="mb-4">
                While inclusive education has many benefits, teachers may face challenges such as limited training, scarce resources, 
                time constraints, and biases. Schools can create inclusive spaces by incorporating ramps, elevators, sensory-friendly 
                areas, and assistive technologies like speech-to-text software and reading apps. Teachers can adapt lessons to 
                accommodate diverse learning needs. To support students from varied cultural and economic backgrounds, schools should 
                implement culturally responsive teaching, provide language assistance, and ensure access to essential services like 
                free meals and tutoring.
              </p>
              
              <p className="mb-4">
                Separating students with disabilities can lead to isolation and fewer learning opportunities for everyone. Encouraging 
                peer collaboration and teamwork helps create a supportive learning environment. Teachers need training in differentiation, 
                behavior management, and assistive technologies. Policies like IDEA protect students' rights and ensure they receive 
                necessary support. Schools can strengthen inclusivity by building partnerships with families and community organizations.
              </p>
              
              <p className="mb-6">
                Successful models include Finland's approach, which integrates students with disabilities into mainstream classrooms 
                with personalized assistance, and the U.S.'s Universal Design for Learning (UDL), which provides flexible teaching 
                methods. By prioritizing inclusivity, schools create a welcoming environment where all students can succeed and feel confident.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">References</h3>
              <ul className="list-none pl-0 space-y-2 text-sm">
                <li>Jacuzzi, J. (2025, February 11). Benefits of inclusive education for students. <em>Easterseals Arkansas</em>. https://eastersealsar.com/what-are-the-benefits-of-inclusive-education-for-students/</li>
                <li>Jardinez, M. J., & Natividad, L. R. (2024). The Advantages and Challenges of Inclusive Education: Striving for equity in the classroom. <em>Shanlax International Journal of Education, 12</em>(2), 57–65. https://files.eric.ed.gov/fulltext/EJ1421555.pdf</li>
                <li>Galkiene, A., & Monkeviciene, O. (2021). Improving Inclusive Education through Universal Design for Learning. <em>Inclusive Learning and Educational Equity</em>. https://doi.org/10.1007/978-3-030-80658-3</li>
                <li>Jpiersol. (2024, April 15). Universal Design for Learning: Definition and benefits. <em>School of Education Online</em>. https://soeonline.american.edu/blog/universal-design-for-learning/</li>
                <li>Smith, L. (2023, October 18). The Dark Side of Inclusion: Untangling the negative aspects of inclusive education. <em>Special Needs Adults</em>. https://naasln.org/negative-aspects-of-inclusive-education/</li>
                <li>Special Needs Teacher: Occupations in Alberta. (n.d.). <em>Alis</em>. https://alis.alberta.ca/occinfo/occupations-in-alberta/occupation-profiles/special-needs-teacher/</li>
                <li>Ty Howard's quote about diversity and inclusion. (n.d.). <em>TyQuotes.com</em>. https://www.tyhowardquotes.com/quotes/quote/1293</li>
                <li>AndrewG I Background Music for Videos. (2016, January 6). Soft inspirational background music for videos & presentation [Video]. YouTube. https://www.youtube.com/watch?v=k69Zv7mPNNU</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastScript;