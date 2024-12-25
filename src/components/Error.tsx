import { Navigation, Hero, Section, SectionTitle } from "./index";
import potatoImg from "./../assets/potato.png";
import { useState } from "react";

const Error = () => {
  const [color, setColor] = useState("bg-neutral");

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
          height="h-screen"
          isLastChild={true}
        >
          <div className="mx-8 flex h-[80vh] flex-col selection:bg-secondary selection:text-accent md:mt-14 lg:mt-20">
            <div className="prose">
              <SectionTitle title="Ups...!" />
            </div>
            <div className="flex h-[60vh] flex-col items-center justify-center gap-y-4 lg:gap-y-10">
              <img
                src={potatoImg}
                className={`bottom-0 ${color} cursor-custom-pointer h-96 select-none rounded-full border-2 border-t-8 border-primary object-cover lg:h-[450px]`}
                alt="person with gold potato"
                onClick={changeColor}
              />
              <h2 className="text-center font-protest tracking-widest sm:text-xl lg:w-1/2 lg:text-2xl">
                Niełatwo jest dotrzeć do tej strony, ale Tobie się udało,
                proszę, oto Twoja nagroda!
              </h2>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
export default Error;
