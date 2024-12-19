import { Hero, Navigation } from "./index";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className='no-scrollbar snap-y snap-mandatory overflow-y-scroll'>
        <Navigation />
      <div className="snap-start">
        <Hero />
      </div>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
