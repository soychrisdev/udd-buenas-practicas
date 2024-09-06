import { createJSONStorage, StateStorage } from "zustand/middleware";

export const storageApi: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    const data = sessionStorage.getItem(name);
    console.log(`getItem called with name: ${name}`);
    return data;
  },

  setItem: function (name: string, value: string): unknown | Promise<unknown> {
    sessionStorage.setItem(name, value);
    console.log(`setItem called with name: ${name}, value: ${value}`);
    return null;
  },
  removeItem: function (name: string): unknown | Promise<unknown> {
    sessionStorage.removeItem(name);
    console.log(`removeItem called with name: ${name}`);
    return null;
  },
};

export const customSessionStorage = createJSONStorage(() => storageApi);
