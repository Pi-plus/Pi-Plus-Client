import { useMutation } from '@tanstack/react-query';

import { studentApi } from '@/apis/student/student.client';
import type { TProblemContent } from '@/apis/student/types';

export const useProblemPutStudentMutation = (body: TProblemContent, isSolve: boolean) => {
  return useMutation({
    mutationFn: () => studentApi.problemPut(body, isSolve),
  });
};
