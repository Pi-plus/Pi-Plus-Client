import type { RefObject } from 'react';
import { useEffect } from 'react';

interface UseIntersectionObserverProps {
  root?: null | unknown;
  target: RefObject<HTMLDivElement>;
  onIntersect: () => void;
  threshold?: number;
  enabled?: boolean;
}

export const useIntersectionObserver = ({
  target,
  onIntersect = () => {},
  threshold = 1.0,
  enabled = true,
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        threshold,
      },
    );
    const element = target && target.current;
    if (!element) {
      return;
    }
    observer.observe(element);
    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(element);
    };
  }, [enabled, threshold, target, onIntersect]);
};
