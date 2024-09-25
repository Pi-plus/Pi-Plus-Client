import { useRouter } from 'next/navigation';

import Typography from '@/components/Typography';
import { MATH_DIFFICULTY, ROUTES } from '@/constants';
import type { TMathSmallChapter } from '@/constants/math';
import { useMathQuery } from '@/hooks/reactQuery/math';
import { getMathChapter } from '@/utils';

const MathTable = () => {
  const columns = ['문제번호', '학년', '단원명', '난이도'];
  const { push } = useRouter();
  const { data } = useMathQuery();
  const [bigChapter, smallChapter] = getMathChapter(data![0].question_chapter as TMathSmallChapter);

  return (
    <table className="w-full">
      <thead className="bg-gray-10">
        <tr>
          {columns.map((column) => (
            <th scope="col" key={column} className="text-gray-40">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((math) => (
          <tr
            key={math.id}
            className="w-full border-b border-gray-10 h-[48px] hover:bg-gray-5 cursor-pointer"
            onClick={() => {
              push(`${ROUTES.STUDENT_LIST}/${math.id}`);
            }}
          >
            <td className="text-center">{math.id} 번</td>
            <td className="text-center">중학교 1학년 1학기</td>
            <td className="text-center flex flex-col">
              <Typography label="title3" className="mt-1">
                {bigChapter}
              </Typography>
              <Typography label="caption1" className="my-1">
                {smallChapter}
              </Typography>
            </td>
            <td className="text-center">{MATH_DIFFICULTY[math.question_difficulty ?? 'HIGH'].label}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default MathTable;
