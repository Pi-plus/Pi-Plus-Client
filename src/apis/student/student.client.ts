import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/utils';
import { getUid } from '@/utils/cookie/manageCookie.client';

import type { TStudentResponse } from './types';

const studentRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'student');

export const studentApi = {
  post: async (body: TStudentResponse) => {
    const result = await addDoc(studentRef, body);
    return result;
  },

  get: async () => {
    const uid = getUid();
    const q = query(studentRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    const userData: TStudentResponse[] = [];

    querySnapshot.forEach((doc) => {
      userData.push({ id: doc.id, ...doc.data() });
    });

    return userData;
  },
};
