import type { HTMLAttributes } from 'react';

export type ButtonType = 'default' | 'secondary';
export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}
