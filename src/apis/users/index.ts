import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/utils';

import type { IUserResponse } from './types';

const userApi = {
  get: async (): Promise<IUserResponse[]> => {
    const usersRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'user');
    const data = await getDocs(usersRef);
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  },
};

export default userApi;
