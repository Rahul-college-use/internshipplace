import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Announcement() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleRegister = () => {
        setIsOpen(false); // Close mobile drawer if open
        navigate('/register');
    };
    return (
        <div className="bg-[#0066ff] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
            <span>🎓 AICTE & UGC Compliant Internship Programs for Engineering & UG Students</span>
            <button onClick={handleRegister} className="bg-white text-[#0066ff] text-xs px-3 py-1 rounded-full font-semibold hover:bg-opacity-90 transition shadow-sm">
                Register Now →
            </button>
        </div>
    );
}