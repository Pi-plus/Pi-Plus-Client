import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/utils';

import type { TUserResponse } from '../users/types';

const teacherRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'teacher');

const teacherApi = {
  get: async (): Promise<TUserResponse[]> => {
    const data = await getDocs(teacherRef);
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  },
};

export default teacherApi;
