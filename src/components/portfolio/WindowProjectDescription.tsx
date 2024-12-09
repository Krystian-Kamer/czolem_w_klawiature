type ProjectProps = {
  name: string;
  img: string;
  description: string;
  tabsState: boolean[];
  setTabsState: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const WindowProjectDescription = ({
  name,
  img,
  description,
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
        onChange={() => setTabsState([true, false, false, false, false])}
      />
      <div
        role="tabpanel"
        className="tab-content min-h-[450px] border-base-200 bg-base-100 p-10 text-2xl"
      >
        <div className="flex gap-x-6">
          <div className="prose self-center w-1/2">
            <h2 className="text-4xl uppercase tracking-widest">{name}</h2>
            <p className="text-2xl">{description}</p>
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
