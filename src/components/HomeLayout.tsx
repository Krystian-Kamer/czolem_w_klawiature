import { Hero, Navigation } from "./index";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextValue } from "../types";
import { AppContext } from "../App";

const HomeLayout = () => {
  const { windowHeight } = useContext<ContextValue>(AppContext);

  return (
    <div
      className={`home ${
        windowHeight < 1174
          ? ""
          : "md:no-scrollbar md:snap-y md:snap-mandatory md:overflow-y-scroll"
      }`}
    >
      <Navigation />
      <div className="snap-start">
        <Hero />
      </div>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
