import { useContext } from "react";
import heroImg from "../assets/hero-img.png";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const { heroRef, isHeroInView } = useContext<ContextBgValue>(AppContext);
  const { pathname } = useLocation();
  return (
    <div className="border-b-[1px] bg-primary">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center sm:flex-row md:justify-between">
        <div
          ref={heroRef}
          className="absolute bottom-10 left-0 z-20 mb-1 max-w-7xl p-2 text-sm font-semibold italic tracking-wider text-base-100 sm:bottom-0 sm:left-auto sm:right-0 sm:top-auto"
        >
          #czolem_w_klawiature
        </div>
        <img
          src={heroImg}
          alt="Hero image"
          className={`z-10 sm:w-3/4 md:w-3/4 lg:w-1/2 ${pathname === "/" && "sm:-translate-x-16 lg:translate-x-0 opacity-100"} ${
            isHeroInView
              ? "opacity-100 duration-1000 sm:-translate-x-16 lg:translate-x-0"
              : "-translate-x-[200px] opacity-0"
          }`}
        />
        <div
          className={`flex w-full items-center justify-center bg-accent selection:bg-transparent selection:text-primary/90 sm:absolute sm:right-4 sm:top-28 sm:w-[40%] sm:rounded-md sm:py-2 sm:opacity-0 md:top-36 md:w-2/5 md:py-4 lg:mx-20 xl:mx-20 xl:px-10 ${isHeroInView && "sm:animate-moveHumourToTop"}`}
        >
          <div className="prose">
            <h1 className="my-1 font-protest text-2xl uppercase sm:text-3xl lg:text-3xl xl:text-4xl">
              o <span className="sm:text-4xl xl:text-5xl">IT</span> z humorem.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
