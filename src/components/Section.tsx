import { SectionType } from "../types";
import { Waves } from "./index";
const Section = ({ bgColor, height, children, lastChild }: SectionType) => {
  return (
    <section
      className={`${height} relative w-full snap-start overflow-hidden ${bgColor}`}
    >
      <div className="mx-auto max-w-7xl pt-32">{children}</div>
      <Waves bgColor={bgColor} lastChild={lastChild!} />
    </section>
  );
};
export default Section;
