import { useMutation } from '@tanstack/react-query';

import { studentApi } from '@/apis/student/student.client';
import type { TProblemContent } from '@/apis/student/types';

export const useWrongProblemPutStudentMutation = (body: TProblemContent) => {
  return useMutation({
    mutationFn: () => studentApi.wrongProblemPut(body),
  });
};
