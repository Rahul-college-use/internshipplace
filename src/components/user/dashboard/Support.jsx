import React from 'react';
import { Mail, MessageSquare, MessageCircle,Phone   } from 'lucide-react';

export default function Support() {
  // Replace this placeholder link with your actual WhatsApp channel link string
  const whatsappChannelLink = "https://whatsapp.com/channel/your-channel-id";

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
      <div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight">Help Desk & Support</h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Get answers to technical workspace setup problems or verification workflow glitches.</p>
      </div>

      {/* Grid adapts to 3 columns on desktop (lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Email Support Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h5 className="font-extrabold text-slate-900 text-sm">Email Support Channel</h5>
            <p className="text-xs text-slate-400 font-medium">Expect resolution guidelines directly within 24 operational working hours.</p>
          </div>
          <a href="mailto:support@internshipplace.com" className="text-center bg-slate-50 hover:bg-blue-50 hover:text-[#0066ff] text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition border border-slate-100">
            support@internshipplace.com
          </a>
        </div>

        {/* Live Chat Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h5 className="font-extrabold text-slate-900 text-sm">Live Workspace Chat</h5>
            <p className="text-xs text-slate-400 font-medium">Interact continuously with operational tech support staff for rapid system fixes.</p>
          </div>
          <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold py-2.5 px-4 rounded-xl text-xs transition">
            Initialize Live Chat Session
          </button>
        </div>

        {/* WhatsApp Channel Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h5 className="font-extrabold text-slate-900 text-sm">WhatsApp Channel</h5>
            <p className="text-xs text-slate-400 font-medium">Join our official channel to get real-time announcements, internship tips, and community updates.</p>
          </div>
          <a 
            href={whatsappChannelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-100 font-bold py-2.5 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5"
          >
            Join Channel →
          </a>
        </div>

        {/* Support Contact Card spanning full width on mobile */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h5 className="font-extrabold text-slate-900 text-sm">Support Contact</h5>
            <p className="text-xs text-slate-400 font-medium">Have a question or need assistance? Reach out to our support team directly.</p>
          </div>
          <a href="tel:+1234567890" className="text-center bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white border border-orange-100 font-bold py-2.5 px-4 rounded-xl text-xs transition">
            Call Support →
          </a>
        </div>
        {/* Telegram Channel Card */}

       

      </div>
    </div>
  );
}