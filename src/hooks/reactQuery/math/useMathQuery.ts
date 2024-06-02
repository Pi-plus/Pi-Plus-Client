import { useQuery } from '@tanstack/react-query';

import mathApi from '@/apis/math';
import type { IMathResponse } from '@/apis/math/types';
import { MATH_KEYS } from '@/constants';

export const useMathQuery = () => {
  return useQuery<IMathResponse[], Error>({
    queryKey: MATH_KEYS.details(),
    queryFn: mathApi.get,
  });
};
