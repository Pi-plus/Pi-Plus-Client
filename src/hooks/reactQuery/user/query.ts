import { useQuery } from '@tanstack/react-query';

import userApi from '@/apis/users';
import { USER_KEYS } from '@/constants';

export const useGetUserData = () => {
  return useQuery({
    queryKey: USER_KEYS.details(),
    queryFn: userApi.get,
  });
};
