import { Hero, Navigation, Footer } from "./index";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {

  return (
      <div className="no-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll">
        <div className="snap-start">
          <Navigation />
          <Hero />
        </div>
        <Outlet />
        <Footer />
      </div>
  );
};
export default HomeLayout;
