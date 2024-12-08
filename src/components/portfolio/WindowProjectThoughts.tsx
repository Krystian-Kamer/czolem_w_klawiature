type ProjectProps = {
  thoughts: string;
  tabsState: boolean[];
  setTabsState: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const WindowProjectThoughts = ({
  thoughts,
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
          tabsState[4] ? "rounded-box bg-base-100" : "my-1"
        } text-base italic tracking-wider text-secondary`}
        aria-label="Przemyślenia"
        checked={tabsState[4]}
        onChange={() => setTabsState([false, false, false, false, true])}
      />
      <div
        role="tabpanel"
        className="tab-content min-h-[500px] border-base-200 bg-base-100 p-10 text-2xl"
      >
        {thoughts}
      </div>
    </>
  );
};
export default WindowProjectThoughts;
