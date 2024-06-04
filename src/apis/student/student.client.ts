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

  solveProblemPut: async (body: TProblemContent) => {
    const uid = getUid();
    const q = query(studentRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (docSnapshot) => {
        const user = docSnapshot.data() as TStudentResponse;
        const { solve_problem, wrong_problem, ...rest } = user;
        const updatedWrongProblems = (wrong_problem || []).filter((problem) => problem.id !== body.id);
        const isAlreadySolved = (solve_problem || []).some((problem) => problem.id === body.id);
        const updatedSolveProblems = isAlreadySolved ? solve_problem : [...(solve_problem || []), body];
        const result = {
          ...rest,
          solve_problem: updatedSolveProblems,
          wrong_problem: updatedWrongProblems,
        };
        const updateStudentRef = doc(db, 'student', docSnapshot.id);
        await updateDoc(updateStudentRef, result);
      });
    }
  },

  wrongProblemPut: async (body: TProblemContent) => {
    const uid = getUid();
    const q = query(studentRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (docSnapshot) => {
        const user = docSnapshot.data() as TStudentResponse;
        const { solve_problem, wrong_problem, ...rest } = user;
        const updatedSolveProblems = (solve_problem || []).filter((problem) => problem.id !== body.id);
        const isAlreadySolved = (wrong_problem || []).some((problem) => problem.id === body.id);
        const updatedWrongProblems = isAlreadySolved ? wrong_problem : [...(wrong_problem || []), body];
        const result = {
          ...rest,
          solve_problem: updatedSolveProblems,
          wrong_problem: updatedWrongProblems,
        };
        const updateStudentRef = doc(db, 'student', docSnapshot.id);
        await updateDoc(updateStudentRef, result);
      });
    }
  },
};
