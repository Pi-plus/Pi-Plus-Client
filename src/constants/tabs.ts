import { ROUTES } from './routes';

export type THoverPathname = 'concept' | 'problem';
export type TValueOfPathname = THoverPathname | 'mypage';
export type TValueOfTitlename = '개념학습' | '문제 풀기' | '마이 페이지';

export type THeaderValue = { title: TValueOfTitlename; pathname: TValueOfPathname; href?: string };

export const HEADER_TABS: THeaderValue[] = [
  { title: '개념학습', pathname: 'concept' },
  { title: '문제 풀기', pathname: 'problem', href: ROUTES.STUDENT_LIST },
  { title: '마이 페이지', pathname: 'mypage', href: ROUTES.STUDENT_MY },
] as const;
