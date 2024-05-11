import type { PropsWithChildren } from 'react';

const ModalContent = ({ children }: PropsWithChildren) => {
  return (
    <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 size-72 bg-white rounded-md flex justify-center">
      {children}
    </section>
  );
};
export default ModalContent;
