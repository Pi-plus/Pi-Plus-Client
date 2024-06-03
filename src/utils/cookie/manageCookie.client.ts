import { deleteCookie, getCookie, setCookie } from 'cookies-next';

import type { TCookieKey } from './cookieKey';
import { CookieKey } from './cookieKey';

/**
 * 쿠키에서 아이템을 가져옴
 */
const getItemOrNull = async <T>(key: TCookieKey) => {
  try {
    const data = getCookie(key);
    return data ? (data as T) : null;
  } catch (error) {
    return null;
  }
};

/**
 * 쿠키에 아이템을 저장
 */
const setItem = <T>(key: TCookieKey, items: T) => {
  try {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    setCookie(key, items, { expires: date });
  } catch (error) {
    // TODO: log 파일에 저장
  }
};

/**
 *  uid 값을 가져옴
 */
export const getUid = () => {
  return getCookie(CookieKey.uid);
};

/**
 * uid 값을 갱신
 */
export const setUid = (uid: string) => {
  setItem<string>(CookieKey.uid, uid);
};

/**
 * role 값을 가져옴
 */
export const getRole = () => {
  return getCookie(CookieKey.role);
};

/**
 * role 값을 갱신
 */
export const setRole = (role: string) => {
  setItem<string>(CookieKey.role, role);
};

/**
 * uid, role 값 삭제
 */
export const clearUserData = () => {
  deleteCookie(CookieKey.role);
  deleteCookie(CookieKey.uid);
};

/**
 * uid, role 값 넣어줌
 */
export const setUserData = (role: string, uid: string) => {
  setRole(role);
  setUid(uid);
};
