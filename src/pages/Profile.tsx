import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, BookOpen, Clock, GraduationCap, Edit, Save } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Thompson',
    email: 'alex.thompson@example.com',
    phone: '+1 (555) 123-4567',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  });

  const enrolledCourses = [
    {
      id: 1,
      title: 'Advanced Calculus',
      university: 'MIT',
      progress: 60,
      nextClass: '2024-03-15T10:00:00',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Linear Algebra',
      university: 'Stanford',
      progress: 30,
      nextClass: '2024-03-16T14:00:00',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 bg-black text-white rounded-full hover:bg-gray-900">
                    <Edit className="w-4 h-4" />
                  </button>
                )}
              </div>
              <h1 className="text-2xl font-bold mt-4">{profile.name}</h1>
              <p className="text-gray-600">Student</p>
            </div>

            <div className="space-y-4">
              {isEditing ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>{profile.phone}</span>
                  </div>
                </>
              )}
            </div>

            <div className="mt-6">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="w-full flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
                >
                  <Edit className="w-5 h-5 mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <button
                onClick={() => navigate('/universities')}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
              >
                Browse More Courses
              </button>
            </div>

            <div className="space-y-6">
              {enrolledCourses.map(course => (
                <div key={course.id} className="flex gap-6 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          <span>{course.university}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600 mb-1">Next Class</div>
                        <div className="flex items-center text-gray-900">
                          <Clock className="w-4 h-4 mr-1" />
                          {new Date(course.nextClass).toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-black rounded-full h-2 transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;