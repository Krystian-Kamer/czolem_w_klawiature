import { Section, SectionTitle } from "./../components/index";
import cupcakesImg from "./../assets/cupcakes.png";
import { useState, useContext } from "react";
import { ContextValue } from "../types";
import { AppContext } from "../App";

const ThankYou = () => {
  const [color, setColor] = useState("bg-accent");
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
      <div className="flex flex-col selection:bg-accent selection:text-secondary">
        <div className="prose">
          <SectionTitle bgColor="bg-neutral" title="Dziękuję" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4 lg:gap-y-10">
          <img
            src={cupcakesImg}
            className={`${color} cursor-custom-pointer h-full max-h-80 pt-4 select-none rounded-full border-2 border-t-8 border-primary object-cover sm:max-h-[430px] lg:h-[450px]`}
            alt="person with gold potato"
            onClick={changeColor}
          />
          <h2 className="text-center font-protest tracking-widest md:w-2/3 lg:w-1/2 lg:text-2xl">
            Dzięki wielkie za przesłanie wiadomości. To wiele dla mnie znaczy!
          </h2>
        </div>
      </div>
    </Section>
  );
};
export default ThankYou;
