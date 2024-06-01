import { createUserWithEmailAndPassword } from 'firebase/auth';
import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

import { auth, db } from '@/utils';

import type { IUserResponse } from './types';

const userApi = {
  get: async (): Promise<IUserResponse[]> => {
    const usersRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'user');
    const data = await getDocs(usersRef);
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  },

  post: async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(auth, 'hansoom3315@naver.com', '1234');
      console.log(createdUser);
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case 'auth/weak-password':
          console.log(error.code, '비밀번호는 6자리 이상이어야 합니다');
          break;
        case 'auth/invalid-email':
          console.log(error.code, '잘못된 이메일 주소입니다');
          break;
        case 'auth/email-already-in-use':
          console.log(error.code, '이미 가입되어 있는 계정입니다');
          break;
      }
    }
  },
};

export default userApi;
