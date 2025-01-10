import React, { useState } from 'react';
import { User, Mail, Phone, BookOpen, Calendar } from 'lucide-react';

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: 'Alex Thompson',
    email: 'alex.thompson@example.com',
    phone: '+1 (555) 123-4567',
    subjects: ['Mathematics', 'Physics'],
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  });

  const upcomingClasses = [
    {
      id: 1,
      subject: 'Mathematics',
      teacher: 'Dr. Sarah Johnson',
      date: '2024-03-15',
      time: '10:00 AM',
      zoomLink: 'https://zoom.us/j/123456789',
    },
  ];

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-6 mb-8">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                <p className="text-gray-600">Student</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-3 text-gray-500" />
                    <span>{profile.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-gray-500" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-500" />
                    <span>{profile.phone}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Subjects of Interest</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.subjects.map((subject) => (
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

        {/* Right Column - Upcoming Classes */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
            <div className="space-y-4">
              {upcomingClasses.map((class_) => (
                <div
                  key={class_.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{class_.subject}</h3>
                    <span className="text-sm text-gray-500">{class_.date}</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Teacher: {class_.teacher}</p>
                    <p>Time: {class_.time}</p>
                    <a
                      href={class_.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:underline flex items-center"
                    >
                      Join Zoom Meeting
                      <Calendar className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="w-full mt-6 py-3 px-4 bg-black text-white rounded-md hover:bg-gray-900 transition-colors"
              onClick={() => {/* Handle scheduling */}}
            >
              Schedule New Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;