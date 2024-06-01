import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/utils';

import type { TUserResponse } from '../users/types';

const studentApi = {
  get: async (): Promise<TUserResponse[]> => {
    const usersRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'student');
    const data = await getDocs(usersRef);
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  },
};

export default studentApi;
