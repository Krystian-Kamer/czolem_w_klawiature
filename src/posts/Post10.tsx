import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";
import { Link } from "react-router-dom";

const Post10 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Miło, że wpadłeś/wpadłaś" />
      <PostText text="Chociaż dziewczyny raczej nie chciałyby tego usłyszeć. Nie tak się buduje markę osobistą! Tu trzeba wyczucia, pokazania, że jest się ekspertem w danej dziedzinie." />
      <PostText text="To może jeszcze raz." />
      <progress
        className="progress progress-accent w-56"
        value={10}
        max="100"
      ></progress>
      <PostSubtitle subtitle="Miło, że tu jesteś!" />
      <PostText text="Od razu lepiej. Pasek efektywnej marki osobistej wzrasta!" />
      <progress
        className="progress progress-accent w-56"
        value={90}
        max="100"
      ></progress>
      <PostText text="Lord Whistledown (a raczej Christiandown) właśnie strzela palcami i moczy pióro w atramencie, żeby dać Ci to po co tu przyszedłeś." />
      <PostText text="Ciepłe kakałko w dłoń i czytelniku jedziemy z tematem." />
      <PostSubtitle subtitle="Początki" />
      <PostText text="Zaczynając z publikowaniem treści na blogu musiałem się mocno zastanowić, jak dotrzeć do odbiorców." />
      <PostText text="Naturalnym miejscem na to wydawał mi się LinkedIn. Mało kto wejdzie bezpośrednio z Google na mój blog. Szczególnie gdy dopiero rozpocząłem jego prowadzenie." />
      <PostText text="Kwestia pozycjonowania i te sprawy." />
      <PostTextBold text="LinkedIn" />
      <PostText text="Zaplanowałem sobie, że każdy blogowy artykuł zacznę wrzucać na LinkedIn. Wtedy dotrze on do większej ilości osób. Tak też się stało." />
      <PostText text="Żeby nie być gołosłownym, przedstawię Ci statystyki z dnia 26.02.2025 r." />
      <PostText text="Więc:" />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>Od 10 lutego 2025 r. bloga odwiedziło 116 osób.</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>Od tej samej daty stronę zobaczono 319 razy.</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>3</th>
              <td>
                W ciągu tygodnia 17 osób weszło na bloga poprzez link z
                LinkedIn, 2 osoby z githuba, 1 osoba z facebooka.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostText text="Jak sam widzisz, najwięcej osób odwiedza mojego bloga właśnie poprzez LinkedIn." />
      <PostText text="Wniosek nasunął się sam - muszę być aktywny na LinkedIn. " />
      <PostText text="Problem jest taki, że nasz kochany LinkedIn przycina zasięgi, kiedy wrzucasz link w poście. Widziałem, że niektórzy wrzucają link w komentarz i taką właśnie strategię obrałem." />
      <PostText text="Dlaczego tak się dzieje? Ponieważ tej aplikacji zależy na tym, żebyś jak najdłużej tam przebywał. Jak wejdziesz w link to przerwiesz ten cykl, a więc nie będzie tego promował." />
      <PostText text="Sukcesywnie wrzucam co tydzień w poniedziałek z rana nowy artykuł na blogu i nowy post na LinkedIn o tym zacnym przedsięwzięciu." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Z powodów opisanych w{" "}
        <Link
          className="cursor-custom-pointer text-info"
          to={"/blog/rozrusznik-nie-wytrzymuje-zwalniam-tempo-niestety"}
        >
          Poście 11{" "}
        </Link>
        muszę jednak ciutkę zwolnić, jak wejdziesz to się dowiesz czemu😢.
      </p>
      <PostSubtitle subtitle="Im dalej w las tym więcej pomysłów" />
      <PostText text="Jako, że dowiedziałem się, że kochany niebieski portal, gdzie chwalimy się umiejętnościami Jutra przycina mi zasięgi, postanowiłem wymyślić nową strategię." />
      <PostText text="Będę publikował dodatkowe posty na LinkedIn o mojej drodze do przebranżowienia! To jest myśl!" />
      <PostText text="Robiąc to, przełamałem pewną barierę. Barierę bycia niewidzialnym. Jest to coś dla mnie nowego, bo zawsze bałem się odzywać i publicznie o czymś mówić." />
      <PostText text="Ale wychodzenie ze swojej strefy komfortu ma swoje plusy. Dzięki temu się rozwijasz." />
      <PostText text="Staram się nie przejmować, gdy wrzucam post. Czasem wychodzi a czasem nie. Zdziwiło mnie, że przejmuję się czy post zebrał jakieś lajki i komentarze." />
      <PostText text="Odczuwałem smutek, gdy okazywało się, że post nie dotarł do wielu osób. Ciekawe zjawisko psychologiczne. Tak jakbym uzależniał swoje szczęście od feedbacku." />
      <PostText text="Nauczyłem się czegoś nowego o sobie. Zapytałem ChatGPT co o tym sądzi i stwierdził:" />
      <PostText text="Mózg jest zaprogramowany, by szukać społecznego uznania - to pozostałość po czasach, gdy przynależność do grupy była kluczowa dla przetrwania. Możesz zacząć traktować swoje posty nie jako test akceptacji, ale jako eksperyment - uczysz się, co działa, co nie, ale niezależnie od reakcji, samo działanie jest już wygraną." />
      <PostText text="Brawa dla mego darmowego bezprzewodowego terapeuty, tak zrobię." />
      <PostSubtitle subtitle="Określenie marki" />
      <PostText text="Zapytałem mojej koleżanki na LinkedIn jak mam określić swoją markę osobistą, żeby działała." />
      <PostText text="Odpowiedziała mi, żebym zidentyfikował grupę docelową i bawił się treścią - raz post z karuzelą, raz ze zdjęciem, etc." />
      <PostText text="Wylałem też moje szarpiące nerwy wypociny rozpaczy do ww. terapeuty z zapytaniem co on o tym sądzi." />
      <PostText text="Dał mi 3 rady:" />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>
                Buduj wizerunek kompetentnego, rozwijającego się programisty.
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>Wyróżniaj się humorem i autentycznością.</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>3</th>
              <td>
                Przyciągaj rekruterów oraz potencjalnych mentorów i znajomości
                branżowe.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostText text="Nie brzmią zbyt skomplikowanie." />
      <PostText text="Doszedłem do wniosku, że po pierwsze chcę rozweselać ludzi i ich edukować. " />
      <PostText text="Po drugie, chcę publikować tematy z 3 obszarów zainteresowania - programowanie, przebranżowienie, rozwój." />
      <PostSubtitle subtitle="Jak mi idzie na LinkedIn" />
      <PostText text="Powiem Ci, że czuję się trochę jak turysta zrzucony z samolotu w tropikalne lasy." />
      <PostText text="Albo jakbym był przechodniem w uniwersum Dzikiego Zachodu, gdzie Clint Eastwood palący cygaro strzela do bandziorów." />
      <PostText text="O co mi chodzi? To znaczy, że mam poczucie, że nie wiem co ja tu robię i jak mam się odnaleźć. Nie przewidzisz co się stanie. Jeden post będzie miał 200 wyświetleń a jeden 21 tysięcy (tak, tak miałem)." />
      <PostText text="Jest to taka platforma, która mnie często triggeruje." />
      <PostText text="Scrollując tam, mam wrażenie, że w większości widzę posty kopiuj wklej. Albo ktoś szuka pracy, albo pisze o tym, że AI zastąpi programistów, albo chwali się umiejętnościami jutra od Google." />
      <PostText text="Trzeba z uwagą szukać wartościowych treści, z lornetką w ciemności." />
      <PostText text="Wartościowe posty są jak trufle w lesie, a ja jestem jak tresowana świnia. Tak, w tym przypadku facet to świnia, jak to śpiewał Big Cyc. I Ty dobrze o tym wiesz." />
      <PostText text="Z drugiej strony zaś jestem wdzięczny, bo poznałem bardzo dużo fajnych osób i jest to platforma, gdzie mogę publikować swoje treści." />
      <PostSubtitle subtitle="Moje przemyślenia" />
      <PostTextBold text="Najwięcej interakcji mają posty, które są clickbaitami, niestety" />
      <PostText text="Im bardziej clickbaitowy - tym lepiej. Trochę trzeba się wczuć w rolę jakiegoś gościa pracującego dla gazety." />
      <PostText text="Np. mąż zadźgał starą kotletem, emeryt ukradł 20-latce stanik, łyknęła 10 tabletek na przeczyszczenie - wywiad z pierwszej ręki z hydraulikiem." />
      <PostTextBold text="Trzy pierwsze linijki przesądzają o zasięgach" />
      <PostText text="Czemu? Bo to one są widoczne jak scrollujesz na LinkedIn. Dalej masz przycisk do rozwinięcia posta." />
      <PostTextBold text="Jeśli oznaczysz osobę lub firmę - masz większe zasięgi" />
      <PostText text="Post, o którym pisałem, że dotarł do ponad 20 tysięcy osób był postem, w którym oznaczyłem No Fluff Jobs." />
      <PostText text="Dodatkowo NFJ odpowiedziało pod tym postem, więc to również podbiło zasięg." />
      <PostTextBold text="Komentarze podbijają oglądalność" />
      <PostText text="Samo zalajkowaine to za mało. Natomiast, gdy pojawi się komentarz pod postem, od razu wyświetlenia przyśpieszają." />
      <PostTextBold text="Link w poście obcina zasięg" />
      <PostText text="Pisałem o tym wyżej, ale warto to podkreślić. Link umieszczam w komentarzu." />
      <PostTextBold text="Gównoburzowe posty pną się wyżej" />
      <PostText text="Wzbudza to emocje, ludzie będą pisać komentarze ze swoim zdaniem. Kontrowersyjne tematy po prostu takie są." />
      <PostText text="Najlepiej napisz, że AI zastąpi programistów. Dotrzesz tam, gdzie Ci się nie śniło." />
      <PostTextBold text="Dzień i pora dnia się liczy" />
      <PostText text="Na 80% jestem przekonany, że posty wrzucane w dni robocze docierają dalej, tak jak i jestem przekonany na trochę więcej, że rozm..., że pora dnia ma znaczenie!" />
      <PostText text="To znaczy - lepiej nie wrzucać w weekend i lepiej postować od popołudnia (wieczorem lipnie to wygląda)." />
      <PostSubtitle subtitle="Feedback" />
      <PostText text="Nie spadł na mnie żaden hejt. Nastąpiła wymiana zdań, ale na poziomie." />
      <PostText text="To co się zadziało to bardzo dużo polubień postów, komentarzy, ludzie pisali mi prywatnie, że bardzo fajnie blog wygląda." />
      <PostText text="Ja sam pytałem też o feedback, co można by poprawić, jakie oni mają pomysły." />
      <PostText text="Byli też tacy co go zjechali. No i spoko. Nie każdemu przypadnie do gustu. To nie banknoty w walizce zostawione na dworcu." />
      <PostText text="Wymiana zdań na LinkedIn też uczy. Mogę mieć swoje zdanie, ktoś napisze swoje i na podstawie tego mogę uaktualnić swoje przekonania." />
      <PostText text="Na przykład uznałem, że jak w zadaniu technicznym jest zrób to i to - to mam zrobić to i to. A w dzisiejszych czasach chodzi o to, że mam zrobić coś extra, żeby się wykazać." />
      <PostText text="Uaktualniłem swoje neurony o tą wiedzę." />
      <PostText text="Miły kolega Bartosz, którego poznałem na LinkedIn stał się moim pierwszym Sugar Daddy, bo zaproponował, że da mi LinkedIn Premium na 2 miesiące za friko." />
      <PostText text="Także bycie aktywnym się opłaca." />
      <PostText text="Niektórzy też pisali, że robię super robotę i że jak będzie u nich wakat w firmie to mogą mnie polecić." />
      <PostSubtitle subtitle="Czy mam pomysły na bloga" />
      <PostText text="Pomysły są, spokojnie. Mam listę tematów u siebie na komputerze. Czasem, gdy chcę się więcej pouczyć to wybieram tematy nietechniczne, bo są szybsze w opracowaniu." />
      <PostText text="Bardzo mi się podoba pisanie postów, bo mogę być sobą, mogę napisać - dupa, pieprzenie, nasrane w kodzie, rzygam tym i tamtym, nikt mi tego nie zabroni, magia." />
      <PostSubtitle subtitle="Co z metą?" />
      <PostText text="Określmy czym jest dla mnie meta." />
      <PostText text="Dla niektórych jest to fajny biały proszek. " />
      <PostTextBold text="Dla mnie to dostanie pracy jako junior frontend developer." />
      <PostText text="Biorąc pod uwagę, że jest mało ofert a dużo kandydatów stwierdzić muszę, że tak, meta jest daleko." />
      <PostText text="Pozytywnie bym się zaskoczył, gdyby okazało się, że jest za rogiem. Co mi jednak pozostaje?" />
      <PostText text="Kucie, kucie i jeszcze raz kucie, jak na hucie. Tylko brak umiejętności mnie obecnie ogranicza." />
      <PostText text="Wniosek jest prosty, nauka = praca. Można dodać współczynnik znajomości do zwiększenia szans, wiesz jak jest, amigo." />
      <PostText text="Ostatnio brałem udział w rekrutacji z innym kolegą. Zapuściłem żurawia na jego profil i zobaczyłem - znajomość frontu, backendu, studia informatyczne i staże w firmach IT." />
      <PostText text="Trzeba zadawać sobie trudne pytania. Czemu firma IT ma zatrudnić właśnie mnie, skoro są lepsi specjaliści. No właśnie, czemu? Jak się domyślasz dostałem odmowę." />
      <PostText text="Mogę się załamywać i szukać pracy w Lidlu, albo mogę też pocisnąć dalej z nauką. Dojdę wtedy do etapu, gdy to ja będę tym lepszym specjalistą, kwestia czasu." />
      <PostSubtitle subtitle="Co u mnie nowego?" />
      <PostText text="Obecnie dalej uczę się Next.js. Jestem nim zachwycony. To, w jaki sposób działa tam routing jest bardzo minimalistyczne, intuicyjne i proste." />
      <PostText text="Dodatkowo, dołączyłem do pierwszego projektu grupowego, który tworzy grę online w klimacie post-apo." />
      <PostText text="Kiedyś o tym pisałem na LinkedIn, projekt dodatkowy powinien przynosić frajdę i ten taki jest." />
      <PostText text="Nie trzeba pytać mnie dwa razy czy chcę dołączyć do projektu, gdzie tworzona będzie gra. Projekt będzie mega rozbudowany. Postacie, ekwipunki, plansza z mgłą wojny, przeszukiwanie ruin, walka PvP. Brzmi ambitnie i tak jest." />
      <PostText text="Mogę nauczyć się wielu różnych rzeczy jak praca w zespole, rozwiązywanie konfliktów w git, zarządzanie projektem." />
      <PostText text="Wziałem udział w 2 rekrutacjach, gdzie dostałem odmowę, ale chociaż poćwiczyłem skilla." />
      <PostSubtitle subtitle="Co dalej?" />
      <PostText text="Po wybuchu metaforycznej programistycznej bomby atomowej w postaci ogromnych wymagań na juniora, wiedz, że przeżyje karaluszek Krystian, który dalej będzie robił swoje." />
      <PostText text="Inni po takim wybuchu zawrócą, uciekną, rzucą to programowanie w cholerę." />
      <PostText text="A ja w końcu wpełznę do jakiejś organizacji, gdzie zostanę przyjęty, doceniony i oby nie zdeptany." />
      <PostText text="Czołem, do następnego!" />
    </div>
  );
};
export default Post10;
