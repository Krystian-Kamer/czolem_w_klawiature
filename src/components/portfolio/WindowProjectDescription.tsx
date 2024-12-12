type ProjectProps = {
  name: string;
  img: string;
  live: string;
  github: string;
  description: string;
  tabsState: boolean[];
  setTabsState: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const WindowProjectDescription = ({
  name,
  img,
  description,
  live,
  github,
  tabsState,
  setTabsState,
}: ProjectProps) => {
  return (
    <>
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className={`tab ${
          tabsState[0] ? "rounded-box bg-base-100" : "my-1"
        } text-base italic tracking-wider text-secondary`}
        aria-label="Opis"
        checked={tabsState[0]}
        onChange={() => setTabsState([true, false, false, false])}
      />
      <div
        role="tabpanel"
        className="tab-content min-h-[450px] border-base-200 bg-base-100 p-10 text-2xl"
      >
        <div className="flex gap-x-6">
          <div className="prose w-1/2 self-center">
            <h2 className="text-4xl uppercase tracking-widest">{name}</h2>
            <p className="text-2xl">{description}</p>
            <div className="flex w-full justify-center gap-x-8">
              <a
                className="w-1/2 cursor-custom-pointer rounded-btn border-2 border-secondary bg-transparent py-2 text-center text-lg no-underline uppercase tracking-wider hover:bg-accent duration-300"
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                live
              </a>
              <a
                className="w-1/2 cursor-custom-pointer rounded-btn border-2 border-secondary bg-transparent py-2 text-center text-lg no-underline uppercase tracking-wider hover:bg-accent duration-300"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </div>
          </div>
          <img
            src={img}
            alt="project image"
            className="w-1/2 border-4 border-dotted border-primary"
          />
        </div>
      </div>
    </>
  );
};
export default WindowProjectDescription;
