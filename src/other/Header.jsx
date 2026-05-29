import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  if (!user) return null;

  const isAdmin = !user.tasks;

  return (
    <header className="border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${isAdmin ? 'from-indigo-600 to-violet-500' : 'from-blue-600 to-indigo-500'} flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-blue-500/20`}>
            {isAdmin ? 'A' : 'E'}
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Synergy
            </h1>
            <p className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase">
              {isAdmin ? 'Admin Portal' : 'Portal'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-sm font-semibold text-zinc-300">Hello, {user.firstName} 👋</span>
            <span className={`text-[11px] font-medium ${isAdmin ? 'text-indigo-400' : 'text-emerald-400'}`}>
              {isAdmin ? 'Administrator' : 'Employee Account'}
            </span>
          </div>
          <button
            onClick={logoutUser}
            className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 active:scale-[0.98] text-zinc-300 hover:text-white font-medium rounded-xl text-sm transition-all duration-200 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
