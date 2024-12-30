import { SectionType } from "../types";
import { Waves, PageDownBtn } from "./index";
import {Footer} from "./index";
const Section = ({ bgColor, height, children, isLastChild }: SectionType) => {
  return (
    <section
      className={`${height} relative w-full overflow-hidden md:snap-start ${bgColor}`}
    >
      <div className="mx-auto px-5 mt-10 mb-20 md:mb-0 max-w-7xl">{children}</div>
      <Waves bgColor={bgColor} lastChild={isLastChild!} />
      {!isLastChild && <PageDownBtn bgColor={bgColor} />}
      {isLastChild && <Footer />}
    </section>
  );
};
export default Section;
