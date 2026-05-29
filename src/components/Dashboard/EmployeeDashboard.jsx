import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import NewTask from '../TaskList/NewTask';
import AcceptTask from '../TaskList/AcceptTask';
import CompleteTask from '../TaskList/CompleteTask';
import FailedTask from '../TaskList/FailedTask';

const EmployeeDashboard = () => {
  const { user, logoutUser, updateEmployeeTasks } = useContext(AuthContext);

  if (!user) return null;

  const handleAccept = (index) => {
    const updatedTasks = user.tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, active: true, newTask: false };
      }
      return task;
    });
    updateEmployeeTasks(user.id, updatedTasks);
  };

  const handleComplete = (index) => {
    const updatedTasks = user.tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, active: false, completed: true };
      }
      return task;
    });
    updateEmployeeTasks(user.id, updatedTasks);
  };

  const handleFail = (index) => {
    const updatedTasks = user.tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, active: false, failed: true };
      }
      return task;
    });
    updateEmployeeTasks(user.id, updatedTasks);
  };

  // Safe fallback counts
  const counts = user.taskCounts || { active: 0, newTask: 0, completed: 0, failed: 0 };
  const tasks = user.tasks || [];

  return (
    <div className="min-h-screen bg-[#090b0f] text-white flex flex-col font-sans relative overflow-x-hidden">
      {/* Background ambient glow bubbles */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Navbar / Header */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-blue-500/20">
              E
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Synergy
              </h1>
              <p className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase">Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sm font-semibold text-zinc-300">Hello, {user.firstName} 👋</span>
              <span className="text-[11px] text-emerald-400 font-medium">Employee Account</span>
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

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-8 flex flex-col gap-10">
        
        {/* Welcome Section */}
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Welcome back, {user.firstName}!
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Here's an overview of your current task assignments and progress status. Make sure to update your task status as you make progress.
          </p>
        </section>

        {/* Metrics Grid */}
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

        {/* Tasks Section */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h3 className="text-xl font-bold tracking-tight text-zinc-100 flex items-center gap-2">
              Task Board
              <span className="text-xs font-semibold px-2 py-0.5 bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-md">
                {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
              </span>
            </h3>
          </div>

          {tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-4 bg-zinc-900/40 rounded-2xl border border-zinc-800/80 text-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-500 border border-zinc-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24V19.5m8.077-7.324H12" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-zinc-200 font-semibold">No Tasks Assigned</p>
                <p className="text-zinc-500 text-sm max-w-xs">Relax! Your task queue is empty. Tasks will show up here once assigned by the administrator.</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row overflow-x-auto gap-6 py-4 pb-8 w-full snap-x scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {tasks.map((task, index) => {
                if (task.newTask) {
                  return (
                    <div key={index} className="snap-start">
                      <NewTask task={task} onAccept={() => handleAccept(index)} />
                    </div>
                  );
                }
                if (task.active) {
                  return (
                    <div key={index} className="snap-start">
                      <AcceptTask 
                        task={task} 
                        onComplete={() => handleComplete(index)} 
                        onFail={() => handleFail(index)} 
                      />
                    </div>
                  );
                }
                if (task.completed) {
                  return (
                    <div key={index} className="snap-start">
                      <CompleteTask task={task} />
                    </div>
                  );
                }
                if (task.failed) {
                  return (
                    <div key={index} className="snap-start">
                      <FailedTask task={task} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
