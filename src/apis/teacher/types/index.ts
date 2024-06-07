import type { TStudentResponse } from '@/apis/student/types';

/**
 * @descript 선생님 DB 응답 타입
 */
type TTeacherProperties = 'id' | 'uid' | 'user_name';

export interface IManageStudent {
  uid?: string;
  user_name?: string;
  user_school?: string;
}
export type TTeacherResponse = Pick<TStudentResponse, TTeacherProperties> & {
  manage_student?: IManageStudent[];
};
