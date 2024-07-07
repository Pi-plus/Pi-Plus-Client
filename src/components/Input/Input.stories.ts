import type { Meta, StoryObj } from '@storybook/react';

import Input from '@/components/Input/index';

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
  argTypes: {
    color: {
      control: { type: 'radio', options: ['default', 'secondary'] },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'secondary',
    placeholder: '입력해주세요',
    className: 'w-56',
  },
};

export const Error: Story = {
  args: {
    errorMessage: '에러 메시지',
    placeholder: '입력해주세요',
    className: 'w-56',
  },
};

export const Title: Story = {
  args: {
    title: '제목',
    placeholder: '입력해주세요',
    className: 'w-56',
  },
};
