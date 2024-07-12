import { create } from 'zustand';

import type { TFocusTab } from '@/components/Header/type';

interface ITabStoreState {
  tab: TFocusTab;
}
interface ITabStoreActions {
  setTab: (state: TFocusTab) => void;
}

export const useTabStore = create<ITabStoreState & ITabStoreActions>((set) => ({
  tab: '',
  setTab: (state: TFocusTab) => set({ tab: state }),
}));
