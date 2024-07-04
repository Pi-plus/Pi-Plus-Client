import type { Meta, StoryObj } from '@storybook/react';

import Input from '@/components/Input/index';

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: { type: 'select', options: ['default', 'secondary'] },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    color: 'secondary',
    placeholder: 'placeholder',
  },
};

export const Default: Story = {
  args: {
    color: 'default',
    placeholder: 'placeholder',
  },
};

export const Error: Story = {
  args: {
    errorMessage: 'error message',
    placeholder: 'placeholder',
  },
};

export const Title: Story = {
  args: {
    title: 'title',
    placeholder: 'placeholder',
  },
};
