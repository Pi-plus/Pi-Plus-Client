import type { CollectionReference, DocumentData } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { getDocs, query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';

import { studentApi } from '@/apis/student/student.client';
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

  manageStudentPut: async (studentUid: string) => {
    const uid = getUid();
    const studentData = await studentApi.getById(studentUid);
    console.log('학생 정보 받기', studentData[0]);
    const studentObject = {
      uid: studentUid,
      user_name: studentData[0].user_name,
      user_school: studentData[0].user_school,
    };

    const q = query(teacherRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (docSnapshot) => {
        const user = docSnapshot.data() as TTeacherResponse;
        const { manage_student, ...rest } = user;
        const newManageStudent = [...(manage_student || []), studentObject];
        const result = {
          ...rest,
          manage_student: newManageStudent,
        };

        const updateTeacherRef = doc(db, 'teacher', docSnapshot.id);
        await updateDoc(updateTeacherRef, result);
      });
    }
  },
};

export default teacherApi;
