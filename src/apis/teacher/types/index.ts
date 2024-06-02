/**
 * @descript 선생님 DB 응답 타입
 */
export type TStudentResponse = {
  id?: string;

  user_name?: string;

  manage_student?: object[];

  uid?: string;
  accessToken?: string;
};
