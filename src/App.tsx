import { HomeLayout, Error, Landing } from "./components/index";
import { Portfolio, Blog, Contact } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createContext } from "react";
import { ContextBgValue } from "./types";
import { useInView } from "react-intersection-observer";

export const AppContext = createContext<ContextBgValue>({
  heroRef: () => {},
  sectionTwoRef: () => {},
  sectionFourRef: () => {},
  isHeroInView: true,
  isSectionTwoInView: false,
  isSectionFourInView: false,
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
      { path: "/kontakt", element: <Contact /> },
    ],
  },
]);

function App() {
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
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App;