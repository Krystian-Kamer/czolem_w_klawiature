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
      className={`cursor-custom-pointer btn-circle glass absolute drop-shadow-[5px_10px_5px_rgba(0,0,0,0.2)] hover:lg:animate-bounce-slow ${bgColor === "bg-neutral" ? "bg-primary hover:bg-secondary" : "bg-neutral hover:bg-base-200"} bottom-16 right-12 flex h-20 w-20 lg:h-28 lg:w-28 items-center justify-center sm:bottom-20 sm:left-1/2 sm:-translate-x-1/2 lg:left-[47%] lg:translate-x-0 lg:page-down-small md:bottom-32`}
      onClick={scrollDown}
    >
      <RiArrowDownLine
        className={`pointer-events-none ${bgColor === "bg-neutral" ? "text-neutral" : "text-primary"} text-4xl`}
      />
    </button>
  );
};
export default PageDownBtn;
