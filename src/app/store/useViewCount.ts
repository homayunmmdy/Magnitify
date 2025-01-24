// stores/useViewCount.ts
import { create } from "zustand";

interface ViewCountState {
  viewCount: number;
  incrementPageView: () => void;
  getPageViewCount: () => number;
}

const useViewCount = create<ViewCountState>((set, get) => ({
  viewCount:
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("viewCount") || "0", 10)
      : 0,

  incrementPageView: () => {
    const newCount = get().viewCount + 1;
    set({ viewCount: newCount });
    if (typeof window !== "undefined") {
      localStorage.setItem("viewCount", newCount.toString());
    }
  },

  getPageViewCount: () => get().viewCount,
}));

export default useViewCount;
