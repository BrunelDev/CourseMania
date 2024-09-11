import { create } from "zustand";
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
  receiverData: {
    receiverImage: "",
    receiverName: "",
    receiverImage: "",
    receiverInfo: "",
  },
  changeReceiver: (val) =>
    set(() => ({
      receiverData: val,
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
