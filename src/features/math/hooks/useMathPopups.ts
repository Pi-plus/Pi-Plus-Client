import type { FunctionComponent } from 'react';
import { useCallback } from 'react';

import { usePopupsStore } from '@/features/math/store';
import type { TMathPopupProps, TPopupsComponent } from '@/features/math/types';

export const useMathPopups = () => {
  const { popups, setPopups } = usePopupsStore();
  const openPopup = useCallback(
    (Component: FunctionComponent<TPopupsComponent>, props: TMathPopupProps) => {
      setPopups([...popups, { Component, props: { ...props, isOpen: true } }]);
    },
    [setPopups, popups],
  );

  const closePopup = useCallback(
    (Component: FunctionComponent<TPopupsComponent>) => {
      setPopups(popups.filter((popup) => popup.Component !== Component));
    },
    [setPopups, popups],
  );

  return { popups, openPopup, closePopup };
};
