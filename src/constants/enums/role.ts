export const enum UserRole {
  'STUDENT' = 'STUDENT',
  'TEACHER' = 'TEACHER',
}

export type TUserRole = keyof typeof UserRole;
