import React from 'react';
import { FileCheck, ShieldAlert } from 'lucide-react';

export default function Assessment() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight">Performance Assessments</h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Track evaluations received from your industrial company mentor.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 border border-slate-100 rounded-2xl shadow-sm text-center space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Attendance Score</span>
          <span className="text-2xl font-black text-slate-900 block">9.5 <span className="text-xs font-bold text-slate-400">/ 10</span></span>
        </div>
        <div className="bg-white p-5 border border-slate-100 rounded-2xl shadow-sm text-center space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Practical Site Tasks</span>
          <span className="text-2xl font-black text-slate-900 block">8.8 <span className="text-xs font-bold text-slate-400">/ 10</span></span>
        </div>
        <div className="bg-white p-5 border border-slate-100 rounded-2xl shadow-sm text-center space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Final Viva Assessment</span>
          <span className="text-2xl font-black text-slate-400 block">Pending Review</span>
        </div>
      </div>

      <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 flex gap-3 text-amber-800">
        <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
        <div>
          <h5 className="text-xs sm:text-sm font-bold">Awaiting Final Grade Release</h5>
          <p className="text-xs text-amber-700/90 font-medium mt-0.5">Your industry guide verified your final log files. Overarching performance reports unlock post final evaluation board signoff.</p>
        </div>
      </div>
    </div>
  );
}