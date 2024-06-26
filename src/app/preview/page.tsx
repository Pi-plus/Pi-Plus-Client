'use client';

import type { ChangeEvent } from 'react';
import { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import Select from '@/components/Select';
import Typography from '@/components/Typography';
import { useInput, useModal } from '@/hooks';

const PreviewPage = () => {
  const { onChange, value } = useInput('');
  const { isOpen, onClose, onOpen } = useModal();

  const [select, setSelect] = useState<string>('');

  const handleSetSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };
  return (
    <div className="w-full flex-1 flex flex-col px-2">
      <Typography className="pt-4">button 컴포넌트</Typography>
      <Button className="my-5">버튼</Button>
      <Button className="my-5" disabled>
        버튼
      </Button>
      <Button className="my-5" loading>
        버튼
      </Button>
      <Button className="my-5" type="default">
        버튼
      </Button>
      <Typography className="pt-4">input 컴포넌트</Typography>
      <Input placeholder="adsg" value={value} onChange={onChange} className="my-5" />
      <Input placeholder="adsg" value={value} onChange={onChange} className="my-5" color="secondary" />
      <Input placeholder="adsg" value={value} onChange={onChange} errorMessage="에러!" />

      <Typography className="pt-4">select 컴포넌트</Typography>

      <Select
        className="my-4"
        value={select}
        placeholder="난이도"
        options={[
          { value: 'a', label: 'a' },
          { value: 'b', label: 'b' },
        ]}
        onChange={handleSetSelect}
      />
      <Typography className="pt-4">modal 컴포넌트</Typography>
      <Button className="my-5 w-[80px]" onClick={onOpen}>
        버튼
      </Button>

      <Modal isShow={isOpen} onClose={onClose} className="w-[90%] h-[90%]"></Modal>

      <Typography className="pt-4">popup 컴포넌트</Typography>
    </div>
  );
};
export default PreviewPage;
