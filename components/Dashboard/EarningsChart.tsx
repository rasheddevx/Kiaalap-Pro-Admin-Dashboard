
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { EarningData } from '../../types';

interface EarningsChartProps {
  data: EarningData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 shadow-xl">
        <p className="text-slate-300 text-xs font-bold mb-2 uppercase">{label}</p>
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2 text-sm font-semibold">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }}></div>
            <span className="text-slate-400">{p.name}:</span>
            <span className="text-white">${p.value}k</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const EarningsChart: React.FC<EarningsChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[350px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 10 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            tickFormatter={(val) => `$${val}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            iconType="circle"
            formatter={(value) => <span className="text-xs font-bold text-slate-600 uppercase ml-1 mr-4">{value}</span>}
          />
          <Line 
            type="monotone" 
            dataKey="cse" 
            stroke="#6366f1" 
            strokeWidth={2} 
            dot={{ r: 4, fill: '#6366f1', strokeWidth: 0 }} 
            activeDot={{ r: 6 }} 
            name="CSE"
          />
          <Line 
            type="monotone" 
            dataKey="accounting" 
            stroke="#a855f7" 
            strokeWidth={2} 
            dot={{ r: 4, fill: '#a855f7', strokeWidth: 0 }} 
            activeDot={{ r: 6 }} 
            name="Accounting"
          />
          <Line 
            type="monotone" 
            dataKey="electrical" 
            stroke="#10b981" 
            strokeWidth={2} 
            dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }} 
            activeDot={{ r: 6 }} 
            name="Electrical"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
