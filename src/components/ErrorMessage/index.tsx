import Image from 'next/image';
import { defaultSvg } from '@public/svgs';

import Typography from '../Typography';

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <>
      {message && (
        <div className="flex items-center mt-3">
          <Image src={defaultSvg.caution} width={16} height={16} alt="" />
          <Typography color="red" className="ml-1">
            {message}
          </Typography>
        </div>
      )}
    </>
  );
};
export default ErrorMessage;
