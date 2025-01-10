import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import TeacherProfile from './pages/TeacherProfile';
import Profile from './pages/Profile';
import Calendar from './pages/Calendar';
import TeacherList from './pages/TeacherList';
import Universities from './pages/Universities';
import UniversityCategories from './pages/UniversityCategories';
import UniversityMarathons from './pages/UniversityMarathons';
import HighSchool from './pages/HighSchool';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/teachers/:id" element={<TeacherProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/universities/:id" element={<UniversityCategories />} />
            <Route path="/universities/:id/marathons" element={<UniversityMarathons />} />
            <Route path="/high-school" element={<HighSchool />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;