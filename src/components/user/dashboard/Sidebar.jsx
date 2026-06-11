import { 
  LayoutDashboard, User, GraduationCap, Calendar, FileText, 
  BookOpen, HelpCircle, FileCheck, Shield, Award, Users, Bell, Headphones 
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'profile', label: 'My Profile', icon: <User className="w-4 h-4" /> },
    { id: 'internship', label: 'My Internship', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'attendance', label: 'Attendance', icon: <Calendar className="w-4 h-4" /> },
    { id: 'logbook', label: 'Daily Log Book', icon: <FileText className="w-4 h-4" /> },
    { id: 'learning', label: 'Learning Center', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'viva', label: 'Viva Questions', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'assessment', label: 'Assessment', icon: <FileCheck className="w-4 h-4" /> },
    { id: 'documents', label: 'Documents', icon: <Shield className="w-4 h-4" /> },
    { id: 'certificates', label: 'Certificates', icon: <Award className="w-4 h-4" /> },
    { id: 'placement', label: 'Placement Cell', icon: <Users className="w-4 h-4" /> },
    { id: 'announcements', label: 'Announcements', icon: <Bell className="w-4 h-4" />, badge: true },
    { id: 'support', label: 'Support', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-16 sm:w-64 bg-white border-r border-slate-100 flex flex-col h-full shrink-0 select-none transition-all duration-200">
      {/* Brand Identity Branding Header wrapper */}
      <div className="h-20 flex items-center justify-center sm:justify-start px-4 sm:px-6 border-b border-slate-50 gap-2">
        <div className="w-8 h-8 bg-[#0066ff] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-black text-slate-900 tracking-tight">
            Internship <span className="text-[#ff9900]">Place</span>
          </div>
          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Learn. Intern. Grow.</div>
        </div>
      </div>

      {/* Navigation List links context */}
      <nav className="flex-grow py-6 px-2 sm:px-4 space-y-1 overflow-y-auto max-h-[calc(100vh-16rem)] custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              title={item.label} /* Tooltip on hover for small screens */
              className={`w-full flex items-center justify-center sm:justify-between p-2.5 sm:px-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition relative ${
                isActive 
                  ? 'bg-blue-50 text-[#0066ff]' 
                  : 'text-slate-500 hover:bg-slate-50/80 hover:text-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0">{item.icon}</span>
                <span className="hidden sm:block">{item.label}</span>
              </div>
              {item.badge && (
                <span className="absolute top-2 right-2 sm:static w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Need Help CTA bottom block card float */}
      <div className="p-2 sm:p-4 border-t border-slate-50">
        {/* Hidden on mobile, shows on desktop */}
        <div className="hidden sm:flex bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-col items-center text-center space-y-3">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm text-[#0066ff]">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-900">Need Help?</h5>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">Our support team is here to help you.</p>
          </div>
          <button onClick={() => setActiveTab('support')} className="w-full bg-[#0066ff] hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition shadow-sm">
            Contact Support →
          </button>
        </div>

        {/* Minimal Support Icon for mobile */}
        <div className="block sm:hidden flex justify-center">
          <button 
            title="Support" 
            className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center justify-center text-[#0066ff] transition"
          >
            <Headphones className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}