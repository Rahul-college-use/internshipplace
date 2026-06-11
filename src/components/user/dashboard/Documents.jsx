import React from 'react';
import { Shield, FileText, Download } from 'lucide-react';

export default function Documents() {
  const files = [
    { title: "NOC Recommendation Dispatch", size: "1.2 MB", category: "Institutional Clearance" },
    { title: "Industrial Safety Guidelines Handbook", size: "4.5 MB", category: "Compliance Code" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight">Verified Clearance Documents</h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Access verified institutional documentation framework assets securely.</p>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm divide-y divide-slate-50">
        {files.map((file, idx) => (
          <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h5 className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">{file.title}</h5>
                <p className="text-[11px] text-slate-400 font-semibold mt-0.5">{file.category} • {file.size}</p>
              </div>
            </div>
            <button className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-[#0066ff] text-slate-500 rounded-xl transition shrink-0">
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}