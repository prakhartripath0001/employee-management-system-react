import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import NewTask from '../TaskList/NewTask';
import AcceptTask from '../TaskList/AcceptTask';
import CompleteTask from '../TaskList/CompleteTask';
import FailedTask from '../TaskList/FailedTask';
import Header from '../../other/Header';
import TaskNumber from '../../other/TaskNumber';

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

      <Header />

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

        <TaskNumber />

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
