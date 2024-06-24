import { useMathPopups } from '@/features/math/hooks/useMathPopups';

const MathPopupFactory = () => {
  const { popups } = useMathPopups();
  return (
    <>
      {popups.map(({ Component, props }, idx) => {
        return <Component key={idx} {...props} />;
      })}
    </>
  );
};
export default MathPopupFactory;
