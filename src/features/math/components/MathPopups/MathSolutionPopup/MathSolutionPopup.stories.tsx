import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import MathSolutionPopup from '@/features/math/components/MathPopups/MathSolutionPopup/index';
import { useModal } from '@/hooks';

const meta: Meta<typeof MathSolutionPopup> = {
  title: 'Popup/MathSolutionPopup',
  component: MathSolutionPopup,
};
export default meta;

const Template = () => {
  const { isOpen, onClose, onOpen } = useModal();

  return (
    <>
      <div className="w-[30%]">
        <Button onClick={onOpen}>해설 팝업 열기</Button>
      </div>
      <MathSolutionPopup
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onClose}
        title="101090182번의 문제"
        mathImg="https://i.imgur.com/stsHeHh.png"
        solutionImg="https://i.imgur.com/vrvGjDO.png"
      />
    </>
  );
};
export const Primary: StoryObj<typeof Template> = {
  render: () => <Template />,
};
