import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layout Global Component Imports
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Dynamic Pages Imports
import Home from './pages/Home';
import Register from './components/user/Register';
import Login from './components/user/Login';
import DashboardPage from './pages/DashboardPage';

/**
 * 1. PROTECTED ROUTE COMPONENT
 * Checks if a token exists. If not, redirects to login instantly.
 */
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    // Redirect unauthenticated users to login, saving their intended location
    return <Navigate to="/login" replace />;
  }
  return children;
}

/**
 * 2. APP CONTENT MANAGER
 * Dynamically handles layout wrapping (Navbar/Footer) and authentications
 */
function AppContent() {
  const location = useLocation();
  
  // Simulated Authentication State (Future implementation: check localStorage.getItem('token'))
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Determine if the client is currently viewing the app workspace
  const isDashboardView = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased flex flex-col">
      
      {/* Public Headers: Hide when browsing the premium dashboard interface */}
      {!isDashboardView && (
        <div className="w-full z-50 sticky top-0 flex flex-col">
          <Announcement />
          <Navbar />
        </div>
      )}

      {/* Main Viewport Routing Gateway */}
      <main className="relative flex-grow flex flex-col">
        <Routes>
          {/* Public Guest Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          {/* Secure Private Workspace Route */}
          <Route 
            path="/dashboard/*" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />

          {/* Catch-all Fallback Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Public Footer: Hide inside dashboard panel to maintain screen layout proportions */}
      {!isDashboardView && <Footer />}
    </div>
  );
}

// Global App entry injecting BrowserRouter wrap
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}