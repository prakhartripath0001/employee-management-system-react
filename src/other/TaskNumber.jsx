import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const TaskNumber = () => {
  const { user } = useContext(AuthContext);

  if (!user || !user.taskCounts) return null;

  const counts = user.taskCounts;

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {/* New Task Card */}
      <div className="bg-gradient-to-br from-blue-600/10 to-blue-900/5 border border-blue-500/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 group">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">New Tasks</span>
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </div>
        <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{counts.newTask}</p>
      </div>

      {/* Active Tasks Card */}
      <div className="bg-gradient-to-br from-amber-600/10 to-amber-900/5 border border-amber-500/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 group">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Active Tasks</span>
          <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
        </div>
        <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{counts.active}</p>
      </div>

      {/* Completed Tasks Card */}
      <div className="bg-gradient-to-br from-emerald-600/10 to-emerald-900/5 border border-emerald-500/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Completed</span>
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
            </svg>
          </div>
        </div>
        <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{counts.completed}</p>
      </div>

      {/* Failed Tasks Card */}
      <div className="bg-gradient-to-br from-rose-600/10 to-rose-900/5 border border-rose-500/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/5 group">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Failed Tasks</span>
          <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
        </div>
        <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{counts.failed}</p>
      </div>
    </section>
  );
};

export default TaskNumber;
