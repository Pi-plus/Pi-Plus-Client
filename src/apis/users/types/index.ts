import type { TUserRole } from '@/constants/enums';

export type TUserResponse = {
  id: string;
  user_role?: TUserRole;
  user_gender?: string;

  user_name?: string;

  user_school?: string;
  user_goal?: string;
  solve_problem?: object[];
  wrong_problem?: object[];
};
/**
 * @description 회원가입 할 때 유저 정보 폼 상태 타입
 */
type TUserProperties = 'user_role' | 'user_gender' | 'user_name' | 'user_school' | 'user_goal';
export type TUserRequest = Pick<TUserResponse, TUserProperties>;

/**
 * @descript 회원가입할 때 폼 상태 타입
 */
export interface ISignUpRequest {
  email: string;
  password: string;
}
