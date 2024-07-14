import HeaderContent from '@/components/Header/HeaderContent';
import HeaderLayout from '@/components/Header/HeaderLayout';
import HeaderTabList from '@/components/Header/HeaderTabList';
import type { TTabContent } from '@/components/Header/type';
import { useTabStore } from '@/stores';

const HeaderMain = ({ tabs }: { tabs: TTabContent[] }) => {
  const { tab: focusTab } = useTabStore();

  return (
    <>
      <HeaderLayout>
        <HeaderTabList tabs={tabs} />
        {focusTab && <HeaderContent />}
      </HeaderLayout>
    </>
  );
};
export default HeaderMain;
