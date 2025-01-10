import React from 'react';
import { useNavigate } from 'react-router-dom';

const universities = [
  {
    id: 1,
    name: 'Massachusetts Institute of Technology',
    image: 'https://images.unsplash.com/photo-1595320228747-b8e7ef025682?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Stanford University',
    image: 'https://images.unsplash.com/photo-1584724108599-cb9cb392ba06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'University of Oxford',
    image: 'https://images.unsplash.com/photo-1580492516014-4f23825bf29c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  }
];

const Universities = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Top Universities</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map(university => (
          <div
            key={university.id}
            onClick={() => navigate(`/universities/${university.id}`)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="aspect-[4/3]">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                <h2 className="text-white text-2xl font-bold p-6">{university.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universities;