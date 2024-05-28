export type InputType = 'default' | 'secondary';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  color?: InputType;
}
