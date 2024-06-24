import { create } from 'zustand';

import type { IPopupProps } from '@/features/math/types';

interface IPopupsStoreState {
  popups: IPopupProps[];
}

interface IPopupsStoreActions {
  setPopups: (state: IPopupProps[]) => void;
}

export const usePopupsStore = create<IPopupsStoreState & IPopupsStoreActions>((set) => ({
  popups: [],
  setPopups: (state: IPopupProps[]) => set({ popups: [...state] }),
}));
