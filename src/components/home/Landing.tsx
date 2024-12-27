import { Section } from "../index";
import { About, ForRecruiter, EmploymentHistory, Skills } from "./index";
import { SectionType, ContextValue } from "../../types";
import { AppContext } from "../../App";
import { useContext } from "react";

const Landing = () => {
  const { sectionHeight } = useContext<ContextValue>(AppContext);

  const sections: SectionType[] = [
    {
      id: "landing-1",
      children: <About />,
      bgColor: "bg-neutral",
      height: `${sectionHeight('/')}`,
    },
    {
      id: "landing-2",
      children: <Skills />,
      bgColor: "bg-primary",
      height: `${sectionHeight('/')}`,
    },
    {
      id: "landing-3",
      children: <EmploymentHistory />,
      bgColor: "bg-neutral",
      height: `${sectionHeight('/')}`,
    },
    {
      id: "landing-4",
      children: <ForRecruiter />,
      bgColor: "bg-primary",
      height: `${sectionHeight('/')}`,
      isLastChild: true,
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
