import React from 'react';
import { Globe2, Users, Clock, BookOpen, Star } from 'lucide-react';

const languages = [
  {
    id: 1,
    name: 'English',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Business'],
    image: 'https://images.unsplash.com/photo-1532354058425-ba7ccc7e4a24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    students: '10,000+',
    rating: 4.8,
    teachers: 45,
    courses: [
      {
        title: 'Business English',
        duration: '12 weeks',
        level: 'Advanced',
      },
      {
        title: 'English for Academic Purposes',
        duration: '16 weeks',
        level: 'Advanced',
      }
    ]
  },
  {
    id: 2,
    name: 'Spanish',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    image: 'https://images.unsplash.com/photo-1515952782260-36998d667f89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    students: '8,000+',
    rating: 4.7,
    teachers: 38,
    courses: [
      {
        title: 'Conversational Spanish',
        duration: '10 weeks',
        level: 'Intermediate',
      },
      {
        title: 'Spanish Culture & Language',
        duration: '14 weeks',
        level: 'Advanced',
      }
    ]
  },
  {
    id: 3,
    name: 'Mandarin Chinese',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Business'],
    image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    students: '6,000+',
    rating: 4.9,
    teachers: 32,
    courses: [
      {
        title: 'Business Chinese',
        duration: '16 weeks',
        level: 'Advanced',
      },
      {
        title: 'Chinese Characters Mastery',
        duration: '12 weeks',
        level: 'Intermediate',
      }
    ]
  }
];

const Languages = () => {
  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Language Learning Programs</h1>
        <p className="text-gray-600 text-lg">Master new languages with expert instructors</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {languages.map(language => (
          <div key={language.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={language.image}
                alt={language.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h2 className="text-white text-2xl font-bold">{language.name}</h2>
                  <div className="flex items-center text-white/90 mt-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1">{language.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{language.students} students</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe2 className="w-5 h-5 mr-2" />
                  <span>{language.teachers} teachers</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Available Levels</h3>
                <div className="flex flex-wrap gap-2">
                  {language.levels.map(level => (
                    <span
                      key={level}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Popular Courses</h3>
                {language.courses.map(course => (
                  <div
                    key={course.title}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{course.title}</h4>
                      <span className="text-sm bg-black text-white px-2 py-1 rounded">
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Courses
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;