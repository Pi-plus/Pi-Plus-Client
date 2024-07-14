import HeaderContent from '@/components/Header/HeaderContent';
import HeaderLayout from '@/components/Header/HeaderLayout';
import HeaderSkeleton from '@/components/Header/HeaderSkeleton';
import HeaderTabList from '@/components/Header/HeaderTabList';
import type { TTabContent } from '@/components/Header/type';
import { useTabStore } from '@/stores';

interface IHeaderMainProps {
  tabs?: TTabContent[];
  isLoading?: boolean;
}
const HeaderMain = ({ tabs, isLoading = false }: IHeaderMainProps) => {
  const { tab: focusTab } = useTabStore();

  return (
    <>
      <HeaderLayout>
        {tabs && <HeaderTabList tabs={tabs} />}
        {isLoading && <HeaderSkeleton />}
        {focusTab && <HeaderContent />}
      </HeaderLayout>
    </>
  );
};
export default HeaderMain;
