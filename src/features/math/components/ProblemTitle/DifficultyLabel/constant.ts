import type { TMathDifficulty } from '@/apis/math/types';

type TDifficultyContent = { label: string; bgColor: string };
export const DIFFICULTY_STYLE: Record<TMathDifficulty, TDifficultyContent> = {
  LOW: {
    label: '난이도 하',
    bgColor: 'bg-blue-20',
  },
  MEDIUM: {
    label: '난이도 중',
    bgColor: 'bg-gray-40',
  },
  HIGH: {
    label: '난이도 상',
    bgColor: 'bg-red',
  },
};
