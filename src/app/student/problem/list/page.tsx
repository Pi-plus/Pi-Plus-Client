'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import Select from '@/components/Select';
import { ROUTES } from '@/constants';

const StudentProblemListPage = () => {
  const columns = ['문제번호', '학년', '단원명', '난이도'];
  const { push } = useRouter();
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-end mb-10 pr-10 mt-14">
        <div className="flex gap-4 items-center">
          <Select value="" placeholder="난이도" options={[]} onChange={() => {}} />
          <Select value="" placeholder="난이도" options={[]} onChange={() => {}} />
          <Select value="" placeholder="난이도" options={[]} onChange={() => {}} />
          <Button className="px-6 py-3">문제 검색</Button>
        </div>
      </div>
      <div className="w-full flex justify-center">
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
            <tr className="w-full border-b border-gray-10 h-[48px] hover:bg-gray-5 cursor-pointer">
              <td className="text-center">10102번</td>
              <td className="text-center">중학교 2학년</td>
              <td className="text-center">2.3 단원명</td>
              <td className="text-center">중</td>
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
    </div>
  );
};
export default StudentProblemListPage;
