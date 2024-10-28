import { useContext } from "react";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";
import SectionTitle from "./SectionTitle";
import handImg from "../assets/hand.png";

import { SiReact } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  const { sectionTwoRef } = useContext<ContextBgValue>(AppContext);

  const skills = [
    { name: "React", id: "React", element: <SiReact /> },
    {
      name: "React Router",
      id: "React Router",
      element: <SiReactrouter />,
    },
    {
      name: "Redux Toolkit",
      id: "Redux Toolkit",
      element: <SiReactrouter />,
    },
    { name: "HTML", id: "HTML", element: <SiReactrouter /> },
    { name: "CSS", id: "CSS", element: <SiReactrouter /> },
    { name: "JavaScript", id: "JavaScript", element: <SiReactrouter /> },
    { name: <SiReactrouter /> },
  ];

  return (
    <div className="flex flex-col">
      <div className="prose px-8 md:mt-14" ref={sectionTwoRef}>
        <SectionTitle title="Skille" />
      </div>

      <div className="cursor-custom-pointer flex flex-col items-center justify-center px-8 text-neutral">
        <div className="cursor-custom-pointer collapse glass collapse-arrow">
          <input
            type="radio"
            name="my-accordion-2"
            defaultChecked
            className="cursor-custom-pointer"
          />
          <div className="collapse-title text-xl font-medium">React</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="cursor-custom-pointer collapse collapse-arrow bg-base-200">
          <input
            type="radio"
            name="my-accordion-2"
            className="cursor-custom-pointer"
          />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="cursor-custom-pointer collapse collapse-arrow bg-base-200">
          <input
            type="radio"
            name="my-accordion-2"
            className="cursor-custom-pointer"
          />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-16 flex h-[700px] w-2/4 items-end">
        <div className="absolute left-[30%] top-12 -translate-x-1/2 animate-bounce-slower select-none rounded-full bg-accent bg-gradient-to-tl p-8 text-center text-7xl font-bold text-neutral drop-shadow-lg">
          <SiRedux className="h-32 w-32 text-cyan-500" />
        </div>
        <img
          src={handImg}
          className="bottom-10 left-0 h-[600px]"
          alt="hand image"
        />
      </div>
    </div>
  );
};
export default Skills;
