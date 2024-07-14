import { create } from 'zustand';

interface ITabStoreState {
  tab: string;
}
interface ITabStoreActions {
  setTab: (state: string) => void;
  setInitialTab: () => void;
}

export const useTabStore = create<ITabStoreState & ITabStoreActions>((set) => ({
  tab: '',
  setTab: (state: string) => set({ tab: state }),
  setInitialTab: () => set({ tab: '' }),
}));
