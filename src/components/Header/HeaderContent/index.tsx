import { useState } from 'react';

import Dimmer from '@/components/Dimmer';
import { PortalConsumer } from '@/components/GlobalPortal';
import { HIGH_STUDENT_MATH, MIDDLE_STUDENT_MATH } from '@/components/Header/constant';
import HeaderSection from '@/components/Header/HeaderContent/HeaderSection';
import HeaderStudentSelect from '@/components/Header/HeaderContent/HeaderStudentSelect';
import type { THoverValueOfStudent } from '@/components/Header/type';
import { useTabStore } from '@/stores';

const HeaderContent = () => {
  const [studentHover, setStudentHover] = useState<THoverValueOfStudent>('');
  const { setInitialTab } = useTabStore();

  const handleStudentTabOnMouseLeave = () => setStudentHover('');
  return (
    <PortalConsumer>
      <div
        className="fixed border-t-2 border-gray-20 w-full top-[93px] bg-white z-[60] h-80 flex"
        onMouseLeave={setInitialTab}
      >
        <HeaderStudentSelect setStudentHover={setStudentHover} studentHover={studentHover} />

        {studentHover === 'middle' && (
          <div className="flex w-[80%]" onMouseLeave={handleStudentTabOnMouseLeave}>
            <HeaderSection list={MIDDLE_STUDENT_MATH} count={2} />
          </div>
        )}
        {studentHover === 'high' && (
          <div className="flex w-[80%]" onMouseLeave={handleStudentTabOnMouseLeave}>
            <HeaderSection list={HIGH_STUDENT_MATH} count={2} />
          </div>
        )}
      </div>
      <Dimmer isShow={true} className="h-[calc(100%-93px)] mt-[93px]" />
    </PortalConsumer>
  );
};
export default HeaderContent;
