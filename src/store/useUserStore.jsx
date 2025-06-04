// This component displays a list of accounts with their names and balances.

import { create } from 'zustand';

const useUserStore = create((set) => ({
  publicToken: null,
  isLinked: false,
  setPublicToken: (token) => set({ publicToken: token, isLinked: true }),
}));

export default useUserStore;