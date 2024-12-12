type ProjectProps = {
  technology: string;
  tabsState: boolean[];
  setTabsState: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const WindowProjectTechnologies = ({
  technology,
  tabsState,
  setTabsState,
}: ProjectProps) => {
  const technologies = technology.split(",");

  return (
    <>
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className={`tab ${
          tabsState[2] ? "rounded-box bg-base-100" : "my-1"
        } text-base italic tracking-wider text-secondary`}
        aria-label="Technicznie"
        checked={tabsState[2]}
        onChange={() => setTabsState([false, false, true, false])}
      />
      <div
        role="tabpanel"
        className="tab-content min-h-[450px] border-base-200 bg-base-100 p-10 text-2xl"
      >
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => {
            return (
              <div
                key={tech}
                className="rounded-badge bg-primary px-7 py-3 text-neutral hover:bg-secondary duration-700 "
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default WindowProjectTechnologies;
