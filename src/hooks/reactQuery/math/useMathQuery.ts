import { useQuery } from '@tanstack/react-query';

import mathApi from '@/apis/math';
import { MATH_KEYS } from '@/constants';

export const useMathQuery = () => {
  return useQuery({
    queryKey: MATH_KEYS.details(),
    queryFn: mathApi.get,
  });
};
