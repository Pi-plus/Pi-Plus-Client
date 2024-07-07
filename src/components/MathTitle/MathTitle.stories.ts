import type { Meta, StoryObj } from '@storybook/react';

import MathTitle from '@/components/MathTitle/index';

const meta: Meta<typeof MathTitle> = {
  title: 'Math/MathTitle',
  component: MathTitle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'radio', options: ['primary', 'secondary'] },
    },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    title: '문제 보기',
  },
};
