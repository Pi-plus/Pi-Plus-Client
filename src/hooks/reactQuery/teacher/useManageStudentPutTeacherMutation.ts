import { useMutation, useQueryClient } from '@tanstack/react-query';

import teacherApi from '@/apis/teacher/teacher.client';
import { TEACHER_KEYS } from '@/constants';

export const useManageStudentPutTeacherMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (studentUid: string) => teacherApi.manageStudentPut(studentUid),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TEACHER_KEYS.details() });
    },
  });
};
