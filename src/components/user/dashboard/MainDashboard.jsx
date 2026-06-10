import React from 'react';
import { 
  Calendar, BarChart2, CheckCircle, FileText, Download, 
  HelpCircle, Award, Eye, FileUp, Check, ShieldAlert, ArrowRight, BookOpen, Presentation, Folder, Layers
} from 'lucide-react';
import StatCard from './StatCard';

export default function MainDashboard() {
  const docsData = [
    { title: "Offer Letter", desc: "Download your official offer letter", type: "download" },
    { title: "Fee Receipt", desc: "Download your payment receipt", type: "download" },
    { title: "Daily Log Book", desc: "Fill your daily activities and tasks", type: "fill" },
    { title: "Report File", desc: "Download format & upload your report", type: "upload" },
    { title: "Attendance Sheet", desc: "View and download your attendance sheet", type: "download" },
    { title: "Viva Questions", desc: "Important viva questions for your preparation", type: "view" },
    { title: "Assessment / Marksheet", desc: "View your assessment marks and feedback", type: "view" },
    { title: "Certificate", desc: "Download your internship certificate", type: "download" }
  ];

  return (
    <div className="space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto p-6 lg:p-8 custom-scrollbar box-border">
      
      {/* HEADER HERO ROW SUMMARY BANNER */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-blue-500/5 text-white grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        <div className="md:col-span-2 space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-100 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">👋 Welcome back,</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">Amit Kumar!</h2>
            <p className="text-blue-100 text-xs sm:text-sm font-medium mt-1">Civil Engineering Internship Program</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 border border-white/5">
              <span className="text-blue-200 font-bold uppercase tracking-wider text-[10px]">Internship ID</span>
              <span className="font-bold">IP-CE-2026-00125</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 border border-white/5">
              <span className="text-blue-200 font-bold uppercase tracking-wider text-[10px]">Duration</span>
              <span className="font-bold">01 Feb 2026 - 30 May 2026</span>
            </div>
          </div>
        </div>
        
        {/* Progress Circle Card Box Wrapper */}
        <div className="bg-white rounded-2xl p-5 text-slate-800 flex items-center justify-between border border-white/10 shadow-lg">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Overall Progress</span>
            <span className="block text-xs font-bold text-slate-500 pt-1">Days Completed</span>
            <span className="block text-base font-black text-slate-900">55 / 70 Days</span>
            <span className="block text-[11px] font-bold text-emerald-500 mt-2 bg-emerald-50 px-2 py-0.5 rounded-md w-max">Certificate Eligible</span>
          </div>
          {/* Progress Indicator Circle */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-blue-600" strokeDasharray="78, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <span className="absolute text-sm font-black text-slate-900">78%</span>
          </div>
        </div>
      </div>

      {/* CORE FOUR APP METRIC STAT GRID ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Attendance" value="92%" subtext="52 / 56 Days Present" icon={<Calendar className="w-5 h-5 text-emerald-500" />} />
        <StatCard title="Internship Progress" value="78%" subtext="Tasks & Modules Completed" icon={<BarChart2 className="w-5 h-5 text-blue-500" />} />
        <StatCard title="Report Status" value="Submitted" subtext="Final Report Verified" icon={<FileText className="w-5 h-5 text-orange-500" />} actionIcon={<Check className="w-3.5 h-3.5 text-white" />} statusColor="bg-emerald-500" />
        <StatCard title="Certificate Status" value="Eligible" subtext="All requirements completed" icon={<Award className="w-5 h-5 text-purple-500" />} actionIcon={<Check className="w-3.5 h-3.5 text-white" />} statusColor="bg-emerald-500" />
      </div>

      {/* LOWER GRID COMBINED ROW CONTENT PANELS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Double-Column Block: Important Documents Container */}
        <div className="lg:col-span-2 space-y-4">
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
        <div className="space-y-6">
          
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
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0066ff] transition">{act.name}</span>
                    <span className="block text-[11px] text-slate-400 font-medium mt-0.5">{act.desc}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0066ff] group-hover:translate-x-1 transition" />
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
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-3 hover:border-blue-500/10 cursor-pointer transition select-none">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${res.color}`}>
                    {res.icon}
                  </div>
                  <span className="font-extrabold text-slate-950 text-xs tracking-tight">{res.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}