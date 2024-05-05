'use client';

import Typography from '@/components/Typography';
import { ROUTES, type THoverPathname, type TStudentContent } from '@/constants';
import { useNavigate } from '@/hooks';

interface IHeaderContentSectionProps {
  setHover: (value: '' | THoverPathname) => void;
  list: TStudentContent[];
  type: '' | THoverPathname;
}
const HeaderContentSection = ({ list, type, setHover }: IHeaderContentSectionProps) => {
  const { push } = useNavigate();
  const handleClickContent = (math: TStudentContent) => {
    if (type === 'concept') {
      push(math.conceptHerf);
    } else if (type === 'problem') {
      push({ pathname: ROUTES.STUDENT_LIST, query: { math: math.query } });
    }
    setHover('');
  };
  return (
    <div className="h-full border-gray-10  items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]">
      {list.map((math) => (
        <Typography
          label="body3"
          className="cursor-pointer hover:font-semibold"
          key={math.label}
          onClick={() => handleClickContent(math)}
        >
          {math.label}
        </Typography>
      ))}
    </div>
  );
};
export default HeaderContentSection;
