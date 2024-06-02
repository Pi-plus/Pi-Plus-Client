/**
 * @descript 중학교 1학1학기 소단원 대단원 챕터 이름 상수
 */

export const MIDDLE_11_BIG_CHAPTER = {
  '1': '중학교 1학년 1학기 1.소인수 분해',
  '2': '중학교 1학년 1학기 2.정수와 유리수',
  '3': '중학교 1학년 1학기 3.문자와 식',
  '4': '중학교 1학년 1학기 4.좌표평면과 그래프',
} as const;

export const MIDDLE_11_SMALL_CHAPTER = {
  '101': '1-1. 소인수 분해',
  '102': '1-2. 최대공약수와 최소공배수',
  '201': '2-1. 정수와 유리수',
  '202': '2-2. 정수와 유리수의 계산',
  '301': '3-1. 문자의 사용과 식의 계산',
  '302': '3-2. 일차방정식의 풀이',
  '303': '3-3. 일차방정식의 활용',
} as const;
/**
 * @descript 수학 대단원 소단원 타입
 */
export type TMathBigChapter = keyof typeof MIDDLE_11_BIG_CHAPTER;
export type TMathSmallChapter = keyof typeof MIDDLE_11_SMALL_CHAPTER;
