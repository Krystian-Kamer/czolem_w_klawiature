import ownerImg from "../assets/owner-image.png";
import pinImg from "../assets/pin.png";
import { SectionTitle } from "./index";
import { useContext, useState } from "react";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

const About = () => {
  const { isHeroInView } = useContext<ContextBgValue>(AppContext);
  const [isPinOnPage, setIsPinOnPage] = useState(true);

  const dropImage = () => {
    setIsPinOnPage(false);
  };

  return (
    <>
      <div className="selection:bg-accent selection:text-secondary md:flex md:flex-row md:justify-center md:gap-6 lg:justify-around">
        <div className="prose relative px-8 md:top-14 md:w-1/2 md:px-0">
          <SectionTitle title={"Czołem!"} />
          <h2 className="lg:text-small text-xl min-[400px]:text-2xl sm:text-2xl md:text-3xl">
            Z tej strony Krystian Kamer.
          </h2>
          <h3 className="lg:text-small text-xl text-primary min-[400px]:text-2xl sm:text-2xl">
            Jestem{" "}
            <div className="tooltip tooltip-accent" data-tip="na początku kariery">
              <span className="underline"> Frontend Developerem.</span>
            </div>
          </h3>
          <p className="lg:text-small text-lg text-primary min-[400px]:text-xl min-[400px]:leading-loose sm:text-2xl md:pt-10 md:leading-loose">
            Nie lubię nudy. Jeśli jesteś na tej stronie to oznacza, że chcesz
            nauczyć się czegoś nowego i wartościowego. Ta stronka to połączenie
            mojego{" "}
            <Link
              className="cursor-custom-pointer text-primary mx-1 bg-accent tracking-wider no-underline"
              to="/portfolio"
            >
              {" "}
              portfolio
            </Link>
            z humorystycznym{" "}
            <Link
              className="cursor-custom-pointer text-primary ml-1 bg-accent tracking-wider no-underline"
              to="/blog"
            >
              {" "}
              blogiem
            </Link>
            , na który będę wrzucał co każdy czwartek nowe posty.
          </p>
        </div>
        <div className="hide absolute -bottom-10 -left-9 h-2/5 w-1/2 rotate-45 bg-accent sm:w-2/5 md:hidden"></div>
        <img
          src={ownerImg}
          alt="owner image"
          className="hide absolute bottom-0 left-0 w-[55%] sm:w-2/5 md:hidden"
        />
        <div
          className={`${!isPinOnPage && "drop-img"} lg:image-small relative hidden h-fit rounded-sm border-8 border-b-[12px] border-white bg-accent drop-shadow-[25px_25px_10px_rgba(0,0,0,0.3)] md:mt-28 md:flex md:w-1/3 md:rotate-6 lg:w-[28%] lg:rotate-12`}
        >
          <img
            src={pinImg}
            alt="pin image"
            className={`hide absolute -left-6 z-10 w-20 rounded-l-full drop-shadow-[3px_10px_3px_rgba(0,0,0,0.6)] ${!isHeroInView && "cursor-custom-pointer duration-300 hover:scale-110"} ${!isPinOnPage && "remove-pin"}`}
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
