import { useRouter } from 'next/navigation';

import { ROUTES } from '@/constants';
import { useMathQuery } from '@/hooks/reactQuery/math';

const MathTable = () => {
  const columns = ['문제번호', '학년', '단원명', '난이도'];
  const { push } = useRouter();
  const { data } = useMathQuery();
  console.log(data);
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
          <tr
            className="w-full border-b border-gray-10 h-[48px] hover:bg-gray-5 cursor-pointer"
            onClick={() => {
              push(`${ROUTES.STUDENT_LIST}/${1}`);
            }}
          >
            <td className="text-center">10101번</td>
            <td className="text-center">중학교 1학년</td>
            <td className="text-center">2.2 단원명</td>
            <td className="text-center">상</td>
          </tr>

          <tr className="w-full border-b border-gray-10 h-[48px] hover:bg-gray-5 cursor-pointer">
            <td className="text-center">10102번</td>
            <td className="text-center">중학교 2학년</td>
            <td className="text-center">2.3 단원명</td>
            <td className="text-center">중</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default MathTable;
