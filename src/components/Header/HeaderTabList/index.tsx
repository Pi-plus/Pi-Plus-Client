import React from 'react';

import HeaderTab from '@/components/Header/HeaderTabList/HeaderTab';
import type { TFocusTab, TTabContent } from '@/components/Header/type';
import { useTabStore } from '@/stores';

import HeaderContent from '../HeaderContent';

const HeaderTabList = ({ tabs }: { tabs: TTabContent[] }) => {
  const { setTab, tab: focusTab } = useTabStore();
  return (
    <nav>
      <ul className="flex gap-20 items-center justify-center mt-3">
        {tabs.map((tab) => (
          <React.Fragment key={tab.baseUrl}>
            <HeaderTab
              tab={tab}
              onMouseOver={() => {
                if (tab.hasArrow) {
                  setTab(tab.label as TFocusTab);
                }
              }}
            />
            {focusTab && <HeaderContent baseUrl={tab.baseUrl} />}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};
export default HeaderTabList;
