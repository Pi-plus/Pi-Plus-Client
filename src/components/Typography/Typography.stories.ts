import type { Meta, StoryObj } from '@storybook/react';

import Typography from '@/components/Typography/index';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'text',
    label: 'body1',
    color: 'black',
    as: 'span',
  },
};
