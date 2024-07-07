import type { Meta, StoryObj } from '@storybook/react';

import DifficultyLabel from '@/components/DifficultyLabel/index';

const meta: Meta<typeof DifficultyLabel> = {
  title: 'Typography/DifficultyLabel',
  component: DifficultyLabel,
  argTypes: {
    difficulty: {
      control: { type: 'radio', options: ['LOW', 'MEDIUM', 'HIGH'] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    difficulty: 'LOW',
  },
};
