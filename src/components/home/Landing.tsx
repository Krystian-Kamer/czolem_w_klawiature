import { Section } from "../index";
import { About, ForRecruiter, EmploymentHistory, Skills } from "./index";
import { SectionType, ContextValue } from "../../types";
import { AppContext } from "../../App";
import { useContext } from "react";

const Landing = () => {
  const { windowHeight } = useContext<ContextValue>(AppContext);

  const sectionHeight = () => {
    if (windowHeight <= 360) {
      return "h-[300vh]";
    } else if (windowHeight <= 480) {
      return "h-[150vh]";
    } else if (windowHeight <= 600) {
      return "h-[133vh] vsm:h-[115vh] ph:h-screen md:h-[190vh] lg:h-[230vh]";
    } else if (windowHeight <= 800) {
      return "h-[120vh] vsm:h-[105vh] ph: md:h-[150vh] lg:h-[180vh]";
    } else {
      return "h-[120vh] vsm:h-[105vh] ph:h-screen";
    }
  };

  const sections: SectionType[] = [
    {
      id: "landing-1",
      children: <About />,
      bgColor: "bg-neutral",
      height: `${sectionHeight()}`,
    },
    {
      id: "landing-2",
      children: <Skills />,
      bgColor: "bg-primary",
      height: `${sectionHeight()}`,
    },
    {
      id: "landing-3",
      children: <EmploymentHistory />,
      bgColor: "bg-neutral",
      height: `${sectionHeight()}`,
    },
    {
      id: "landing-4",
      children: <ForRecruiter />,
      bgColor: "bg-primary",
      height: `${sectionHeight()}`,
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
