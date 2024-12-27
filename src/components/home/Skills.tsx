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
    <div ref={sectionTwoRef} className="mx-8 flex flex-col md:mt-14 lg:mt-20">
      <div className="prose" >
        <SectionTitle title="Skille" />
      </div>
      <div className="vmd:hidden">
        <div className="flex flex-wrap gap-1 ph:gap-2">
          {totalSkills.map((skill) => {
            const { name, id, checked } = skill;
            return (
              <button
                key={id}
                className={`cursor-custom-pointer z-50  flex-auto rounded-xl border-[1px] border-neutral px-2 ph:px-3 py-1 font-semibold tracking-wider text-neutral ph:border-[2px] text-sm vsm:text-base ${checked && "bg-neutral text-primary"}`}
                onClick={() => changeSkill(id)}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-4 vmd:hidden">
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

      <div className="z-20 hidden gap-y-[2px] text-neutral selection:bg-secondary-content selection:text-primary vmd:flex vmd:min-h-[69vh] lg:h-fit vmd:flex-col lg:w-[42%]">
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
                <p className="leading-relaxed tracking-wide sm:text-lg tb:text-xl">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 right-16 hidden items-end vmd:left-1/3 vmd:flex lg:left-1/2 lg:w-1/2">
        <div className="relative">
          <div className="absolute left-1/2 animate-levitate select-none rounded-full bg-ball-shape vmd:p-4 md:p-8 text-primary shadow-[0px_0px_50px_10px_rgba(255,211,105,0.5)] vmd:-top-10 lg:-top-20">
            {totalSkills.map((skill) => {
              const { checked, icon, id } = skill;
              return <div key={id}>{checked && icon}</div>;
            })}
          </div>
          <img
            src={handImg}
            alt="hand image"
            className={`-z-50 -mb-[600px] vmd:w-[400px] min-[800px]:w-[550px] ${isSectionTwoInView ? "mb-0 duration-[2000ms] ease-out" : "mb-[-600px]"}`}
          />
        </div>
      </div>
    </div>
  );
};
export default Skills;