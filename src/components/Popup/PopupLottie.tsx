import Lottie from 'react-lottie-player';
import type { TKeyOfDefaultLottie } from '@public/lotties';
import { defaultLottie } from '@public/lotties';

const PopupLottie = ({ imgKey }: { imgKey: TKeyOfDefaultLottie }) => {
  return <Lottie loop animationData={defaultLottie[imgKey]} play className="w-[70%] -mt-24" />;
};
export default PopupLottie;
