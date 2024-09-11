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

export const useReceiver = create((set) => ({
  receiverImage: "",
  receiverName: "",
  receiverImage: "",
  receiverInfo: "Offline",
  changeReceiver: (val) =>
    set(() => ({
      receiverImage: val.receiverImage,
      receiverName: val.receiverName,
      receiverId: val.receiverId,
      receiverInfo: val.receiverInfo,
    })),
}));

//title, description, quantity, total
export const useCart = create((set) => ({
  cartItems: [
    {
      id: {
        title: "titre",
        description: "description",
        quantity: "quantity",
        total: "total",
      },
      id: {
        title: "titre",
        description: "description",
        quantity: "quantity",
        total: "total",
      },
      id: {
        title: "titre",
        description: "description",
        quantity: "quantity",
        total: "total",
      },
      id: {
        title: "titre",
        description: "description",
        quantity: "quantity",
        total: "total",
      },
    },
  ],
  yourAction: (id) => set((state) => ({ yourState: state.yourState })),
}));
