import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IRoleStoreState {
  role: string;
  setRole: (role: string) => void;
}

export const useRoleStore = create(
  persist<IRoleStoreState>(
    (set) => ({
      role: '',

      setRole: (role: string) => {
        set({ role });
      },
    }),
    {
      name: 'role',
    },
  ),
);
