import ownerImg from "../../assets/owner-image.png";
import pinImg from "../../assets/pin.png";
import { SectionTitle } from "../index";
import { useContext, useEffect, useState } from "react";
import { ContextBgValue } from "../../types";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const { isHeroInView, isSectionTwoInView } =
    useContext<ContextBgValue>(AppContext);
  const [isPinOnPage, setIsPinOnPage] = useState(true);

  const dropImage = () => {
    setIsPinOnPage(false);
  };

  useEffect(() => {
    if (isPinOnPage) return;
    const turnPinToTrue = setTimeout(() => {
      setIsPinOnPage(true);
    }, 500);
    return () => clearTimeout(turnPinToTrue);
  }, [isSectionTwoInView]);

  return (
    <>
      <div className="md:mx-8 md:mt-36 md:flex md:flex-row md:justify-around md:gap-6 lg:mt-48">
        <div
          className={`prose relative px-8 ${!isPinOnPage && "resize-width"} selection:bg-accent selection:text-secondary md:w-1/2 md:px-0`}
        >
          <SectionTitle title={"Czołem!"} />
          <h2 className="text-xl sm:text-2xl md:text-3xl">
            Z tej strony Krystian Kamer.
          </h2>
          <h3 className="text-xl text-primary sm:text-2xl">
            <div className="w-fit rounded-md border-accent">
              Jestem{" "}
              <Typewriter
                loop={2}
                cursor
                delaySpeed={700}
                words={[
                  "Frontend Developerem.",
                  "kreatywny.",
                  "nastawiony na rozwój.",
                  "otwarty na nieznane!",
                ]}
              />
            </div>
          </h3>
          <p className="text-lg text-primary ph:text-xl ph:leading-relaxed sm:text-2xl md:pt-6 md:leading-loose">
            Nie lubię nudy. Jeśli jesteś na tej stronie to oznacza, że chcesz
            nauczyć się czegoś nowego i wartościowego. Ta stronka to połączenie
            mojego{" "}
            <Link
              className="cursor-custom-pointer mx-1 bg-accent tracking-wider text-primary no-underline"
              to="/portfolio"
            >
              {" "}
              portfolio
            </Link>
            z humorystycznym{" "}
            <Link
              className="cursor-custom-pointer ml-1 bg-accent tracking-wider text-primary no-underline"
              to="/blog"
            >
              {" "}
              blogiem
            </Link>
            , na który będę wrzucał co każdy poniedziałek nowe posty.
          </p>
        </div>
        <div className="absolute -bottom-10 -left-9 h-2/5 w-1/2 rotate-45 bg-accent sm:w-2/5 md:hidden"></div>
        <img
          src={ownerImg}
          alt="owner image"
          className="absolute bottom-0 left-0 w-[55%] sm:w-2/5 md:hidden"
        />
        <div
          className={`${!isPinOnPage && "drop-img"} relative hidden h-fit rounded-sm border-8 border-b-[12px] border-white bg-accent drop-shadow-[25px_25px_10px_rgba(0,0,0,0.3)] md:mt-28 md:flex md:w-1/3 md:rotate-6 lg:w-[28%] lg:rotate-12`}
        >
          <img
            src={pinImg}
            alt="pin image"
            className={`absolute -left-6 z-10 rounded-l-full drop-shadow-[3px_10px_3px_rgba(0,0,0,0.6)] md:w-16 lg:w-20 ${!isHeroInView && "cursor-custom-pointer duration-300 hover:scale-110"} ${!isPinOnPage && "remove-pin"}`}
            onClick={!isHeroInView ? dropImage : undefined}
          />
          <div
            className="tooltip tooltip-primary"
            data-tip="tak, tak, ten tutaj to niestety ja"
          >
            <img src={ownerImg} alt="owner image" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
