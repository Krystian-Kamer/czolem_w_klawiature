import { useContext, useState } from "react";
import { ContextValue, Skill } from "../../types";
import { AppContext } from "../../App";
import {SectionTitle} from "./../index";
import handImg from "../../assets/hand.png";
import { skills } from "../../data";

const Skills = () => {
  const { sectionTwoRef, isSectionTwoInView } =
    useContext<ContextValue>(AppContext);
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
    <div ref={sectionTwoRef} className="flex min-h-[400px]  flex-col ">
      <div className="prose" >
        <SectionTitle title="Skille" />
      </div>
        <div className="flex sm:hidden z-40 flex-wrap gap-1">
          {totalSkills.map((skill) => {
            const { name, id, checked } = skill;
            return (
              <button
                key={id}
                className={`cursor-custom-pointer  flex-auto rounded-xl border-[1px] border-neutral px-2 py-1 font-semibold tracking-wider text-neutral text-base ${checked && "bg-neutral text-primary"}`}
                onClick={() => changeSkill(id)}
              >
                {name}
              </button>
            );
          })}
        </div>
      <div className="mt-4 sm:hidden">
        {totalSkills.map((skill) => {
          const { checked, text, id } = skill;
          return (
            <p
              className="text-lg leading-relaxed text-neutral sm:text-lg"
              key={id}
            >
              {checked && text}
            </p>
          );
        })}
      </div>

      <div className="z-20  hidden sm:flex sm:flex-col gap-y-[2px] text-neutral selection:bg-secondary-content selection:text-primary max-w-[600px] self-center lg:self-auto lg:h-fit lg:w-[42%]">
        {totalSkills.map((skill, index) => {
          const { name, id, checked, text } = skill;
          return (
            <div
              key={id}
              className={`cursor-custom-pointer bg-opacity-80 collapse collapse-arrow h-fit rounded-none bg-secondary md:bg-opacity-90 ${
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
                className={`collapse-title text-lg md:text-xl tracking-widest ${checked && "text-accent"}`}
              >
                {name}
              </div>
              <div className="collapse-content">
                <p className="leading-relaxed tracking-wide sm:text-lg md:text-xl">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 right-16 hidden sm:flex items-end  lg:left-1/2 sm:w-2/3 lg:w-1/2">
        <div className="relative">
          <div className="absolute left-1/2 animate-levitate select-none rounded-full bg-ball-shape sm:p-5 md:p-8 text-primary shadow-[0px_0px_50px_10px_rgba(255,211,105,0.5)] lg:-top-20">
            {totalSkills.map((skill) => {
              const { checked, icon, id } = skill;
              return <div key={id}>{checked && icon}</div>;
            })}
          </div>
          <img
            src={handImg}
            alt="hand image"
            className={`-z-50 -mb-[600px] min-[800px]:w-[550px] ${isSectionTwoInView ? "mb-0 duration-[2000ms] ease-out" : "mb-[-600px] duration-[2000ms]"}`}
          />
        </div>
      </div>
    </div>
  );
};
export default Skills;