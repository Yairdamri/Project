import React from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, Clock, Users } from 'lucide-react';

const courses = {
  1: [ // MIT courses
    {
      id: 1,
      title: 'Advanced Calculus',
      description: 'Deep dive into multivariable calculus, differential equations, and vector analysis.',
      duration: '16 weeks',
      students: 120,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Linear Algebra',
      description: 'Study of vector spaces, linear transformations, matrices, and determinants.',
      duration: '14 weeks',
      students: 150,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Abstract Algebra',
      description: 'Introduction to group theory, rings, fields, and Galois theory.',
      duration: '15 weeks',
      students: 90,
      image: 'https://images.unsplash.com/photo-1635070036544-3a585c770c91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],
  2: [ // Stanford courses - similar structure
    {
      id: 1,
      title: 'Mathematical Analysis',
      description: 'Rigorous treatment of continuity, differentiation, and integration.',
      duration: '15 weeks',
      students: 110,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Number Theory',
      description: 'Study of integers, prime numbers, and arithmetic functions.',
      duration: '14 weeks',
      students: 95,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Topology',
      description: 'Introduction to point-set topology and continuous functions.',
      duration: '16 weeks',
      students: 85,
      image: 'https://images.unsplash.com/photo-1635070036544-3a585c770c91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],
  3: [ // Oxford courses - similar structure
    {
      id: 1,
      title: 'Complex Analysis',
      description: 'Study of functions of complex variables and their properties.',
      duration: '14 weeks',
      students: 100,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Differential Geometry',
      description: 'Study of curves and surfaces in three-dimensional space.',
      duration: '15 weeks',
      students: 90,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Measure Theory',
      description: 'Introduction to measure spaces and Lebesgue integration.',
      duration: '16 weeks',
      students: 80,
      image: 'https://images.unsplash.com/photo-1635070036544-3a585c770c91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],
};

const UniversityCourses = () => {
  const { id } = useParams();
  const universityCourses = courses[Number(id) as keyof typeof courses] || [];
  const universityNames = {
    1: 'Massachusetts Institute of Technology',
    2: 'Stanford University',
    3: 'University of Oxford'
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        {universityNames[Number(id) as keyof typeof universityNames]} Mathematics Courses
      </h1>
      <p className="text-gray-600 mb-12">Explore our advanced mathematics courses</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universityCourses.map(course => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{course.students} students enrolled</span>
                </div>
              </div>

              <button className="mt-6 w-full flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
                <BookOpen className="w-5 h-5 mr-2" />
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityCourses;