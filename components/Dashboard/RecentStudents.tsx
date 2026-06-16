
import React from 'react';
import { Student } from '../../types';

interface RecentStudentsProps {
  students: Student[];
}

const RecentStudents: React.FC<RecentStudentsProps> = ({ students }) => {
  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <div className="min-w-[400px] space-y-6">
        {students.map((student) => (
          <div key={student.id} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-sm flex-shrink-0 ${
                student.id === '1' ? 'bg-indigo-500' : student.id === '2' ? 'bg-emerald-500' : 'bg-rose-500'
              }`}>
                {student.avatar}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">{student.name}</h4>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-1">{student.course}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Enrolled {student.enrolled}</p>
              </div>
            </div>
            <div className="flex items-center flex-shrink-0">
               <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500 text-white shadow-sm">
                {student.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentStudents;
