import type { InputType } from './type';

export const COMMON_STYLE = 'py-5 w-full rounded-2xl px-6';

export const INPUT_STYLE: Record<InputType, string> = {
  default: 'bg-gray-20 text-gray-50',
  secondary: 'bg-gray-10 text-gray-40',
};
