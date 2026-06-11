import React from 'react';
import { Users, Building2, MapPin, ArrowRight } from 'lucide-react';

export default function PlacementCell() {
  const jobs = [
    { role: "Graduate Engineer Trainee (GET)", company: "Larsen & Toubro", loc: "Mumbai HQ", CTC: "₹6.5 - 8.0 LPA" },
    { role: "Junior Structural Design Analyst", company: "Tata Consulting Engineers", loc: "Pune Office", CTC: "₹5.8 - 7.2 LPA" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight">Placement Cell Drive</h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Explore career path openings curated directly for graduating interns.</p>
      </div>

      <div className="space-y-4">
        {jobs.map((job, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-blue-500/20 transition">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-100 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="font-extrabold text-slate-900 text-sm group-hover:text-[#0066ff] transition">{job.role}</h5>
                <p className="text-xs text-slate-500 font-semibold">{job.company}</p>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium pt-1">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.loc}</span>
                  <span className="text-emerald-600 font-bold">{job.CTC}</span>
                </div>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-slate-50 group-hover:bg-[#0066ff] text-slate-700 group-hover:text-white font-bold py-2 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shrink-0">
              Apply Drive <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}