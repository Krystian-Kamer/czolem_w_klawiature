import { useContext } from "react";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";

const SectionTitle = ({ title }: { title: string }) => {
  const { isHeroInView, isBgDark } = useContext<ContextBgValue>(AppContext);

  return (
    <div className="relative w-fit">
      <h1
        className={`text-3xl tracking-wide sm:text-5xl lg:text-6xl ${
          isHeroInView
            ? "text-primary selection:bg-accent selection:text-secondary"
            : isBgDark
              ? "text-neutral selection:bg-primary-content selection:text-secondary"
              : "text-primary selection:bg-accent selection:text-secondary"
        }`}
      >
        {title}
      </h1>
      <div className="absolute -bottom-1 ph:-bottom-2 md:-bottom-5 w-[120%] ">
        {isHeroInView ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1213 73"
            fill="#222831"
          >
            <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
          </svg>
        ) : isBgDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1213 73"
            fill="#FAF7F0"
          >
            <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1213 73"
            fill="#222831"
          >
            <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
          </svg>
        )}
      </div>
    </div>
  );
};
export default SectionTitle;