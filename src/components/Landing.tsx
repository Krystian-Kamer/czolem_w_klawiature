import { useContext } from "react";
import { AppContext } from "./HomeLayout";
import { ContextBgValue } from "../types";

const Landing = () => {
  const { sectionTwoRef, sectionFourRef } =
    useContext<ContextBgValue>(AppContext);

  return (
    <>
      <section className="h-screen w-full snap-start bg-neutral">
        <div className="mx-auto max-w-7xl px-20 py-40">
          <p className="text-4xl">Section 1</p>
        </div>
      </section>
      <section className="h-screen w-full snap-start bg-primary">
        <div className="mx-auto max-w-7xl px-20 py-40">
          <p className="text-4xl" ref={sectionTwoRef}>
            Section 2
          </p>
        </div>
      </section>
      <section className="h-screen w-full snap-start bg-neutral">
        <div className="mx-auto max-w-7xl px-20 py-40">
          <p className="text-4xl">Section 3</p>
        </div>
      </section>
      <section className="h-[84vh] w-full snap-start bg-primary">
        <div className="mx-auto max-w-7xl px-20 py-40">
          <p className="text-4xl" ref={sectionFourRef}>
            Section 4
          </p>
        </div>
      </section>
    </>
  );
};
export default Landing;
