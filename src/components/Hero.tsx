import { useContext } from "react";
import heroImg from "../assets/hero-img.png";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";

const Hero = () => {
  const { heroRef } = useContext<ContextBgValue>(AppContext);

  return (
    <div className="bg-primary">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center sm:flex-row min-[850px]:justify-between">
        <div className="absolute left-0 bottom-10 min-[400px]:bottom-12 z-20 max-w-7xl p-2 text-sm font-semibold italic tracking-wider text-base-100 min-[500px]:text-lg sm:bottom-0 sm:left-auto sm:right-0 sm:top-auto">
          #czolem_w_klawiature
        </div>
        <img
          src={heroImg}
          alt="Hero image"
          className="z-10 sm:w-3/4 sm:-translate-x-16 md:w-3/4 min-[850px]:w-1/2 min-[850px]:translate-x-0"
        />

        <div className="flex w-full items-center justify-center bg-accent sm:absolute sm:right-4 sm:top-16 sm:w-1/2 sm:rounded-md sm:py-2 md:top-28 md:w-2/5 md:py-4 min-[850px]:relative min-[850px]:right-0 min-[850px]:top-0 min-[850px]:mx-16 min-[850px]:w-1/2 lg:mx-20 xl:mx-20 xl:px-10 select-none">
          <div className="prose">
            <h1
              className="sm:text-md my-1 font-protest text-2xl uppercase min-[400px]:py-1 min-[400px]:text-3xl xl:text-4xl"
              ref={heroRef}
            >
              o <span className="sm:text-4xl xl:text-5xl">IT</span> z humorem.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
