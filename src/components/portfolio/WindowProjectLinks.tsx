type ProjectProps = {
  live: string;
  github: string;
  tabsState: boolean[];
  setTabsState: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const WindowProjectLinks = ({
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
          tabsState[3] ? "rounded-box bg-base-100" : "my-1"
        } text-base italic tracking-wider text-secondary`}
        aria-label="Linki"
        checked={tabsState[3]}
        onChange={() => setTabsState([false, false, false, true, false])}
      />
      <div
        role="tabpanel"
        className="tab-content min-h-[500px] border-base-200 bg-base-100 p-10 text-2xl"
      >
        <p>{live}</p>
        <p>{github}</p>
      </div>
    </>
  );
};
export default WindowProjectLinks;
