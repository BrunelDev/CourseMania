import { create } from "zustand";

export const useNavigationLink = create((set) => ({
  isHomeSelected: true,
  isAboutUsSelected: false,
  isCourseSelected: false,
  isContactSelected: false,
  turnDown: (setOn) =>
    set((state) => ({
      isHomeSelected: false,
      isAboutUsSelected: false,
      isCourseSelected: false,
      isContactSelected: false,
      setOn: true,
    })),
}));
