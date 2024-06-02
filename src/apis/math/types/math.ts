export type TMathDifficulty = 'LOW' | 'MEDIUM' | 'HIGH';
/**
 * @description 0 : 주관식 / 1 : 객관식 / 2 : 퀴즈 / 3: 분수
 */
export type TMathResponse = '0' | '1' | '2' | '3';
/**
 * @description api 응답 분수 정답 컨텐츠 타입
 */
export type TFraction = { first: number; second: number };

/**
 * @description 0,1,2,3,4 => 수학 영역
 */
export type TMathTag = '0' | '1' | '2' | '3' | '4';

export interface IMathResponse {
  answer: number[] | string[] | TFraction[];
  answer_type: TMathResponse;
  question: string;
  question_answer: string;
  question_chapter: string;
  question_difficulty: TMathDifficulty;
  tag: TMathTag;
  textbook_type: string;
}
