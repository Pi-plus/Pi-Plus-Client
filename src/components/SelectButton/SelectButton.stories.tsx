import { useState } from 'react';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SelectButton from '@/components/SelectButton/index';

const meta: Meta<typeof SelectButton> = {
  title: 'Button/SelectButton',
  component: SelectButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isSelected: {
      control: false,
    },
  },
};
export default meta;

const Template = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const handleSelectButton = () => {
    setIsSelected((prevState: boolean) => !prevState);
  };

  return <SelectButton onClick={handleSelectButton} label="클릭" isSelected={isSelected} />;
};

export const Primary: StoryObj<typeof Template> = {
  render: () => <Template />,
  args: {
    isSelected: false,
  },
};
