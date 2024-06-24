export interface IMathPopupProps {
  isOpen: boolean;
  onClose: VoidFunction;
  onConfirm?: VoidFunction;
  title?: string;
  content?: React.ReactNode;
}
export type IMathPopupPropsWithConfirm = Omit<IMathPopupProps, 'onConfirm'> & {
  onConfirm: VoidFunction;
};
