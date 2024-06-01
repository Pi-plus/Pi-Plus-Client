import type { AuthError } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/utils';

import type { ISignUpRequest } from './types';

const authApi = {
  post: async (body: ISignUpRequest) => {
    try {
      await createUserWithEmailAndPassword(auth, body.email, body.password);
    } catch (error) {
      const authError = error as AuthError;
      return authError;
    }
  },
};

export default authApi;
