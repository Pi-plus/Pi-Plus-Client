const StudentProblemListPage = () => {
  const columns = ['문제번호', '학년', '단원명', '난이도'];
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-end">옵션</div>
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
            <tr className="w-full border-b border-gray-10 h-[48px] hover:bg-gray-5 cursor-pointer">
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
    </div>
  );
};
export default StudentProblemListPage;
