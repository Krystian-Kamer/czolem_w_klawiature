import { SectionType } from "../types";
import { Waves, PageDownBtn } from "./index";
import { Footer } from "./index";

const Section = ({ bgColor, height, children, isLastChild }: SectionType) => {
  return (
    <section
      className={`${height} relative w-full overflow-hidden md:snap-start ${bgColor}`}
    >
      <div className="mx-auto mb-20 max-w-7xl px-5 mt-10 md:mb-0 lg:mt-20">
        {children}
      </div>
      <Waves bgColor={bgColor} lastChild={isLastChild!} />
      {!isLastChild && <PageDownBtn bgColor={bgColor} />}
      {isLastChild && <Footer />}
    </section>
  );
};
export default Section;
