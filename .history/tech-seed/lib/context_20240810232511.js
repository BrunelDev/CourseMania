import { create } from "zustand";

export const useNavigationLink = create((set) => ({
  isHomeSelected: true,
  isAboutUsSelected: false,
  isCourseSelected: false,
  isContactSelected: false,
  selectLink: (link) =>
    set({
      isHomeSelected: link === "home",
      isAboutUsSelected: link === "aboutUs",
      isCourseSelected: link === "course",
      isContactSelected: link === "contact",
    }),
}));
