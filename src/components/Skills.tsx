import { useContext, useState } from "react";
import { ContextBgValue, Skill } from "../types";
import { AppContext } from "../App";
import SectionTitle from "./SectionTitle";
import handImg from "../assets/hand.png";
import { skills } from "../data";

const Skills = () => {
  const { sectionTwoRef } = useContext<ContextBgValue>(AppContext);
  const [totalSkills, setTotalSkill] = useState<Skill[]>(skills);

  const changeSkill = (id: string) => {
    const changedSkills = totalSkills.map((skill) =>
      skill.id === id
        ? { ...skill, checked: true }
        : { ...skill, checked: false },
    );
    setTotalSkill(changedSkills);
  };

  return (
    <div className="mx-8 flex flex-col md:mt-14 lg:mt-20">
      <div className="prose" ref={sectionTwoRef}>
        <SectionTitle title="Skille" />
      </div>
      <div className="md:hidden">
        <div className="flex flex-wrap gap-1 ph:gap-2">
          {totalSkills.map((skill) => {
            const { name, id, checked } = skill;
            return (
              <button
                key={id}
                className={`flex-auto rounded-xl border-[1px] border-neutral px-2 py-1 text-lg font-semibold tracking-wider text-neutral ph:border-[2px] sm:text-base ${checked && "bg-neutral text-primary"}`}
                onClick={() => changeSkill(id)}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-4 md:hidden">
        {totalSkills.map((skill) => {
          const { checked, text, id } = skill;
          return (
            <p
              className="text-lg leading-relaxed text-neutral ph:text-xl ph:leading-relaxed sm:text-lg"
              key={id}
            >
              {checked && text}
            </p>
          );
        })}
      </div>

      <div className="z-20 hidden gap-y-[2px] text-neutral selection:bg-secondary-content selection:text-primary md:flex md:h-[69vh] md:flex-col lg:w-[42%]">
        {totalSkills.map((skill, index) => {
          const { name, id, checked, text } = skill;
          return (
            <div
              key={id}
              className={`cursor-custom-pointer collapse collapse-arrow h-fit rounded-none bg-secondary md:bg-opacity-90 ${
                index === 0 ? "rounded-t-xl" : "rounded-none"
              } ${index === skills.length - 1 ? "rounded-b-xl" : "rounded-none"}`}
            >
              <input
                type="radio"
                name="my-accordion-2"
                checked={checked}
                onChange={() => changeSkill(id)}
              />
              <div
                className={`collapse-title text-xl tracking-widest ${checked && "text-accent"}`}
              >
                {name}
              </div>
              <div className="collapse-content">
                <p className="leading-relaxed tracking-wide min-[800px]:text-xl">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-1 right-16 hidden items-end md:left-1/3 md:flex lg:left-1/2 lg:w-1/2">
        <div className="relative">
          <div className="absolute left-1/2 animate-bounce-slower select-none rounded-full bg-ball-shape p-8 text-primary shadow-[0px_0px_50px_10px_rgba(255,211,105,0.5)] md:-top-10 lg:-top-20">
            {totalSkills.map((skill) => {
              const { checked, icon, id } = skill;
              return <div key={id}>{checked && icon}</div>;
            })}
          </div>
          <img
            src={handImg}
            className="md:w-[400px] min-[800px]:w-[550px] lg:w-[700px] -z-50"
            alt="hand image"
          />
        </div>
      </div>
    </div>
  );
};
export default Skills;
