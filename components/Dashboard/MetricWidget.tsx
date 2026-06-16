
import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Eye, FileText, TrendingUp } from 'lucide-react';
import { MetricWidgetData } from '../../types';

const MetricWidget: React.FC<{ widget: MetricWidgetData }> = ({ widget }) => {
  const Icon = widget.icon === 'eye' ? Eye : widget.icon === 'file' ? FileText : TrendingUp;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start mb-1">
        <div>
          <h4 className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">{widget.title}</h4>
          <span className="text-2xl font-bold text-slate-800 tracking-tight">{widget.value}</span>
        </div>
        <div className="p-2 text-slate-400 group-hover:text-slate-600 transition-colors">
          <Icon size={18} />
        </div>
      </div>

      <div className="w-full h-16 -mx-6 mb-[-24px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={widget.data}>
            <defs>
              <linearGradient id={`grad-${widget.title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={widget.color} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={widget.color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={widget.color} 
              fillOpacity={1} 
              fill={`url(#grad-${widget.title})`} 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricWidget;
