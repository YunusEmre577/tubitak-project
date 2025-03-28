import { RefObject } from "react";
import { create } from "zustand";

interface HeaderState {
    sharedRef: RefObject<HTMLAnchorElement>|null;
    setSharedRef: (ref: RefObject<HTMLAnchorElement>) => void;
}
export const useHeader = create<HeaderState>((set) => ({
    sharedRef:null,
    setSharedRef: (ref) => set({sharedRef:ref})
}))