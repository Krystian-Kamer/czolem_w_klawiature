import { HomeLayout, Error } from "./components/index";
import { Landing } from "./components/home/index";
import { PostWrapper } from "./components/blog/index";
import { Portfolio, Blog, Contact } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { ContextValue } from "./types";
import { useInView } from "react-intersection-observer";

export const AppContext = createContext<ContextValue>({
  heroRef: () => {},
  sectionTwoRef: () => {},
  sectionFourRef: () => {},
  isHeroInView: true,
  isSectionTwoInView: false,
  isSectionFourInView: false,
  isBgDark: true,
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  sectionHeight: () => "h-auto",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/blog/:id",
        element: <PostWrapper />,
      },
      { path: "/kontakt", element: <Contact /> },
    ],
  },
]);

function App() {
  const { ref: heroRef, inView: isHeroInView } = useInView();
  const { ref: sectionTwoRef, inView: isSectionTwoInView } = useInView();
  const { ref: sectionFourRef, inView: isSectionFourInView } = useInView();
  const isBgDark: boolean =
    isHeroInView || isSectionTwoInView || isSectionFourInView;

  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

const sectionHeight = (
  pathname: string,
): string => {
  if (pathname === "/") {
    if (windowHeight <= 360) {
      return "h-[290vh]";
    } else if (windowHeight <= 480) {
      return "h-[150vh]";
    } else if (windowHeight <= 600) {
      return "h-[133vh] vsm:h-[115vh] ph:h-screen md:h-[190vh] lg:h-[230vh]";
    } else if (windowHeight <= 800) {
      return "h-[120vh] vsm:h-[105vh] ph:h-screen md:h-[150vh] lg:h-[180vh]";
    } else {
      return "h-[120vh] vsm:h-[105vh] ph:h-screen";
    }
  } else if (pathname === "/contact" || pathname === "/error") {
    if (windowWidth > windowHeight && windowHeight <= 360) {
      return "h-[200vh]";
    } else if (windowWidth > windowHeight && windowHeight <= 800) {
      return "h-[180vh]";
    } else {
      return "h-fit vmd:h-screen";
    }
  } else if (pathname === "/portfolio") {
    if (windowWidth > windowHeight && windowHeight <= 360) {
      return "h-[280vh]";
    } else if (windowWidth > windowHeight && windowHeight <= 800) {
      return "h-[180vh]";
    } else {
      return "h-fit vmd:h-screen";
    }
  }

  return "h-screen";
};
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        heroRef,
        sectionTwoRef,
        sectionFourRef,
        isHeroInView,
        isSectionTwoInView,
        isSectionFourInView,
        isBgDark,
        windowHeight,
        windowWidth,
        sectionHeight,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
