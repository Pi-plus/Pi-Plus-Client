import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select', options: ['default', 'secondary'] },
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

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: '버튼',
  },
};

export const Default: Story = {
  args: {
    type: 'default',
    children: '버튼',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: '버튼',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '버튼',
  },
};

export const LoadingSecondary: Story = {
  args: {
    type: 'secondary',
    loading: true,
    children: '버튼',
  },
};

export const DisabledSecondary: Story = {
  args: {
    type: 'secondary',
    disabled: true,
    children: '버튼',
  },
};
