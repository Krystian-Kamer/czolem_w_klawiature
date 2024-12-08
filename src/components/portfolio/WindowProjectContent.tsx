import { useState } from "react";
import {
  WindowProjectDescription,
  WindowProjectVideo,
  WindowProjectTechnologies,
  WindowProjectLinks,
  WindowProjectThoughts,
} from "./index";
import { projects } from "../../data";
import { ProjectType } from "../../types";

const WindowProjectContent = ({
  project: projectName,
}: {
  project: string;
}) => {
  const [tabsState, setTabsState] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const activeProject = projects.find(
    (project) => project.name === projectName,
  ) as ProjectType;

  const {
    name,
    img,
    description,
    technology,
    github,
    live,
    desktopVideo,
    thoughts,
  } = activeProject;

  return (
    <div role="tablist" className="tabs rounded-none bg-neutral p-0">
      <WindowProjectDescription
        name={name}
        img={img}
        description={description}
        tabsState={tabsState}
        setTabsState={setTabsState}
      />
      <WindowProjectVideo
        desktopVideo={desktopVideo}
        tabsState={tabsState}
        setTabsState={setTabsState}
      />
      <WindowProjectTechnologies
        technology={technology}
        tabsState={tabsState}
        setTabsState={setTabsState}
      />
      <WindowProjectLinks
        live={live}
        github={github}
        tabsState={tabsState}
        setTabsState={setTabsState}
      />
      <WindowProjectThoughts
        thoughts={thoughts}
        tabsState={tabsState}
        setTabsState={setTabsState}
      />
    </div>
  );
};
export default WindowProjectContent;
