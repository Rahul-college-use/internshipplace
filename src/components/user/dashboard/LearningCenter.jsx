import React from 'react';
import { PlayCircle, FileCode, CheckCircle } from 'lucide-react';

export default function LearningCenter() {
  const modules = [
    { title: "Introduction to AutoCAD Civil 3D", duration: "2h 45m", type: "Video", progress: "Completed" },
    { title: "Reinforced Concrete Design Principles", duration: "1h 30m", type: "Document", progress: "In Progress" },
    { title: "Foundation Engineering Case Studies", duration: "3h 15m", type: "Video", progress: "Not Started" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight">Learning Center</h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Access exclusive course modules and industrial training guides.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-500/20 transition">
            <div className="space-y-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                mod.type === 'Video' ? 'bg-pink-50 text-pink-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {mod.type === 'Video' ? <PlayCircle className="w-5 h-5" /> : <FileCode className="w-5 h-5" />}
              </div>
              <h5 className="font-extrabold text-slate-900 text-sm leading-snug">{mod.title}</h5>
              <span className="block text-xs text-slate-400 font-medium">Duration: {mod.duration}</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className={`text-[11px] font-bold ${
                mod.progress === 'Completed' ? 'text-emerald-600' : mod.progress === 'In Progress' ? 'text-blue-600' : 'text-slate-400'
              }`}>{mod.progress}</span>
              <button className="bg-slate-50 hover:bg-blue-50 hover:text-[#0066ff] text-slate-700 font-bold py-1.5 px-3 rounded-lg text-xs transition">
                Open Module
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}