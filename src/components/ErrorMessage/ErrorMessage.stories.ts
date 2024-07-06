import type { Meta, StoryObj } from '@storybook/react';

import ErrorMessage from '@/components/ErrorMessage/index';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Typography/ErrorMessage',
  component: ErrorMessage,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: '에러 메시지',
  },
};
