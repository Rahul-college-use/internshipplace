import React from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';

export default function VivaQuestions() {
  const questions = [
    { q: "What is the standard water-cement ratio rule for concrete mixing?", subject: "Concrete Technology" },
    { q: "Explain the main differences between shallow and deep foundations.", subject: "Geotechnical Eng." },
    { q: "How do you calculate structural slump values on a construction field?", subject: "Site Testing" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight">Viva Questions Prep</h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Prepare effectively for external internship vivas and academic panels.</p>
      </div>

      <div className="space-y-3">
        {questions.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 flex items-start justify-between gap-4 shadow-sm hover:bg-slate-50/50 transition cursor-pointer group">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                {item.subject}
              </span>
              <h5 className="font-extrabold text-slate-900 text-xs sm:text-sm pt-1">{item.q}</h5>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#0066ff] group-hover:translate-x-1 transition shrink-0 self-center" />
          </div>
        ))}
      </div>
    </div>
  );
}