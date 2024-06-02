import type { IEmailPasswordForm } from '@/apis/auth/types';
import type { TStudentResponse } from '@/apis/student/types';
import type { TUserRole } from '@/constants/enums';

export type TSignupForm = TStudentResponse &
  IEmailPasswordForm & {
    user_role: TUserRole;
  };
