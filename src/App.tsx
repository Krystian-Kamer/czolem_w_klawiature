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
  windowHeight: window.innerHeight,
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
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const sectionOptions =
    windowHeight < 1174
      ? { rootMargin: "0px 0px -90% 0px", threshold: 0 }
      : {};
  const { ref: heroRef, inView: isHeroInView } = useInView();
  const { ref: sectionTwoRef, inView: isSectionTwoInView } =
    useInView(sectionOptions);
  const { ref: sectionFourRef, inView: isSectionFourInView } =
    useInView(sectionOptions);
  const isBgDark: boolean =
    isHeroInView || isSectionTwoInView || isSectionFourInView;

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
