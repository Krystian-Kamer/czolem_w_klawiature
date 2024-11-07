import SectionTitle from "./SectionTitle";

const EmploymentHistory = () => {
  return (
    <div className="mx-8 flex flex-col md:mt-14 min-[800px]:mt-28 lg:mt-20">
      <div className="prose">
        <SectionTitle title="Zawodowo" />
      </div>
      <ul className="timeline timeline-vertical timeline-snap-icon mt-6 max-md:timeline-compact">
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
          <div className="timeline-start mb-2 md:text-end">
            <time className="font-mono italic">2016</time>
            <div className="text-lg font-black md:text-lg lg:text-2xl">
              Pracownik biurowy
            </div>
            <p className="lg:text-xl">
              Dużo parzenia kawy. Pracowałem w Urzędzie Pracy w Łodzi, na różnych stanowiskach.
              Współpracowałem z przedsiębiorcami, rozliczałem dotacje,
              obsługiwałem kancelarię oraz archiwum.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
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
          <div className="timeline-end mb-2">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black md:text-lg lg:text-2xl">
              Sekretarz Sądowy
            </div>
            <p className="lg:text-xl">Jeszcze więcej parzenia kawy. Tutaj wykonuję polecenia Sędziego oraz kierownika. Z pracy tej wyniosłem aktywne słuchanie i wyłapywanie tego co najważniejsze. Dodatkowo nauczyło mnie to pracy pod presją czasu.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
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
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2022</time>
            <div className="text-lg font-black md:text-lg lg:text-2xl">
              Start nauki programowania
            </div>
            <p className="lg:text-xl">Kawa bez zmian. Więcej wkuwania oraz praktykowania tego co wkute. Jeśli widzisz tego bloga to znaczy, że jestem w trakcie spełniania mojego marzenia o pozostaniu programistą.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
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
          <div className="timeline-end mb-6">
            <time className="font-mono italic">2025(życzeniowo)</time>
            <div className="text-lg font-black md:text-lg lg:text-2xl">
              Junior Frontend Developer
            </div>
            <p className="lg:text-xl">
              Pierwsza praca w IT u pracodawcy, który mnie doceni. Nie wiem
              tylko co z kawą...
            </p>
          </div>
          <hr />
        </li>
        
      </ul>
    </div>
  );
};
export default EmploymentHistory;
