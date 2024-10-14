import { Hero, Navigation, Footer } from "./index";
import { Outlet } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { createContext } from "react";
import { ContextBgValue } from "../types";


export const AppContext = createContext<ContextBgValue>({
  heroRef: () => {},
  sectionTwoRef: () => {},
  sectionFourRef: () => {},
  isHeroInView: true,
  isSectionTwoInView: false,
  isSectionFourInView: false,
});

const HomeLayout = () => {
  const { ref: heroRef, inView: isHeroInView } = useInView();
  const { ref: sectionTwoRef, inView: isSectionTwoInView } = useInView();
  const { ref: sectionFourRef, inView: isSectionFourInView } = useInView();

  return (
    <AppContext.Provider
      value={{
        heroRef,
        sectionTwoRef,
        sectionFourRef,
        isHeroInView,
        isSectionTwoInView,
        isSectionFourInView,
      }}
    >
      <div className="no-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll">
        <div className="snap-start">
          <Navigation />
          <Hero />
        </div>
        <Outlet />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};
export default HomeLayout;
