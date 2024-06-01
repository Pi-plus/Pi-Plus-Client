import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { addDoc, collection, getDocs } from 'firebase/firestore';

import { db } from '@/utils';

import type { TUserResponse } from '../users/types';

const studentRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'student');

const studentApi = {
  get: async (): Promise<TUserResponse[]> => {
    const data = await getDocs(studentRef);
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  },

  post: async (body: TUserResponse) => {
    const result = await addDoc(studentRef, body);
    return result;
  },
};

export default studentApi;
