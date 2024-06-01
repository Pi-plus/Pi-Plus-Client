import { useMutation, useQueryClient } from '@tanstack/react-query';

import studentApi from '@/apis/student';
import { STUDENT_KEYS } from '@/constants';

export const usePostStudentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: studentApi.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STUDENT_KEYS.lists() });
    },
  });
};
