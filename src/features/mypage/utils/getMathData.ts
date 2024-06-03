import type { TProblemContent } from '@/apis/student/types';

/**
 * @description 맞은 문제와 틀린 문제 퍼센트 수치 계산 함수
 */
export const getMathPercent = (solveCount: number, wrongCount: number) => {
  if (solveCount === 0 && wrongCount === 0) {
    return [0, 0];
  } else {
    const totalCount = solveCount + wrongCount;
    const solvePercent = (solveCount / totalCount) * 100 ?? 0;
    const wrongPercent = (wrongCount / totalCount) * 100 ?? 0;

    return [solvePercent, wrongPercent];
  }
};
/**
 * @description 맞은 문제와 틀린 문제 비교 함수
 */
export const getMathCountComparison = (solveCount: number, wrongCount: number) => {
  if (solveCount === wrongCount) {
    return '맞은 문제와 틀린 문제의 수가 같습니다';
  } else if (solveCount > wrongCount) {
    return `맞은 문제가 틀린 문제보다 ${solveCount - wrongCount}개 더 많습니다`;
  } else {
    return `틀린 문제가 맞은 문제보다 ${wrongCount - solveCount}개 더 많습니다`;
  }
};
/**
 * @description 수학 문제의 태그별 영역별 수학 문제 수 퍼센트 배열 리턴하는 함수
 */
export const getMathTagPercentCountList = (
  solveProblem: TProblemContent[],
  wrongProblem: TProblemContent[],
): number[] => {
  const combined = [...solveProblem, ...wrongProblem];
  const tagCounts = Array(5).fill(0);
  combined.forEach((item) => {
    const tag = parseInt(item.tag, 10);
    if (tag >= 0 && tag <= 4) {
      tagCounts[tag]++;
    }
  });
  const totalItems = combined.length;
  const tagPercentages = tagCounts.map((count) => (count / totalItems) * 100);

  return tagPercentages;
};
/**
 * @description 수학 문제의 태그별 영역별 수학 문제 수 배열 리턴하는 함수
 */
export const getMathTagCountList = (solveProblem: TProblemContent[], wrongProblem: TProblemContent[]): number[] => {
  const combined = [...solveProblem, ...wrongProblem];
  const tagCounts = Array(5).fill(0);
  combined.forEach((item) => {
    const tag = parseInt(item.tag, 10);
    if (tag >= 0 && tag <= 4) {
      tagCounts[tag]++;
    }
  });
  return tagCounts;
};
