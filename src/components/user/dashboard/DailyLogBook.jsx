import React, { useState } from 'react';
import { FileText, Plus, CheckCircle2, Clock } from 'lucide-react';

export default function DailyLogBook() {
  const [logs, setLogs] = useState([
    { date: "11 Jun 2026", task: "Site inspection at Sector 4 and concrete slump testing.", status: "Approved", duration: "8 hrs" },
    { date: "10 Jun 2026", task: "Reviewed blueprint drafts for foundation layout adjustments.", status: "Approved", duration: "8 hrs" },
    { date: "09 Jun 2026", task: "Compiled structural load calculations in Excel.", status: "Pending", duration: "7.5 hrs" },
  ]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-black text-slate-900 tracking-tight">Daily Log Book</h4>
          <p className="text-xs text-slate-400 font-medium mt-0.5">Log your daily industrial internship tasks here.</p>
        </div>
        <button className="w-full sm:w-auto bg-[#0066ff] hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-sm flex items-center justify-center gap-1.5">
          <Plus className="w-4 h-4" /> Add New Entry
        </button>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm divide-y divide-slate-50">
        {logs.map((log, idx) => (
          <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/30 transition">
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">{log.date}</span>
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {log.duration}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">{log.task}</p>
            </div>
            <span className={`w-max flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold ${
              log.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
            }`}>
              {log.status === 'Approved' && <CheckCircle2 className="w-3.5 h-3.5" />}
              {log.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}