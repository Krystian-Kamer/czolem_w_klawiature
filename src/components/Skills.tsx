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
    <div className="flex flex-col md:mt-14 min-[800px]:mt-28">
      <div className="prose px-8" ref={sectionTwoRef}>
        <SectionTitle title="Skille" />
      </div>
      <div className="px-8 md:hidden">
        <div className="flex flex-wrap gap-1 min-[390px]:gap-2">
          {totalSkills.map((skill) => {
            const { name, id, checked } = skill;
            return (
              <button
                key={id}
                className={`flex-auto rounded-2xl border-[2px] border-neutral px-2 py-1 text-lg font-semibold tracking-wider text-neutral max-[390px]:text-base ${checked && "bg-neutral text-primary"}`}
                onClick={() => changeSkill(id)}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-4 px-8 md:hidden">
        {totalSkills.map((skill) => {
          const { checked, text, id } = skill;
          return (
            <p
              className="text-xl leading-relaxed text-neutral max-[400px]:text-lg"
              key={id}
            >
              {checked && text}
            </p>
          );
        })}
      </div>

      <div className="z-20 hidden gap-y-[2px] px-6 text-neutral md:flex md:h-[69vh] md:flex-col lg:h-full ">
        {totalSkills.map((skill, index) => {
          const { name, id, checked, text } = skill;
          return (
            <div
              key={id}
              className={`cursor-custom-pointer collapse collapse-arrow h-fit rounded-none bg-secondary bg-opacity-70 ${
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
                className={`collapse-title text-xl tracking-wider lg:text-2xl ${checked && "text-accent"}`}
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

      <div className="absolute bottom-1 left-1/2 right-16 hidden items-end md:flex w-fit">
        <div className="absolute left-[30%] -top-20 -translate-x-1/2 animate-bounce-slower select-none rounded-full bg-accent bg-gradient-to-tl p-8 text-center text-7xl font-bold text-primary drop-shadow-lg">
          {totalSkills.map((skill) => {
            const { checked, icon, id } = skill;
            return <div key={id}>{checked && icon}</div>;
          })}
        </div>
        <img
          src={handImg}
          className="w-[700px]"
          alt="hand image"
        />
      </div>
    </div>
  );
};
export default Skills;
