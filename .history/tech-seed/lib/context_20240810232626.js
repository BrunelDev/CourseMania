import { create } from "zustand";

export const useNavigationLink = create((set) => ({
  isHomeSelected: true,
  isAboutUsSelected: false,
  isCourseSelected: false,
  isContactSelected: false,
  selectLink: (link) =>
    set({
      isHomeSelected: link === "home",
      isAboutUsSelected: link === "about-us",
      isCourseSelected: link === "courses",
      isContactSelected: link === "contact",
    }),
}));
