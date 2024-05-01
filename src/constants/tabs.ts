export const HEADER_TABS = [
  { title: '개념학습', pathname: 'concept' },
  { title: '문제 풀기', pathname: 'problem' },
  { title: '마이 페이지', pathname: 'mypage' },
] as const;

export type TValueOfPathname = 'concept' | 'problem' | 'mypage';
