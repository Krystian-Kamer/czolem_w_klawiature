import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

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
        onChange={() => setTabsState([false, false, false, true])}
      />
      <div
        role="tabpanel"
        className="tab-content h-[450px] border-base-200 bg-base-100 p-10"
      >
        <div className="flex h-full flex-col justify-between px-16 text-xl">
          <p className="pt-5 text-2xl md:text-xl">
            {tabsState[3] && <Typewriter typeSpeed={30} words={[thoughts]} />}
          </p>
          <p className="select-none self-center italic text-secondary/40">
            Każdy projekt sprawia, że staję się lepszy i się rozwijam.
          </p>
        </div>
      </div>
    </>
  );
};
export default WindowProjectThoughts;
