import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Star, GraduationCap, Calendar, Clock, X } from 'lucide-react';

const subjects = [
  {
    id: 1,
    name: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
    teachers: 45,
    rating: 4.8,
    topTeachers: [
      {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialization: 'AP Calculus',
        experience: '15 years',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
        sessions: {
          private: {
            price: 60,
            availability: ['Monday - Friday: 9 AM - 6 PM', 'Saturday: 10 AM - 2 PM']
          },
          group: {
            price: 30,
            maxStudents: 5,
            enrolledStudents: 3,
            nextSession: '2024-03-20 10:00 AM'
          },
          marathon: {
            price: 299,
            dates: ['2024-03-20', '2024-03-22', '2024-03-24'],
            times: ['10:00 AM - 1:00 PM', '10:00 AM - 1:00 PM', '10:00 AM - 1:00 PM'],
            enrolledStudents: 2,
            maxStudents: 5
          }
        }
      }
    ]
  },
  {
    id: 2,
    name: 'English',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: ['Literature', 'Writing', 'Grammar', 'SAT/ACT Prep'],
    teachers: 38,
    rating: 4.9,
    topTeachers: [
      {
        id: 1,
        name: 'Prof. Emma Williams',
        specialization: 'AP English Literature',
        experience: '12 years',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
        sessions: {
          private: {
            price: 55,
            availability: ['Monday - Friday: 10 AM - 7 PM', 'Sunday: 12 PM - 4 PM']
          },
          group: {
            price: 25,
            maxStudents: 5,
            enrolledStudents: 4,
            nextSession: '2024-03-21 2:00 PM'
          },
          marathon: {
            price: 279,
            dates: ['2024-03-25', '2024-03-27', '2024-03-29'],
            times: ['2:00 PM - 5:00 PM', '2:00 PM - 5:00 PM', '2:00 PM - 5:00 PM'],
            enrolledStudents: 3,
            maxStudents: 5
          }
        }
      }
    ]
  }
];

const sessionTypes = [
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
    id: 'marathon',
    title: 'Learning Marathons',
    description: 'Intensive 9-hour programs split into 3 sessions',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: [
      '3 sessions × 3 hours each',
      'Small groups (max 5 students)',
      'Intensive learning experience',
      'Expert instructors'
    ]
  }
];

const HighSchool = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSessionType, setSelectedSessionType] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedSessionType(null);
    setSelectedTeacher(null);
  };

  const handleSessionTypeSelect = (sessionType) => {
    setSelectedSessionType(sessionType);
    setSelectedTeacher(null);
  };

  const handleTeacherSelect = (teacher) => {
    setSelectedTeacher(teacher);
    setShowEnrollmentModal(true);
  };

  const handleEnrollment = () => {
    navigate('/calendar');
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">High School Programs</h1>
        <p className="text-gray-600 text-lg">
          Connect with expert teachers for personalized learning
        </p>
      </div>

      {!selectedSubject ? (
        <div className="grid lg:grid-cols-3 gap-8">
          {subjects.map(subject => (
            <div
              key={subject.id}
              onClick={() => handleSubjectClick(subject)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h2 className="text-white text-2xl font-bold">{subject.name}</h2>
                    <div className="flex items-center text-white/90 mt-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1">{subject.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{subject.teachers} teachers</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>{subject.topics.length} topics</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map(topic => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : !selectedSessionType ? (
        <div>
          <button
            onClick={() => setSelectedSubject(null)}
            className="mb-6 flex items-center text-gray-600 hover:text-black"
          >
            <X className="w-5 h-5 mr-2" /> Back to Subjects
          </button>
          <h2 className="text-2xl font-bold mb-6">Select Class Type for {selectedSubject.name}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sessionTypes.map(type => (
              <div
                key={type.id}
                onClick={() => handleSessionTypeSelect(type)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="aspect-[16/9]">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className="w-5 h-5 mr-2">
                          {index === 0 ? <Clock /> : index === 1 ? <Users /> : <BookOpen />}
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : !selectedTeacher ? (
        <div>
          <button
            onClick={() => setSelectedSessionType(null)}
            className="mb-6 flex items-center text-gray-600 hover:text-black"
          >
            <X className="w-5 h-5 mr-2" /> Back to Class Types
          </button>
          <h2 className="text-2xl font-bold mb-6">Select Teacher for {selectedSessionType.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {selectedSubject.topTeachers.map(teacher => (
              <div
                key={teacher.id}
                onClick={() => handleTeacherSelect(teacher)}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{teacher.name}</h3>
                    <p className="text-gray-600">{teacher.specialization}</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{teacher.rating}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm text-gray-600">{teacher.experience}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-lg font-bold">
                    ${teacher.sessions[selectedSessionType.id].price}
                    <span className="text-sm font-normal text-gray-600">
                      {selectedSessionType.id === 'private' ? '/hour' : selectedSessionType.id === 'group' ? '/session' : ' total'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Enrollment Modal */}
      {showEnrollmentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Confirm Enrollment</h3>
              <button
                onClick={() => setShowEnrollmentModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{selectedTeacher.name}</h4>
                  <p className="text-gray-600">{selectedTeacher.specialization}</p>
                </div>
              </div>

              <div className="space-y-2 text-gray-600">
                <p><strong>Session Type:</strong> {selectedSessionType.title}</p>
                <p><strong>Subject:</strong> {selectedSubject.name}</p>
                {selectedSessionType.id === 'marathon' && (
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Schedule:</p>
                    {selectedTeacher.sessions.marathon.dates.map((date, index) => (
                      <p key={date} className="text-sm">
                        Session {index + 1}: {new Date(date).toLocaleDateString()} at{' '}
                        {selectedTeacher.sessions.marathon.times[index]}
                      </p>
                    ))}
                  </div>
                )}
                <p className="mt-4">
                  <strong>Price:</strong> ${selectedTeacher.sessions[selectedSessionType.id].price}
                  {selectedSessionType.id === 'private' ? '/hour' : selectedSessionType.id === 'group' ? '/session' : ' total'}
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowEnrollmentModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleEnrollment}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HighSchool;