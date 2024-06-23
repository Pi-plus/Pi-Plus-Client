import { create, StateCreator } from 'zustand';

interface PopupState {
  popups: string[];
}

interface PopupActions {
  openPopup: (popup: string) => void;
  closePopup: (index: number) => void;
}

type PopupStore = PopupState & PopupActions;

export const usePopupsStore: StateCreator<PopupStore> = (set) => ({
  popups: [],
  openPopup: (popup) =>
    set((state) => ({
      popups: [...state.popups, popup],
    })),
  closePopup: (index) =>
    set((state) => ({
      popups: state.popups.filter((_, i) => i !== index),
    })),
});
