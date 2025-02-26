import { Navigation, Hero, Section, SectionTitle } from "./index";
import potatoImg from "./../assets/potato.webp";
import { useState, useContext } from "react";
import { ContextValue } from "../types";
import { AppContext } from "../App";
const Error = () => {
  const [color, setColor] = useState("bg-info");
  const { windowHeight } = useContext<ContextValue>(AppContext);

  const changeColor = () => {
    switch (color) {
      case "bg-neutral":
        setColor("bg-info");
        break;
      case "bg-info":
        setColor("bg-primary");
        break;
      case "bg-primary":
        setColor("bg-error");
        break;
      case "bg-error":
        setColor("bg-accent");
        break;
      case "bg-accent":
        setColor("bg-success");
        break;
      case "bg-success":
        setColor("bg-warning");
        break;
      case "bg-warning":
        setColor("bg-secondary");
        break;
      case "bg-secondary":
        setColor("bg-neutral");
        break;
    }
  };

  return (
    <>
    <div
      className={`home ${
        windowHeight < 1174
          ? ""
          : "md:no-scrollbar md:snap-y md:snap-mandatory md:overflow-y-scroll"
      }`}
    >
        <Navigation />
        <div className="snap-start">
          <Hero />
        </div>
        <Section
          id="error"
          bgColor="bg-neutral"
          height={`${
            windowHeight < 1174
              ? "h-fit md:pb-[300px] lg:pb-[250px]"
              : "md:h-screen"
          }`}
          isLastChild={true}
        >
          <div className="mb-40 flex flex-col selection:bg-accent selection:text-secondary">
            <div className="prose">
              <SectionTitle bgColor="bg-neutral" title="Ups...!" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4 lg:gap-y-10">
              <img
                src={potatoImg}
                className={`${color} cursor-custom-pointer h-full max-h-80 select-none rounded-full border-2 border-t-8 border-primary object-cover sm:max-h-[430px] lg:h-[450px]`}
                alt="person with gold potato"
                onClick={changeColor}
              />
              <h2 className="text-center font-protest tracking-widest md:w-2/3 lg:w-1/2 lg:text-2xl">
                Niełatwo jest dotrzeć do tej strony, ale Tobie się udało,
                proszę, oto Twój medal!
              </h2>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
export default Error;
