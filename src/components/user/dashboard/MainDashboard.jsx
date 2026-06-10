import { useState, useEffect } from 'react';
import { 
  Calendar, BarChart2, FileText, Download, 
  Award, Eye, FileUp, Check, ArrowRight, BookOpen, Presentation, Folder, Layers, Loader
} from 'lucide-react';
import StatCard from './StatCard';
import { apiService } from '../../../services/api';

export default function MainDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDashboard = async () => {
      try {
        setLoading(true);
        const user = apiService.getStoredUser();
        
        if (!user || !user.id) {
          setError("User not logged in. Please login again.");
          return;
        }

        const data = await apiService.getUserDashboardData(user.id);
        setDashboardData(data);
      } catch (err) {
        setError(err.message || "Failed to load dashboard data");
        console.error("Dashboard data fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDashboard();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center space-y-3">
          <Loader className="w-12 h-12 text-[#0066ff] animate-spin mx-auto" />
          <p className="text-slate-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="text-center space-y-3 bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md">
          <p className="text-red-600 font-bold text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-slate-400 font-medium">No dashboard data available</p>
      </div>
    );
  }

  const docsData = dashboardData.documents || [];

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 custom-scrollbar">
      {/* HEADER HERO ROW SUMMARY BANNER */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-5 sm:p-8 relative overflow-hidden shadow-xl shadow-blue-500/5 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-4 flex-1">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-100 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">👋 Welcome back,</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">{dashboardData.studentName}!</h2>
            <p className="text-blue-100 text-xs sm:text-sm font-medium mt-1">{dashboardData.department} Internship Program</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 text-xs">
            <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md flex items-center justify-between sm:justify-start gap-2 border border-white/5">
              <span className="text-blue-200 font-bold uppercase tracking-wider text-[10px]">Internship ID</span>
              <span className="font-bold">{dashboardData.studentId}</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md flex items-center justify-between sm:justify-start gap-2 border border-white/5">
              <span className="text-blue-200 font-bold uppercase tracking-wider text-[10px]">Duration</span>
              <span className="font-bold text-right sm:text-left">{dashboardData.durationStart} - {dashboardData.durationEnd}</span>
            </div>
          </div>
        </div>
        
        {/* Progress Circle Card Box Wrapper */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 text-slate-800 flex items-center justify-between border border-white/10 shadow-lg min-w-full md:min-w-[280px] lg:min-w-[320px]">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Overall Progress</span>
            <span className="block text-xs font-bold text-slate-500 pt-1">Days Completed</span>
            <span className="block text-base font-black text-slate-900">{dashboardData.totalDaysCompleted} / {dashboardData.totalDays} Days</span>
            <span className={`block text-[11px] font-bold mt-2 px-2 py-0.5 rounded-md w-max ${
              dashboardData.certificateStatus === 'Eligible' 
                ? 'text-emerald-500 bg-emerald-50' 
                : 'text-amber-500 bg-amber-50'
            }`}>
              {dashboardData.certificateStatus === 'Eligible' ? '✓ Certificate Eligible' : 'Certificate ' + dashboardData.certificateStatus}
            </span>
          </div>
          {/* Progress Indicator Circle */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-blue-600" strokeDasharray={`${(dashboardData.progressPercentage / 100) * 100}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <span className="absolute text-xs sm:text-sm font-black text-slate-900">{dashboardData.progressPercentage}%</span>
          </div>
        </div>
      </div>

      {/* CORE FOUR APP METRIC STAT GRID ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Attendance" value={dashboardData.attendancePercentage + "%"} subtext={dashboardData.attendanceDays} icon={<Calendar className="w-5 h-5 text-emerald-500" />} />
        <StatCard title="Internship Progress" value={dashboardData.progressPercentage + "%"} subtext="Tasks & Modules Completed" icon={<BarChart2 className="w-5 h-5 text-blue-500" />} />
        <StatCard title="Report Status" value={dashboardData.reportStatus} subtext={dashboardData.reportStatus === 'Submitted' ? 'Final Report Verified' : 'Awaiting submission'} icon={<FileText className="w-5 h-5 text-orange-500" />} actionIcon={dashboardData.reportStatus === 'Submitted' ? <Check className="w-3.5 h-3.5 text-white" /> : null} statusColor={dashboardData.reportStatus === 'Submitted' ? "bg-emerald-500" : "bg-slate-400"} />
        <StatCard title="Certificate Status" value={dashboardData.certificateStatus} subtext="All requirements" icon={<Award className="w-5 h-5 text-purple-500" />} actionIcon={dashboardData.certificateStatus === 'Eligible' ? <Check className="w-3.5 h-3.5 text-white" /> : null} statusColor={dashboardData.certificateStatus === 'Eligible' ? "bg-emerald-500" : "bg-amber-500"} />
      </div>

      {/* LOWER GRID COMBINED ROW CONTENT PANELS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Double-Column Block: Important Documents Container */}
        <div className="lg:col-span-2 space-y-4 order-1">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-black text-slate-900 tracking-tight">Important Documents</h4>
            <button className="text-[#0066ff] text-xs font-bold hover:underline">View All</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {docsData.map((doc, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-blue-500/20 transition">
                <div className="mb-4">
                  <h5 className="font-extrabold text-slate-900 text-sm group-hover:text-[#0066ff] transition">{doc.title}</h5>
                  <p className="text-xs text-slate-400 font-medium mt-1">{doc.desc}</p>
                </div>

                {/* Render Button Action contextual triggers dynamically based on type */}
                {doc.type === 'download' && (
                  <button className="w-full bg-slate-50 hover:bg-blue-50 hover:text-[#0066ff] text-slate-600 font-bold py-2 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 border border-slate-100">
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                )}
                {doc.type === 'fill' && (
                  <button className="w-full bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold py-2 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5">
                    Fill Now →
                  </button>
                )}
                {doc.type === 'upload' && (
                  <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-600 font-bold py-2 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5">
                    <FileUp className="w-3.5 h-3.5" /> Upload / View
                  </button>
                )}
                {doc.type === 'view' && (
                  <button className="w-full bg-blue-50 hover:bg-blue-100 text-[#0066ff] font-bold py-2 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> View Content
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Single-Column Sidebar Block: Actions & Learning Resources Panel */}
        <div className="space-y-6 order-2 lg:order-2">
          
          {/* Box 1: Quick Operational Action Links */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-slate-900 tracking-tight">Quick Actions</h4>
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-2 flex flex-col space-y-1">
              {[
                { name: "Verify Certificate", desc: "Verify your credential tracking online" },
                { name: "College Verification Letter", desc: "Request standard institutional dispatch" },
                { name: "Contact Assigned Mentor", desc: "Connect with your industrial workspace guide" },
                { name: "Raise Support Ticket", desc: "Get help from tech support team" }
              ].map((act, i) => (
                <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition text-left group">
                  <div className="pr-2">
                    <span className="block text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0066ff] transition">{act.name}</span>
                    <span className="block text-[11px] text-slate-400 font-medium mt-0.5">{act.desc}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 shrink-0 group-hover:text-[#0066ff] group-hover:translate-x-1 transition" />
                </button>
              ))}
            </div>
          </div>

          {/* Box 2: Learning & Reference Assets Resources Component panel */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-black text-slate-900 tracking-tight">Learning & Resources</h4>
              <button className="text-[#0066ff] text-xs font-bold hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Training Videos", icon: <Presentation className="w-4 h-4" />, color: "bg-pink-50 text-pink-600" },
                { title: "Study Materials", icon: <BookOpen className="w-4 h-4" />, color: "bg-amber-50 text-amber-600" },
                { title: "Project Files", icon: <Folder className="w-4 h-4" />, color: "bg-blue-50 text-[#0066ff]" },
                { title: "Assignments", icon: <Layers className="w-4 h-4" />, color: "bg-indigo-50 text-indigo-600" }
              ].map((res, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-3 hover:border-blue-500/10 cursor-pointer transition select-none">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${res.color}`}>
                    {res.icon}
                  </div>
                  <span className="font-extrabold text-slate-950 text-xs tracking-tight truncate">{res.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}