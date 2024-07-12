import type { TTabContent } from '@/components/Header/type';
import { LOGIN_ROUTES, MYPAGE_STUDENT_ROUTES, MYPAGE_TEACHER_ROUTES, ROUTES, SIGN_UP_ROUTES } from '@/constants';

/**
 * @descript 로그인 탭 상수
 */
export const LOGIN_TAB: TTabContent[] = [
  {
    label: '로그인',
    href: `${ROUTES.LOGIN}?step=${LOGIN_ROUTES.SELECT}`,
    baseUrl: ROUTES.LOGIN,
  },
];

/**
 * @descript 회원 가입 탭 상수
 */
export const SIGN_UP_TAB: TTabContent[] = [
  {
    label: '회원가입',
    href: ROUTES.SIGN_UP,
    baseUrl: ROUTES.SIGN_UP,
  },
];
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
