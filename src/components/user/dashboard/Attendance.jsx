import React from 'react';
import { Calendar, CheckCircle, XCircle, AlertCircle, FileSpreadsheet, FileText } from 'lucide-react';

export default function Attendance() {
  const logs = [
    { date: "08 Jun 2026", status: "Present", clockIn: "09:00 AM", clockOut: "05:30 PM", remarks: "On-time" },
    { date: "09 Jun 2026", status: "Present", clockIn: "08:55 AM", clockOut: "05:35 PM", remarks: "On-time" },
    { date: "10 Jun 2026", status: "Absent", clockIn: "--", clockOut: "--", remarks: "Sick Leave Requested" },
    { date: "11 Jun 2026", status: "Half Day", clockIn: "09:00 AM", clockOut: "01:30 PM", remarks: "Approved Leave" },
  ];

  const triggerExcelExport = () => alert("Generating Excel sheet format download package...");
  const triggerPdfExport = () => alert("Compiling PDF cryptographic report layout printout...");

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      
      {/* Top action block section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h4 className="text-xl font-black text-slate-900 tracking-tight">Attendance Record</h4>
        
        {/* Excel & PDF Action trigger items */}
        <div className="flex items-center gap-2.5">
          <button 
            onClick={triggerExcelExport} 
            className="flex-1 sm:flex-none bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-100 font-bold py-2 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5"
          >
            <FileSpreadsheet className="w-4 h-4" /> Export Excel
          </button>
          <button 
            onClick={triggerPdfExport} 
            className="flex-1 sm:flex-none bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-100 font-bold py-2 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5"
          >
            <FileText className="w-4 h-4" /> Export PDF
          </button>
        </div>
      </div>

      {/* Attendance Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-slate-400 uppercase">Days Present</span>
            <span className="text-lg font-black text-slate-900">52 Days</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-slate-400 uppercase">Days Absent</span>
            <span className="text-lg font-black text-slate-900">2 Days</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-slate-400 uppercase">Half Days</span>
            <span className="text-lg font-black text-slate-900">2 Days</span>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Data Logs Table wrapper */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-bold text-[11px] uppercase tracking-wider">
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Clock In</th>
                <th className="py-4 px-6">Clock Out</th>
                <th className="py-4 px-6">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-xs sm:text-sm text-slate-700 font-semibold">
              {logs.map((log, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-slate-900 font-bold">{log.date}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold inline-block ${
                      log.status === 'Present' ? 'bg-emerald-50 text-emerald-600' :
                      log.status === 'Absent' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">{log.clockIn}</td>
                  <td className="py-4 px-6 text-slate-500">{log.clockOut}</td>
                  <td className="py-4 px-6 text-slate-400 font-medium">{log.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}