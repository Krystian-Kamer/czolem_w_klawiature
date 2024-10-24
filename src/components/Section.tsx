import { SectionType } from "../types";
import { Waves, PageDownBtn } from "./index";

const Section = ({ bgColor, height, children, isLastChild }: SectionType) => {
  return (
    <section
      className={`${height} relative w-full snap-start overflow-hidden ${bgColor}`}
    >
      <div className="lg:margin-small mx-auto mt-8 max-w-7xl min-[400px]:mt-12 sm:mt-16 md:mt-20">
        {children}
      </div>
      <Waves bgColor={bgColor} lastChild={isLastChild!} />
      {!isLastChild && <PageDownBtn bgColor={bgColor} />}
    </section>
  );
};
export default Section;
