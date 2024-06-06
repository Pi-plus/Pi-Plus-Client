import { useQuery } from '@tanstack/react-query';

import { studentApi } from '@/apis/student/student.client';
import type { TStudentResponse } from '@/apis/student/types';
import { STUDENT_KEYS } from '@/constants';

export const useStudentQuery = () => {
  const { data: studentData, ...rest } = useQuery<TStudentResponse[] | null, Error>({
    queryKey: STUDENT_KEYS.details(),
    queryFn: () => studentApi.get(),
  });

  const data = studentData?.[0] || {};

  return { data, ...rest };
};
