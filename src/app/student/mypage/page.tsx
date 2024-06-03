import { studentServerApi } from '@/apis/student/student.server';
import PrefetchHydration from '@/components/ReactQuery/PrefetchHydration';
import { STUDENT_KEYS } from '@/constants';
import { StudentPrivatePage } from '@/features/mypage/components';

const StudentMyPage = () => {
  return (
    <PrefetchHydration queryKey={STUDENT_KEYS.details()} queryFn={studentServerApi.get}>
      <StudentPrivatePage />
    </PrefetchHydration>
  );
};
export default StudentMyPage;
