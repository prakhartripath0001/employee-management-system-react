import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';

const AppContent = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-screen bg-[#090b0f] flex items-center justify-center relative overflow-hidden">
        {/* Background glow animations */}
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse duration-10000"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse duration-10000"></div>
        
        <Login />
      </div>
    );
  }

  // Determine dashboard based on role (employees have tasks list, admin does not)
  if (user.tasks) {
    return <EmployeeDashboard />;
  } else {
    return <AdminDashboard />;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;