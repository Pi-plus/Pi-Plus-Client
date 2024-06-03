import { cookies } from 'next/headers';

import type { TCookieKey } from './cookieKey';
import { CookieKey } from './cookieKey';

/**
 * 쿠키에서 아이템을 가져옴
 */
const getItemOrNull = async <T>(key: TCookieKey): Promise<T | null> => {
  const cookieStore = cookies();
  try {
    const data = cookieStore.get(key)?.value;
    return data ? (data as T) : null;
  } catch (error) {
    return null;
  }
};

/**
 * 쿠키에 아이템을 저장
 */
const setItem = (key: TCookieKey, items: string) => {
  const cookieStore = cookies();
  try {
    cookieStore.set(key, items);
  } catch (error) {
    // TODO: log 파일에 저장
  }
};

/**
 *  uid 값을 가져옴
 */
export const getUid = async () => {
  return await getItemOrNull<string>(CookieKey.uid);
};

/**
 * uid 값을 갱신
 */
const setUid = (uid: string) => {
  setItem(CookieKey.uid, uid);
};

/**
 * role 값을 가져옴
 */
export const getRole = async () => {
  return getItemOrNull<string>(CookieKey.role);
};

/**
 * role 값을 갱신
 */
const setRole = (role: string) => {
  setItem(CookieKey.role, role);
};

/**
 * uid, role 값 넣어줌
 */
export const setUserData = (role: string, uid: string) => {
  setRole(role);
  setUid(uid);
};
