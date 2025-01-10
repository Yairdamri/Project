import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Calendar, BookOpen, ArrowRight, Star, Award } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary-600" />,
      title: 'Expert Teachers',
      description: 'Learn from qualified educators passionate about your success',
      color: 'bg-primary-50'
    },
    {
      icon: <Calendar className="w-8 h-8 text-secondary-600" />,
      title: 'Flexible Schedule',
      description: 'Book sessions that fit your busy lifestyle',
      color: 'bg-secondary-50'
    },
    {
      icon: <Users className="w-8 h-8 text-accent-600" />,
      title: 'Small Groups',
      description: 'Join focused groups of maximum 5 students',
      color: 'bg-accent-50'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students' },
    { number: '500+', label: 'Expert Teachers' },
    { number: '50,000+', label: 'Sessions Completed' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'University Student',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'The small group sessions helped me excel in my calculus course. The teachers are exceptional!'
    },
    {
      name: 'Michael Chen',
      role: 'High School Senior',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'The learning marathons were intense but incredibly effective. I improved my SAT score significantly.'
    },
    {
      name: 'Emma Williams',
      role: 'Language Learner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'The flexibility of private sessions allowed me to learn Spanish at my own pace. Highly recommended!'
    }
  ];

  // Double the testimonials for smooth infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Learning Journey
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Connect with expert teachers, join small study groups, and achieve your academic goals with personalized learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate('/teachers')}
                  className="px-8 py-3 bg-white text-primary-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Find a Teacher
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/universities')}
                  className="px-8 py-3 bg-primary-700 text-white rounded-lg text-lg font-semibold hover:bg-primary-800 transition-colors"
                >
                  Explore Programs
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Students learning"
                className="rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose EduConnect?</h2>
            <p className="text-xl text-gray-600">Experience the perfect blend of expertise and flexibility</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} rounded-xl p-8 text-center hover:shadow-lg transition-shadow`}
              >
                <div className="inline-block p-3 rounded-full bg-white shadow-md mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore Learning Categories</h2>
            <p className="text-xl text-gray-600">Find the perfect program for your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              onClick={() => navigate('/universities')}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1595320228747-b8e7ef025682?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="University Programs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">University Programs</h3>
                    <p className="text-white/90">Access top university courses and instructors</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => navigate('/languages')}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Language Learning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Language Learning</h3>
                    <p className="text-white/90">Master new languages with expert instructors</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => navigate('/high-school')}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="High School Programs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">High School Programs</h3>
                    <p className="text-white/90">Excel in your academic subjects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied learners</p>
          </div>
          <div className="testimonials-container">
            <div className="testimonials-track">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="bg-white p-6 rounded-xl shadow-md h-full mx-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
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

export default Home;