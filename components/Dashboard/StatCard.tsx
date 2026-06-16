
import React from 'react';
import { DepartmentStat } from '../../types';

const StatCard: React.FC<{ stat: DepartmentStat }> = ({ stat }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <h4 className="text-xs font-bold text-slate-400 tracking-wider mb-2">{stat.name}</h4>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-2xl font-bold text-slate-800">{stat.amount}</span>
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between text-[11px] font-bold mb-2">
          <span className={`px-2 py-0.5 rounded ${stat.color} bg-opacity-10 text-${stat.color.replace('bg-', '')}`}>+{stat.percentage}%</span>
          <span className="text-slate-400">Target</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${stat.color} transition-all duration-1000 ease-out`} 
            style={{ width: `${stat.percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
