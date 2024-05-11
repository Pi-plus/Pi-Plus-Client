import type { TMathDifficulty } from '@/apis/math/types';

type TMathDifficultyContent = { label: string; tag: string };
export const MATH_DIFFICULTY: Record<TMathDifficulty, TMathDifficultyContent> = {
  LOW: {
    label: '하',
    tag: '난이도 하',
  },
  MEDIUM: {
    label: '중',
    tag: '난이도 중',
  },
  HIGH: {
    label: '상',
    tag: '난이도 상',
  },
} as const;
