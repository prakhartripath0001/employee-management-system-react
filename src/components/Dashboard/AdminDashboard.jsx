import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../other/Header';

const AdminDashboard = () => {
  const { user, logoutUser } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#090b0f] text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background ambient glow bubbles */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12 flex flex-col justify-center items-center text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Welcome, Administrator {user.firstName}
          </h2>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed mx-auto">
            The Admin Dashboard control panel is ready. You can manage employees, allocate new tasks, and review work logs here in the future.
          </p>
        </div>

        <div className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl max-w-md w-full text-left">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">System Status</span>
          <div className="flex justify-between items-center text-sm py-1.5 border-b border-zinc-800/50">
            <span className="text-zinc-400">Environment</span>
            <span className="text-emerald-400 font-semibold">Development</span>
          </div>
          <div className="flex justify-between items-center text-sm py-1.5 border-b border-zinc-800/50">
            <span className="text-zinc-400">Database Mock</span>
            <span className="text-emerald-400 font-semibold">Connected (localStorage)</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
