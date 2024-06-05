'use client';

import Link from 'next/link';
import classNames from 'classnames';

import Typography from '@/components/Typography';
import { useNavigate } from '@/hooks';

import type { TTabContent } from '../../constants';
import HeaderLayout from '../Layout';

const RootHeader = ({ tabs }: { tabs: TTabContent[] }) => {
  const { push, pathname } = useNavigate();
  return (
    <HeaderLayout>
      <div className="flex flex-col items-end mt-3">
        {/*<HeaderLoginOption />*/}
        <div className="flex gap-20 items-center">
          {tabs.map((tab) => (
            <Link href={tab.href} key={tab.href}>
              <Typography
                label="title3"
                color="black"
                className={classNames('cursor-pointer hover:font-semibold', {
                  'font-semibold': pathname.startsWith(tab.baseUrl ?? tab.href),
                })}
                onClick={() => {
                  push(tab.href);
                }}
              >
                {tab.label}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </HeaderLayout>
  );
};
export default RootHeader;
