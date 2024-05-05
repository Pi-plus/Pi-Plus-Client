import { ROUTES } from './routes';

export type TValueOfPathname = 'concept' | 'problem' | 'mypage';
export type TValueOfTitlename = '개념학습' | '문제 풀기' | '마이 페이지';

export type THeaderValue = { title: TValueOfTitlename; pathname: TValueOfPathname; href?: string };

export const HEADER_TABS: THeaderValue[] = [
  { title: '개념학습', pathname: 'concept' },
  { title: '문제 풀기', pathname: 'problem', href: ROUTES.STUDENT_LIST },
  { title: '마이 페이지', pathname: 'mypage', href: ROUTES.STUDENT_MY },
] as const;

export type TValueOfStudent = 'middle' | 'high';
export const HEADER_STUDENT_TABS: { value: TValueOfStudent; label: string }[] = [
  { value: 'middle', label: '중학교' },
  { value: 'high', label: '고등학교' },
];
