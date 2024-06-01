import type { Route } from 'next';

export const ROUTES = {
  LOGIN: '/login',
  USERINFO: '/userInfo',
  SIGN_UP: '/signup',
  HOME: '/',
  STUDENT_MY: '/student/mypage',
  STUDENT_LIST: '/student/problem/list',
  STUDENT_CONCEPT: '/student/concept',
  TEACHER_MATCHING: '/teacher/matching',
} as const;

export const USERINFO_ROUTES = {
  SELECT: 'select' as Route,
  STUDENT: 'student' as Route,
  TEACHER: 'teacher' as Route,
} as const;

export const MYPAGE_STUDENT_ROUTES = {
  PROBLEM_SETTING: 'problemSetting' as Route,
  ACHIEVEMENT: 'achievement' as Route,
} as const;
