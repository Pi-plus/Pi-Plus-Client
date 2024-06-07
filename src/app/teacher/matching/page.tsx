import { teacherServerApi } from '@/apis/teacher/teacher.server';
import PrefetchHydration from '@/components/ReactQuery/PrefetchHydration';
import { TEACHER_KEYS } from '@/constants';
import TeacherMyPage from '@/features/teacher/components/Page';

const TeacherMatchingPage = () => {
  return (
    <PrefetchHydration queryKey={TEACHER_KEYS.details()} queryFn={teacherServerApi.get}>
      <TeacherMyPage />
    </PrefetchHydration>
  );
};

export default TeacherMatchingPage;
