import type { TMathDifficulty, TMathResponse } from '@/apis/math/types';

type TMathDetailResponse = {
  id: string;
  answer: number[] | string[];
  answer_type: TMathResponse;
  question: string;
  question_answer: string;
  question_chapter: string;
  question_difficulty: TMathDifficulty;
  textbook_type: string;
};

export const data: TMathDetailResponse = {
  id: '2020106011',
  answer: [1, 2, 3],
  answer_type: '1',
  question: 'https://i.imgur.com/6Nphd7q.png',
  question_answer: 'https://i.imgur.com/BvQOVZL.png',
  question_chapter: '1',
  question_difficulty: 'MEDIUM',
  textbook_type: '6',
};
