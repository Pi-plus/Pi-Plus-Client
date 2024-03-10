import { useQuery } from '@tanstack/react-query';

import userApi from '@/apis/users';

export const useGetUserData = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: userApi.get,
  });
};
