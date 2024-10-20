import { About, Section, ForRecruiter, Hobbies, Purpose } from "./index";
import { SectionType } from "../types";

const Landing = () => {
  const sections: SectionType[] = [
    {
      id: "landing-1",
      children: <About />,
      bgColor: "bg-neutral",
      height: "h-screen",
    },
    {
      id: "landing-2",
      children: <Purpose />,
      bgColor: "bg-primary",
      height: "h-screen",
    },
    {
      id: "landing-3",
      children: <Hobbies />,
      bgColor: "bg-neutral",
      height: "h-screen",
    },
    {
      id: "landing-4",
      children: <ForRecruiter />,
      bgColor: "bg-primary",
      height: "h-[84vh]",
    },
  ];

  return (
    <>
      {sections.map((section) => {
        const { id, children, bgColor, height } = section;
        return (
          <Section
            key={id}
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
