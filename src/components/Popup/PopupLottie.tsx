import type { TKeyOfDefaultLottie } from '@public/lotties';

import LazyLottie from '../LazyLottie';

const PopupLottie = ({ imgKey }: { imgKey: TKeyOfDefaultLottie }) => {
  return <LazyLottie imgkey={imgKey} className="w-[70%] -mt-24" />;
};
export default PopupLottie;
