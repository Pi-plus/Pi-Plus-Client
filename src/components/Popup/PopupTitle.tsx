import type { PropsWithChildren } from 'react';

import Typography from '@/components/Typography';

const PopupTitle = ({ children }: PropsWithChildren) => {
  return (
    <Typography label="heading3" color="black" className="mt-3">
      {children}
    </Typography>
  );
};
export default PopupTitle;
