import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const getMatches = (query: string): boolean => {
    // SSR 이슈 방지
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    handleChange();

    window.addEventListener('resize', handleChange);

    return () => window.removeEventListener('resize', handleChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};
