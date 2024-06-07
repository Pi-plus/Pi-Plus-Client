import type { IManageStudent } from '@/apis/teacher/types';

/**
 * @description 관리 학생 리스트에서 관리하는 학교의 개수 반환하는 함수
 * @param data : 관리 학생 리스트
 */
export const getStudentInfo = (data: IManageStudent[]) => {
  return Object.keys(
    data.reduce(
      (acc, curr) => {
        if (typeof curr.user_school === 'string') {
          acc[curr.user_school] = (acc[curr.user_school] || 0) + 1;
        }
        return acc;
      },
      {} as Record<string, number>,
    ),
  ).length;
};
