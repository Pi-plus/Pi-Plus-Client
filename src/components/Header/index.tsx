'use client';

import { HOME_TAB, STUDENT_TABS, TEACHER_TAB } from '@/components/Header/constant';
import HeaderMain from '@/components/Header/HeaderMain';
import { ROUTES } from '@/constants';
import { USER_ROLE } from '@/constants/enums';
import { useNavigate } from '@/hooks';
import { useRoleStore } from '@/stores';

const Header = () => {
  const { pathname } = useNavigate();
  const { role } = useRoleStore();

  if (pathname === ROUTES.LOGIN || pathname === ROUTES.SIGN_UP) {
    return <HeaderMain tabs={HOME_TAB} />;
  }

  if (!role) {
    return <HeaderMain tabs={HOME_TAB} />;
  }

  if (role === USER_ROLE.TEACHER) {
    return <HeaderMain tabs={TEACHER_TAB} />;
  }

  if (role === USER_ROLE.STUDENT) {
    return <HeaderMain tabs={STUDENT_TABS} />;
  }

  return null;
};
export default Header;
