'use client';

import mathApi from '@/apis/math';
import PrefetchHydration from '@/components/ReactQuery/PrefetchHydration';
import { MATH_KEYS } from '@/constants';
import { MathDetailPage } from '@/features/math/components';

interface IStudentProblemDetailProps {
  params: {
    id: string;
  };
}

const StudentProblemDetailPage = ({ params }: IStudentProblemDetailProps) => {
  return (
    <PrefetchHydration queryKey={MATH_KEYS.detail([{ ...params }])} queryFn={() => mathApi.getById(params.id)}>
      <MathDetailPage id={params.id} />
    </PrefetchHydration>
  );
};
export default StudentProblemDetailPage;
