import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MATH_RESPONSE } from '@/constants/enums';
import type { IMathForm } from '@/features/math/components/MathForm/index';
import MathForm from '@/features/math/components/MathForm/index';
import { MathFormProvider } from '@/features/math/contexts';

const meta: Meta<typeof MathForm> = {
  title: 'Math/MathForm',
  component: MathForm,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

const Template = (args: IMathForm) => {
  return (
    <MathFormProvider>
      <MathForm {...args} />
    </MathFormProvider>
  );
};
export const Subjective: StoryObj<typeof Template> = {
  render: () => (
    <Template title="답안 입력" answerCount={2} answerType={MATH_RESPONSE.subjectiveResponse} isNumber={false} />
  ),
};

export const NumberMultiple: StoryObj<typeof Template> = {
  render: () => (
    <Template title="답안 입력" answerCount={2} answerType={MATH_RESPONSE.multipleChoiceResponse} isNumber={true} />
  ),
};

export const StringMultiple: StoryObj<typeof Template> = {
  render: () => (
    <Template title="답안 입력" answerCount={2} answerType={MATH_RESPONSE.multipleChoiceResponse} isNumber={false} />
  ),
};

export const Fraction: StoryObj<typeof Template> = {
  render: () => (
    <Template title="답안 입력" answerCount={2} answerType={MATH_RESPONSE.fractionResponse} isNumber={true} />
  ),
};
