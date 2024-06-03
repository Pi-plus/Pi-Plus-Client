import type { TStudentResponse } from '@/apis/student/types';

/**
 * @descript 선생님 DB 응답 타입
 */
type TTeacherProperties = 'id' | 'uid' | 'user_name';
export type TTeacherResponse = Pick<TStudentResponse, TTeacherProperties> & {
  manage_student: object[];
};
