// Base URL for your future Express server (e.g., http://localhost:5000/api)
// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// ==========================================
// MOCK USER DATABASE (Simulating User Collection)
// ==========================================

const MOCK_USERS = [
  {
    id: "user_001",
    fullName: "Amit Kumar",
    email: "amit.kumar@college.edu",
    password: "password123",
    department: "Civil Engineering",
    university: "Aryabhatta Knowledge University (AKU), Patna",
    college: "Government Engineering College, Jehanabad",
    internshipId: "IP-CE-2026-00125",
    startDate: "01 Feb 2026",
    endDate: "30 May 2026",
    totalDays: 70
  },
  {
    id: "user_002",
    fullName: "Priya Singh",
    email: "priya.singh@college.edu",
    password: "demo456",
    department: "Computer Science & Engineering",
    university: "Patliputra University (PPU), Patna",
    college: "Anugrah Narayan College (AN College), Patna",
    internshipId: "IP-CSE-2026-00089",
    startDate: "01 Feb 2026",
    endDate: "30 May 2026",
    totalDays: 70
  }
];

// ==========================================
// MOCK USER DASHBOARD DATA (Simulating Student Progress)
// ==========================================

const MOCK_DASHBOARD_DATA = {
  user_001: {
    studentName: "Amit Kumar",
    studentId: "IP-CE-2026-00125",
    department: "Civil Engineering",
    totalDaysCompleted: 55,
    totalDays: 70,
    progressPercentage: 78,
    attendancePercentage: 92,
    attendanceDays: "52 / 56 Days Present",
    reportStatus: "Submitted",
    certificateStatus: "Eligible",
    durationStart: "01 Feb 2026",
    durationEnd: "30 May 2026",
    documents: [
      { title: "Offer Letter", desc: "Download your official offer letter", type: "download", status: "ready" },
      { title: "Fee Receipt", desc: "Download your payment receipt", type: "download", status: "ready" },
      { title: "Daily Log Book", desc: "Fill your daily activities and tasks", type: "fill", status: "pending" },
      { title: "Report File", desc: "Download format & upload your report", type: "upload", status: "submitted" },
      { title: "Attendance Sheet", desc: "View and download your attendance sheet", type: "download", status: "ready" },
      { title: "Viva Questions", desc: "Important viva questions for your preparation", type: "view", status: "available" },
      { title: "Assessment / Marksheet", desc: "View your assessment marks and feedback", type: "view", status: "available" },
      { title: "Certificate", desc: "Download your internship certificate", type: "download", status: "generating" }
    ]
  },
  user_002: {
    studentName: "Priya Singh",
    studentId: "IP-CSE-2026-00089",
    department: "Computer Science & Engineering",
    totalDaysCompleted: 48,
    totalDays: 70,
    progressPercentage: 68,
    attendancePercentage: 88,
    attendanceDays: "45 / 51 Days Present",
    reportStatus: "Pending",
    certificateStatus: "In Progress",
    durationStart: "01 Feb 2026",
    durationEnd: "30 May 2026",
    documents: [
      { title: "Offer Letter", desc: "Download your official offer letter", type: "download", status: "ready" },
      { title: "Fee Receipt", desc: "Download your payment receipt", type: "download", status: "ready" },
      { title: "Daily Log Book", desc: "Fill your daily activities and tasks", type: "fill", status: "inprogress" },
      { title: "Report File", desc: "Download format & upload your report", type: "upload", status: "pending" },
      { title: "Attendance Sheet", desc: "View and download your attendance sheet", type: "download", status: "ready" },
      { title: "Viva Questions", desc: "Important viva questions for your preparation", type: "view", status: "available" },
      { title: "Assessment / Marksheet", desc: "View your assessment marks and feedback", type: "view", status: "available" },
      { title: "Certificate", desc: "Download your internship certificate", type: "download", status: "pending" }
    ]
  }
};

const MOCK_PROGRAMS = [
  { id: 1, title: "Engineering", meta: "B.Tech / Diploma", cert: "AICTE Compliant", iconName: "GraduationCap", borderColor: "border-blue-500/20" },
  { id: 2, title: "B.A. Programs", meta: "All Specializations", cert: "UGC Compliant", iconName: "BookOpen", borderColor: "border-emerald-500/20" },
  { id: 3, title: "B.Com. Programs", meta: "All Specializations", cert: "UGC Compliant", iconName: "Coins", borderColor: "border-amber-500/20" },
  { id: 4, title: "B.Sc. Programs", meta: "All Specializations", cert: "UGC Compliant", iconName: "FlaskConical", borderColor: "border-purple-500/20" },
  { id: 5, title: "BCA Programs", meta: "Computer Applications", cert: "UGC Compliant", iconName: "Laptop", borderColor: "border-rose-500/20" }
];

const MOCK_UNIVERSITIES = [
  { id: "aku", name: "Aryabhatta Knowledge University (AKU), Patna" },
  { id: "bu", name: "Bihar University (BRABU), Muzaffarpur" },
  { id: "ppu", name: "Patliputra University (PPU), Patna" }
];

const MOCK_COLLEGES = [
  // AKU Engineering Colleges
  { id: "gecj", name: "Government Engineering College, Jehanabad", universityId: "aku", category: "btech_diploma" },
  { id: "gecg", name: "Government Engineering College, Gaya", universityId: "aku", category: "btech_diploma" },
  
  // PPU UGC Colleges
  { id: "anc", name: "Anugrah Narayan College (AN College), Patna", universityId: "ppu", category: "ugc" },
  { id: "bdc", name: "B.D. College, Patna", universityId: "ppu", category: "ugc" },

  // BRABU UGC Colleges
  { id: "ls", name: "Langat Singh College, Muzaffarpur", universityId: "bu", category: "ugc" }
];

const MOCK_DEPARTMENTS = {
  btech_diploma: [
    { id: "cse", name: "Computer Science & Engineering" },
    { id: "ece", name: "Electronics & Communication Engineering" },
    { id: "me", name: "Mechanical Engineering" },
    { id: "ce", name: "Civil Engineering" }
  ],
  ugc: [
    { id: "bca", name: "Bachelor of Computer Applications (BCA)" },
    { id: "bsc_it", name: "B.Sc. Information Technology" },
    { id: "bcom", name: "Bachelor of Commerce (B.Com)" },
    { id: "ba", name: "Bachelor of Arts (B.A.)" }
  ]
};

// ==========================================
// API EXPORT METHODS
// ==========================================

export const apiService = {
  
  // 0. LOGIN: Authenticate user and return user data
  loginUser: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = MOCK_USERS.find(u => u.email === email && u.password === password);
        if (user) {
          const userData = {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            internshipId: user.internshipId
          };
          localStorage.setItem('userData', JSON.stringify(userData));
          resolve({ success: true, user: userData });
        } else {
          reject({ success: false, message: "Invalid email or password" });
        }
      }, 600);
    });

    /* FUTURE NODE/EXPRESS IMPLEMENTATION:
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('userData', JSON.stringify(data.user));
      return data;
    } else {
      throw new Error(data.message);
    }
    */
  },

  // 0.5. GET STORED USER: Retrieve logged-in user from localStorage
  getStoredUser: () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  },

  // 0.7. LOGOUT: Clear user data
  logoutUser: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem('userData');
        resolve({ success: true });
      }, 300);
    });
  },

  // 1. FETCH USER DASHBOARD DATA: Get user-specific dashboard information
  getUserDashboardData: async (userId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dashboardData = MOCK_DASHBOARD_DATA[userId];
        if (dashboardData) {
          resolve(dashboardData);
        } else {
          reject({ success: false, message: "User dashboard data not found" });
        }
      }, 400);
    });

    /* FUTURE NODE/EXPRESS IMPLEMENTATION:
    const response = await fetch(`${API_BASE_URL}/dashboard/${userId}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    if (!response.ok) throw new Error('Failed to fetch dashboard data');
    return await response.json();
    */
  },
  
  // 2. Fetch all internship programs (Used on Home Page)
  getPrograms: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_PROGRAMS), 300);
    });

    /* FUTURE NODE/EXPRESS IMPLEMENTATION:
    const response = await fetch(`${API_BASE_URL}/programs`);
    if (!response.ok) throw new Error('Network error');
    return await response.json();
    */
  },

  // 3. Fetch all universities (Used to populate Register field initial load)
  getUniversities: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_UNIVERSITIES), 200);
    });

    /* FUTURE IMPLEMENTATION:
    const response = await fetch(`${API_BASE_URL}/universities`);
    return await response.json();
    */
  },

  // 4. Cascading fetch: Filters colleges by selected University AND Category (BTech/UGC)
  getFilteredColleges: async (universityId, category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = MOCK_COLLEGES.filter(
          college => college.universityId === universityId && college.category === category
        );
        resolve(filtered);
      }, 250);
    });

    /* FUTURE IMPLEMENTATION (Express Query Parameters):
    const response = await fetch(`${API_BASE_URL}/colleges?universityId=${universityId}&category=${category}`);
    return await response.json();
    */
  },

  // 5. Sync Departments selection based on the toggle switch category
  getDepartmentsByCategory: async (category) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_DEPARTMENTS[category] || []), 150);
    });
  },

  // 6. Submit Form data payload
  registerStudent: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, message: "Registered successfully (Mock)!" }), 500);
    });

    /* FUTURE IMPLEMENTATION:
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData)
    });
    return await response.json();
    */
  }
};