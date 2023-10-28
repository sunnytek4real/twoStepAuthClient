import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

const mainSignState = atomWithStorage("mainSignState", "" || null);
const mainSignStateData = atomWithStorage("mainSignStateData", "" || null);

export const useMainSignState = () => {
  return useAtom(mainSignState);
};

export const useMainSignStateData = () => {
  return useAtom(mainSignStateData);
};
