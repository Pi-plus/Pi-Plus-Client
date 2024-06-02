export const CookieKey = {
  uid: 'uid',
  role: 'role',
} as const;
export type TCookieKey = keyof typeof CookieKey;
