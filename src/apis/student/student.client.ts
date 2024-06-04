import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';

import { db } from '@/utils';
import { getUid } from '@/utils/cookie/manageCookie.client';

import type { TProblemContent, TStudentResponse } from './types';

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

  problemPut: async (body: TProblemContent, isSolve: boolean) => {
    const uid = getUid();
    const q = query(studentRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (docSnapshot) => {
        const user = docSnapshot.data() as TStudentResponse;
        const { solve_problem, wrong_problem, ...rest } = user;
        const result = {
          ...rest,
          wrong_problem: isSolve ? wrong_problem : [...(wrong_problem || []), body],
          solve_problem: isSolve ? [...(solve_problem || []), body] : solve_problem,
        };
        const updateStudentRef = doc(db, 'student', docSnapshot.id);
        await updateDoc(updateStudentRef, result);
        console.log(`${isSolve ? 'Solved' : 'Wrong'} problem updated successfully for user ${uid}`);
      });
    } else {
      console.error(`No user found with uid ${uid}`);
    }
  },
};
