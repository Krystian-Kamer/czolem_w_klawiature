import ownerImg from "../../assets/owner-image.png";
import pinImg from "../../assets/pin.png";
import { SectionTitle } from "../index";
import { useContext, useEffect, useState } from "react";
import { ContextValue } from "../../types";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { isHeroInView } =
    useContext<ContextValue>(AppContext);
  const [isPinOnPage, setIsPinOnPage] = useState(true);
  const { ref: sectionOne, inView: isSectionOneInView } = useInView();

  const dropImage = () => {
    setIsPinOnPage(false);
  };

  useEffect(() => {
    if (isPinOnPage) return;
    const turnPinToTrue = setTimeout(() => {
      setIsPinOnPage(true);
    }, 500);
    return () => clearTimeout(turnPinToTrue);
  }, [isSectionOneInView]);

  return (
    <>
      <div
        ref={sectionOne}
        className="md:flex top-1/2  md:flex-row md:justify-around md:gap-6"
      >
        <div
          className={`prose min-h-[400px] ${!isPinOnPage && "translate-x-1/2 delay-[1500ms] duration-[1000ms]"} selection:bg-accent selection:text-secondary md:w-1/2 md:px-0`}
        >
          <SectionTitle title={"Czołem!"} />

          <h2 className="text-xl sm:text-xl md:text-2xl">
            Z tej strony Krystian Kamer.
          </h2>
          <h3 className="text-xl text-primary sm:text-xl md:text-2xl">
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
          <p className="text-lg leading-relaxed text-primary sm:text-xl md:text-2xl md:leading-relaxed lg:leading-loose sm:leading-loose md:pt-6">
            Nie lubię nudy. Jeśli jesteś na tej stronie to oznacza, że chcesz
            nauczyć się czegoś nowego i wartościowego. Ta stronka to połączenie
            mojego
            <Link
              className="cursor-custom-pointer mx-1 bg-accent tracking-wider text-primary no-underline hover:bg-accent/70"
              to="/portfolio"
            >
              {" "}
              portfolio
            </Link>
            z humorystycznym
            <Link
              className="cursor-custom-pointer ml-1 bg-accent tracking-wider text-primary no-underline hover:bg-accent/70"
              to="/blog"
            >
              {" "}
              blogiem
            </Link>
            , na który będę wrzucał co każdy poniedziałek nowe posty.
          </p>
        </div>

        <div className="relative h-52 w-full sm:h-[450px] md:hidden">
          <div className="absolute -left-5 bottom-0 h-40 w-48 rotate-45 bg-accent"></div>
          <img
            src={ownerImg}
            alt="owner image"
            className="absolute -bottom-20 -left-5 w-[55%] min-w-52 max-w-64 sm:max-w-72"
          />
        </div>
        <div
          className={`${!isPinOnPage && "drop-img"} relative hidden h-fit rounded-sm border-8 border-b-[12px] border-white bg-accent drop-shadow-[25px_25px_10px_rgba(0,0,0,0.3)] md:mt-28 md:flex md:w-1/3 lg:w-[28%] ${
            !isHeroInView
              ? "translate-y-[20%] rotate-12 delay-300 duration-[1500ms]"
              : "-translate-y-[20%] rotate-6 delay-[800ms] duration-[1500ms]"
          }`}
        >
          <img
            src={pinImg}
            alt="pin image"
            className={`absolute -left-6 z-10 rounded-l-full drop-shadow-[3px_10px_3px_rgba(0,0,0,0.6)] md:w-16 lg:w-20 ${!isHeroInView && "cursor-custom-pointer duration-300 hover:scale-110"} ${!isPinOnPage && "remove-pin"} `}
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
