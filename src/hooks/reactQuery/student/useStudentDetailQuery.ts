import { useQuery } from '@tanstack/react-query';

import { studentApi } from '@/apis/student/student.client';
import type { TStudentResponse } from '@/apis/student/types';
import { STUDENT_KEYS } from '@/constants';

export const useStudentDetailQuery = (id: string) => {
  const { data: studentData, ...rest } = useQuery<TStudentResponse[] | null, Error>({
    queryKey: STUDENT_KEYS.detail([{ id }]),
    queryFn: () => studentApi.getById(id),
  });

  const data = studentData?.[0] || {};

  return { data, ...rest };
};
