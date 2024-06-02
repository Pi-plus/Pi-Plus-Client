/**
 * @descript 학생 DB 응답 타입
 */
export type TStudentResponse = {
  id?: string;

  user_name?: string;

  user_school?: string;
  user_goal?: number;
  solve_problem?: object[];
  wrong_problem?: object[];

  uid?: string;
  accessToken?: string;
};
