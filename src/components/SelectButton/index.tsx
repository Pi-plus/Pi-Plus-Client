import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

export interface ISelectButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  isSelected: boolean;
}

const SelectButton = ({ isSelected, label, ...rest }: ISelectButtonProps) => {
  return (
    <button
      {...rest}
      className={classNames('rounded-[30px] py-4 w-[160px]', {
        'bg-blue-30': isSelected,
        'bg-gray-10': !isSelected,
      })}
    >
      <Typography color={isSelected ? 'white' : 'gray40'} label="body1">
        {label}
      </Typography>
    </button>
  );
};
export default SelectButton;
