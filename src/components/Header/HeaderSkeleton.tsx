import { Box, Skeleton } from '@chakra-ui/react';

const HeaderSkeleton = () => {
  return (
    <Box className="flex gap-20 items-center justify-center mt-3">
      <Skeleton width="82px" borderRadius="10px" height="27px" startColor="#EEEEEE" endColor="#E0E0E0" />
      <Skeleton width="82px" borderRadius="10px" height="27px" startColor="#EEEEEE" endColor="#E0E0E0" />
      <Skeleton width="82px" borderRadius="10px" height="27px" startColor="#EEEEEE" endColor="#E0E0E0" />
    </Box>
  );
};
export default HeaderSkeleton;
