import { Hero, Navigation } from "./index";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {

  return (
    <div className='home md:no-scrollbar md:snap-y md:snap-mandatory md:overflow-y-scroll'>
        <Navigation />
      <div className="snap-start">
        <Hero />
      </div>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
