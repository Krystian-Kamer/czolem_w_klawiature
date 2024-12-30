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
      <div ref={sectionOne}
        className='md:flex md:flex-row md:justify-around md:gap-6'
      >
        <div
          className={`prose min-h-[400px] ${
            !isHeroInView
              ? "translate-y-2 duration-1000 ph:translate-y-4 sm:translate-y-10 md:translate-y-14 tb:translate-y-16 lg:translate-y-20"
              : "-translate-y-2 delay-[500ms] duration-1000 ph:-translate-y-4 sm:-translate-y-8 md:-translate-y-14 tb:-translate-y-16 lg:-translate-y-20"
          } ${!isPinOnPage && "translate-x-1/2 delay-[1500ms] duration-[1000ms]"} selection:bg-accent selection:text-secondary md:w-1/2 md:px-0`}
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
          <p className="text-lg leading-relaxed text-primary ph:text-xl ph:leading-relaxed vmd:leading-loose sm:text-2xl sm:leading-loose md:pt-6">
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

        <div className="h-60 w-full relative md:hidden">
        <div
          className='bottom-0 absolute -left-5 rotate-45 bg-accent vsm:h-40 vsm:w-48 h-32 w-40'
        ></div>
        <img
          src={ownerImg}
          alt="owner image"
          className='-bottom-20 absolute -left-5 w-[55%] min-w-40 max-w-60 vmd:w-2/5 sm:max-w-72'
        />
        </div>
        <div
          className={`${!isPinOnPage && "drop-img"} relative hidden h-fit rounded-sm border-8 border-b-[12px] border-white bg-accent drop-shadow-[25px_25px_10px_rgba(0,0,0,0.3)] md:mt-28 md:flex md:w-1/3 lg:w-[28%] ${
            !isHeroInView
              ? "translate-y-0 rotate-12 delay-300 duration-[1500ms]"
              : "-translate-y-40 rotate-6 delay-[800ms] duration-[1500ms]"
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
