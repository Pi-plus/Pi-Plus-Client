import Link from 'next/link';

import type { TStudentContent } from '@/components/Header/type';
import Typography from '@/components/Typography';
import { ROUTES } from '@/constants';
import { useTabStore } from '@/stores';

interface IHeaderSectionProps {
  list: TStudentContent[];
  count: number;
}

const HeaderSection = ({ list, count }: IHeaderSectionProps) => {
  const columnCount = Math.floor(list.length / count);
  const { tab } = useTabStore();
  const handleMathConceptLink = (math: TStudentContent) => {
    if (tab === ROUTES.STUDENT_CONCEPT && math.href) {
      return math.href;
    }
    return `${tab}?math=${math.query}`;
  };
  return (
    <>
      {Array.from({ length: columnCount }, (_, i) => (
        <div className="h-full border-gray-10 items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]" key={i}>
          {i === columnCount - 1 ? (
            <>
              {list.slice(i * count).map((math) => (
                <Link href={handleMathConceptLink(math)} key={math.label}>
                  <Typography label="body3" className="cursor-pointer hover:font-semibold">
                    {math.label}
                  </Typography>
                </Link>
              ))}
            </>
          ) : (
            <>
              {list.slice(i * count, (i + 1) * count).map((math) => (
                <Link href={handleMathConceptLink(math)} key={math.label}>
                  <Typography label="body3" className="cursor-pointer hover:font-semibold">
                    {math.label}
                  </Typography>
                </Link>
              ))}
            </>
          )}
        </div>
      ))}
    </>
  );
};
export default HeaderSection;
