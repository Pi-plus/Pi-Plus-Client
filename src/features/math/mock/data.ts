import type { TMathDifficulty, TMathResponse } from '@/apis/math/types';

type TFraction = { first: number; second: number };
type TMathDetailResponse = {
  id: string;
  answer: number[] | string[] | TFraction[];
  answer_type: TMathResponse;
  question: string;
  question_answer: string;
  question_chapter: string;
  question_difficulty: TMathDifficulty;
  textbook_type: string;
};

/**
 * 객관식 더미 데이터
 */
//export const data: TMathDetailResponse = {
//  id: '2020106011',
//  answer: [1, 2, 3],
//  answer_type: '1',
//  question: 'https://i.imgur.com/6Nphd7q.png',
//  question_answer: 'https://i.imgur.com/BvQOVZL.png',
//  question_chapter: '1',
//  question_difficulty: 'MEDIUM',
//  textbook_type: '6',
//};

/**
 * 주관식 더미 데이터
 */
//export const data: TMathDetailResponse = {
//  id: '202020',
//  answer: ['지연', '현정'],
//  answer_type: '0',
//  question: 'https://i.imgur.com/2V5qBL4.png',
//  question_answer: 'https://i.imgur.com/4XVLTx3.png',
//  question_chapter: '3',
//  question_difficulty: 'LOW',
//  textbook_type: '6',
//};
/**
 * 분수 더미 데이터
 */
export const data: TMathDetailResponse = {
  answer: [
    { first: 35, second: 99 },
    { first: 1, second: 3 },
  ],
  id: '234555',
  answer_type: '0',
  question: 'https://i.imgur.com/F4pspLy.png',
  question_answer: 'https://i.imgur.com/TlxYNAd.png',
  question_chapter: '1',
  question_difficulty: 'LOW',
  textbook_type: '6',
};
