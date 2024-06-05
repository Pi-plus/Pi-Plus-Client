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

  return (
    <>
      {pathname === ROUTES.LOGIN || pathname === ROUTES.SIGN_UP ? (
        <RootHeader tabs={HOME_TAB} />
      ) : (
        <>
          {!role && <RootHeader tabs={HOME_TAB} />}
          {role === USER_ROLE.STUDENT && <StudentHeader />}
          {role === USER_ROLE.TEACHER && <RootHeader tabs={TEACHER_TAB} />}
        </>
      )}
    </>
  );
};

export default Header;
