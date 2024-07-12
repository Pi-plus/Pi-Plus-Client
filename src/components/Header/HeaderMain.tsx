import HeaderLayout from '@/components/Header/HeaderLayout';
import HeaderTabList from '@/components/Header/HeaderTabList';
import type { TTabContent } from '@/components/Header/type';

const HeaderMain = ({ tabs }: { tabs: TTabContent[] }) => {
  return (
    <>
      <HeaderLayout>
        <HeaderTabList tabs={tabs} />
      </HeaderLayout>
    </>
  );
};
export default HeaderMain;
