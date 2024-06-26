import Image from 'next/image';
import { defaultSvg } from '@public/svgs';

const PopupCloseSvg = ({ onClick }: { onClick: VoidFunction }) => {
  return (
    <Image
      className="absolute top-6 right-6 cursor-pointer"
      src={defaultSvg.cancel}
      onClick={onClick}
      width={24}
      height={24}
      alt=""
    />
  );
};
export default PopupCloseSvg;
