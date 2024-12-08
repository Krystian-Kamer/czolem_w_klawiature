import { Hero, Navigation } from "./index";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className={`no-scrollbar h-screen  snap-y snap-mandatory overflow-y-scroll`}>
      <div className="snap-start">
        <Navigation />
        <Hero />
      </div>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
