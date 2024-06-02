import type { IEmailPasswordForm } from '@/apis/auth/types';
import type { TStudentResponse } from '@/apis/student/types';

export type TSignupForm = TStudentResponse & IEmailPasswordForm;
