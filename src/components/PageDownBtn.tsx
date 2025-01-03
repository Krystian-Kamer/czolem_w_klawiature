import { RiArrowDownLine } from "react-icons/ri";
import { ContextValue } from "../types";
import { useContext } from "react";
import { AppContext } from "../App";

const PageDownBtn = ({ bgColor }: { bgColor: string }) => {
  const { windowHeight } = useContext<ContextValue>(AppContext);

  const scrollDown = () => {
    const scrollableDiv = document.querySelector(".home");
    scrollableDiv?.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`cursor-custom-pointer ${windowHeight <1174 ? 'opacity-0' : 'opacity-100'} btn-circle glass absolute hidden drop-shadow-[5px_10px_5px_rgba(0,0,0,0.2)] md:flex hover:lg:animate-bounceSlow ${bgColor === "bg-neutral" ? "bg-primary hover:bg-secondary" : "bg-neutral hover:bg-base-200"} bottom-6 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center sm:bottom-20 sm:left-1/2 sm:-translate-x-1/2 md:bottom-20 md:h-20 md:w-20 lg:bottom-40 lg:left-[50%] lg:h-28 lg:w-28 lg:-translate-x-1/2`}
      onClick={scrollDown}
    >
      <RiArrowDownLine
        className={`pointer-events-none ${bgColor === "bg-neutral" ? "text-neutral" : "text-primary"} text-3xl md:text-4xl`}
      />
    </button>
  );
};
export default PageDownBtn;
