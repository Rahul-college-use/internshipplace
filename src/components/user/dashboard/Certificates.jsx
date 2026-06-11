import React from 'react';
import { Award, Download, ShieldCheck } from 'lucide-react';

export default function Certificates() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight">Earned Certificates</h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Review and download certified completion credentials.</p>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shrink-0 text-amber-400">
            <Award className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-black tracking-tight">Official Program Internship Certificate</h4>
            <p className="text-slate-400 text-xs font-medium">Verified ID: CRT-CE-2026-99120</p>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md mt-2">
              <ShieldCheck className="w-3 h-3" /> Blockchain Authenticated
            </span>
          </div>
        </div>
        <button className="w-full sm:w-auto bg-[#0066ff] hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-md flex items-center justify-center gap-1.5 shrink-0">
          <Download className="w-4 h-4" /> Download Certificate
        </button>
      </div>
    </div>
  );
}