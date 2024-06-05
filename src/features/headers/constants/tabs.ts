import { ROUTES, SIGN_UP_ROUTES } from '@/constants';

export type TTabContent = {
  label: string;
  href: string;
  baseUrl?: string;
};
/**
 * @descript 로그인 탭 상수
 */
export const LOGIN_TAB: TTabContent[] = [
  {
    label: '로그인',
    href: ROUTES.LOGIN,
  },
];

/**
 * @descript 회원 가입 탭 상수
 */
export const SIGN_UP_TAB: TTabContent[] = [
  {
    label: '회원가입',
    href: ROUTES.SIGN_UP,
  },
];
/**
 * @description 홈 화면 탭 상수
 */
export const HOME_TAB: TTabContent[] = [
  {
    label: '로그인',
    href: ROUTES.LOGIN,
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
    href: ROUTES.TEACHER_MATCHING,
  },
];
