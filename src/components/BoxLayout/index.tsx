import type { PropsWithChildren } from 'react';

import MathTitle from '../MathTitle';

const BoxLayout = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="w-full">
      <MathTitle type="secondary" title={title} />
      <div className="border border-gray-10 rounded-b-xl py-16 px-12 flex items-center gap-5">{children}</div>
    </div>
  );
};
export default BoxLayout;
