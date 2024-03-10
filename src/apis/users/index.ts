import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/shared/utils';

const userApi = {
  get: async () => {
    const usersRef: CollectionReference<DocumentData, DocumentData> = collection(db, 'user');
    const data = await getDocs(usersRef);
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  },
};

export default userApi;
