import type { AuthError } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/utils';
import { setUid } from '@/utils/cookie/manageCookie.client';

import type { IEmailPasswordForm } from './types';

const authApi = {
  post: async (body: IEmailPasswordForm) => {
    const result = await createUserWithEmailAndPassword(auth, body.email, body.password);
    return result;
  },
  login: async (body: IEmailPasswordForm) => {
    try {
      const result = await signInWithEmailAndPassword(auth, body.email, body.password);
      setUid(result.user.uid);
    } catch (error) {
      const authError = error as AuthError;
      switch (authError.code) {
        case 'auth/invalid-credential':
          return '입력한 이메일은 존재하지 않습니다';
        case 'auth/wrong-password':
          return '입력한 이메일과 비밀번호가 일치하지 않습니다';
      }

      return authError;
    }
  },
};

export default authApi;
