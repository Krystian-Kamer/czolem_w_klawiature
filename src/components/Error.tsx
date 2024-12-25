import { Navigation, Hero, Section, SectionTitle } from "./index";
import potatoImg from "./../assets/potato.png";
import { useState } from "react";
import { ContextValue } from "../types";
import { AppContext } from "../App";
import { useContext } from "react";
const Error = () => {
  const [color, setColor] = useState("bg-info");
  const { windowWidth, windowHeight } = useContext<ContextValue>(AppContext);

  const sectionHeight = () => {
    if (
      windowHeight <= 360 ||
      (windowWidth > windowHeight && windowHeight <= 600)
    ) {
      return "h-[200vh]";

    } else if (windowWidth > windowHeight && windowHeight <= 800) {
      return 'h-[150vh]'
    } else if (
      windowHeight < 640 ||
      (windowWidth > windowHeight && windowHeight <= 1065)
    ) {
      return "h-[120vh]";
    } else {
      return "h-screen";
    }
  };

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
      <div className="no-scrollbar snap-y snap-mandatory overflow-y-scroll">
        <Navigation />
        <div className="snap-start">
          <Hero />
        </div>
        <Section
          id="blog-1"
          bgColor="bg-neutral"
          height={sectionHeight()}
          isLastChild={true}
        >
          <div className="mx-8 flex h-[70vh] flex-col selection:bg-secondary selection:text-accent ph:h-[80vh] md:mt-14 lg:mt-20">
            <div className="prose">
              <SectionTitle title="Ups...!" />
            </div>
            <div className="flex h-[100vh] flex-col items-center justify-center gap-y-4 lg:gap-y-10">
              <img
                src={potatoImg}
                className={`${color} cursor-custom-pointer max-h-80 ph:max-h-96 sm:max-h-[430px] select-none rounded-full h-full border-2 border-t-8 border-primary object-cover lg:h-[450px]`}
                alt="person with gold potato"
                onClick={changeColor}
              />
              <h2 className="text-center font-protest tracking-widest sm:text-xl tb:text-2xl md:w-2/3 lg:w-1/2 lg:text-2xl">
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
