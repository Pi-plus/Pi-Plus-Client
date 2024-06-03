import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/utils';
import { getUid } from '@/utils/cookie/manageCookie.server';

import type { TStudentResponse } from './types';

const studentRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'student');

export const studentServerApi = {
  get: async () => {
    const uid = await getUid();
    const q = query(studentRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    const userData: TStudentResponse[] = [];

    querySnapshot.forEach((doc) => {
      userData.push({ id: doc.id, ...doc.data() });
    });

    return userData;
  },
};
