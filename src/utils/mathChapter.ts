import type { TMathBigChapter, TMathSmallChapter } from '@/constants';
import { MIDDLE_11_BIG_CHAPTER, MIDDLE_11_SMALL_CHAPTER } from '@/constants';

/**
 * @description 수학 대단원 소단원 문자열 반환 함수
 */
export const getMathChapter = (mathChapter: TMathSmallChapter): string[] => {
  const chapterPrefix = mathChapter.charAt(0);
  const bigChapter = MIDDLE_11_BIG_CHAPTER[chapterPrefix as TMathBigChapter];
  const smallChapter = MIDDLE_11_SMALL_CHAPTER[mathChapter as TMathSmallChapter];
  return [bigChapter, smallChapter];
};
