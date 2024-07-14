import React from 'react';

import HeaderTab from '@/components/Header/HeaderTabList/HeaderTab';
import type { TTabContent } from '@/components/Header/type';
import { useTabStore } from '@/stores';

const HeaderTabList = ({ tabs }: { tabs: TTabContent[] }) => {
  const { setTab } = useTabStore();
  return (
    <nav>
      <ul className="flex gap-20 items-center justify-center mt-3">
        {tabs.map((tab) => (
          <HeaderTab
            key={tab.baseUrl}
            tab={tab}
            onMouseOver={() => {
              if (tab.hasArrow) {
                setTab(tab.baseUrl);
              }
            }}
          />
        ))}
      </ul>
    </nav>
  );
};
export default HeaderTabList;
