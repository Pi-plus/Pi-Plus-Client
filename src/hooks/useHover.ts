import { useEffect, useRef } from 'react';

export const useHover = (onHover: () => void, onUnhover: () => void) => {
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseEnter = () => {
      onHover();
    };

    const onMouseLeave = () => {
      onUnhover();
    };

    const { current } = element;

    if (current) {
      current.addEventListener('mouseenter', onMouseEnter);
      current.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      if (current) {
        current.removeEventListener('mouseenter', onMouseEnter);
        current.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [onHover, onUnhover]);

  return element;
};
