// Base URL for your future Express server (e.g., http://localhost:5000/api)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// ==========================================
// MOCK DATABASES (Simulating MongoDB Collections)
// ==========================================

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
  
  // 1. Fetch all internship programs (Used on Home Page)
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

  // 2. Fetch all universities (Used to populate Register field initial load)
  getUniversities: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_UNIVERSITIES), 200);
    });

    /* FUTURE IMPLEMENTATION:
    const response = await fetch(`${API_BASE_URL}/universities`);
    return await response.json();
    */
  },

  // 3. Cascading fetch: Filters colleges by selected University AND Category (BTech/UGC)
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

  // 4. Sync Departments selection based on the toggle switch category
  getDepartmentsByCategory: async (category) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_DEPARTMENTS[category] || []), 150);
    });
  },

  // 5. Submit Form data payload
  registerStudent: async (studentData) => {
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