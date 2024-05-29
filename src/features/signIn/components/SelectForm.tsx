import { useState } from 'react';
import Image from 'next/image';
import { defaultImages } from '@public/images';

import Button from '@/components/Button';
import MultiTitle from '@/components/MultiTitle';
import SelectButton from '@/components/SelectButton';
import type { TUserRole } from '@/constants/enums';
import { USER_ROLE } from '@/constants/enums';

const SelectForm = () => {
  const [select, setSelect] = useState<TUserRole | ''>('');

  const handleClickSelectButton = (role: TUserRole) => {
    setSelect(role);
  };
  return (
    <>
      <MultiTitle title="계정정보를 선택해주세요" subTitle="계정에 맞는 기능을 제공해드려요" />
      <div className="flex justify-center items-center">
        <Image src={defaultImages.studentTeacher} width={460} height={250} alt="" />
      </div>
      <div className="flex items-center justify-center gap-4 w-full mt-8 px-32">
        <SelectButton
          isSelected={select === USER_ROLE.TEACHER}
          label={USER_ROLE.TEACHER}
          onClick={() => handleClickSelectButton(USER_ROLE.TEACHER)}
        />
        <SelectButton
          isSelected={select === USER_ROLE.STUDENT}
          label={USER_ROLE.STUDENT}
          onClick={() => handleClickSelectButton(USER_ROLE.STUDENT)}
        />
      </div>
      <Button className="mt-12" disabled={select === ''} onClick={() => {}}>
        다음
      </Button>
    </>
  );
};
export default SelectForm;
