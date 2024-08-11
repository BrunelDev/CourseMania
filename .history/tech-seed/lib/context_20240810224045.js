import { create } from "zustand";

const [, setIsHomeSelected] = useState(false);
const [, setIsAboutUsSelected] = useState(false);
const [, setIsCourseSelected] = useState(false);
const [, setIsContactSelected] = useState(false);
const router = useRouter();
const turnDown = (setOn) => {
  setIsHomeSelected(false);
  setIsAboutUsSelected(false);
  setIsCourseSelected(false);
  setIsContactSelected(false);
  setOn(true);
};

export const useYourStore = create((set) => ({
  isHomeSelected: true,
  isAboutUsSelected: false,
  isCourseSelected: false,
  isContactSelected: false,
  turnDown: (setOn) =>
    set((state) => ({
      isHomeSelected: false,
      isHomeSelected: false,
      isHomeSelected: false,
      isHomeSelected: false,
    })),
}));
