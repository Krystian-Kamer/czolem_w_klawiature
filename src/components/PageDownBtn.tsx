import { RiArrowDownLine } from "react-icons/ri";

const PageDownBtn = ({ bgColor }: { bgColor: string }) => {
  const scrollDown = () => {
    const scrollableDiv = document.querySelector(".no-scrollbar");
    scrollableDiv?.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`cursor-custom-pointer btn-circle glass absolute drop-shadow-[5px_10px_5px_rgba(0,0,0,0.2)] hover:lg:animate-bounce-slow ${bgColor === "bg-neutral" ? "bg-primary hover:bg-secondary" : "bg-neutral hover:bg-base-200"} bottom-6 ph:bottom-10 left-1/2 -translate-x-1/2 flex h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-28 items-center justify-center sm:bottom-20 sm:left-1/2 sm:-translate-x-1/2 lg:left-[50%] lg:-translate-x-1/2 md:bottom-20 lg:bottom-40`}
      onClick={scrollDown}
    >
      <RiArrowDownLine
        className={`pointer-events-none ${bgColor === "bg-neutral" ? "text-neutral" : "text-primary"} text-3xl md:text-4xl`}
      />
    </button>
  );
};
export default PageDownBtn;
