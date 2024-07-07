import type { Meta, StoryObj } from '@storybook/react';

import MathTitle from '@/components/MathTitle/index';

const meta: Meta<typeof MathTitle> = {
  title: 'Math/MathTitle',
  component: MathTitle,
  argTypes: {
    type: {
      control: { type: 'radio', options: ['primary', 'secondary'] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    title: '문제 보기',
    className: 'w-64',
  },
};
