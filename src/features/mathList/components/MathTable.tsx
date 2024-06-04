import { useRouter } from 'next/navigation';

import { MATH_DIFFICULTY, MIDDLE_11_BIG_CHAPTER, MIDDLE_11_SMALL_CHAPTER, ROUTES } from '@/constants';
import type { TMathBigChapter, TMathSmallChapter } from '@/constants/math';
import { useMathQuery } from '@/hooks/reactQuery/math';

const MathTable = () => {
  const columns = ['문제번호', '학년', '단원명', '난이도'];
  const { push } = useRouter();
  const { data } = useMathQuery();

  return (
    <div className="w-full flex justify-center mt-9">
      <table className="w-[80%]">
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
              <td className="text-center">
                {MIDDLE_11_BIG_CHAPTER[math.question_chapter?.charAt(0) as TMathBigChapter]}
              </td>
              <td className="text-center">{MIDDLE_11_SMALL_CHAPTER[math.question_chapter as TMathSmallChapter]}</td>
              <td className="text-center">{MATH_DIFFICULTY[math.question_difficulty ?? 'HIGH'].label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MathTable;
