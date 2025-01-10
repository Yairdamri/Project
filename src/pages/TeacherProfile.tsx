import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Star, Award, BookOpen } from 'lucide-react';

const TeacherProfile = () => {
  const { id } = useParams();

  // Mock teacher data (in a real app, this would come from an API)
  const teacher = {
    id: 1,
    name: 'Dr. Sarah Johnson',
    subjects: ['Mathematics', 'Physics'],
    rating: 4.9,
    price: 45,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Ph.D. in Mathematics from MIT with over 10 years of teaching experience. Specializing in making complex concepts easy to understand.',
    experience: '10+ years',
    qualifications: ['Ph.D. Mathematics (MIT)', 'M.Sc. Physics (Stanford)'],
    availability: ['Monday - Friday: 9 AM - 6 PM', 'Saturday: 10 AM - 2 PM'],
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-6 mb-6">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">{teacher.name}</h1>
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{teacher.rating} Rating</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">About Me</h2>
                <p className="text-gray-600">{teacher.bio}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Qualifications</h2>
                <ul className="space-y-2">
                  {teacher.qualifications.map((qual) => (
                    <li key={qual} className="flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Subjects</h2>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map((subject) => (
                    <div
                      key={subject}
                      className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-md"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="text-center mb-6">
              <p className="text-3xl font-bold">${teacher.price}</p>
              <p className="text-gray-600">per hour</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Availability</h3>
              <ul className="space-y-2">
                {teacher.availability.map((time) => (
                  <li key={time} className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="w-full py-3 px-4 bg-black text-white rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center"
              onClick={() => {/* Handle booking */}}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;