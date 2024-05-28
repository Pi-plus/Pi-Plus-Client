import type { TFraction, TMathDifficulty, TMathResponse } from '@/apis/math/types';

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
//  answer: ['ㄱ', 'ㄴ', 'ㄷ'],
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
//  answer: [0, 1],
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
    { first: 1, second: 2 },
    { first: 3, second: 4 },
  ],
  id: '234555',
  answer_type: '3',
  question: 'https://i.imgur.com/F4pspLy.png',
  question_answer: 'https://i.imgur.com/TlxYNAd.png',
  question_chapter: '1',
  question_difficulty: 'LOW',
  textbook_type: '6',
};
