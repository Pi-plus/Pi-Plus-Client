import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import MathCorrectPopup from '@/features/math/components/MathPopups/MathCorrectPopup/index';
import { useModal } from '@/hooks';

const meta: Meta<typeof MathCorrectPopup> = {
  title: 'Popup/MathCorrectPopup',
  component: MathCorrectPopup,
};
export default meta;

const Template = () => {
  const { isOpen, onClose, onOpen } = useModal();

  return (
    <>
      <div className="w-[30%]">
        <Button onClick={onOpen}>정답 팝업 열기</Button>
      </div>
      <MathCorrectPopup isOpen={isOpen} onClose={onClose} onConfirm={onClose} title="정답입니다!" />
    </>
  );
};
export const Primary: StoryObj<typeof Template> = {
  render: () => <Template />,
};
