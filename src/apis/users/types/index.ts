import type { TUserRole } from '@/constants/enums';

export interface IUserResponse {
  id: string;
  user_grade?: string;
  user_id?: string;
  user_name?: string;
  user_password?: string;
  user_role?: TUserRole;
  user_school?: string;
}
