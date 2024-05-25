import { MYPAGE_STUDENT_ROUTES, ROUTES } from './routes';

export type THoverPathname = 'concept' | 'problem';
export type TValueOfPathname = THoverPathname | 'mypage';
export type TValueOfTitlename = '개념학습' | '문제 풀기' | '마이 페이지';

export type TTabValue = { title: TValueOfTitlename; pathname: TValueOfPathname; href?: string };

export const HEADER_TABS: TTabValue[] = [
  { title: '개념학습', pathname: 'concept', href: ROUTES.STUDENT_CONCEPT },
  { title: '문제 풀기', pathname: 'problem', href: ROUTES.STUDENT_LIST },
  { title: '마이 페이지', pathname: 'mypage', href: ROUTES.STUDENT_MY },
];

export const MYPAGE_STUDENT_TABS = [
  { title: '문제 관리', pathname: MYPAGE_STUDENT_ROUTES.PROBLEM_SETTING, href: ROUTES.STUDENT_MY },
  { title: '성취도 확인', pathname: MYPAGE_STUDENT_ROUTES.ACHIEVEMENT, href: ROUTES.STUDENT_MY },
];
