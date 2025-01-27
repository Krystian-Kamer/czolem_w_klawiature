import { Link } from "react-router-dom";
import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";

const Post5 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Wybacz ten iście clickbaitowy tytuł" />
      <PostText text="Aż podle się czuję, pisząc Ci teraz, że będzie to raczej post techniczny. Wchodzisz tu i myślisz sobie, co typ musiał odwalić, że aż rozwalił swój związek, gdzie ploteczki??" />
      <PostText text="Dobra, żeby Cię nie zawieść połączę te dwa wątki, cholera wie jak, ale spróbujmy." />
      <PostText text="Oczywiście, wszystko co teraz przeczytasz w zakresie mojego związku będzie fikcją literacką, dopijam właśnie kawę i zamieniam się w ekscentrycznego narratora, zaczynamy!" />
      <PostText text="Gatunek: Thriller psychologiczny z elementami programowania." />
      <PostSubtitle subtitle="Mutacje" />
      <PostText text="Mutacje w związku oznaczają kłopoty. Wtedy jeszcze o tym nie wiedziałem." />
      <PostText text="Wiadomo jakie są początki, jedliśmy lody, chodziliśmy do kina, do parku, trzymaliśmy się  za ręce, zauroczenie pełną parą." />
      <PostText text="Gdy teraz słyszę słowo mutacja, to od razu przypominają mi najmroczniejsze scenariusze, te bliżej końca związku, który zaczął już mutować w złym kierunku..." />
      <PostText text="Gdy na początku mówiła - słodko się śmiejesz, teraz mówi - umiesz się tylko śmiać jak debil. Tego typu scenariusze, albo - sam sobie zrób kanapkę, mamusia miała rację, jeśli nie potrafisz znieść mnie kiedy jestem najgorsza, to nie zasługujesz na mnie, kiedy jestem najlepsza." />
      <PostText text='Miałem w mieszkaniu na drzwiach powieszoną tabliczkę z napisem "Nicole 4 Eva".' />
      <PostText text="À propos tablic, tablice towarzyszą nam w JavaScript na co dzień. Nawet tworząc tego bloga udało mi się wpaść w podstępną pułapkę mutacji. Żeby być bardziej przygotowanym i wyczulonym musisz wiedzieć, że..." />
      <PostTextBold text="Są dwa typy metod na tablicach - mutujące i niemutujące." />
      <PostText text="Jeśli nie do końca jesteś zaznajomiony z tematem to bardzo dobrze, jeśli natomiast jesteś, to załóżmy, że nie wiesz co to efekt utopionych kosztów i bezrefleksyjnie kontynuuj." />
      <PostText text="Wracając do wątku głównego, mieliśmy po 20 lat, a przed nami było siódme niebo." />
      <PostSubtitle subtitle="Metody niemutujące" />
      <PostText text="Aniele tak wiele dla Ciebie bym zrobił." />
      <PostText text="Nicole o tym wiedziała, nie wiedziała jednak, że metody niemutujące to takie, które nie niszczą oryginalnej tablicy." />
      <PostText text="Nasz związek był nierozerwalny, sam zobacz:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> myRelationship = [
            <span className="text-success">"nasz"</span>,
            <span className="text-success">"związek"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> newRelationship =
            myRelationship
            <span className="text-info">.</span>
            <span className="text-info">map</span>
            <span className="text-success">{"("}</span>
            <span className="text-accent">{"("}</span>word
            <span className="text-accent">{")"}</span>
            <span>{"=>"}</span>word<span className="text-info">.</span>
            toUpperCase<span className="text-info">()</span>
          </code>
          <span className="text-success">{")"}</span>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">myRelationship</span>)
            <span className="text-base-300">// ["nasz","związek"]</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">newRelationship</span>)
            <span className="text-base-300">// ["NASZ","ZWIĄZEK"]</span>
          </code>
        </pre>
      </div>
      <PostText text="Widzisz, mimo, że rzucono nam pod nogi kłodę w postaci metody map, wyszliśmy z tego bez szwanku. Takie są początki." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Nicole nie ogarniała co to jest referencja, nie bądź jak Nicole, zerknij
        tutaj -{" "}
        <Link
          className="cursor-custom-pointer text-info"
          to={"/blog/typy-prymitywne-i-te-eleganckie-oraz-ich-referencje"}
        >
          referencje
        </Link>
        .
      </p>
      <PostText text="Jeśli już wiesz co to jest referencja to spoko, to znaczy, że wiesz, że w powyższym przykładzie działaliśmy tak naprawdę na jednej tablicy." />
      <PostText text="Żeby Ci udowodnić, że na serio byliśmy zgraną parą, zobacz kolejny przykład:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> ourLove = [
            <span className="text-success">"ja"</span>,
            <span className="text-success"> "i"</span>,
            <span className="text-success"> "Nicole"</span>,
            <span className="text-success"> 4</span>,
            <span className="text-success"> "Eva"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> lonelyNicole = ourLove
            <span className="text-info">.</span>
            <span className="text-info">slice</span>
            <span className="text-success">{"("}</span>2,3
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">ourLove</span>)
            <span className="text-base-300">
              // ["ja", "i", "Nicole", 4, "Eva"]
            </span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">lonelyNicole</span>)
            <span className="text-base-300">// ["Nicole"]</span>
          </code>
        </pre>
      </div>
      <PostText text="Widzisz, nasza miłość była niepodważalna. Nawet jakaś durna metoda slice nas nie poróżniła." />
      <PostText text="Inne metody (oprócz map i slice), które nie mogą nas zranić to:" />
      <PostTextBold text="filter, reduce, flat, find, findIndex, includes, indexOf, lastIndexOf, some, every, concat, slice, toSorted, toReversed, join, toString" />
      <PostText text="Byliśmy praktycznie niezniszczalni." />
      <PostText text="Dobrze jednak, że trzymam maczetę w domu, na wypadek gdyby ktoś spróbował nas skrzywdzić." />
      <PostText text="Zauważyłem ostatnio, że na naszym idealnym jak dotąd związku pojawiają się jakieś niepokojące rysy. Moja ukochana coś długo ostatnio siedzi na telefonie, czy to normalne? Kim jest ten Chris?" />
      <PostText text="I przychodzi później do domu, ale to pewnie przez korki, tak, na pewno przez korki." />
      <PostText text="Na pewno?" />
      <PostSubtitle subtitle="Metody mutujące" />
      <PostText text="- Nicole! Jak to przesadzam? Chcę tylko wiedzieć co masz w telefonie! " />
      <PostText text="- Johnny, nie panujesz nad sobą, to przez ten kod, zmieniłes się, nie poznaję Cię! Odłóż maczetę, pogadajmy." />
      <PostText text="Te pieprzone mutacje, gdyby nie one to wszystko byłoby okej." />
      <PostText text="Mutacje występują, gdy metoda, której używamy, zmienia oryginalną tablicę, że też o tym zapomniałem." />
      <PostText text="Zaraz, zaraz, co to jest?" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> ourLove = [
            <span className="text-success">"ja"</span>,
            <span className="text-success"> "i"</span>,
            <span className="text-success"> "Nicole"</span>,
            <span className="text-success"> 4</span>,
            <span className="text-success"> "Eva"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">ourLove</span>
            <span className="text-info">.</span>
            <span className="text-info">push</span>
            <span className="text-success">{"("}</span>"Chris"
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">ourLove</span>)
            <span className="text-base-300">
              // ["ja", "i", "Nicole", 4, "Eva", "Chris"]
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Czy to żart? Podstępem do naszego życia dostał się jakiś Chris!" />
      <PostText text="Przeklęta metoda push! Zmieniła naszą oryginalną tablicę i wpuściła do naszej miłości intruza." />
      <PostText text="Tak być nie może. Po moim trupe. Moim albo Nicole." />
      <PostSubtitle subtitle="Here's Johnny!" />
      <PostText text="- Johnny, nie panujesz nad sobą, za dużo siedzisz nad tym JavaScriptem, wyjdź na powietrze, na spacer." />
      <PostText text="- Na spacer to my się razem wybierzemy!" />
      <PostText text="Mam nadzieję drogi Czytelniku, że nie przeszkadza Ci, że coś stuka w bagażniku. Jedziemy razem z moimi przyjaciółmi - szpadlem i benzyną - po Chrisa, już znam jego adres, także pójdzie z górki." />
      <PostText text="Poprzedni przykład nie pokazywał pełnego potencjału mutacji, ale ja Ci pokażę, że nie oszalałem, im też pokażę." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> loveTriangle = [
            <span className="text-success">"ja"</span>,
            <span className="text-success"> "Nicole"</span>,
            <span className="text-success"> "Chris"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> sortedLoveTriangle =
            loveTriangle
            <span className="text-info">.</span>
            <span className="text-info">sort</span>
            <span className="text-success">{"("}</span>
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">loveTriangle</span>)
            <span className="text-base-300">// ["Chris", "Nicole", "ja"]</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">sortedLoveTriangle</span>)
            <span className="text-base-300"> // ["Chris", "Nicole", "ja"]</span>
          </code>
        </pre>
      </div>
      <PostText text="Widzisz to co ja? Am I right or am I right ?!? Nie oszalałem! Spadłem na sam koniec trójkąta miłosnego, czy to w loveTriangle czy to w sortedLoveTriangle." />
      <PostText text="Chris na pierwszym miejscu? Ten dupek?" />
      <PostText text="Jak to się stało? To podstępne .sort() zmienia oryginalną tablicę, na której działa, mutuje ją, bezpowrotnie ją profanuje i moją miłość też." />
      <PostText text="Tym właśnie sposobem dowiedziałem się, że coś jest nie tak!" />
      <PostText text="Bowiem istnieją metody na tablicach, które mutują oryginalną tablicę, a są to:" />
      <PostTextBold text="push, pop, shift, unshift, splice, sort, reverse, copyWithin, fill, flatMap" />
      <PostText text="Czemu tak? Nie wiem, tak działa JavaScript. Kurczę, jak głośno coś wali w ten bagażnik!" />
      <PostText text="Chris, nie za bardzo chłopie Cię słyszę, pewnie przez tą taśmę na ustach." />
      <PostSubtitle subtitle="Las" />
      <PostText text="Ale nienaturalnie się przytulają do tych drzew, może przez te ciasne więzy, coś też za dużo płaczu, a za mało o mutacjach. A przecież to ważny temat." />
      <PostText text="- Chris, zadam Ci pytanie i jeśli dobrze odpowiesz, to na razie dam Ci spokój mordeczko, czy kiedy użyję metody splice to zmutuję tablicę czy też nie?" />
      <PostText text="- Nie... - odrzekł, przełykając głośno ślinę." />
      <PostText text="- Dobrze misiaczku, sprawdźmy:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> myThoughts = [
            <span className="text-success">"Johnny"</span>,
            <span className="text-success"> "Nicole"</span>,
            <span className="text-success"> "and"</span>,
            <span className="text-success"> "not"</span>,
            <span className="text-success"> "Chris"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> splicedThoughts =
            myThoughts
            <span className="text-info">.</span>
            <span className="text-info">splice</span>
            <span className="text-success">{"("}</span>2
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">myThoughts</span>)
            <span className="text-base-300">// ["Johnny", "Nicole"]</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">splicedThoughts</span>)
            <span className="text-base-300">// ["and", "not", "Chris"]</span>
          </code>
        </pre>
      </div>
      <PostText text="- Oj, oj, oj, Chris! Wierzyłem, że Ci się uda. Miałeś szansę pół na pół. Prawda jest natomiast taka, że wypadłeś z gry, chłopie." />
      <PostText text="Nie dość, że splice zmodyfikował oryginalną tablicę, to jeszcze stworzył nową tablicę z resztek, która ma od teraz osobne miejsce w pamięci (niezależną referencję)." />
      <PostText text="Właśnie miałem zacząć grać w rzutki, tylko że zamiast rzutką celowałbym maczetą a zamiast tarczy mam Chrisa, ale rzekł coś, czego się nie spodziewałem." />
      <PostText text="- Ale, ale, ale... ja jestem innej orientacji! Nicole to moja przyjaciółka!" />
      <PostText text="Czy to możliwe, że te mutacje aż tak mi zryły beret, pomyślałem. Zerwałem taśmę Nicole." />
      <PostText text="- Johnny, on mówi prawdę! To mój kolega z pracy. Wysyłamy sobie tylko memy! Wypuść nas proszę!" />
      <PostText text="- Aaaa, kochani, czyli to tylko takie nieporozumienie - powiedziałem. Kiedyś będziemy się z tego wszyscy śmiali, he he... no chyba nie myśleliście, że zakopię was tutaj w tym odludnym lesie." />
      <PostSubtitle subtitle="Epilog" />
      <PostText text="Teraz, siedząc sobie w mojej przytulnej celi nadal rozmyślam nad tym co się stało. " />
      <PostText text="Nicole nie odpowiada na moje listy." />
      <PostText text="Będąc tu już 5 rok czasem zadaję sobie to pytanie - jak to się stało, że programowanie zniszczyło mój związek?" />
      <PostTextBold text="Nicole chyba nie była gotowa na mutacje tablic w JavaScript..." />
      <PostText text="Mam nadzieję, że pisząc własny kod Czytelniku, będziesz pamiętał o tym, żeby zwracać uwagę na to jakiej metody używasz." />
      <PostText text="Czołem, do następnego." />
    </div>
  );
};
export default Post5;
