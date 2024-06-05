'use client';

import { ROUTES } from '@/constants';
import { USER_ROLE } from '@/constants/enums';
import { useNavigate } from '@/hooks';
import { useRoleStore } from '@/stores';

import { HOME_TAB, TEACHER_TAB } from '../constants';

import RootHeader from './Root';
import StudentHeader from './Student';

const Header = () => {
  const { pathname } = useNavigate();
  const { role } = useRoleStore();

  if (pathname === ROUTES.LOGIN || pathname === ROUTES.SIGN_UP) {
    return <RootHeader tabs={HOME_TAB} />;
  }

  if (!role) {
    return <RootHeader tabs={HOME_TAB} />;
  }

  if (role === USER_ROLE.STUDENT) {
    return <StudentHeader />;
  }

  if (role === USER_ROLE.TEACHER) {
    return <RootHeader tabs={TEACHER_TAB} />;
  }

  return null;
};

export default Header;
