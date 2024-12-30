import { HomeLayout, Error } from "./components/index";
import { Landing } from "./components/home/index";
import { PostWrapper } from "./components/blog/index";
import { Portfolio, Blog, Contact } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createContext } from "react";
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
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
