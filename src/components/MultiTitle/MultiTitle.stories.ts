import type { Meta, StoryObj } from '@storybook/react';

import MultiTitle from '@/components/MultiTitle/index';

const meta: Meta<typeof MultiTitle> = {
  title: 'Typography/MutiTitle',
  component: MultiTitle,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '계정 로그인을 해주세요',
    subTitle: '아이디 및 비밀번호를 입력해주세요',
  },
};
