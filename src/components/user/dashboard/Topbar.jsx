import { useState } from 'react';
import { Bell, ChevronDown, LogOut, User, Settings, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Topbar({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    if (setIsAuthenticated) {
      setIsAuthenticated(false); // Revoke auth state token wrapper
    }
    navigate('/login'); // Boot back to public entry page
  };

  return (
    <header className="h-20 bg-white border-b border-slate-100 px-6 lg:px-8 flex items-center justify-between shrink-0 relative select-none z-40">
      
      {/* 1. URGENT SYSTEM TICKER BANNER (Left/Center) */}
      <div className="hidden md:flex items-center gap-2.5 bg-amber-50/60 border border-amber-500/10 text-amber-800 px-4 py-2 rounded-xl text-xs font-semibold max-w-xl">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
        <span className="truncate">
          <strong className="font-bold">Important:</strong> Submit your final internship project report before 25 May 2026.
        </span>
        <button className="text-[#0066ff] hover:underline font-bold text-[11px] shrink-0 ml-1">
          View Details
        </button>
      </div>

      {/* Mobile-only compact warning pill */}
      <div className="flex md:hidden items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 px-2.5 py-1.5 rounded-lg text-[11px] font-bold">
        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
        <span>Action Required</span>
      </div>

      {/* 2. ACTIONS & PROFILE CORNER BLOCK (Right Side) */}
      <div className="flex items-center gap-4 ml-auto relative">
        
        {/* Interactive Notification Bell Indicator */}
        <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition relative group">
          <Bell className="w-4 h-4 group-hover:animate-swing" />
          {/* Active Notification Count Badge */}
          <span className="absolute top-2.5 right-2.5 w-4 h-4 bg-rose-500 text-white rounded-full flex items-center justify-center text-[9px] font-black border-2 border-white">
            3
          </span>
        </button>

        {/* Vertical Divider line */}
        <div className="w-px h-6 bg-slate-100 hidden sm:block" />

        {/* Student Active Profile Anchor Trigger */}
        <div 
          onClick={() => setShowProfileMenu(!showProfileMenu)}
          className="flex items-center gap-3 cursor-pointer p-1 rounded-xl hover:bg-slate-50/80 transition select-none"
        >
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" 
              alt="Student Workspace Avatar" 
              className="w-9 h-9 rounded-xl object-cover ring-2 ring-blue-500/10"
            />
            {/* Online Status Green Indicator dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
          </div>

          <div className="hidden sm:block text-left min-w-0">
            <span className="block text-xs sm:text-sm font-black text-slate-900 leading-tight">Amit Kumar</span>
            <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Civil Engineering</span>
          </div>
          
          <ChevronDown className={`w-4 h-4 text-slate-400 hidden sm:block transition-transform duration-200 ${showProfileMenu ? 'rotate-180' : ''}`} />
        </div>

        {/* 3. DROP-DOWN PROFILE CONTEXT MODAL MENU */}
        {showProfileMenu && (
          <>
            {/* Click-outside glass frame to dismiss modal immediately */}
            <div onClick={() => setShowProfileMenu(false)} className="fixed inset-0 z-40 bg-transparent cursor-default" />
            
            <div className="absolute right-0 top-[calc(100%+4px)] w-52 bg-white border border-slate-100 rounded-xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-100 font-medium text-slate-700">
              
              <div className="px-4 py-2 border-b border-slate-50 mb-1">
                <span className="block text-xs text-slate-400 font-bold tracking-wider uppercase">Signed in as</span>
                <span className="block text-xs font-bold text-slate-800 truncate mt-0.5">amit.kumar@college.edu</span>
              </div>

              <button onClick={() => { setShowProfileMenu(false); navigate('/dashboard/profile'); }} className="w-full flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 text-xs sm:text-sm text-left transition">
                <User className="w-4 h-4 text-slate-400" />
                Profile Setup
              </button>

              <button onClick={() => setShowProfileMenu(false)} className="w-full flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 text-xs sm:text-sm text-left transition">
                <Settings className="w-4 h-4 text-slate-400" />
                Account Settings
              </button>

              <div className="w-full border-t border-slate-50 my-1.5" />

              <button 
                onClick={() => { setShowProfileMenu(false); handleLogout(); }}
                className="w-full flex items-center gap-2.5 px-4 py-2 hover:bg-rose-50 text-rose-600 text-xs sm:text-sm text-left font-bold transition"
              >
                <LogOut className="w-4 h-4 text-rose-500" />
                Sign Out Workspace
              </button>

            </div>
          </>
        )}

      </div>
    </header>
  );
}