import SectionTitle from "../SectionTitle";
import { GiCoffeeCup } from "react-icons/gi";
import { PiScalesFill } from "react-icons/pi";
import { LiaGlassesSolid } from "react-icons/lia";
import { MdLaptopMac } from "react-icons/md";

const EmploymentHistory = () => {
  return (
    <div className="mx-8 flex flex-col md:mt-2 lg:mt-20">
      <div className="prose">
        <SectionTitle title="Zawodowo" />
      </div>
      <ul className="timeline timeline-vertical timeline-snap-icon bottom-3  max-md:timeline-compact selection:bg-accent selection:text-secondary ph:bottom-0 -top-2 md:top-0 tb:top-6 lg:-top-10">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="group/item timeline-start relative md:text-end">
            <div className="absolute -right-44 top-1/2 hidden -translate-y-1/2 opacity-0 group-hover/item:flex group-hover/item:animate-fadeIn">
              <GiCoffeeCup className="text-7xl" />
              <div className="absolute top-1 -z-10 h-11 w-10 -rotate-12 bg-accent"></div>
            </div>
            <time className="font-mono text-sm italic md:text-base tb:text-lg">
              2016
            </time>
            <div className="text-lg font-black md:text-lg tb:text-xl lg:text-2xl">
              Pracownik biurowy
              <div className="h-1 w-1/4 rounded-sm bg-accent md:h-2 md:justify-self-end"></div>
            </div>
            <p className="text-sm md:text-base md:leading-relaxed tb:text-xl lg:text-xl lg:leading-loose">
              <span className="hidden ph:inline">
                Pracowałem w Urzędzie Pracy w Łodzi, na różnych stanowiskach.{" "}
              </span>
              Współpracowałem z przedsiębiorcami, rozliczałem dotacje,
              obsługiwałem kancelarię oraz archiwum.
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="group/item timeline-end relative">
            <div className="absolute -left-44 top-1/2 hidden -translate-y-1/2 opacity-0 group-hover/item:flex group-hover/item:animate-fadeIn">
              <PiScalesFill className="text-7xl" />
              <div className="absolute right-0 top-1 -z-10 h-11 w-10 rotate-12 bg-accent"></div>
            </div>
            <time className="font-mono text-sm italic md:text-base tb:text-lg">
              2020
            </time>
            <div className="text-lg font-black md:text-lg tb:text-xl lg:text-2xl">
              Sekretarz Sądowy
              <div className="h-1 w-1/4 rounded-sm bg-accent md:h-2"></div>
            </div>
            <p className="text-sm md:text-base md:leading-relaxed tb:text-xl lg:text-xl lg:leading-loose">
              <span className="hidden ph:inline">
                Jestem protokolantem, wykonuję polecenia Sędziego oraz
                kierownictwa.{" "}
              </span>
              Wyniosłem stąd aktywne słuchanie i wyłapywanie tego co
              najważniejsze. Dodatkowo nauczyło mnie to pracy pod presją czasu.
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="group/item timeline-start relative md:text-end">
            <div className="absolute -right-44 top-1/2 hidden -translate-y-1/2 opacity-0 group-hover/item:flex group-hover/item:animate-fadeIn">
              <LiaGlassesSolid className="text-7xl" />
              <div className="absolute top-1 -z-10 h-11 w-10 -rotate-12 bg-accent"></div>
            </div>
            <time className="font-mono text-sm italic md:text-base tb:text-lg">
              2022
            </time>
            <div className="z-20 text-lg font-black md:text-lg tb:text-xl lg:text-2xl">
              Nauka programowania
              <div className="h-1 w-1/4 rounded-sm bg-accent md:h-2 md:justify-self-end"></div>
            </div>
            <p className="text-sm md:text-base md:leading-relaxed tb:text-xl lg:text-xl lg:leading-loose">
              Ekscytujący czas. Nowe technologie, kursy, projekty. Dużo
              wyrzeczeń, ale warto.
              <span className="hidden ph:inline">
                {" "}
                Jeśli widzisz tego bloga to znaczy, że jestem w trakcie
                spełniania mojego marzenia o pozostaniu programistą.
              </span>
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="group/item timeline-end relative md:mb-4">
            <div className="absolute -left-44 top-1/2 hidden -translate-y-1/2 opacity-0 group-hover/item:flex group-hover/item:animate-fadeIn">
              <MdLaptopMac className="text-7xl" />
              <div className="absolute right-0 top-1 -z-10 h-11 w-10 rotate-12 bg-accent"></div>
            </div>
            <time className="font-mono text-sm italic md:text-base tb:text-lg">
              2025(życzeniowo)
            </time>
            <div className="text-lg font-black md:text-lg tb:text-xl lg:text-2xl">
              Junior Frontend Developer
              <div className="h-1 w-1/4 rounded-sm bg-accent md:h-2"></div>
            </div>
            <p className="text-sm md:text-base md:leading-relaxed tb:text-xl lg:text-xl lg:leading-loose">
              Pierwsza pełnoprawna praca w sektorze IT.
              <span className="hidden ph:inline">
                {" "}
                Tutaj kiedyś pojawi się oszałamiająca ścieżka kariery
                programisty. Moja podróż od Juniora do Seniora.
              </span>
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};
export default EmploymentHistory;
