import type { TMathTag } from '@/apis/math/types';

/**
 * @description 맞은/틀린 문제 컨텐츠
 */
export type TProblemContent = {
  id: string;
  tag: TMathTag;
};

/**
 * @descript 학생 DB 응답 타입
 */
export type TStudentResponse = {
  id?: string;

  user_name?: string;

  user_school?: string;
  user_goal?: string;
  solve_problem?: TProblemContent[];
  wrong_problem?: TProblemContent[];

  uid?: string;
};
