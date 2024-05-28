export type TMathDifficulty = 'LOW' | 'MEDIUM' | 'HIGH';
/**
 * @description 0 : 주관식 / 1 : 객관식 / 2 : 퀴즈 / 3: 분수
 */
export type TMathResponse = '0' | '1' | '2' | '3';
/**
 * @description api 응답 분수 정답 컨텐츠 타입
 */
export type TFraction = { first: number; second: number };
