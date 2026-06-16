
export interface DepartmentStat {
  id: string;
  name: string;
  amount: string;
  percentage: number;
  trend: 'up' | 'down';
  color: string;
}

export interface EarningData {
  month: string;
  cse: number;
  accounting: number;
  electrical: number;
}

export interface MetricWidgetData {
  title: string;
  value: string;
  data: { value: number }[];
  color: string;
  icon: 'eye' | 'file' | 'trend';
}

export interface Student {
  id: string;
  name: string;
  course: string;
  enrolled: string;
  status: 'Active' | 'Inactive';
  avatar: string;
}

export interface Course {
  id: string;
  name: string;
  professor: string;
  students: number;
  capacity: number;
  icon: React.ReactNode;
}

export interface SidebarItem {
  label: string;
  icon: any;
  path: string;
  badge?: string;
  subItems?: { label: string; path: string }[];
}
