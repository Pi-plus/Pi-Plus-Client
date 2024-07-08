import type { Meta, StoryObj } from '@storybook/react';

import MathSectionTitle from '@/features/math/components/MathSectionTitle/index';

const meta: Meta<typeof MathSectionTitle> = {
  title: 'Math/MathSectionTitle',
  component: MathSectionTitle,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '문제를 풀고 생각하는 답안지를 작성해주세요',
    subTitle: '객관식/주관식 형식에 맞게 입력해주세요',
  },
};
