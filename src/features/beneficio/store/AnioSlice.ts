import { StateCreator } from "zustand";

export interface AnioStoreState {
  anio: string;
  setAnio: (value: string) => void;
}

export const useAnioSlice: StateCreator<AnioStoreState> = (set) => ({
  anio: "",
  setAnio: (value) => set(() => ({ anio: value })),
});
