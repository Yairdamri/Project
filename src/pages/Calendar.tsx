import React, { useState } from 'react';
import { Clock, Video, GraduationCap, MapPin, Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Class {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  teacher: string;
  university: string;
  location: string;
  zoomLink: string;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  const classes: Class[] = [
    {
      id: 1,
      title: 'Advanced Calculus',
      date: '2024-03-15',
      startTime: '10:00',
      endTime: '11:30',
      teacher: 'Dr. Sarah Johnson',
      university: 'MIT',
      location: 'Virtual Classroom',
      zoomLink: 'https://zoom.us/j/123456789'
    },
    {
      id: 2,
      title: 'Linear Algebra',
      date: '2024-03-15',
      startTime: '14:00',
      endTime: '15:30',
      teacher: 'Prof. Michael Chen',
      university: 'Stanford',
      location: 'Virtual Classroom',
      zoomLink: 'https://zoom.us/j/987654321'
    }
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getClassesForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return classes.filter(c => c.date === dateStr);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                My Schedule
              </h1>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2">
                <Clock className="w-4 h-4" />
                New Session
              </button>
            </div>

            <div className="calendar-container">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={prevMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array(firstDayOfMonth).fill(null).map((_, index) => (
                  <div key={`empty-${index}`} className="aspect-square" />
                ))}
                {days.map(day => {
                  const dayClasses = getClassesForDate(day);
                  return (
                    <div
                      key={day}
                      className={`aspect-square p-1 rounded-lg border ${
                        dayClasses.length > 0 ? 'border-primary-200 bg-primary-50' : 'border-transparent'
                      }`}
                    >
                      <button
                        onClick={() => dayClasses.length > 0 && setSelectedClass(dayClasses[0])}
                        className="w-full h-full flex flex-col items-center justify-center rounded-lg hover:bg-gray-50"
                      >
                        <span className="text-sm font-medium">{day}</span>
                        {dayClasses.length > 0 && (
                          <div className="mt-1 w-2 h-2 rounded-full bg-primary-600" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            {selectedClass ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-xl font-bold">Class Details</h2>
                  <button 
                    onClick={() => setSelectedClass(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg mb-4">{selectedClass.title}</h3>
                    <div className="space-y-4 text-gray-600">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">University</p>
                          <p className="font-medium text-gray-900">{selectedClass.university}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
                          <Clock className="w-4 h-4 text-accent-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Time</p>
                          <p className="font-medium text-gray-900">
                            {selectedClass.startTime} - {selectedClass.endTime}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-secondary-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium text-gray-900">{selectedClass.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={selectedClass.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <Video className="w-5 h-5" />
                    Join Virtual Classroom
                  </a>

                  <button className="w-full px-4 py-3 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    Cancel Class
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <CalendarIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">No Class Selected</h2>
                  <p className="text-gray-600">
                    Select a day with classes to view details
                  </p>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary-50 rounded-xl">
                  <p className="text-2xl font-bold text-primary-600">12</p>
                  <p className="text-sm text-gray-600">Classes This Month</p>
                </div>
                <div className="p-4 bg-accent-50 rounded-xl">
                  <p className="text-2xl font-bold text-accent-600">4.9</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;