
import React from 'react';
import { Course } from '../../types';

interface PopularCoursesProps {
  courses: Course[];
}

const PopularCourses: React.FC<PopularCoursesProps> = ({ courses }) => {
  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <div className="min-w-[400px] space-y-6">
        {courses.map((course) => {
          const fillPercent = Math.round((course.students / course.capacity) * 100);
          return (
            <div key={course.id} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200 shadow-sm group-hover:bg-white group-hover:shadow-md transition-all flex-shrink-0">
                  {course.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">{course.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium line-clamp-1">{course.professor}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{course.students} enrolled students</p>
                </div>
              </div>
              <div className="flex items-center flex-shrink-0">
                <span className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm ${
                  fillPercent > 80 ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-white'
                }`}>
                  {fillPercent}% Full
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCourses;
