import { useQuery } from '@tanstack/react-query';

import studentApi from '@/apis/student';
import { STUDENT_KEYS } from '@/constants';

export const useGetStudentData = () => {
  return useQuery({
    queryKey: STUDENT_KEYS.details(),
    queryFn: studentApi.get,
  });
};
