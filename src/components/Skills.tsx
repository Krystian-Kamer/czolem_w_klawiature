import { act, useContext, useState } from "react";
import { ContextBgValue, Skill } from "../types";
import { AppContext } from "../App";
import SectionTitle from "./SectionTitle";
import handImg from "../assets/hand.png";
import {
  SiReact,
  SiReactrouter,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiChessdotcom,
} from "react-icons/si";

const Skills = () => {
  const { sectionTwoRef } = useContext<ContextBgValue>(AppContext);
  const skills: Skill[] = [
    {
      name: "HTML",
      id: "HTML",
      icon: <SiHtml5 className="h-28 w-28" />,
      checked: false,
      text: "Loremlias in? Officiis quae recusandae et vel, cum modi iusto debitis! Dolorem eligendi ratione reprehenderit nemo neque.",
    },
    {
      name: "CSS",
      id: "CSS",
      icon: <SiCss3 className="h-28 w-28" />,
      checked: false,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium animi, nisi quas hiae alias in? Officiis quae recusandae et vel, cum modi iusto debitis! Dolorem eligendi ratione reprehenderit nemo neque.",
    },
    {
      name: "JavaScript",
      id: "JavaScript",
      icon: <SiJavascript className="h-28 w-28" />,
      checked: false,
      text: "Lorem ipsum dolor sit amet consectetur adipisicini iusto debitis! Dolorem eligendi ratione reprehenderit nemo neque.",
    },
    {
      name: "React",
      id: "React",
      icon: <SiReact className="h-28 w-28" />,
      checked: true,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium animi, nisi quas hic explicabo vero eveniet laboriosam rerum eius similique maiores, quae alias in? Officiis quae recusandae et vel, cum modi iusto debitis! Dolorem eligendi ratione reprehenderit nemo neque.",
    },
    {
      name: "React Router",
      id: "React Router",
      icon: <SiReactrouter className="h-28 w-28" />,
      checked: false,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium animi, nisi quas hic explicabo vero eveniet laboriosam rerum eiuslias in? Officiis quae recusandae et vel, cum modi iusto debitis! Dolorem eligendi ratione reprehenderit nemo neque.",
    },

    {
      name: "TypeScript",
      id: "TypeScript",
      icon: <SiTypescript className="h-28 w-28" />,
      checked: false,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium animi, nisi quas hic explicabo vero eveniet laboriosam rerum eius similique maiores, quae alias in? Officiis quae recusandae et vel, cum modi iusto debitis! Dolorem eligendi ratione reprehenderit nemo neque.",
    },
    {
      name: "Redux Toolkit",
      id: "Redux Toolkit",
      icon: <SiRedux className="h-28 w-28" />,
      checked: false,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium animi, nisi quas hic explicabo vero eveniet laboriosam rerum eius simil cum modi iusto debitis! Dolorem eligendi ratione reprehenderit nemo neque.",
    },
    {
      name: "Tailwind",
      id: "Tailwind",
      icon: <SiTailwindcss className="h-28 w-28" />,
      checked: false,
      text: "Lore, quae alias in? Officiis quae recusandae et vel, cum modi iusto debitis! Dolorem eligendi ratione reprehenderit nemo neque.",
    },
    {
      name: "Others",
      id: "Others",
      icon: <SiChessdotcom className="h-28 w-28" />,
      checked: false,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium animi, nisi quas hic es, quae alias in? Officiis quae recusandae et vel, cum modi iusto debitis! Dolorem eligendi ratione reprehenderit nemo neque.",
    },
  ];

  const [totalSkills, setTotalSkill] = useState<Skill[]>(skills);

  return (
    <div className="flex flex-col">
      <div className="prose px-8 md:mt-14" ref={sectionTwoRef}>
        <SectionTitle title="Skille" />
      </div>
      {/* phone view */}
      <div className="px-2 md:hidden">
        <div className="flex flex-wrap gap-2">
          {totalSkills.map((skill) => {
            const { name, id, checked, text } = skill;
            return (
              <button className="flex-auto rounded-3xl bg-secondary px-2 py-1 tracking-wider text-lg text-neutral">
                {name}
              </button>
            );
          })}
        </div>
      </div>

      {/* desktop view*/}
      <div className="z-20 hidden flex-col items-center justify-center gap-y-[1px] px-6 text-neutral sm:gap-y-[2px] md:flex">
        {totalSkills.map((skill, index) => {
          const { name, id, checked, text } = skill;
          return (
            <div
              key={id}
              className={`cursor-custom-pointer collapse collapse-arrow rounded-none bg-secondary opacity-90 ${
                index === 0 ? "rounded-t-xl" : "rounded-none"
              } ${index === skills.length - 1 ? "rounded-b-xl" : "rounded-none"}`}
            >
              <input
                type="radio"
                name="my-accordion-2"
                checked={checked}
                onChange={() => {
                  setTotalSkill((prevSkills) =>
                    prevSkills.map((skill) =>
                      skill.id === id
                        ? { ...skill, checked: true }
                        : { ...skill, checked: false },
                    ),
                  );
                }}
              />
              <div className={`collapse-title ${checked && "text-accent"}`}>
                {name}
              </div>
              <div className="collapse-content">
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 right-16 hidden h-[700px] w-2/4 items-end lg:flex">
        <div className="absolute left-[30%] top-12 -translate-x-1/2 animate-bounce-slower select-none rounded-full bg-accent bg-gradient-to-tl p-8 text-center text-7xl font-bold text-primary drop-shadow-lg">
          {totalSkills.map((skill) => {
            const { checked, icon, id } = skill;
            return <div key={id}>{checked && icon}</div>;
          })}
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
