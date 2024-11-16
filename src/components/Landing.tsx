import { About, Section, ForRecruiter, EmploymentHistory, Skills } from "./index";
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
      children: <Skills />,
      bgColor: "bg-primary",
      height: "h-screen",
    },
    {
      id: "landing-3",
      children: <EmploymentHistory />,
      bgColor: "bg-neutral",
      height: "h-screen",
    },
    {
      id: "landing-4",
      children: <ForRecruiter />,
      bgColor: "bg-primary",
      height: "h-[100vh]",
    },
  ];

  return (
    <>
      {sections.map((section) => {
        const { id, children, bgColor, height, isLastChild } = section;
        return (
          <Section
            key={id}
            bgColor={bgColor}
            height={height}
            id={id}
            isLastChild={isLastChild}
          >
            {children}
          </Section>
        );
      })}
    </>
  );
};
export default Landing;
