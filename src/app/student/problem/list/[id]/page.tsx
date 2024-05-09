import Typography from '@/components/Typography';

interface IStudentProblemDetailProps {
  params: {
    id: number;
  };
}

const StudentProblemDetailPage = ({ params }: IStudentProblemDetailProps) => {
  const { id } = params;
  return <Typography label="body1">{`문제 디테일 페이지${id}`}</Typography>;
};
export default StudentProblemDetailPage;
