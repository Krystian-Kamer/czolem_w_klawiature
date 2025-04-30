import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";

const Post14 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Hello, is it me You're looking for?" />
      <PostText text="Na razie nie mam wiernych fanów, dlatego pewnie mało kogo to obchodzi, że ten post w ogóle powstał, ale tak, powstał, tak jak i ja." />
      <PostText text="- Na LinkedIn cisza Krystian. Mówisz, że dobrze, a widzę, że nie - powiedziałby wierny fan, gdyby istniał." />
      <PostTextBold text="Gdyby chociażby istniał psychofan, stalker jakiś, to powiedziałby:" />
      <PostText text="- Przecież widziałem ostatnimi czasy wieczorem, że jesteś wykończony! Wpadłeś w jakieś koło zmęczenia! Otrząśnij się. Wyjdź z tego." />
      <PostText text="Rzeczywiście stalkerze, mniej się udzielałem w socjalach." />
      <PostText text="Może to przez to, że sprawy prywatne wymknęły się spod kontroli, a może przez to, że nie miałem nic ciekawego do powiedzenia (choć prędzej to pierwsze)." />
      <PostText text="Chciałem to zmienić, dlatego przychodzę z nowościami." />
      <PostSubtitle subtitle="Ale od początku" />
      <PostText text="Pozdrawiam seniora Pawła, który dokonał tego iście ciężkiego zadania i sprawdził moje wypociny (czyli zrobił code review). Dzięki!" />
      <PostText text="A jak to się zaczęło?" />
      <PostText text="A no, jeśli wiesz to wiesz, a jeśli nie wiesz to właśnie się dowiesz, że dołączyłem do projektu grupowego, gdzie tworzymy grę." />
      <PostText text="To będzie gra online osadzona w post-apokaliptycznej Polsce. Gracz będzie poruszał się na hexmapie. Psy nie szczekają tam dupami - chociaż koncept może się zmienić xd." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Żeby nie być gołosłownym zerknij tu -{" "}
        <a
          className="cursor-custom-pointer mb-4 text-lg leading-relaxed text-info md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl"
          href="https://apolonia-5e667.web.app/lobby"
          target="_blank"
          rel="noopener noreferrer"
        >
          to nad czym pracowałem
        </a>
        .
      </p>
      <PostText text="Wygląda przepięknie. Wiem, w tym momencie całuję sobie sam pupsko, ale no przyznaj sam/sama. Prawie tak dumny jak ojciec, gdy dziecko samo pojedzie na rowerze." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Polecam bibliotekę{" "}
        <a
          className="cursor-custom-pointer mb-4 text-lg leading-relaxed text-info md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl"
          href="https://swiperjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Swiper
        </a>
        , bez której to by się nie udało.
      </p>
      <PostSubtitle subtitle="O projekcie" />
      <PostText text="A więc centrum życia dzieje się na Discordzie. Tam odbywają się spotkania głosowe co 2 tygodnie, tam opowiadamy co do tej pory zrobiliśmy." />
      <PostText text="Tworzenie zadań do wykonania, przypisywanie ich komuś, aktualizowanie ich odbywa się na Clickupie." />
      <PostText text="W Figmie mamy rozpracowane jak ma dany wygląd czegoś... wyglądać." />
      <PostText text="Repozytorium trzymamy na Githubie." />
      <PostText text="Koniec formalności." />
      <PostSubtitle subtitle="Moje lobby" />
      <PostText text="Jako, że nasz głównodowodzący senior Paweł rozpisał wszystko bardzo skrupulatnie na Clickupie, wybrałem sobie ten task, który wydawał mi się ciekawy." />
      <PostText text="Zawsze uważam, że ciekawość to dobry początek, by przyjemnie się pracowało." />
      <PostTextBold text="Było to stworzenie lobby do gry." />
      <PostText text="Z założenia będzie można stworzyć w grze do 3 postaci i grać nimi w wersji darmowej." />
      <PostText text="Robiąc projekty do szuflady nie masz nad sobą seniorowego bicza, biegasz sobie po programistycznej łące, zrywasz kwiatki i wąchasz ich zapach. Sielanka." />
      <PostText text="Tutaj jednak, w projekcie grupowym (czyli takim tycim odzwierciedleniem życia programistycznego codziennego juniora) masz bat nad głową." />
      <PostText text="Metaforyczny oczywiście, no chyba, że to Januszex o tragicznych warunkach." />
      <PostText text="Gdy skończyłem pisać kod odpowiedzialny za lobby to stwierdziłem - dobra, co tam może być nie tak. Działa? Działa. No, czyli wystarczą kosmetyczne zmiany i git." />
      <PostSubtitle subtitle="Git" />
      <PostText text="I tu pojawiły się dwa zaskoczenia." />
      <PostText text="Pierwsze - samo git add., git commit -m i git push nie wystarczą. Okazało się bowiem, że main był na późniejszym etapie niż mój branch." />
      <PostText text="Rozwiązaniem okazał się - git rebase. Ogólnie pracując samemu ciężko odzorować sobie pracę z innymi. Tutaj nie muszę symulować." />
      <PostText text="No więc musiałem dociągnąć zmiany z main-a w moim branchu. W ogóle jeszcze przed, to musiałem nauczyć się tworzyć brancha!" />
      <PostText text="Nauczyłem się tworzyć branche i byłem jak grzeczna małpka, która potrafiła skakać z gałęzi na gałąź (z brancha na branch). Tylko nie dostałem banana, no chyba, że na twarzy." />
      <PostText text="Uważam, że moje umiejętności pracy z gitem wyszybowały w przestworza. Co prawda uczyłem się z kursu Hello Romana i Samuraja, ale to nie to samo co realny projekt." />
      <PostTextBold text="Po drugie, okazało się, że na napisaniu działającego kodu moja praca się nie kończy." />
      <PostText text="Tutaj wjeżdża na białym rumaku..." />
      <PostSubtitle subtitle="Code review" />
      <PostText text="Tak, okazuje się bowiem, że nie jestem mistrzem, że javascriptu nie wyssałem z mlekiem matki, że małpa waląc w klawiaturę lepiej napisałaby jakąś funkcję." />
      <PostText text="Pisałem Pawłowi - czekam na pożądny roast i tak się stało." />
      <PostText text="Chyba porównywalnie dużo czasu spędziłem na tworzeniu co na poprawianiu czegoś co było z dupy. Zaprzyjaźniłem się z enumami, których do końca jeszcze nie rozumiem." />
      <PostTextBold text="Dowiedziałem się też, że juniorzy zwykle przekombinowują." />
      <PostText text="Zamiast najprostszych rozwiązań typu KISS porobiłem jakieś skomplikowane równania, jak Buntownik z wyboru (1997). Pobazgrane kredą na całej tablicy." />
      <PostText text="Teraz, zanim utworzyłem swój drugi pull request, starałem się pomyśleć jak to zrobić najprościej jak się da." />
      <PostText text="Chyba właśnie na tym ma polegać moja przyszła praca. Na stworzeniu kodu, który jest łatwy do odczytania i prosty do updatowania w razie potrzeby." />
      <PostSubtitle subtitle="Czemu ten projekt ma dla mnie sens?" />
      <PostText text="Bo nadzoruje mnie ktoś doświadczony. Kto już w niejednym projekcie siedział, kto widział totalny szit i kto wie jak z niego wyjść z obronną ręką." />
      <PostText text="Gdyby nie senior Paweł to miałbym mniejszą motywację, bo nie byłoby osoby, która może wytknać mi błędy, a tylko dzięki pokazaniu mi gdzie daję dupy mogę potem tego uniknąć." />
      <PostText text="Projekt również ma sens, bo sprawia mi ogromną frajdę, a ja bardzo lubię zasadę - utile dulci - bawiąc uczyć." />
      <PostText text="Jest to też kolejna rzecz, którą mogę dopisać do CV, a która może być dobrze odebrana." />
      <PostSubtitle subtitle="Co tam jeszcze u mnie?" />
      <PostText text="Mimo, że mój zapał twórczy przygasł na LinkedIn to jak widzisz prężnie działa w innych kierunkach związanych z programowaniem." />
      <PostTextBold text="Będę tworzył swój pierwszy komercyjny projekt (jak się nic nie skaszani)." />
      <PostText text="Tak, o to znalazł się szaleniec (szaleńczyni), która stwierdziła, że da mi szansę na stworzenie jej strony internetowej - wizytówki." />
      <PostText text="Co prawda, jest to projekt pro bono, ale od czegoś trzeba zacząć. Zależało mi na stworzeniu czegoś profesjonalnego, co mogę umieścić w CV." />
      <PostText text="Sprawię też komuś radość, nauczę się pracy z klientem, same plusy." />
      <PostSubtitle subtitle="Meetup" />
      <PostText text="Poszedłem też na wydarzenie IT - tzw. F/UX/UI odbywające się w Łodzi." />
      <PostText text="Było bardzo fajnie, pierwsza prezentacja była o bezpieczeństwie w sieci i o tym jak łatwo nas oszukać przez naszą nieuwagę." />
      <PostText text="Druga była o prawach związanych z twórczością i co ma do tego AI." />
      <PostText text="Szczerze jednak mówiąc, pracując codziennie w Sądzie, gdy słyszę o prawie i własności intelektualnej, mam już dość słuchania o tym gdzie indziej. Ot, skrzywienie zawodowe." />
      <PostText text="Ostatnią prezentację przeprowadził Bartek Witczak, człowiek o zdiagnozowanym bądź nie ADHD. Tak jak ja skaczę po branchach, tak on po tematach." />
      <PostText text="Bartek miał prezentację o AI, tzn. jak sobie ułatwić życie korzystając ze sztucznej inteligencji. Jak ustawić zasady ogólne naszemu EjAj-owi." />
      <PostText text="Bardzo przydatna prezentacja nawiasem mówiąc. Warto np. powiedzieć AI, żeby zwracała się do nas jak mentor bądź senior do juniora. Oczywiście wszystko zależy od kontekstu." />
      <PostText text="Polecam też podcast Bartka, który znajdziesz na Spotify - Bartek Witczak Podcast, głównie tematyka frontendu." />
      <PostText text="To chyba byłoby na tyle." />
      <PostText text="A, co do psychoterapeuty! Nie było go. Za drogo. A na NFZ trzeba długo czekać!" />
      <PostText text="Czołem, do następnego!" />
    </div>
  );
};
export default Post14;
