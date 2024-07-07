import type { Meta, StoryObj } from '@storybook/react';

import MathProblemContent from '@/features/math/components/MathProblemContent/index';

const meta: Meta<typeof MathProblemContent> = {
  title: 'Math/MathProblemContent',
  component: MathProblemContent,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: '2020235',
    concept: '102',
    difficulty: 'LOW',
  },
};
