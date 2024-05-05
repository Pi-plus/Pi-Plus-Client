export type TValueOfStudent = 'middle' | 'high';
export const HEADER_STUDENT_TABS: { value: TValueOfStudent; label: string }[] = [
  { value: 'middle', label: '중학교' },
  { value: 'high', label: '고등학교' },
];

export const MIDDLE_STUDENT_MATH = {
  one: [
    { label: '중학교 1학년 1학기', query: 'middle1-1' },
    { label: '중학교 1학년 2학기', query: 'middle1-2' },
  ],
  two: [
    { label: '중학교 2학년 1학기', query: 'middle2-1' },
    { label: '중학교 2학년 2학기', query: 'middle2-2' },
  ],
  three: [
    { label: '중학교 3학년 1학기', query: 'middle3-1' },
    { label: '중학교 3학년 2학기', query: 'middle3-2' },
  ],
} as const;

export const HIGH_STUDENT_MATH = {
  one: [
    { label: '고등수학(상)', query: 'high1-1' },
    { label: '고등수학(하)', query: 'high1-2' },
  ],
  two: [
    { label: '수학1', query: 'high2-1' },
    { label: '수학2', query: 'high2-2' },
  ],
  three: [
    { label: '확률 통계', query: 'high-probability-statistics' },
    { label: '미적분', query: 'high-aesthetic' },
    { label: '기하', query: 'high-geometry' },
  ],
} as const;
