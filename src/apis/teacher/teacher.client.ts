import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { getDocs, query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';

import { db } from '@/utils';
import { getUid } from '@/utils/cookie/manageCookie.client';

import type { TTeacherResponse } from './types';

const teacherRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'teacher');

const teacherApi = {
  post: async (body: TTeacherResponse) => {
    const result = await addDoc(teacherRef, body);
    return result;
  },

  get: async () => {
    const uid = getUid();
    const q = query(teacherRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    const userData: TTeacherResponse[] = [];

    querySnapshot.forEach((doc) => {
      userData.push({ id: doc.id, ...doc.data() });
    });

    return userData;
  },
};

export default teacherApi;
