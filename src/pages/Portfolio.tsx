import { Section, SectionTitle } from "../components/index";
import { Desktop, Project } from "../components/portfolio/index";
import { projects } from "../data";
import { useContext } from "react";
import { ContextValue } from "../types";
import { AppContext } from "../App";

const Portfolio = () => {
  const { windowHeight } = useContext<ContextValue>(AppContext);

  return (
    <Section
      id="blog-1"
      bgColor="bg-neutral"
      height={`${
        windowHeight < 1174
          ? "h-fit md:pb-[300px] lg:pb-[250px]"
          : "md:h-screen"
      }`}
      isLastChild={true}
    >
      <div>
        <div className="relative flex flex-col">
          <div className="prose">
            <SectionTitle title="Portfolio" />
          </div>
          <div className="sm:hidden mb-20">
            {projects.map((project) => {
              return <Project key={project.id} project={project} />;
            })}
          </div>
          <Desktop />
        </div>
      </div>
    </Section>
  );
};
export default Portfolio;
