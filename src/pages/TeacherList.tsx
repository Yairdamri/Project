import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const teachers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    subjects: ['Mathematics', 'Physics'],
    rating: 4.9,
    price: 45,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    subjects: ['Computer Science', 'Web Development'],
    rating: 4.8,
    price: 50,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 3,
    name: 'Emma Williams',
    subjects: ['English Literature', 'Creative Writing'],
    rating: 4.7,
    price: 40,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
];

const TeacherList = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Teacher</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/teachers/${teacher.id}`)}
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{teacher.rating}</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">{teacher.subjects.join(', ')}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">${teacher.price}/hour</span>
                <button
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/teachers/${teacher.id}`);
                  }}
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;