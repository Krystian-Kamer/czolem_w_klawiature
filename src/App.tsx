import { HomeLayout, Error, Landing } from "./components/index";
import { Portfolio, Blog, Contact } from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  return <RouterProvider router={router} />;
}

export default App;
