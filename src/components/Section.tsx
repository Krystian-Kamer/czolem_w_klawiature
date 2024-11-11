import { SectionType } from "../types";
import { Waves, PageDownBtn } from "./index";

const Section = ({ bgColor, height, children, isLastChild }: SectionType) => {
  return (
    <section
      className={`${height} relative w-full snap-start overflow-hidden ${bgColor}`}
    >
      <div className="mx-auto mt-8 max-w-7xl ph:mt-16 md:mt-0">
        {children}
      </div>
      <Waves bgColor={bgColor} lastChild={isLastChild!} />
      {!isLastChild && <PageDownBtn bgColor={bgColor} />}
    </section>
  );
};
export default Section;
