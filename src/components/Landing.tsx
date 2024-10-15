import { About, Section, ForRecruiter, Hobbies, Purpose } from "./index";
import { SectionType } from "../types";

const Landing = () => {
  const sections: SectionType[] = [
    {
      id: "landing-1",
      children: <About />,
      cursorStyle: "cursor-dark",
      bgColor: "bg-neutral",
      height: "h-screen",
    },
    {
      id: "landing-2",
      children: <Purpose />,
      cursorStyle: "cursor-light",
      bgColor: "bg-primary",
      height: "h-screen",
    },
    {
      id: "landing-3",
      children: <Hobbies />,
      cursorStyle: "cursor-dark",
      bgColor: "bg-neutral",
      height: "h-screen",
    },
    {
      id: "landing-4",
      children: <ForRecruiter />,
      cursorStyle: "cursor-light",
      bgColor: "bg-primary",
      height: "h-[84vh]",
    },
  ];

  return (
    <>
      {sections.map((section) => {
        const { id, children, cursorStyle, bgColor, height } = section;
        return (
          <Section
            key={id}
            cursorStyle={cursorStyle}
            bgColor={bgColor}
            height={height}
            id={id}
          >
            {children}
          </Section>
        );
      })}
    </>
  );
};
export default Landing;
