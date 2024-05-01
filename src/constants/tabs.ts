export const HEADER_TABS = [
  { title: '개념학습', pathname: 'concept' },
  { title: '문제 풀기', pathname: 'problem' },
  { title: '마이 페이지', pathname: 'mypage' },
] as const;

export type TValueOfPathname = 'concept' | 'problem' | 'mypage';

export type TValueOfStudent = 'middle' | 'high';
export const HEADER_STUDENT_TABS: { value: TValueOfStudent; label: string }[] = [
  { value: 'middle', label: '중학교' },
  { value: 'high', label: '고등학교' },
];
