import { Link } from "react-router-dom";
import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";
import womanImg from "/post-assets/post-8-img1.jpg";
import nerdImg from "/post-assets/post-8-img2.jpg";
import willyImg from "/post-assets/post-8-img3.jpg";

const Post8 = () => {
  return (
    <div>
      <PostSubtitle subtitle="W końcu czas na książkę" />
      <PostText text="W dzisiejszym odcinku walimy JavaScript, aby skupić się na niecodziennej recenzji książki Kariera Programisty Johna Sonmeza. Ile można czytać o funkcjach i tablicach, nie?  " />
      <PostSubtitle subtitle="Taktyczne info" />
      <PostTextBold text="Ile stron?" />
      <PostText text="Książka ma 816 stron. Książka to chyba za mało powiedziane, jest to istne kompendium wiedzy." />
      <PostTextBold text="Podtytuł?" />
      <PostText text="Jest - Jak budować doświadczenie, przejść rekrutację i zdobyć pracę marzeń. Clickbaitowy? - Oj tak. Czy mnie zraził ? -Niezbyt." />
      <PostTextBold text="Skąd się o niej dowiedziałem?" />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Jeśli kojarzysz{" "}
        <a
          className="cursor-custom-pointer mb-4 text-lg leading-relaxed text-info md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl"
          href="https://przeprogramowani.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Przeprogramowanych
        </a>
        , to kojarzysz też
        <a
          className="cursor-custom-pointer mb-4 text-lg leading-relaxed text-info md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl"
          href="https://www.linkedin.com/in/mkczarkowski"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Marcina Czarkowskiego
        </a>
        . Właśnie on w jakimś przedpotopowym, przedwąsowym odcinku rekomendował
        tę książkę.
      </p>
      <PostText text="Skusił jak wąż, tylko bez jabłka, bez żebra i bez Adama." />
      <PostTextBold text="Rok powstania" />
      <PostText text="2018 rok, ale nie wpływa to na obecny rynek. Rady są ponadczasowe, także można zluzować portki." />
      <PostTextBold text="Kim jest autor?" />
      <PostText text="Jako, że miała być szczera recenzja, to szczerze Ci powiem, że nie miałem pojęcia kim jest w czasie, gdy książkę kupowałem." />
      <PostText text="Z książki dopiero dowiedziałem się, że John ma dużą wiedzę programistyczną, dużo schudł i ma dużo fajnych pomysłów, które warto wcielić w życie." />
      <PostSubtitle subtitle="Do kogo skierowana?" />
      <PostText text="Raczej dla początkujących, ludzi chcących dowiedzieć się o IT więcej, czyli była idealna dla mnie." />
      <PostText text="Są jednak części przeznaczone stricte dla osób, które już siedzą w IT. Czyli też dla mnie, ale dla mnie z przyszłości. " />
      <PostText text="Każdy znajdzie coś dla siebie, jak w lodziarni czy przybytku dla zmęczonych, przebodźcowanych mężczyzn😉." />
      <PostText text="Tajski masaż z happy endem, lecimy dalej." />
      <PostSubtitle subtitle="Sposób pisania" />
      <PostText text="Jest lekki i przyjemny. To tak jakbyś słuchał kolegi po fachu, który daje Ci dobre rady. Każda część książki podzielona jest na mini artykuły." />
      <PostText text="Ma to swoje plusy, bo jeśli chciałbyś poczytać o czymś konkretnym, to łatwo zerknąć na spis treści i przekierować się w odpowiednie miejsce." />
      <PostText text="Sam spis treści ma 17 stron." />
      <PostText text="Na przykład chciałbym poczytać o networkingu. Przez to, że mam tak rozbudowany spis treści - szukam." />
      <PostTextBold text="Znalazłem - Cześć V. Rozdział 49. Networking." />
      <PostSubtitle subtitle="Jakie mamy części" />
      <PostText text="Książka składa się z 5 części:" />
      <PostText text="I. Jak zacząć karierę programisty?" />
      <PostText text="II. Jak znaleźć pracę?" />
      <PostText text="III. Co musisz wiedzieć o tworzeniu oprogramowania?" />
      <PostText text="IV. Praca w roli programisty" />
      <PostText text="V. Rozwój kariery" />
      <PostText text="Widzisz już mniej więcej czego się spodziewać. Każda część podzielona jest na rozdziały. Czy to książka dla Ciebie ? - Musisz sam na to pytanie odpowiedzieć." />
      <PostText text="Równie dobrze mógłbyś zapytać się mnie - Stary, czy ta laska jest dla mnie? No więc, nie wiem co tam lubisz byku, czy ułożone, czy krejzolki, blondynki czy brunetki, grzeczne czy niegrzeczne." />
      <PostText text="Umówmy się, że opowiem Ci co znajdziesz w każdej części a Ty sam podejmiesz decyzję czy to dziewczyna yyy znaczy książka dla Ciebie." />
      <PostText text="PS. Książka ta jest z typu grzecznych, to nie 50 twarzy Greya." />
      <PostSubtitle subtitle="Część I. Jak zacząć karierę programisty?" />
      <PostText text="Znajdziesz tu opis zawodu programisty, na czym polega jego praca, jaki mieć mindset, jakie umiejętności oraz jak je rozwijać, jaki język programowania wybrać, dostępne ścieżki rozwoju - studia, kursy, samodzielna nauka." />
      <PostText text="Jak widzisz ta część jest bardziej dla osób ciekawych zawodu. W sumie to po tym rozdziale stwierdzisz czy programowanie jest w ogóle dla Ciebie." />
      <PostText text="Jeśli stwierdzisz, że nie to możesz równie dobrze zagrać w kosza tą książką (zamiast piłki), tylko nie na boisku a w domowym zaciszu 📙+🗑️." />
      <PostText text="John w tym rozdziale rzuca dobre rady na temat podejścia do nauki - tj. by postawić na praktykę." />
      <PostSubtitle subtitle="Część II. Jak znaleźć pracę?" />
      <PostText text='No i ten temat to bardziej mnie interesuje. Można powiedzieć, że jest właśnie u mnie "na tapecie".' />
      <PostText text="John omawia tu czym jest staż, jak dostać pracę bez doświadczenia, jak podejść do szukania pracy, jak stworzyć dopasowane CV, jak wygląda rozmowa kwalifikacyjna, jak negocjować, jak odejść z obecnej pracy, rodzaje umów i jeszcze trochę o rekrutacji." />
      <PostText text="Rzec można, że samo mięso🥩." />

      <PostText text="Akurat staż nie za bardzo pasuje do mojej sytuacji." />
      <PostText text="Raczej staż w Polszy wygląda tak, że szukają studenta w trakcie studiów, bo mniejsze podatki. Od razu przegrywam na starcie." />
      <PostText text="Muszę wybrać inny kierunek wejścia do IT, zygzakiem, pokrętną drogą, byle do celu." />
      <PostText text="Oczywiście John nie omija tematu portfolio, które jest obecnie must have. Dodatkowo zwraca uwagę na to, by być obecnym w sieci." />
      <PostTextBold text="Tę radę wziąłem bardzo do serca." />
      <PostText text="Jeden z moich postów na LinkedIn był wyświetlony 21 942 razy! Dla mnie to jakaś liczba z kosmosu." />
      <PostText text="Prędzej byłbym w stanie uwierzyć, że w serialowym Klanie spadnie drugi meteor w to samo miejsce, obłęd." />
      <PostText text="Ale... kropla drąży skałę. Może ktoś spojrzy na moje wypociny na LinkedIn czy na blogu i stwierdz - hmm, fajny koleś, chciałbym z nim pracować albo chociaż pogadać." />
      <PostText text="Co tam mamy jeszcze, a, legitne CV. Tutaj trzeba zwrócić uwagę na fakt, że CV to nasza wizytówka, ma się wyróżniać, być ładne i ma przynosić wartość." />
      <PostTextBold text="Przeglądając tę książkę teraz, mam ochotę aż do niej powrócić. To chyba dobra recenzja tego tytułu." />
      <PostText text="Znajdziesz w tym rozdziale tipy co zrobić, żeby lepiej wypaść na rozmowie o pracę oraz jak negocjować." />
      <PostText text="Dzisiejsze czasy jednak przypominają wielce paskudnego mężczyznę, który spodobał się dziewoi. To znaczy - albo bierzesz tą chłopie, albo sobie dalej czekasz." />
      <PostText text="A czekać możesz baaardzooo długo." />
      <img
        src={womanImg}
        alt="meme image"
        className="my-8 w-full max-w-[500px] justify-self-center shadow-md"
      />
      <PostText text="Jest też fajna rada, że nie musisz od razu aplikować na programistę. Możesz najpierw dostać się do firmy, a dopiero potem przeskoczyć na dream job." />

      <PostSubtitle subtitle="Część III. Co musisz wiedzieć o tworzeniu oprogramowania?" />
      <PostText text="Ta część to raczej taki przekrój możliwych ścieżek programistycznych. Też bardziej dla początkujących moim zdaniem. " />
      <PostText text="No bo jak już jestem nakierowany na frontend, to po co mam czytać o karierze w branży gier video czy o testowaniu. Ten rozdział zatem, gdy już masz określony cel możesz czytać bardziej pobieżnie." />
      <PostText text="Zahacza on jednak o kontrolę wersji, co jest godne uwagi oraz o debugowanie i utrzymywanie kodu." />
      <PostSubtitle subtitle="Część IV. Praca w roli programisty" />
      <PostText text="Ta cześć skierowana jest raczej do tych, którzy już pracują w zawodzie." />
      <PostText text="Z tej części dowiesz się jak sobie radzić z szefem i współpracownikami, co nieco o work life balance, o zespole, o ubiorze, o ocenie pracowniczej, uprzedzeniach, rozmowie o podwyżce i podejściu do kobiet." />
      <PostText text="Jak widzisz dżentelmenie🤵, każdy może wynieść coś dla siebie. " />
      <PostText text="Dowiedziałem się na przykład, aby być pewnym siebie i zrobić dobre pierwsze wrażenie, być graczem zespołowym, ubierać się lepiej niż mogę." />
      <PostText text="Gdy już dostanę pracę, to sobie na spokojnie przeczytam jeszcze raz tą część, wtedy na pewno więcej wyniosę." />
      <PostTextBold text="Tak właśnie powinieneś traktować tę książkę - jako zbiór rad. Jesteś na tym etapie - otwierasz ten rozdział, potem jesteś na tym - otwierasz tamten." />
      <PostText text="To sprawia, że nie będziesz chciał pozbyć się tej książki, bo porady w niej zawarte będą cały czas aktualne." />
      <PostSubtitle subtitle="Część V. Rozwój kariery" />
      <PostText text="Ta część sprawiła, że postanowiłem publikować moje treści." />
      <PostText text="Jestem Johnowi bardzo wdzięczny za porady zawarte w tej części." />
      <PostTextBold text='Gdyby nie ta część, najpewniej nie powstałoby "Czołem w klawiaturę".' />
      <PostText text="Co znajdziemy w tej części - trochę o budowaniu reputacji, networkingu, dbaniu o swoje umiejętności, tworzeniu bloga, freelancingu, szkoleniach, projektach po godzinach i książkach do przeczytania." />
      <PostText text="Ach, marka osobista. Z czego chcę być znany? Musiałem odpowiedzieć sobie na to bardzo ważne pytanie, bez wyrzucania kaktusa za okno." />
      <PostText text="Jako, że od dziecka miałem poczucie humoru, postawiłem na połączenie programowania z humorem." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Jeśli kojarzysz{" "}
        <a
          className="cursor-custom-pointer mb-4 text-lg leading-relaxed text-info md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl"
          href="https://websamuraj.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Samuraja Programowania
        </a>
        , to na pewno mnie zrozumiesz. Bartek idealnie łączy programowanie z
        zabawą i ciekawymi przykładami.
      </p>

      <PostText text="Oglądanie jego lekcji to czysta przyjemność." />
      <PostText text="Pomyślałem, że ja też tak chcę, tylko na moich zasadach i po mojemu, z lekko ostrzejszym humorem." />
      <PostTextBold text="Networking." />
      <PostText text="Warto jest przynosić wartość i postawić na networking." />
      <PostText text="Powiem Ci, że po przeczytaniu tej książki zainteresowałem się wydarzeniami w mojej okolicy." />
      <PostTextBold text="I to był strzał w dziesiątkę. Okazuje się bowiem, że w zapyziałej Łodzi odbywają się spotkania programistyczne o tematyce frontendu." />
      <PostText text="Uczęszczam na nie, gdy tylko mam taką możliwość." />
      <PostText text="Możesz mnie zobaczyć najczęściej w kącie, choć nie na karnym jeżyku." />
      <PostText text="Jeśli mnie poznasz bliżej to na prawdę zyskuję, jestem wygadany i wyluzowany. W nowym  środowisku czuję się jednak niepewnie." />
      <img
        src={nerdImg}
        alt="meme image"
        className="my-8 w-full max-w-[500px] justify-self-center shadow-md"
      />
      <PostTextBold text="Robię co mogę by wyjść z mojej strefy komfortu, czasem się udaje, a czasem nie." />
      <PostText text='Tym bardziej jestem wdzięczny Agnieszce, organizatorce jednego z meetupów F/UX/UI, że stawia jak Nokia na - "Connecting people"🤙.' />
      <PostText text="Co mam na myśli? Np. zachowanie typu - hej, co tak siedzisz sam, chodź i pogadaj z nami." />
      <PostText text="Ostatnio zapisałem sobie w moim dzienniku zasadę - działam mimo strachu. Chciałbym się do niej stosować. Zobaczymy jak wyjdzie." />
      <PostText text="John propaguje też zasadę taką, że jeśli jestem przydatny to mnie nie zastąpią, a jestem przydatny, gdy inwestuję w moje umiejętności." />
      <PostText text="I nawet gdy mnie zastąpią, to szybko się odnajdę, bo cały czas jestem na bieżąco, a więc nowy pracodawca chętniej mnie zatrudni. Szach mat." />
      <PostTextBold text="Tworzenie bloga." />
      <PostText text="Autor jasno mówi - każdy programista powinien prowadzić bloga." />
      <PostText text="Ja akurat mam tak, że patrzę na ludzi, którym się udało. Johnowi się udało, zrobił tak i tak." />
      <PostText text="Potem stwierdzam sobie - dobra, mogę spróbować. Jeśli to dla mnie, to spoko, jeśli nie, to poszukam dalej." />
      <PostText text="Okazuje się jednak, że pisanie artykułów sprawia mi ogromną frajdę." />
      <PostText text="Mam nadzieję, że Tobie czytanie  też sprawia frajdę😬🗡️. Jeśli nie to wiedz, że będę cierpiał prawie tak bardzo jak Syzyf przy wtaczaniu kamienia🪨 pod górkę." />
      <PostText text="Zachęciło mnie to, że autor zauważył, że pojawiały się oferty pracy i różne możliwości." />
      <PostText text="Głównie ta pierwsza część mnie zachęciła. Kto nie chciałby na moim miejscu dostać oferty pracy? To jak wygrana w lotka." />
      <PostText text="Oby tak było, bo na razie wieje sandałem. To znaczy żaden rekruter jeszcze się nie odezwał. Pewnie wstydzi się odezwać jak ja, gdy jestem na networkingu😊." />
      <PostText text="Ale nie gryzę. Chyba, że napisane jest w ofercie, że mam gryźć. Wtedy to nawet poleci mi piana z pyska na zawołanie, jak dobremu aktorowi." />
      <img
        src={willyImg}
        alt="meme image"
        className="my-8 w-full max-w-[500px] justify-self-center shadow-md"
      />
      <PostText text="John pisze, że jego blog stał się jego głównym źródłem dochodu. Wow! Ja byłbym happy, gdyby chociaż z bloga na jedną kawkę się uzbierało🤗." />
      <PostText text="Muszę Ci też powiedzieć, że mam bardzo pozytywny feedback, wiele ludzi do mnie pisze, że im się podoba to co tworzę. To daje kopa do działania." />
      <PostText text="Kto by się spodziewał? Nie ja." />
      <PostText text="Sprostuję jedną rzecz. Blog to dla mnie przede wszystkim frajda. Sposób na przekazanie wiedzy. Nie założyłem go skuszony ofertami pracy. To być może będzie produkt uboczny mego szalonego i dziwnego dzieła." />
      <PostTextBold text="John też zwraca uwagę, by postawić na konsekwencję. " />
      <PostText text="Jako, że jestem dobrym uczniem, wpadłem na pomysł, by każdego posta blogowego wrzucać co poniedziałek." />
      <PostText text="W ten sposób nie ma odwrotu, sam wyznaczyłem sobie deadline. Muszę się go trzymać." />
      <PostText text="Poniżej cytat z książki:" />
      <PostTextBold text='"Dyscyplina to robienie tego, co powinieneś robić, bez względu na to, jak się z tym czujesz."' />
      <PostText text="Dokładnie tak jest, trzeba pisać i pisać. " />
      <PostText text="W części tej John wykracza też poza programowanie - podpowiada, by mieć poduszkę bezpieczeństwa i co zrobić, żeby czuć się użytecznym na rynku." />
      <PostText text="Dotyka też tematu rozwoju osobistego i czytania książek - a to mi bardzo odpowiada." />
      <PostText text="W ostatnim roku przeczytałem bardzo dużo rozwojowych książek, z czego jestem cholernie dumny. W poprzednie lata była posucha, zero, nada, rien, null." />
      <PostText text="Czytanie rozwojowych książek nakierowuje na to co najważniejsze." />
      <PostSubtitle subtitle="Moja ocena" />
      <PostText text="Nie będzie tu punktacji w skali hypnotajzing, ale powiem Ci, że..." />
      <PostTextBold text="Książka bardzo mi pomogła." />
      <PostText text="Ukierunkowała mnie na dobrą drogę. Pokazała, w którą stronę iść." />
      <PostText text="Dowiedziałem się co mogę zrobić lepiej, co robiłem źle." />
      <PostText text="Gdy tylko będzie mnie interesował jakiś temat, to wystarczy przelecieć spis treści i łatwo trafię tam gdzie chcę." />
      <PostText text="Wiem, że jeszcze do niej wrócę, już bez żadnych złudzeń, lecz teraz idź precz ode mnie, nie szukaj puenty tu, dziś jej nie będzie, la lala laaaa, la la la la la la laaa." />
      <PostText text="Czołem, do następnego." />
    </div>
  );
};
export default Post8;
