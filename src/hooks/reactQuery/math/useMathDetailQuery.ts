import { useQuery } from '@tanstack/react-query';

import mathApi from '@/apis/math';
import type { IMathResponse } from '@/apis/math/types';
import { MATH_KEYS } from '@/constants';

export const useMathDetailQuery = (id: string) => {
  return useQuery<IMathResponse | null, Error>({
    queryKey: MATH_KEYS.detail([{ id }]),
    queryFn: () => mathApi.getById(id),
  });
};
