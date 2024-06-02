import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/utils';

const mathRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'middle1-1');

const mathApi = {
  get: async () => {
    const data = await getDocs(mathRef);
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  },
};
export default mathApi;
