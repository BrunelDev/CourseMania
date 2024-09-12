import { create } from "zustand";
import { isLoggedIn } from "@/lib/functions";
export const useNavigationLink = create((set) => ({
  isHomeSelected: true,
  isAboutUsSelected: false,
  isCourseSelected: false,
  isContactSelected: false,
  isFaqsSelected: false,
  selectLink: (link) =>
    set({
      isHomeSelected: link === "home",
      isAboutUsSelected: link === "about-us",
      isCourseSelected: link === "courses",
      isContactSelected: link === "contact",
      isFaqsSelected: link === "faqs",
    }),
}));

export const useNavigation = create((set) => ({
  isDescriptionSelected: true,
  isCoursesSelected: false,
  isReviewSelected: false,
  navigate: (link) =>
    set({
      isDescriptionSelected: link === "description",
      isCoursesSelected: link === "courses",
      isReviewSelected: link === "review",
    }),
}));

export const useLogin = create((set) => ({
  isLogged: false,
  logOut: () => set({ isLogged: false }),
  logIn: () => set({ isLogged: true }),
}));

export const useYourStore = create((set) => ({
  receiverImage: "",
  receiverName: "",
  receiverImage: "",
  receiverInfo: "Offline",
  changeReceiver: (receiverImage, receiverName, receiverImage, receiverInfo) =>
    set(() => ({
      receiverImage: "",
      receiverName: "",
      receiverId: "",
      receiverInfo: "",
    })),
}));
