import { create } from "zustand";

const useAuthenticationStore = create((set) => ({
  authenticated: false,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useAuthenticationStore;
