import { useQuery } from '@tanstack/react-query';

import studentApi from '@/apis/student';
import type { TStudentResponse } from '@/apis/student/types';
import { STUDENT_KEYS } from '@/constants';

export const useStudentQuery = (uid: string) => {
  return useQuery<TStudentResponse[] | null, Error>({
    queryKey: STUDENT_KEYS.detail([{ uid }]),
    queryFn: () => studentApi.get(uid),
  });
};
