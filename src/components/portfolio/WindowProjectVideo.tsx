type ProjectProps = {
  desktopVideo: string;
  tabsState: boolean[];
  setTabsState: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const WindowProjectVideo = ({
  desktopVideo,
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
          tabsState[1] ? "rounded-box bg-base-100" : "my-1"
        } text-base italic tracking-wider text-secondary`}
        aria-label="Video"
        checked={tabsState[1]}
        onChange={() => setTabsState([false, true, false, false, false])}
      />
      <div
        role="tabpanel"
        className="tab-content min-h-[500px] border-base-200 bg-base-100 p-10 text-2xl"
      >
        <video src={desktopVideo}></video>
      </div>
    </>
  );
};
export default WindowProjectVideo;
