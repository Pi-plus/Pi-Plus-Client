import type { ButtonType } from './type';

interface IButtonContent {
  container: string;
  textColor: 'white' | 'gray40';
}
export const BUTTON_STYLE: Record<ButtonType, IButtonContent> = {
  secondary: { container: 'bg-blue-30', textColor: 'white' },
  default: { container: 'bg-gray-10', textColor: 'gray40' },
};
