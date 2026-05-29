import React from 'react';

const AcceptTask = ({ task, onComplete, onFail }) => {
  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'bg-rose-500/20 text-rose-300 border border-rose-500/30';
      case 'medium': return 'bg-amber-500/20 text-amber-300 border border-amber-500/30';
      default: return 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    }
  };

  return (
    <div className="flex-shrink-0 w-[320px] h-[380px] bg-zinc-900/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between border border-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5">
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

      <div className="flex items-center gap-3 mt-5">
        <button 
          onClick={onComplete}
          className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.97] text-white font-semibold rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          Complete
        </button>
        <button 
          onClick={onFail}
          className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-500 active:scale-[0.97] text-white font-semibold rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md shadow-rose-950/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          Fail
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
