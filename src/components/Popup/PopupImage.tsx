import Image from 'next/image';

const PopupImage = ({ imgSrc }: { imgSrc: string }) => {
  return <Image src={imgSrc} width={400} height={0} alt="" className="h-auto w-full" layout="responsive" />;
};
export default PopupImage;
