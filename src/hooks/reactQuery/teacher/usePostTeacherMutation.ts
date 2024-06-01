import { useMutation, useQueryClient } from '@tanstack/react-query';

import teacherApi from '@/apis/teacher';
import { TEACHER_KEYS } from '@/constants';

export const usePostTeacherMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: teacherApi.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TEACHER_KEYS.lists() });
    },
  });
};
