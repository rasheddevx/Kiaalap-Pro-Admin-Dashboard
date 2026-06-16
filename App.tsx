
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Layout/Sidebar';
import Navbar from './components/Layout/Navbar';
import StatCard from './components/Dashboard/StatCard';
import EarningsChart from './components/Dashboard/EarningsChart';
import MetricWidget from './components/Dashboard/MetricWidget';
import RecentStudents from './components/Dashboard/RecentStudents';
import PopularCourses from './components/Dashboard/PopularCourses';
import Card from './components/ui/Card';
import Button from './components/ui/Button';
import { DashboardSkeleton, Skeleton } from './components/ui/Skeleton';
import * as api from './services/api';
import { DepartmentStat, EarningData, MetricWidgetData, Student, Course } from './types';

// Author Credit Script (RashedDevX)
console.log(
  "%c RashedDevX Admin Pro %c \n%c Premium Dashboard Engine v1.2 \n%c (c) 2024 - All rights reserved by RashedDevX",
  "background: #6366f1; color: #fff; padding: 5px; font-weight: bold; border-radius: 4px 0 0 4px;",
  "background: #1e293b; color: #6366f1; padding: 5px; font-weight: bold; border-radius: 0 4px 4px 0;",
  "color: #6366f1; font-weight: bold; margin-top: 5px;",
  "color: #94a3b8; font-style: italic;"
);

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');

  // Dashboard Data State
  const [deptStats, setDeptStats] = useState<DepartmentStat[]>([]);
  const [earningsData, setEarningsData] = useState<EarningData[]>([]);
  const [metrics, setMetrics] = useState<MetricWidgetData[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // Simulation of a real API call delay to show skeletons
      const [stats, earnings, widgets, recentStudents, popularCourses] = await Promise.all([
        api.fetchDepartmentStats(),
        api.fetchEarningsData(),
        api.fetchMetricWidgets(),
        api.fetchRecentStudents(),
        api.fetchPopularCourses()
      ]);

      setDeptStats(stats as DepartmentStat[]);
      setEarningsData(earnings as EarningData[]);
      setMetrics(widgets as MetricWidgetData[]);
      setStudents(recentStudents as Student[]);
      setCourses(popularCourses as Course[]);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      // Brief delay to ensure smooth transition
      setTimeout(() => setLoading(false), 800);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, [currentPath]); // Re-fetch or simulate re-fetch when path changes

  const toggleSidebar = () => setCollapsed(!collapsed);
  const openMobileMenu = () => setMobileOpen(true);
  const closeMobileMenu = () => setMobileOpen(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleNavigate = (path: string) => setCurrentPath(path);

  // View Content Resolver
  const renderViewContent = () => {
    if (loading) return <DashboardSkeleton />;

    switch (currentPath) {
      case '/analytics':
        return (
          <div className="space-y-6">
            <header>
              <h2 className="text-xl font-bold text-slate-800">Advanced Analytics Overview</h2>
              <p className="text-sm text-slate-500">Real-time engagement and growth metrics across all campuses.</p>
            </header>
            <Card title="Engagement Distribution">
              <EarningsChart data={earningsData} />
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {metrics.map((m, i) => <MetricWidget key={i} widget={m} />)}
            </div>
          </div>
        );
      case '/widgets':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((widget, idx) => (
              <MetricWidget key={idx} widget={widget} />
            ))}
            <StatCard stat={deptStats[0]} />
            <StatCard stat={deptStats[1]} />
            <StatCard stat={deptStats[2]} />
          </div>
        );
      case '/v2':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">Dashboard v.2 (Operational)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               <Card title="Traffic Metrics"><EarningsChart data={earningsData.slice(0, 6)} /></Card>
               <Card title="Growth Patterns"><EarningsChart data={earningsData.slice(6, 12)} /></Card>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deptStats.map(stat => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              <div className="xl:col-span-8">
                <Card 
                  title="University Earnings" 
                  action={<div className="flex items-center gap-1 text-xs text-slate-400">Total: <span className="text-indigo-600 font-bold">$74,500</span></div>}
                >
                  <EarningsChart data={earningsData} />
                </Card>
              </div>

              <div className="xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
                {metrics.map((widget, idx) => (
                  <MetricWidget key={idx} widget={widget} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card title="Recent Students" action={<Button variant="outline" size="sm">View All</Button>}>
                <RecentStudents students={students} />
              </Card>
              <Card title="Popular Courses" action={<Button variant="outline" size="sm">View All</Button>}>
                <PopularCourses courses={courses} />
              </Card>
            </div>
          </div>
        );
    }
  };

  const getPageTitle = () => {
    if (currentPath === '/analytics') return 'Analytics Overview';
    if (currentPath === '/widgets') return 'Institutional Widgets';
    if (currentPath === '/v2') return 'Operational Dashboard';
    if (currentPath === '/v3') return 'System Dashboard';
    return 'Dashboard Overview';
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-slate-900' : 'bg-slate-50'}`}>
      <div className="flex">
        {/* Fixed error: Property 'onToggle' does not exist on SidebarProps */}
        <Sidebar 
          collapsed={collapsed} 
          mobileOpen={mobileOpen}
          onCloseMobile={closeMobileMenu}
          currentPath={currentPath}
          onNavigate={handleNavigate}
        />

        <main 
          className={`flex-1 min-w-0 transition-all duration-300 ${
            collapsed ? 'md:ml-20' : 'md:ml-64'
          }`}
        >
          <Navbar 
            onToggleSidebar={toggleSidebar} 
            onOpenMobileMenu={openMobileMenu}
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
          />

          <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <motion.h1 
                  key={currentPath}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold text-slate-800 tracking-tight"
                >
                  {getPageTitle()}
                </motion.h1>
                <p className="text-sm text-slate-500 font-medium">Welcome back! Manage your institution with ease.</p>
              </div>
              <div className="w-full sm:w-auto">
                 <Button variant="primary" className="w-full sm:w-auto shadow-lg shadow-indigo-500/20">Generate Report</Button>
              </div>
            </header>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPath + (loading ? '-loading' : '-ready')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {renderViewContent()}
              </motion.div>
            </AnimatePresence>
            
            <footer className="mt-16 py-8 border-t border-slate-200 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-100">
                 <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Built by</span>
                 <span className="text-sm font-bold text-indigo-600">RashedDevX</span>
              </div>
              <p className="text-xs text-slate-400 font-medium tracking-wide text-center">
                © 2026 Kiaalap Pro Admin. Developed with passion for modern education.
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
