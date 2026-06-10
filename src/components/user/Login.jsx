import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Shield, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function Login({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: ''
  });
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg(null);

    try {
      // Simulating real Express API network validation latency
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      
      //demo go to dashboard page on successful login



      // In a real application, you would handle the response and redirect accordingly      
      // Mock validation logic (replace with actual API call and response handling)
      

      // Mock Response Success condition check
      setIsAuthenticated(true); // Flip state to true

      setStatusMsg({ success: true, text: "🎉 Secure Authentication Successful! Redirecting..." });
      navigate('/dashboard');
      
      /* FUTURE NODE/EXPRESS JWT IMPLEMENTATION:
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); // Save your JWT token
      }
      */
    } catch (err) {
      setStatusMsg({ success: false, text: "❌ Invalid credential matching records." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 py-16 min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center font-sans antialiased">
      <div className="w-full max-w-md px-4">
        
        {/* Main Card Frame Box */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Brand Logo Header Block */}
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="w-12 h-12 bg-[#0066ff] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-md shadow-blue-200 mb-3">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Student Portal Login</h3>
            <p className="text-slate-500 text-xs mt-1">Access your verified industrial internship workplace panel</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            
            {/* Input Email Container */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  required 
                  type="email" 
                  name="emailAddress" 
                  value={formData.emailAddress} 
                  onChange={handleInputChange} 
                  placeholder="name@college.edu" 
                  className="w-full text-sm pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0066ff] transition" 
                />
              </div>
            </div>

            {/* Input Password Container */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Password *</label>
                <a href="#" className="text-xs text-[#0066ff] font-semibold hover:underline">Forgot Password?</a>
              </div>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  required 
                  type={showPass ? "text" : "password"} 
                  name="password" 
                  value={formData.password} 
                  onChange={handleInputChange} 
                  placeholder="••••••••" 
                  className="w-full text-sm pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0066ff] transition" 
                />
                {/* Visibility Toggle Switch */}
                <button 
                  type="button" 
                  onClick={() => setShowPass(!showPass)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Session Options */}
            <label className="flex items-center gap-2 select-none cursor-pointer p-0.5">
              <input type="checkbox" className="accent-[#0066ff] rounded h-3.5 w-3.5" />
              <span className="text-xs text-slate-500 font-medium">Keep me logged in on this device</span>
            </label>

            {/* Authentication Alert Banner */}
            {statusMsg && (
              <div className={`p-3 rounded-lg text-xs font-bold text-center ${statusMsg.success ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {statusMsg.text}
              </div>
            )}

            {/* Submission Action Trigger */}
            <button 
              type="submit" 
              disabled={submitting} 
              className="w-full bg-[#0066ff] hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 text-sm transition disabled:opacity-40"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verifying Credentials...
                </>
              ) : (
                "Sign In to Workspace"
              )}
            </button>

            {/* Redirection link back to signup page */}
            <div className="text-center pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-400 font-medium">
                New to the platform?{' '}
                <Link to="/register" className="text-[#ff9900] font-bold hover:underline">
                  Create an account here
                </Link>
              </span>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}