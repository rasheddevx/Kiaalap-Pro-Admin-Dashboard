
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Library, 
  Building2, 
  Mail, 
  Box, 
  FileText, 
  BarChart3, 
  Table as TableIcon, 
  Code2, 
  Component, 
  Eye,
  Calendar,
  GraduationCap
} from 'lucide-react';
import { SidebarItem, DepartmentStat, EarningData, MetricWidgetData, Student, Course } from './types';

export const SIDEBAR_MENU: { category: string; items: SidebarItem[] }[] = [
  {
    category: 'MAIN',
    items: [
      { 
        label: 'Dashboard', 
        icon: LayoutDashboard, 
        path: '/', 
        subItems: [
          { label: 'Dashboard v.1', path: '/' },
          { label: 'Dashboard v.2', path: '/v2' },
          { label: 'Dashboard v.3', path: '/v3' },
          { label: 'Analytics', path: '/analytics' },
          { label: 'Widgets', path: '/widgets' },
        ]
      },
      { label: 'Events', icon: Calendar, path: '/events' },
    ]
  },
  {
    category: 'ACADEMIC',
    items: [
      { label: 'Professors', icon: GraduationCap, path: '/professors' },
      { label: 'Students', icon: Users, path: '/students' },
      { label: 'Courses', icon: BookOpen, path: '/courses' },
      { label: 'Library', icon: Library, path: '/library' },
      { label: 'Departments', icon: Building2, path: '/departments' },
    ]
  },
  {
    category: 'COMMUNICATION',
    items: [
      { label: 'Mailbox', icon: Mail, path: '/mailbox' },
    ]
  },
  {
    category: 'INTERFACE',
    items: [
      { label: 'Components', icon: Box, path: '/components' },
      { label: 'Forms', icon: FileText, path: '/forms' },
      { label: 'Charts', icon: BarChart3, path: '/charts' },
      { label: 'Tables', icon: TableIcon, path: '/tables' },
    ]
  },
  {
    category: 'DEVELOPER TOOLS',
    items: [
      { label: 'Code Editor', icon: Code2, path: '/editor' },
      { label: 'UI Component', icon: Component, path: '/ui' },
      { label: 'Viewers', icon: Eye, path: '/viewers' },
    ]
  }
];

export const DEPARTMENT_STATS: DepartmentStat[] = [
  { id: '1', name: 'COMPUTER TECHNOLOGIES', amount: '$5,000', percentage: 20, trend: 'up', color: 'bg-emerald-500' },
  { id: '2', name: 'ACCOUNTING', amount: '$3,000', percentage: 30, trend: 'up', color: 'bg-rose-500' },
  { id: '3', name: 'ELECTRICAL ENGINEERING', amount: '$2,000', percentage: 60, trend: 'up', color: 'bg-sky-500' },
  { id: '4', name: 'CHEMICAL ENGINEERING', amount: '$3,500', percentage: 80, trend: 'up', color: 'bg-amber-500' },
];

export const EARNINGS_CHART_DATA: EarningData[] = [
  { month: 'Jan', cse: 30, accounting: 25, electrical: 15 },
  { month: 'Feb', cse: 45, accounting: 35, electrical: 22 },
  { month: 'Mar', cse: 40, accounting: 38, electrical: 25 },
  { month: 'Apr', cse: 50, accounting: 30, electrical: 28 },
  { month: 'May', cse: 55, accounting: 40, electrical: 30 },
  { month: 'Jun', cse: 60, accounting: 45, electrical: 35 },
  { month: 'Jul', cse: 65, accounting: 50, electrical: 38 },
  { month: 'Aug', cse: 70, accounting: 55, electrical: 40 },
  { month: 'Sep', cse: 68, accounting: 52, electrical: 42 },
  { month: 'Oct', cse: 75, accounting: 58, electrical: 45 },
  { month: 'Nov', cse: 80, accounting: 62, electrical: 48 },
  { month: 'Dec', cse: 85, accounting: 65, electrical: 52 },
];

export const METRIC_WIDGETS: MetricWidgetData[] = [
  {
    title: 'TOTAL VISITS',
    value: '1,500',
    color: '#8b5cf6',
    icon: 'eye',
    data: [{value: 40}, {value: 30}, {value: 45}, {value: 50}, {value: 40}, {value: 60}, {value: 55}]
  },
  {
    title: 'PAGE VIEWS',
    value: '3,000',
    color: '#06b6d4',
    icon: 'file',
    data: [{value: 20}, {value: 35}, {value: 25}, {value: 30}, {value: 45}, {value: 60}, {value: 50}]
  },
  {
    title: 'BOUNCE RATE',
    value: '42%',
    color: '#ef4444',
    icon: 'trend',
    data: [{value: 60}, {value: 55}, {value: 70}, {value: 65}, {value: 80}, {value: 75}, {value: 78}]
  }
];

export const RECENT_STUDENTS: Student[] = [
  { id: '1', name: 'John Smith', course: 'Computer Science - Freshman', enrolled: '2 hours ago', status: 'Active', avatar: 'JS' },
  { id: '2', name: 'Emily Davis', course: 'Biology - Sophomore', enrolled: '1 day ago', status: 'Active', avatar: 'ED' },
  { id: '3', name: 'Michael Brown', course: 'Business Admin - Senior', enrolled: '3 days ago', status: 'Active', avatar: 'MB' },
];

export const POPULAR_COURSES: Course[] = [
  { 
    id: '1', 
    name: 'Advanced Programming', 
    professor: 'Prof. Sarah Johnson', 
    students: 45, 
    capacity: 60,
    icon: <Code2 size={20} className="text-blue-600" />
  },
  { 
    id: '2', 
    name: 'Calculus II', 
    professor: 'Prof. Michael Chen', 
    students: 38, 
    capacity: 50,
    icon: <CalculatorIcon size={20} className="text-emerald-600" />
  },
  { 
    id: '3', 
    name: 'Biology Lab', 
    professor: 'Prof. Elena Rodriguez', 
    students: 22, 
    capacity: 25,
    icon: <Building2 size={20} className="text-amber-600" />
  },
];

function CalculatorIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}
