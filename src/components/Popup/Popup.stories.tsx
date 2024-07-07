import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import { Popup } from '@/components/Popup/PopupMain';
import { useModal } from '@/hooks';

const meta: Meta<typeof Popup> = {
  title: 'Popup/Popup',
  component: Popup,
};
export default meta;

const Template = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <>
      <div className="w-[30%]">
        <Button onClick={onOpen}>Click</Button>
      </div>

      <Popup isShow={isOpen} onClose={onClose}>
        <Popup.Content>팝업 내용</Popup.Content>
        <Popup.Footer>
          <Popup.ConfirmButton onConfirm={onClose}>확인</Popup.ConfirmButton>
          <Popup.CancelButton onCancel={onClose}>취소</Popup.CancelButton>
        </Popup.Footer>
      </Popup>
    </>
  );
};

const SecondaryTemplate = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <div className="w-[30%]">
        <Button onClick={onOpen}>Click</Button>
      </div>

      <Popup isShow={isOpen} onClose={onClose}>
        <Popup.CloseSvg onClick={onClose} />
        팝업 내용
      </Popup>
    </>
  );
};
export const Primary: StoryObj<typeof Template> = {
  render: () => <Template />,
};
export const Secondary: StoryObj<typeof SecondaryTemplate> = {
  render: () => <SecondaryTemplate />,
};
