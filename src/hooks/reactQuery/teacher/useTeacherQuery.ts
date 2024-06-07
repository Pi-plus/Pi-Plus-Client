import { useQuery } from '@tanstack/react-query';

import teacherApi from '@/apis/teacher/teacher.client';
import type { TTeacherResponse } from '@/apis/teacher/types';
import { TEACHER_KEYS } from '@/constants';

export const useTeacherQuery = () => {
  const { data: teacherData, ...rest } = useQuery<TTeacherResponse[] | null, Error>({
    queryKey: TEACHER_KEYS.details(),
    queryFn: () => teacherApi.get(),
  });

  const data = teacherData?.[0] || {};

  return { data, ...rest };
};
