import React from 'react';
import { Award, Briefcase, Calendar, CheckCircle2, UserCheck, Clock } from 'lucide-react';

export default function MyInternship() {
  const internshipDetails = {
    title: "Structural & Site Engineering Internship",
    domain: "Civil Engineering Department",
    company: "BuildCorp Infrastructure Group",
    status: "Active",
    mentor: "Er. Rajesh Malhotra (Senior Project Manager)",
    startDate: "01 Feb 2026",
    endDate: "30 May 2026",
    stipend: "Unpaid / Academic Credited",
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <h4 className="text-xl font-black text-slate-900 tracking-tight">My Internship Details</h4>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Meta Card */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                {internshipDetails.domain}
              </span>
              <h3 className="text-lg font-black text-slate-900 pt-2">{internshipDetails.title}</h3>
              <p className="text-sm text-slate-500 font-medium">{internshipDetails.company}</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {internshipDetails.status}
            </span>
          </div>

          <hr className="border-slate-100" />

          {/* Details Metadata Tracker Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/60 border border-slate-100">
              <UserCheck className="w-5 h-5 text-indigo-500 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Industry Mentor</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">{internshipDetails.mentor}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/60 border border-slate-100">
              <Clock className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Compensation Model</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">{internshipDetails.stipend}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Schedule Timeline landmarks */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider text-slate-400">Timeline Milestones</h4>
          <div className="relative border-l-2 border-slate-100 pl-4 space-y-6 py-2">
            <div className="relative">
              <CheckCircle2 className="w-4 h-4 text-blue-600 absolute -left-[25px] bg-white rounded-full" />
              <span className="block text-[11px] font-bold text-slate-400">{internshipDetails.startDate}</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">Program Launch & Induction</span>
            </div>
            <div className="relative">
              <CheckCircle2 className="w-4 h-4 text-blue-600 absolute -left-[25px] bg-white rounded-full" />
              <span className="block text-[11px] font-bold text-slate-400">Mid-Term</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">Project Review Completed</span>
            </div>
            <div className="relative">
              <div className="w-3 h-3 bg-slate-200 rounded-full absolute -left-[21px] top-1 border-2 border-white" />
              <span className="block text-[11px] font-bold text-slate-400">{internshipDetails.endDate}</span>
              <span className="text-xs sm:text-sm font-bold text-slate-500">Final Presentation & Offboarding</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}