import { useMutation, useQueryClient } from '@tanstack/react-query';

import { studentApi } from '@/apis/student/student.client';
import type { TProblemContent } from '@/apis/student/types';
import { STUDENT_KEYS } from '@/constants';

export const useSolveProblemPutStudentMutation = (body: TProblemContent) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => studentApi.solveProblemPut(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STUDENT_KEYS.details() });
    },
  });
};
