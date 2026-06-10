import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Global Component Imports
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Dynamic Pages Imports
import Home from './pages/Home';
import Register from './components/user/Register';
import Login from './components/user/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-800 antialiased flex flex-col">

        {/* Persistent Shared Sticky Header Block */}
        <div className="w-full z-50 sticky top-0 flex flex-col">
          <Announcement />
          <Navbar />
        </div>

        {/* Core Viewport Content Container */}
        <main className="relative flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> {/* <-- New Route */}
          </Routes>

        </main>

        {/* Persistent Shared Footer block */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;