import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';

import type { TTeacherResponse } from '@/apis/teacher/types';
import { db } from '@/utils';
import { getUid } from '@/utils/cookie/manageCookie.server';

const teacherRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'teacher');

export const teacherServerApi = {
  get: async () => {
    const uid = await getUid();
    const q = query(teacherRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    const userData: TTeacherResponse[] = [];

    querySnapshot.forEach((doc) => {
      userData.push({ id: doc.id, ...doc.data() });
    });

    return userData;
  },
};
