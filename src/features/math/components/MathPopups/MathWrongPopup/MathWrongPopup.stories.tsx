import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Typography from '@/components/Typography';
import MathWrongPopup from '@/features/math/components/MathPopups/MathWrongPopup/index';
import { useModal } from '@/hooks';

const meta: Meta<typeof MathWrongPopup> = {
  title: 'Popup/MathWrongPopup',
  component: MathWrongPopup,
};
export default meta;

const Template = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <div className="w-[30%]">
        <Button onClick={onOpen}>오답 팝업 열기</Button>
      </div>
      <MathWrongPopup
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onClose}
        title="오답이에요ㅠㅠ"
        content={
          <>
            <Typography label="title2" className="mt-4">
              다시 풀어보면 맞을 수 있을 거에요!
            </Typography>
            <Typography label="title2">한번 더 시도해보아요!</Typography>
          </>
        }
      />
    </>
  );
};
export const Primary: StoryObj<typeof Template> = {
  render: () => <Template />,
};
