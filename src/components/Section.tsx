import { SectionType } from "../types";

const Section = ({ cursorStyle, bgColor, height, children }: SectionType) => {
  return (
    <section
      className={`${cursorStyle} ${height} w-full snap-start ${bgColor}`}
    >
      <div className="mx-auto max-w-7xl px-20 py-40">{children}</div>
    </section>
  );
};
export default Section;
