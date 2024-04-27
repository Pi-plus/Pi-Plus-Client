import type { Route } from 'next';

export const ROUTES = {
  LOGIN: '/login',
  SIGN_UP: '/signup',
  HOME: '/',
  STUDENT_MY: '/student/mypage',
  STUDENT_LIST: '/student/problem/list',
  TEACHER_MATCHING: '/teacher/matching',
} as const;

export const SIGN_UP_ROUTES = {
  SELECT: 'select' as Route,
  GOAL: 'goal' as Route,
} as const;
