import SectionTitle from "./SectionTitle";

const EmploymentHistory = () => {
  return (
    <div className="mx-8 flex flex-col md:mt-14 lg:mt-20">
      <div className="prose">
        <SectionTitle title="Zawodowo" />
      </div>
      <ul className="timeline timeline-vertical timeline-snap-icon bottom-3 max-md:timeline-compact selection:bg-accent selection:text-secondary ph:bottom-0 ph:top-4 md:top-0 tb:top-6 lg:-top-10">
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
          <div className="timeline-start md:text-end">
            <time className="font-mono text-sm italic md:text-base tb:text-lg">
              2016
            </time>
            <div className="text-lg font-black md:text-lg tb:text-xl lg:text-2xl">
              Pracownik biurowy
            </div>
            <p className="text-sm md:text-base md:leading-relaxed tb:text-xl lg:text-xl lg:leading-loose">
              <span className="hidden ph:inline">
                Dużo parzenia kawy. Pracowałem w Urzędzie Pracy w Łodzi, na
                różnych stanowiskach.{" "}
              </span>
              Współpracowałem z prz md:text-baseedsiębiorcami, rozliczałem
              dotacje, obsługiwałem kancelarię oraz archiwum.
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
          <div className="timeline-end">
            <time className="font-mono text-sm italic md:text-base tb:text-lg">
              2020
            </time>
            <div className="text-lg font-black md:text-lg tb:text-xl lg:text-2xl">
              Sekretarz Sądowy
            </div>
            <p className="text-sm md:text-base md:leading-relaxed tb:text-xl lg:text-xl lg:leading-loose">
              <span className="hidden ph:inline">
                Jeszcze więcej parzenia kawy. Tutaj wykonuję polecenia Sędziego
                oraz kierownika.{" "}
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
          <div className="timeline-start md:text-end">
            <time className="font-mono text-sm italic md:text-base tb:text-lg">
              2022
            </time>
            <div className="text-lg font-black md:text-lg tb:text-xl z-20 lg:text-2xl">
              Nauka programowania
            </div>
            <p className="text-sm md:text-base md:leading-relaxed tb:text-xl lg:text-xl lg:leading-loose">
              <span className="hidden ph:inline">Kawa bez zmian. </span>
              Wkuwanie podstaw, potem rzeczy zaawansowanych oraz odwzorowywanie
              tego co wkute w... praktyce.
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
          <div className="timeline-end mb-4 md:mb-10">
            <time className="font-mono text-sm italic md:text-base tb:text-lg">
              2025(życzeniowo)
            </time>
            <div className="text-lg font-black md:text-lg tb:text-xl lg:text-2xl">
              Junior Frontend Developer
            </div>
            <p className="text-sm md:text-base md:leading-relaxed tb:text-xl lg:text-xl lg:leading-loose">
              Pierwsza praca w IT u pracodawcy, który mnie doceni.
              <span className="hidden ph:inline">
                {" "}
                Nie wiem tylko co z kawą...
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
