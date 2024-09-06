import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AnioStoreState, useAnioSlice } from "../features/anio/store/AnioSlice";

type GlobalState = AnioStoreState;

export const useGlobalStore = create<GlobalState>()(
  devtools(
    persist(
      (...a) => ({
        ...useAnioSlice(...a),
      }),
      { name: "store" }
    )
  )
);
