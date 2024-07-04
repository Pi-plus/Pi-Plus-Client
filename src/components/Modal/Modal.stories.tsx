import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Modal from '@/components/Modal/index';
import Typography from '@/components/Typography';
import { useModal } from '@/hooks';

const meta: Meta<typeof Modal> = {
  title: 'Modal/Modal',
  component: Modal,
  argTypes: {
    isShow: {
      control: false,
    },
  },
};
export default meta;

const Template = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <div className="w-[30%]">
        <Button onClick={onOpen}>Click</Button>
      </div>
      <Modal isShow={isOpen} onClose={onClose} className="flex flex-col justify-between p-7">
        <Typography>ModalContent</Typography>
        <Button onClick={onClose}>Close</Button>
      </Modal>
    </>
  );
};
export const Primary: StoryObj<typeof Template> = {
  render: () => <Template />,
};
