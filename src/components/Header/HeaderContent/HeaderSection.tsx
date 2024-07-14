import type { TStudentContent } from '@/components/Header/type';
import Typography from '@/components/Typography';

interface IHeaderSectionProps {
  list: TStudentContent[];
  count: number;
  baseUrl: string;
}

const HeaderSection = ({ list, count, baseUrl }: IHeaderSectionProps) => {
  const columnCount = Math.floor(list.length / count);

  return (
    <>
      {Array.from({ length: columnCount }, (_, i) => (
        <div className="h-full border-gray-10 items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]" key={i}>
          {i === columnCount - 1 ? (
            <>
              {list.slice(i * count).map((math) => (
                <Typography label="body3" className="cursor-pointer hover:font-semibold" key={math.label}>
                  {math.label}
                </Typography>
              ))}
            </>
          ) : (
            <>
              {list.slice(i * count, (i + 1) * count).map((math) => (
                <Typography label="body3" className="cursor-pointer hover:font-semibold" key={math.label}>
                  {math.label}
                </Typography>
              ))}
            </>
          )}
        </div>
      ))}
    </>
  );
};
export default HeaderSection;
