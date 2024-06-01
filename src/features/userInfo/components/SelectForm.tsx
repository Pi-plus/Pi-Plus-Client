'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
import { defaultImages } from '@public/images';

import type { TUserRequest } from '@/apis/users/types';
import Button from '@/components/Button';
import MultiTitle from '@/components/MultiTitle';
import SelectButton from '@/components/SelectButton';
import { ROUTES, USERINFO_ROUTES } from '@/constants';
import type { TUserRole } from '@/constants/enums';
import { USER_ROLE } from '@/constants/enums';
import { useNavigate } from '@/hooks';

const SelectForm = () => {
  const { push } = useNavigate();
  const [select, setSelect] = useState<TUserRole>('선생님');
  const { register, getValues, setValue } = useFormContext<TUserRequest>();

  const ROLE_ARRAY = [USER_ROLE.TEACHER, USER_ROLE.STUDENT];

  useEffect(() => {
    setSelect(getValues('user_role') ?? '선생님');
  }, [getValues]);

  const handleClickSelectButton = (role: TUserRole) => {
    setSelect(role);
    setValue('user_role', role);
  };

  const handleNavigateNext = () => {
    push({
      pathname: ROUTES.USERINFO,
      query: { step: select === USER_ROLE.STUDENT ? USERINFO_ROUTES.STUDENT : USERINFO_ROUTES.TEACHER },
    });
  };
  return (
    <>
      <MultiTitle title="계정정보를 선택해주세요" subTitle="계정에 맞는 기능을 제공해드려요" />
      <div className="flex justify-center items-center">
        <Image src={defaultImages.studentTeacher} width={460} height={250} alt="" />
      </div>
      <div className="flex items-center justify-center gap-4 w-full mt-8" {...register('user_role')}>
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
