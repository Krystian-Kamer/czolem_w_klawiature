import { Section } from "../index";
import { About, ForRecruiter, EmploymentHistory, Skills } from "./index";
import { SectionType, ContextValue } from "../../types";
import { useContext } from "react";
import { AppContext } from "../../App";

const Landing = () => {
  const { windowHeight } = useContext<ContextValue>(AppContext);

  const sections: SectionType[] = [
    {
      id: "landing-1",
      children: <About />,
      bgColor: "bg-neutral",
      height: `${
        windowHeight < 1174
          ? "h-fit md:pb-[300px] lg:pb-[400px]"
          : "md:h-screen"
      }`,
    },
    {
      id: "landing-2",
      children: <Skills />,
      bgColor: "bg-primary",
      height: `${
        windowHeight < 1174
          ? "h-fit md:pb-[300px] lg:pb-[350px]"
          : "md:h-screen"
      }`,
    },
    {
      id: "landing-3",
      children: <EmploymentHistory />,
      bgColor: "bg-neutral",
      height: `${
        windowHeight < 1174
          ? "h-fit md:pb-[200px] lg:pb-[350px]"
          : "md:h-screen"
      }`,
    },
    {
      id: "landing-4",
      children: <ForRecruiter />,
      bgColor: "bg-primary",
      height: `${
        windowHeight < 1174
          ? "h-fit md:pb-[390px] lg:pb-[470px]"
          : "md:h-screen"
      }`,
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
