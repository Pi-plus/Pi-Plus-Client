import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { db } from '@/utils';

import type { IMathResponse } from './types';

const mathRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'middle1-1');

const mathApi = {
  get: async (): Promise<IMathResponse[]> => {
    const data = await getDocs(mathRef);
    const result = data.docs.map((doc) => {
      const docData = doc.data();
      const mathResponse: IMathResponse = {
        id: doc.id,
        answer: docData.answer,
        answer_type: docData.answer_type,
        question: docData.question,
        question_answer: docData.question_answer,
        question_chapter: docData.question_chapter,
        question_difficulty: docData.question_difficulty,
        tag: docData.tag,
        textbook_type: docData.textbook_type,
      };
      return mathResponse;
    });
    return result;
  },

  getById: async (id: string): Promise<IMathResponse | null> => {
    const docRef = doc(mathRef, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const docData = docSnap.data();
      return docData as IMathResponse;
    } else {
      return null;
    }
  },
};
export default mathApi;
