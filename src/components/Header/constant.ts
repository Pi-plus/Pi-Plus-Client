import type { TStudentContent, TTabContent, TValueOfStudent } from '@/components/Header/type';
import { LOGIN_ROUTES, MYPAGE_STUDENT_ROUTES, MYPAGE_TEACHER_ROUTES, ROUTES, SIGN_UP_ROUTES } from '@/constants';

/**
 * @description 홈 화면 탭 상수
 */
export const HOME_TAB: TTabContent[] = [
  {
    label: '로그인',
    href: `${ROUTES.LOGIN}?step=${LOGIN_ROUTES.SELECT}`,
    baseUrl: ROUTES.LOGIN,
  },
  {
    label: '회원가입',
    href: `${ROUTES.SIGN_UP}?step=${SIGN_UP_ROUTES.SELECT}`,
    baseUrl: ROUTES.SIGN_UP,
  },
];

/**
 * @description 선생님 화면 탭 상수
 */
export const TEACHER_TAB: TTabContent[] = [
  {
    label: '학생 관리',
    href: `${ROUTES.TEACHER_MATCHING}?m=${MYPAGE_TEACHER_ROUTES.MANAGE_STUDENT}`,
    baseUrl: ROUTES.TEACHER_MATCHING,
  },
];

/**
 * @description 학생 화면 탭 상수
 */
export const STUDENT_TABS: TTabContent[] = [
  { label: '개념학습', href: ROUTES.STUDENT_CONCEPT, baseUrl: ROUTES.STUDENT_CONCEPT, hasArrow: true },
  { label: '문제 풀기', href: ROUTES.STUDENT_LIST, baseUrl: ROUTES.STUDENT_LIST, hasArrow: true },
  {
    label: '마이 페이지',
    href: `${ROUTES.STUDENT_MY}?m=${MYPAGE_STUDENT_ROUTES.PROBLEM_SETTING}`,
    baseUrl: ROUTES.STUDENT_MY,
  },
];

/**
 * @description 헤더 컨텐츠 안 학생 학년 탭 상수
 */
export const HEADER_STUDENT_TABS: { value: TValueOfStudent; label: string }[] = [
  { value: 'middle', label: '중학교' },
  { value: 'high', label: '고등학교' },
];

/**
 * @description 중학교 학생 학년 탭 상수
 */
export const MIDDLE_STUDENT_MATH: TStudentContent[] = [
  {
    label: '중학교 1학년 1학기',
    query: 'middle1-1',
    href: 'https://numberings.tistory.com/category/%EA%B0%9C%EB%85%90%20%EC%A0%95%EB%A6%AC/%EC%A4%911',
  },
  {
    label: '중학교 1학년 2학기',
    query: 'middle1-2',
  },
  {
    label: '중학교 2학년 1학기',
    query: 'middle2-1',
  },
  {
    label: '중학교 2학년 2학기',
    query: 'middle2-2',
  },
  {
    label: '중학교 3학년 1학기',
    query: 'middle3-1',
  },
  {
    label: '중학교 3학년 2학기',
    query: 'middle3-2',
  },
] as const;

/**
 * @description 고등학교 학생 학년 탭 상수
 */
export const HIGH_STUDENT_MATH: TStudentContent[] = [
  { label: '고등수학(상)', query: 'high1-1' },
  { label: '고등수학(하)', query: 'high1-2' },
  { label: '수학1', query: 'high2-1' },
  { label: '수학2', query: 'high2-2' },
  { label: '확률 통계', query: 'high-probability-statistics' },
  { label: '미적분', query: 'high-aesthetic' },
  { label: '기하', query: 'high-geometry' },
] as const;
