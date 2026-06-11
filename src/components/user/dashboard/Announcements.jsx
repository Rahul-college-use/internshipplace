import React from 'react';
import { Bell, Calendar } from 'lucide-react';

export default function Announcements() {
  const alerts = [
    { title: "Final Term Logbook Evaluation Deadlines Notice", body: "Please complete all structural site documentation signatures before June 20th to assure continuous processing layout workflows.", date: "11 Jun 2026" },
    { title: "Industry Expert Virtual Masterclass Session Scheduled", body: "Join Er. Alok Sharma online as he highlights modern eco-friendly green concrete mixtures paradigms.", date: "07 Jun 2026" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight">Official Announcements</h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Stay informed with live news feed notifications from workspace monitors.</p>
      </div>

      <div className="space-y-4">
        {alerts.map((al, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-3 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h5 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" /> {al.title}
              </h5>
              <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 shrink-0">
                <Calendar className="w-3.5 h-3.5" /> {al.date}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pl-4">{al.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}