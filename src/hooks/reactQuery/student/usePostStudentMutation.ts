import { useMutation } from '@tanstack/react-query';

import { studentApi } from '@/apis/student/student.client';

export const usePostStudentMutation = () => {
  return useMutation({
    mutationFn: studentApi.post,
  });
};
