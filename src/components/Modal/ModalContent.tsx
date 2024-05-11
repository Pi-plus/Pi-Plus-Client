import type { HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

const ModalContent = ({ children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      {...rest}
      className={classNames(
        'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 size-72 bg-white rounded-md flex justify-center',
        className,
      )}
    >
      {children}
    </section>
  );
};
export default ModalContent;
