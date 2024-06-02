import { ROUTES } from './routes';

export type TValueOfStudent = 'middle' | 'high';
export const HEADER_STUDENT_TABS: { value: TValueOfStudent; label: string }[] = [
  { value: 'middle', label: '중학교' },
  { value: 'high', label: '고등학교' },
];

export type TStudentContent = { label: string; query: string; conceptHerf: string };
export type TStudentSemester = 'one' | 'two' | 'three';
export const MIDDLE_STUDENT_MATH: Record<TStudentSemester, TStudentContent[]> = {
  one: [
    {
      label: '중학교 1학년 1학기',
      query: 'middle1-1',
      conceptHerf: 'https://numberings.tistory.com/category/%EA%B0%9C%EB%85%90%20%EC%A0%95%EB%A6%AC/%EC%A4%911',
    },
    { label: '중학교 1학년 2학기', query: 'middle1-2', conceptHerf: ROUTES.STUDENT_CONCEPT },
  ],
  two: [
    { label: '중학교 2학년 1학기', query: 'middle2-1', conceptHerf: ROUTES.STUDENT_CONCEPT },
    { label: '중학교 2학년 2학기', query: 'middle2-2', conceptHerf: ROUTES.STUDENT_CONCEPT },
  ],
  three: [
    { label: '중학교 3학년 1학기', query: 'middle3-1', conceptHerf: ROUTES.STUDENT_CONCEPT },
    { label: '중학교 3학년 2학기', query: 'middle3-2', conceptHerf: ROUTES.STUDENT_CONCEPT },
  ],
} as const;

export const HIGH_STUDENT_MATH: Record<TStudentSemester, TStudentContent[]> = {
  one: [
    { label: '고등수학(상)', query: 'high1-1', conceptHerf: ROUTES.STUDENT_CONCEPT },
    { label: '고등수학(하)', query: 'high1-2', conceptHerf: ROUTES.STUDENT_CONCEPT },
  ],
  two: [
    { label: '수학1', query: 'high2-1', conceptHerf: ROUTES.STUDENT_CONCEPT },
    { label: '수학2', query: 'high2-2', conceptHerf: ROUTES.STUDENT_CONCEPT },
  ],
  three: [
    { label: '확률 통계', query: 'high-probability-statistics', conceptHerf: ROUTES.STUDENT_CONCEPT },
    { label: '미적분', query: 'high-aesthetic', conceptHerf: ROUTES.STUDENT_CONCEPT },
    { label: '기하', query: 'high-geometry', conceptHerf: ROUTES.STUDENT_CONCEPT },
  ],
} as const;
