import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'radio', options: ['secondary', 'default'] },
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    loading: false,
    disabled: false,
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'secondary',
    children: '버튼',
  },
};

export const Loading: Story = {
  args: {
    type: 'secondary',
    loading: true,
    children: '버튼',
  },
};

export const Disabled: Story = {
  args: {
    type: 'secondary',
    disabled: true,
    children: '버튼',
  },
};
