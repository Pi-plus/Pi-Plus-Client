import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import { MathPopupFactory } from '@/features/math/components/MathPopups';
import MathCorrectPopup from '@/features/math/components/MathPopups/MathCorrectPopup/index';
import { MATH_POPUPS } from '@/features/math/constants';
import { useMathPopups } from '@/features/math/hooks';

const meta: Meta<typeof MathCorrectPopup> = {
  title: 'Popup/MathCorrectPopup',
  component: MathCorrectPopup,
};
export default meta;

const Template = () => {
  const popup = useMathPopups();

  const handleOpenMathCorrectPopup = () => {
    popup.openPopup(MATH_POPUPS.correct, {
      title: '정답입니다!',
      onClose: () => {
        popup.closePopup(MATH_POPUPS.correct);
      },
      onConfirm: () => {
        popup.closePopup(MATH_POPUPS.correct);
      },
    });
  };

  return (
    <>
      <div className="w-[30%]">
        <Button onClick={handleOpenMathCorrectPopup}>정답 팝업 열기</Button>
      </div>
      <MathPopupFactory />
    </>
  );
};
export const Primary: StoryObj<typeof Template> = {
  render: () => <Template />,
};
