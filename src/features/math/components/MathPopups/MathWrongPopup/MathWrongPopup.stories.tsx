import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { MathPopupFactory } from '@/features/math/components/MathPopups';
import MathWrongPopup from '@/features/math/components/MathPopups/MathWrongPopup/index';
import { MATH_POPUPS } from '@/features/math/constants';
import { useMathPopups } from '@/features/math/hooks';

const meta: Meta<typeof MathWrongPopup> = {
  title: 'Popup/MathWrongPopup',
  component: MathWrongPopup,
};
export default meta;

const Template = () => {
  const popup = useMathPopups();

  const handleOpenMathWrongPopup = () => {
    popup.openPopup(MATH_POPUPS.wrong, {
      title: '오답이에요ㅠㅠ',
      content: (
        <>
          <Typography label="title2" className="mt-4">
            다시 풀어보면 맞을 수 있을 거에요!
          </Typography>
          <Typography label="title2">한번 더 시도해보아요!</Typography>
        </>
      ),
      onClose: () => {
        popup.closePopup(MATH_POPUPS.wrong);
      },
      onConfirm: () => {
        popup.closePopup(MATH_POPUPS.wrong);
      },
    });
  };

  return (
    <>
      <div className="w-[30%]">
        <Button onClick={handleOpenMathWrongPopup}>오답 팝업 열기</Button>
      </div>
      <MathPopupFactory />
    </>
  );
};
export const Primary: StoryObj<typeof Template> = {
  render: () => <Template />,
};
