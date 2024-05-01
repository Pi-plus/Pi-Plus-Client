import Image from 'next/image';
import { defaultSvg } from '@public/svgs';
import classNames from 'classnames';

import Typography from '../Typography';

interface IHeaderTabProps {
  focus: boolean;
  title: string;
  hasArrow: boolean;
}

const HeaderTab = ({ focus, title, hasArrow }: IHeaderTabProps) => {
  return (
    <>
      <Typography
        label="title3"
        color="black"
        className={classNames('cursor-pointer hover:font-semibold', {
          'font-semibold': focus,
        })}
      >
        {title}
      </Typography>

      {hasArrow && (
        <Image
          src={focus ? defaultSvg.arrowUp : defaultSvg.arrowDown}
          className="cursor-pointer mt-1"
          alt=""
          width={11}
          height={5}
        />
      )}
    </>
  );
};
export default HeaderTab;
