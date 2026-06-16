
import { 
  DEPARTMENT_STATS, 
  EARNINGS_CHART_DATA, 
  METRIC_WIDGETS, 
  RECENT_STUDENTS, 
  POPULAR_COURSES 
} from '../constants';

const DELAY = 500;

export const fetchDepartmentStats = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(DEPARTMENT_STATS), DELAY);
  });
};

export const fetchEarningsData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(EARNINGS_CHART_DATA), DELAY);
  });
};

export const fetchMetricWidgets = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(METRIC_WIDGETS), DELAY);
  });
};

export const fetchRecentStudents = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(RECENT_STUDENTS), DELAY);
  });
};

export const fetchPopularCourses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(POPULAR_COURSES), DELAY);
  });
};
