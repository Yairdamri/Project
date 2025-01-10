import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, Star, Calendar, AlertCircle } from 'lucide-react';

const marathons = {
  1: [ // MIT marathons
    {
      id: 1,
      title: 'Advanced Calculus Marathon',
      description: 'Intensive calculus program covering multivariable calculus, differential equations, and vector analysis.',
      duration: '9 hours',
      sessions: 3,
      hoursPerSession: 3,
      maxStudents: 5,
      enrolledStudents: 3,
      price: 299,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      nextAvailable: '2024-03-20',
      dates: ['2024-03-20', '2024-03-22', '2024-03-24'],
      times: ['10:00 AM - 1:00 PM', '10:00 AM - 1:00 PM', '10:00 AM - 1:00 PM']
    },
    {
      id: 2,
      title: 'Linear Algebra Intensive',
      description: 'Deep dive into vector spaces, linear transformations, and matrix theory.',
      duration: '9 hours',
      sessions: 3,
      hoursPerSession: 3,
      maxStudents: 5,
      enrolledStudents: 4,
      price: 299,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      nextAvailable: '2024-03-22',
      dates: ['2024-03-22', '2024-03-24', '2024-03-26'],
      times: ['2:00 PM - 5:00 PM', '2:00 PM - 5:00 PM', '2:00 PM - 5:00 PM']
    },
    {
      id: 3,
      title: 'Abstract Algebra Bootcamp',
      description: 'Comprehensive study of group theory, rings, and Galois theory.',
      duration: '9 hours',
      sessions: 3,
      hoursPerSession: 3,
      maxStudents: 5,
      enrolledStudents: 5,
      price: 299,
      image: 'https://images.unsplash.com/photo-1635070036544-3a585c770c91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      nextAvailable: '2024-03-25',
      dates: ['2024-03-25', '2024-03-27', '2024-03-29'],
      times: ['3:00 PM - 6:00 PM', '3:00 PM - 6:00 PM', '3:00 PM - 6:00 PM']
    }
  ],
  2: [ // Stanford marathons
    {
      id: 1,
      title: 'Mathematical Analysis Marathon',
      description: 'In-depth exploration of continuity, differentiation, and integration.',
      duration: '9 hours',
      sessions: 3,
      hoursPerSession: 3,
      maxStudents: 5,
      enrolledStudents: 2,
      price: 299,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      nextAvailable: '2024-03-21',
      dates: ['2024-03-21', '2024-03-23', '2024-03-25'],
      times: ['1:00 PM - 4:00 PM', '1:00 PM - 4:00 PM', '1:00 PM - 4:00 PM']
    }
  ],
  3: [ // Oxford marathons
    {
      id: 1,
      title: 'Complex Analysis Marathon',
      description: 'Intensive study of complex variables and analytic functions.',
      duration: '9 hours',
      sessions: 3,
      hoursPerSession: 3,
      maxStudents: 5,
      enrolledStudents: 1,
      price: 299,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      nextAvailable: '2024-03-23',
      dates: ['2024-03-23', '2024-03-25', '2024-03-27'],
      times: ['11:00 AM - 2:00 PM', '11:00 AM - 2:00 PM', '11:00 AM - 2:00 PM']
    }
  ]
};

const universityNames = {
  1: 'Massachusetts Institute of Technology',
  2: 'Stanford University',
  3: 'University of Oxford'
};

const UniversityMarathons = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMarathon, setSelectedMarathon] = useState(null);
  const universityMarathons = marathons[Number(id) as keyof typeof marathons] || [];

  const handleEnroll = (marathon) => {
    if (marathon.enrolledStudents >= marathon.maxStudents) {
      return;
    }
    setSelectedMarathon(marathon);
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        {universityNames[Number(id) as keyof typeof universityNames]} Learning Marathons
      </h1>
      <p className="text-gray-600 mb-12">Intensive learning programs with expert instructors</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universityMarathons.map(marathon => (
          <div key={marathon.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video">
              <img
                src={marathon.image}
                alt={marathon.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">{marathon.title}</h2>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{marathon.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{marathon.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{marathon.duration} total</span>
                  </div>
                  <span>{marathon.sessions} sessions × {marathon.hoursPerSession}h</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{marathon.enrolledStudents}/{marathon.maxStudents} enrolled</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Starts {new Date(marathon.nextAvailable).toLocaleDateString()}</span>
                  </div>
                </div>

                {marathon.enrolledStudents >= marathon.maxStudents && (
                  <div className="flex items-center text-red-600">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>Class is full</span>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold">Session Schedule</h3>
                {marathon.dates.map((date, index) => (
                  <div key={date} className="flex justify-between text-sm text-gray-600">
                    <span>Session {index + 1}: {new Date(date).toLocaleDateString()}</span>
                    <span>{marathon.times[index]}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold">${marathon.price}</div>
                <div className="text-gray-600">per student</div>
              </div>

              <button
                onClick={() => handleEnroll(marathon)}
                disabled={marathon.enrolledStudents >= marathon.maxStudents}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-lg transition-colors ${
                  marathon.enrolledStudents >= marathon.maxStudents
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
              >
                {marathon.enrolledStudents >= marathon.maxStudents ? 'Class Full' : 'Enroll Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMarathon && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Enrollment</h3>
            <p className="text-gray-600 mb-4">
              You are about to enroll in {selectedMarathon.title}. The marathon consists of {selectedMarathon.sessions} sessions,
              {selectedMarathon.dates.map((date, index) => (
                <span key={date} className="block mt-2">
                  Session {index + 1}: {new Date(date).toLocaleDateString()} at {selectedMarathon.times[index]}
                </span>
              ))}
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedMarathon(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle enrollment logic here
                  navigate('/calendar');
                }}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
              >
                Confirm & Pay ${selectedMarathon.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityMarathons;