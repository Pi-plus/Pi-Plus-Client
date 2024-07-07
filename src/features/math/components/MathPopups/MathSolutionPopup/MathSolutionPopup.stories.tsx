import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import { MathPopupFactory } from '@/features/math/components/MathPopups';
import MathSolutionPopup from '@/features/math/components/MathPopups/MathSolutionPopup/index';
import { MATH_POPUPS } from '@/features/math/constants';
import { useMathPopups } from '@/features/math/hooks';

const meta: Meta<typeof MathSolutionPopup> = {
  title: 'Popup/MathSolutionPopup',
  component: MathSolutionPopup,
};
export default meta;

const Template = () => {
  const popup = useMathPopups();
  const handleOpenSolutionPopup = () => {
    popup.openPopup(MATH_POPUPS.solution, {
      onClose: () => {
        popup.closePopup(MATH_POPUPS.solution);
      },
      onConfirm: () => {},
      title: '101090182번의 문제',
      mathImg: 'https://i.imgur.com/stsHeHh.png',
      solutionImg: 'https://i.imgur.com/vrvGjDO.png',
    });
  };
  return (
    <>
      <div className="w-[30%]">
        <Button onClick={handleOpenSolutionPopup}>해설 팝업 열기</Button>
      </div>
      <MathPopupFactory />
    </>
  );
};
export const Primary: StoryObj<typeof Template> = {
  render: () => <Template />,
};
