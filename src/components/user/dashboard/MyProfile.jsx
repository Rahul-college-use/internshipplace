import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Building } from 'lucide-react';

export default function MyProfile() {
  const profileData = {
    name: "Amit Kumar",
    role: "Civil Engineering Intern",
    id: "IP-CE-2026-00125",
    email: "amit.kumar@example.com",
    phone: "+91 98765 43210",
    location: "Patna, Bihar, India",
    college: "Patna Institute of Technology",
    branch: "Civil Engineering",
    semester: "8th Semester",
    bloodGroup: "O+",
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-black text-slate-900 tracking-tight">My Profile</h4>
      </div>

      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
        <div className="w-24 h-24 bg-blue-50 text-[#0066ff] rounded-full flex items-center justify-center border-4 border-blue-100/50 shadow-sm shrink-0">
          <User className="w-12 h-12" />
        </div>
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-xl font-black text-slate-900">{profileData.name}</h2>
          <p className="text-xs font-bold text-[#0066ff] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
            ID: {profileData.id}
          </p>
          <p className="text-xs text-slate-400 font-medium pt-1">{profileData.role}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider text-slate-400">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-600">
              <Mail className="w-4 h-4 text-slate-400" />
              <span className="text-xs sm:text-sm font-medium">{profileData.email}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Phone className="w-4 h-4 text-slate-400" />
              <span className="text-xs sm:text-sm font-medium">{profileData.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span className="text-xs sm:text-sm font-medium">{profileData.location}</span>
            </div>
          </div>
        </div>

        {/* Academic Details */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider text-slate-400">Academic Details</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-600">
              <Building className="w-4 h-4 text-slate-400" />
              <span className="text-xs sm:text-sm font-medium">{profileData.college}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <GraduationCap className="w-4 h-4 text-slate-400" />
              <span className="text-xs sm:text-sm font-medium">{profileData.branch} ({profileData.semester})</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Briefcase className="w-4 h-4 text-slate-400" />
              <span className="text-xs sm:text-sm font-medium">Blood Group: {profileData.bloodGroup}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}