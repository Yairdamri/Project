import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, Calendar, BookOpen } from 'lucide-react';

const categories = [
  {
    id: 'marathons',
    title: 'Learning Marathons',
    description: 'Intensive 9-hour programs split into 3 sessions',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: [
      '3 sessions × 3 hours each',
      'Small groups (max 5 students)',
      'Intensive learning experience',
      'Expert university instructors'
    ]
  },
  {
    id: 'group',
    title: 'Group Sessions',
    description: 'Learn together in small, focused groups',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Max 5 students per group',
      'Regular weekly sessions',
      'Collaborative learning',
      'Affordable pricing'
    ]
  },
  {
    id: 'private',
    title: 'Private Sessions',
    description: 'One-on-one tutoring with expert teachers',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Personalized attention',
      'Flexible scheduling',
      'Custom curriculum',
      'Choose your teacher'
    ]
  }
];

const universityNames = {
  1: 'Massachusetts Institute of Technology',
  2: 'Stanford University',
  3: 'University of Oxford'
};

const UniversityCategories = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        {universityNames[Number(id) as keyof typeof universityNames]} Programs
      </h1>
      <p className="text-gray-600 mb-12">Choose your preferred learning format</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(category => (
          <div
            key={category.id}
            onClick={() => navigate(`/universities/${id}/${category.id}`)}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
              <div className="aspect-[16/9]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{category.title}</h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      {index === 0 ? (
                        <Clock className="w-5 h-5 text-gray-600 mt-0.5" />
                      ) : index === 1 ? (
                        <Users className="w-5 h-5 text-gray-600 mt-0.5" />
                      ) : index === 2 ? (
                        <BookOpen className="w-5 h-5 text-gray-600 mt-0.5" />
                      ) : (
                        <Calendar className="w-5 h-5 text-gray-600 mt-0.5" />
                      )}
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
                  Explore {category.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityCategories;