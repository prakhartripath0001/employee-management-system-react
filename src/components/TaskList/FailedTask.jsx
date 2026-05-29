import React from 'react';

const FailedTask = ({ task }) => {
  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'bg-rose-500/20 text-rose-300 border border-rose-500/30';
      case 'medium': return 'bg-amber-500/20 text-amber-300 border border-amber-500/30';
      default: return 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    }
  };

  return (
    <div className="flex-shrink-0 w-[320px] h-[380px] bg-zinc-900/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between border border-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/5">
      <div>
        <div className="flex justify-between items-center mb-5">
          <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
          <span className="text-sm font-medium text-zinc-400">{task.taskDate}</span>
        </div>
        
        <span className="inline-block text-xs font-semibold bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md mb-4 border border-zinc-700">
          {task.category}
        </span>
        
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-snug">
          {task.taskTitle}
        </h3>
        
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-4">
          {task.taskDescription}
        </p>
      </div>

      <div className="mt-5">
        <div className="w-full py-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-semibold rounded-xl text-sm flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Task Failed
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
