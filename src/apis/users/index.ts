import type { AuthError } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

import { auth, db } from '@/utils';

import type { ISignUpRequest, IUserResponse } from './types';

const userApi = {
  get: async (): Promise<IUserResponse[]> => {
    const usersRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'user');
    const data = await getDocs(usersRef);
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  },

  post: async (body: ISignUpRequest) => {
    try {
      await createUserWithEmailAndPassword(auth, body.email, body.password);
    } catch (error) {
      const authError = error as AuthError;
      return authError;
    }
  },
};

export default userApi;
