'use client';

import { useState } from 'react';
import Image from 'next/image';
import { defaultImages } from '@public/images';

import Button from '@/components/Button';
import MultiTitle from '@/components/MultiTitle';
import SelectButton from '@/components/SelectButton';
import { LOGIN_ROUTES, ROUTES } from '@/constants';
import type { TUserRole } from '@/constants/enums';
import { USER_ROLE } from '@/constants/enums';
import { useNavigate } from '@/hooks';
import { useRoleStore } from '@/stores';

const SelectForm = () => {
  const { push } = useNavigate();
  const { setRole } = useRoleStore();
  const [select, setSelect] = useState<TUserRole>('선생님');
  const ROLE_ARRAY = [USER_ROLE.TEACHER, USER_ROLE.STUDENT];

  const handleClickSelectButton = (role: TUserRole) => {
    setSelect(role);
  };

  const handleNavigateNext = () => {
    setRole(select);
    push({
      pathname: ROUTES.LOGIN,
      query: { step: LOGIN_ROUTES.FORM },
    });
  };
  return (
    <>
      <MultiTitle title="계정정보를 선택해주세요" subTitle="계정에 맞는 기능을 제공해드려요" />
      <div className="flex justify-center items-center">
        <Image src={defaultImages.studentTeacher} width={460} height={250} alt="" />
      </div>
      <div className="flex items-center justify-center gap-4 w-full mt-8">
        {ROLE_ARRAY.map((role) => (
          <SelectButton
            key={role}
            isSelected={select === role}
            label={role}
            onClick={() => handleClickSelectButton(role)}
          />
        ))}
      </div>
      <Button className="mt-12" onClick={handleNavigateNext}>
        다음
      </Button>
    </>
  );
};
export default SelectForm;
