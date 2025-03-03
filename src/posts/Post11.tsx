import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";

const Post11 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Zrywamy ze sobą?" />
      <PostText text="-Wiesz, to nie Ty, to ja...-wyszeptałem." />
      <PostText text="-Dlaczego mi to robisz? - powiedziała zapłakanym głosem - ocierając łzy, dodała - uwielbiam Twoje posty, jak ja sobie poradzę bez nich i bez Ciebie!?" />
      <PostText text="-Muszę pobyć chwilę ze sobą, pozastanawiać się nad tym wszystkim, czego ja chcę, muszę odnaleźć siebie, tego kwiatu jest pół światu - odparłem." />
      <PostText text="-Na serio?" />
      <PostTextBold text="-Nie! Po prostu nadałem sobie zbyt wielkie tempo! Blog, LinkedIn, nauka nowych rzeczy, dołączenie do projektu grupowego. A gdzie czas na projekty?" />
      <PostSubtitle subtitle="Od kuchni" />
      <PostText text="Szef kuchni Krystian w tygodniu ma około 2 godzin dziennie na rzeczy związane z programowaniem. W weekendy tego czasu jest ciutkę więcej." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Pisanie posta technicznego zajmuje mi około
        <span className="font-bold"> 3 dni (6 godzin)</span>.
      </p>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        To znaczy, że na inne rzeczy programistyczne zostaje mi
        <span className="font-bold"> 4 dni</span>.
      </p>
      <PostText text="Obecnie uczę się Next.js. Potem jest w planach React Testing Library, projekty do portfolio, dodatkowo ten projekt grupowy. Mój metaforyczny rozrusznik tego nie wytrzymuje🥲." />
      <PostText text="Gdyby doba miała więcej niż 24 godziny to jeszcze dałbym radę, ale tak nie jest. Przykro mi to mówić, ale muszę zwolnić." />
      <PostText text="Dodatkowo dziewczyna powoli zapomina jak wygląda moja facjata, a jest nieliczną z osób, które lubią na nią patrzeć, także muszę to uwzględnić w kalendarzu." />
      <PostSubtitle subtitle="Wszystko ma swoje priorytety" />
      <PostText text="Niestety." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Priorytetem jest dla mnie obecnie znalezienie pracy jako
        <span className="font-bold"> Junior Frontend Developer</span>.
      </p>
      <PostText text="Zadałem sobie kolejne ciężkie pytanie - jak mogę dostać tę pracę najszybciej? Odpowiedź nasuwa się jedna, no w sumie dwie - oszałamiajace portfolio i marka osobista." />
      <PostText text="Pisząc dwa posty w miesiacu mogę skupić się bardziej na nauce nowych rzeczy, które przełożą się na stworzenie dodatkowych projektów do portfolio." />
      <PostText text="Taka sytuacja😢." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Dalej jednak będę wrzucał posty na{" "}
        <a
          className="cursor-custom-pointer mb-4 text-lg leading-relaxed text-info md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl"
          href="https://www.linkedin.com/in/krystian-kamer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        , ponieważ jest to szybsze rozwiązanie i dotrze do większej ilości osób.
        Tak uważam. Także wypatruj moich uskrzydlających postów, nietuzinkowy
        ornitologu.
      </p>
      <PostText text="Wiesz, gdybym już pracował w zawodzie i nie musiałbym przeznaczać aż tyle czasu na naukę nowych rzeczy - publikowałbym treści tutaj jak dotychczas, co każdy poniedziałek." />
      <PostText text="Rzeczywistość jest jednak jak sławny boxer Tyson, powaliła mnie na ziemię swoim prawym sierpowym, tylko bez odgryzienia ucha." />
      <PostSubtitle subtitle="Kontakty" />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Pozasądownie ustaliłem, że nasze kontakty polegające na dostarczeniu
        posta odbywać się będą bez obecności innych osób,
        <span className="font-bold"> w każdy pierwszy poniedziałek </span>
        miesiąca. Ale to nie wszystko!
      </p>
      <PostText text="Tak, TV Mango powinno mnie zatrudnić u siebie, chociażby za budowanie napięcia." />
      <PostText text="Czytając ten post dalej, właśnie w tej chwili, dowiesz się, że oprócz ww. poniedziałkowego posta pojawi się też drugi post, bez określonej daty!" />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Dokładnie,
        <span className="font-bold"> 2 POSTY W CENIE JEDNEGO</span>. Dlatego nie
        zwlekaj i obserwuj bacznie mój LinkedIn, gdzie dowiesz się o drugim
        poście! Wysyłka gratis😉.
      </p>
      <PostText text="To orzeczenie jest niezaskarżalne i podlega zmianie zależnej od humorku autora bloga." />
      <PostText text="Sorry, że tak wyszło. Mam nadzieję, że zrozumiesz, amigo. Trzymaj się cieplutko." />
      <PostText text="Czołem, do następnego!" />
    </div>
  );
};
export default Post11;
