
import React from 'react';

interface SkeletonProps {
  className?: string;
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', count = 1 }) => {
  return (
    <div className="space-y-3 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i} 
          className={`animate-pulse bg-slate-200 rounded-md ${className}`} 
        />
      ))}
    </div>
  );
};

export const DashboardSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Skeleton className="h-32" count={1} />
      <Skeleton className="h-32" count={1} />
      <Skeleton className="h-32" count={1} />
      <Skeleton className="h-32" count={1} />
    </div>
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
      <div className="xl:col-span-8">
        <Skeleton className="h-[450px]" />
      </div>
      <div className="xl:col-span-4 flex flex-col gap-6">
        <Skeleton className="h-32" count={3} />
      </div>
    </div>
  </div>
);
