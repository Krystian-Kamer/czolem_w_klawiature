import { Link } from "react-router-dom";
import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";

const Post7 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Jako anegdota" />
      <PostText text="Ciekawie się złożyło, a jest to przypadkiem, iż ostatnie 3 grafiki na blogu przedstawiają kolejno - młodego mężczyznę z brodą, starszego mężczyznę z brodą a teraz mamy nagrobek." />
      <PostText text="I tak jak my przemijamy, tak nasz kod zostaje." />
      <PostText text="Dobrze jest więc pisać czysty kod, nawet mając nieczyste myśli." />
      <PostText text='Miałeś kiedyś sytuację, że patrzyłeś na czyiś kod i pomyślałeś - "Ja pierdyle kto to napisał??", a potem - "A, to ja...". Ja jeszcze nie, ale mam nadzieję, że tak się wydarzy.' />
      <PostTextBold text="Czemu? Bo żeby być w czymś dobrym, najpierw trzeba być w tym złym." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Muszę dostać <span className="font-bold"> druzgocący code review </span>
        na twarz, jak kiedyś dyktando z polskiego, całe pokreślone na czerwono,
        żeby wiedzieć, że mam nad czym pracować.
      </p>
      <PostText text="Oczywiście zszedłem z głównego wątku jak dziadziunio, który opowiadał wnuczkowi o II Wojnie Światowej a skończył na tym, że babka przesoliła grochówkę. Pardon." />
      <PostSubtitle subtitle="Tyle szumu przez te 3 kropki?" />
      <PostText text='Jeśli czytasz mojego bloga regularnie (a oby tak było, w przeciwnym przypadku nie musisz mówić 3 razy "Bloody Christian", żebym pojawił się za Tobą w lustrze), to wiesz, że ES6 grubo namieszał w JS.' />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Namieszał tak grubo, że te
        <span className="font-bold"> trzy kropki </span>znaczą co innego,
        zależnie od kontekstu, w którym są użyte.
      </p>
      <PostText text='Może ktoś tworzący wypił o jedną małpeczkę za dużo, a może stwierdził - "JS już jest i tak zrąbany, dorzućmy jeszcze jeden syf, niech to wszystko płonie".' />
      <PostText text="Anyway, kontekst." />
      <PostSubtitle subtitle="Rest in peace" />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Do tego zagadnienia przyda Ci się zaznajomienie z{" "}
        <Link
          className="cursor-custom-pointer text-info"
          to={"/blog/funkcje-i-ich-funkcje-oraz-parametry-i-argumenty"}
        >
          funkcjami
        </Link>
        . Znasz? Dobra, to zaczynamy.
      </p>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        <span className="font-bold"> Rest </span>używamy jeśli chodzi o funkcje
        i ich parametry, zwraca tablicę. Jest trochę jak gołąb zbierający
        resztki z ziemi, a trochę jak żuk gnojarz, zbierający wszystko do kupy.
      </p>
      <PostText text="Zerknij:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> whatBeetleLoveTheMost ={" "}
            <span className="text-info">
              (<span className="text-neutral">...shit</span>){" "}
            </span>{" "}
            <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">shit</span>){" "}
            <span className="text-base-300">// ['K', 'U', 'P', 'A']</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">shit</span>.join
            <span className="text-info">
              (<span className="text-neutral">{"''"}</span>)
            </span>
            ) <span className="text-base-300">// "KUPA"</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <span>whatBeetleLoveTheMost</span>
          <span className="text-info">
            (<span className="text-success">"K"</span>,{" "}
            <span className="text-success">"U"</span>,{" "}
            <span className="text-success">"P"</span>,{" "}
            <span className="text-success">"A"</span>)
          </span>{" "}
        </pre>
      </div>
      <PostText text="Wszystkie nasze 4 parametry zostały zebrane dosłownie i w przenośni (!!!) w kupę i utworzyły tablicę!" />
      <PostText text="Drugi console.log z metodą join zamienił tablicę na string, tworząc przy tym jeszcze więcej kupy." />
      <PostText text="To mały krok dla człowieka i jeszcze mniejszy dla ludzkości, ale za to wielkie szczęście dla żuczka gnojarza. Niech się chłopak nacieszy." />
      <PostTextBold text="Co jeszcze potrafi to cudeńko?" />
      <PostText text="Ogniem z tyłka nie zionie nawet i po ostrym kebsie, ale potrafi olać osobne parametry i pozamiatać wszystkie pozostałe wartości do worka jak odkurzacz NoNo z Teletubisiów." />
      <PostText text="Obczajmy razem:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> gimmeTeletubbies ={" "}
            <span className="text-info">
              (
              <span className="text-neutral">
                teletubby1, teletubby2, ...restOfTeletubbies
              </span>
              ){" "}
            </span>{" "}
            <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">teletubby1</span>){" "}
            <span className="text-base-300">// "Tinky Winky"</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">teletubby2</span>){" "}
            <span className="text-base-300">// "Dipsy"</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">restOfTeletubbies</span>){" "}
            <span className="text-base-300">// ["Laa-Laa", "Po"]</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <span>gimmeTeletubbies</span>
          <span className="text-info">
            (<span className="text-success">"Tinky Winky"</span>,{" "}
            <span className="text-success">"Dipsy"</span>,{" "}
            <span className="text-success">"Laa-Laa"</span>,{" "}
            <span className="text-success">"Po"</span>)
          </span>{" "}
        </pre>
      </div>
      <PostText text="Co się zadziało?" />
      <PostText text="1. Argument Tinky Winky podstawił się za parametr teletubby1." />
      <PostText text="2. Argument Dipsy podstawił się za parametr teletubby2." />
      <PostText text="3. Argument 3 i 4 a więc Laa-Laa i Po zostały zebrane w jedno i wrzucone do tablicy." />
      <PostTextBold
        text="Operator rest musi znajdować się na samym końcu przy podawaniu
        parametrów w funkcji."
      />
      <PostText text="Przy takim zapisie (teletuby1, ...restOfTeletubbies, teletubby4) nie udałoby się. Zapamiętaj, rest zbiera tylko resztki." />
      <PostTextBold text="Rest może być tylko jeden przy podawaniu parametrów." />
      <PostText
        text="Nie może być (...teletubbies2, ...restOfTeletubbies). Nie ma tak, że dwa
        gołębie dojadają resztki. Gołąb może być tylko jeden."
      />
      <PostSubtitle subtitle="Nie ma operatora rozpierniczenia🥲" />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Mamy za to operator <span className="font-bold"> spread</span>, który
        rozrzuca (lub rozpiernicza, kwestia umowna, okej?) elementy tak jak na
        ślubie sypią w parę młodą miedziakami.
      </p>
      <PostText
        text="Raz słyszałem jak druhna mówiła, że głowa jest za 15 punktów, tułów po 10,
      a reszta po 5. Dzieci bawiły się lepiej niż w grze w zbijaka."
      />
      <PostText text="Spread spodobałby się Dexterowi, bo użyjesz go tam, gdzie potrzebujesz coś rozczłonkować, tylko potem bez wyrzucania ciał do morza, plz." />
      <PostText text="Są 3 miejsca, w których możesz użyć spread - w argumentach przekazywanych do funkcji, tablicach i obiektach." />
      <PostSubtitle subtitle="Tablice a spread" />
      <PostText text="Możesz na przykład rozbudować tablicę o nowe wartości, używając spread." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> randomWords = [
            <span className="text-success">"halucynacja"</span>,
            <span className="text-success">"hemoglobina"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> whatAnnoysMe = [
            <span className="text-success">"ziemia"</span>,
            <span className="text-success">"woda"</span>,
            <span className="text-neutral">...randomWords</span>,
            <span className="text-success">"dwutlenek węgla"</span>,
            <span className="text-success">"taka sytuacja"</span>]
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">randomWords</span>)
            <span className="text-base-300">
              // ["halucynacja", "hemoglobina"]
            </span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">whatAnnoysMe</span>)
            <span className="text-base-300">
              // ['ziemia', 'woda', 'halucynacja', 'hemoglobina', 'dwutlenek
              węgla', 'taka sytuacja']
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Widzisz, spread metaforycznie spuścił nasze psy ze smyczy, czyli wypakował do tablicy whatAnnoysMe wszystko co było w tablicy randomWords." />
      <PostText text="Spread to nie tylko rozszerzenie tablicy, ale też idealny sposób na jej skopiowanie." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Jeśli czytałeś artykuł o tytule{" "}
        <Link
          className="cursor-custom-pointer text-info"
          to={"/blog/dlaczego-programowanie-zniszczylo-moj-zwiazek"}
        >
          Dlaczego programowanie zniszczyło mój związek
        </Link>
        , to mieliśmy tam przykład z metodą mutującą tablicę (sort).
      </p>
      <PostText text="Wiem leniuszku, że nie chce Ci się tam zaglądać, dlatego masz tutaj ten przykład:" />
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
      <PostText text="Jako, że nie liczy się długość różdżki tylko umiejętności magika, możemy w bardzo łatwy sposób wyczarować, by loveTriangle pozostał nienaruszony." />
      <PostText text="Hokus pokus:" />
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
            [...loveTriangle]
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
            <span className="text-base-300">// ["ja", "Nicole", "Chris"]</span>
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
      <PostText text="No zobacz na tą czarną magię. Trójkąt miłosny pozostał nienaruszony. Dlaczego?" />
      <PostText text="Bo stworzyliśmy nową tablicę, do której wypakowaliśmy wszystko co było w tablicy loveTriangle. Ta tablica ma osobne miejsce w pamięci." />
      <PostText text="Referencje prowadzą zatem do dwóch różnych miejsc w heap (pamięci)." />
      <PostTextBold text="Możesz też połączyć dwie tablice w jedną." />
      <PostText text="Można użyć do tego metody concat, ale bardziej popularne jest użycie spread." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> fruits = [
            <span className="text-success">"banan"</span>,
            <span className="text-success"> "plantan"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> veggies = [
            <span className="text-success">"bakłażan"</span>,
            <span className="text-success"> "cukinia"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> mix = [
            <span className="text-neutral">...fruits</span>,
            <span className="text-neutral"> ...veggies</span>]
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">mix</span>)
            <span className="text-base-300">
              {" "}
              // ["banan", "plantan", "bakłażan", "cukinia"]
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Stworzyliśmy więc zdrową mieszankę warzywno-owocową, co by to nabrać sił na następny przykład." />
      <PostSubtitle subtitle="Obiekty a spread" />
      <PostText text="Wszystkie zasady obowiązujące w tablicach działają analogicznie w obiektach." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <span className="text-base-300">// łączenie obiektów</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> frontendDeveloper = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Krystian"</span>,
            <span className="text-warning"> isReadyToWork</span>:
            <span className="text-error"> true</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> character = {"{"}
            <span className="text-warning">senseOfHumour</span>:
            <span className="text-success"> "dark"</span>,
            <span className="text-warning"> funny</span>:
            <span className="text-error"> true</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> blogCreator = {"{"}
            <span className="text-neutral">...frontendDeveloper</span>,
            <span className="text-neutral"> ...character</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">blogCreator</span>)
            <span className="text-base-300">
              {" "}
              // {"{"} name: 'Krystian', isReadyToWork: true, senseOfHumour:
              'dark', funny: true{"}"}
            </span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <span className="text-base-300">
            // łatwe stworzenie identycznego obiektu
          </span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> copyOfBlogCreator = {"{"}
            <span className="text-neutral">...blogCreator</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">copyOfBlogCreator</span>)
            <span className="text-base-300">
              {" "}
              // {"{"} name: 'Krystian', isReadyToWork: true, senseOfHumour:
              'dark', funny: true{"}"}
            </span>
          </code>
        </pre>
      </div>
      <PostText text="No i sam zobacz, ładnie połączyliśmy w jeden obiekt (blogCreator) nasze dwa obiekty - frontendDeveloper oraz character. " />
      <PostText text="Bardzo też prosto stworzyliśmy identyczny obiekt. " />
      <PostText text="Z przykładu wynika jasno i niepodważalnie, że..." />
      <PostTextBold text="Nie może być kopii Mnie." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">blogCreator</span> {"==="}
            <span className="text-warning"> copyOfBlogCreator</span>)
            <span className="text-base-300"> // false</span>
          </code>
        </pre>
      </div>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        A nie mówiłem? Jakbyś nie wiedział czemu tak się dzieje, to poczytaj o{" "}
        <Link
          className="cursor-custom-pointer text-info"
          to={"/blog/typy-prymitywne-i-te-eleganckie-oraz-ich-referencje"}
        >
          referencji
        </Link>
        . Wiesz czemu? No to jestem prawie tak dumny jak matka puszczająca
        gówniaka pierwszy raz do szkoły. Tak szybko dorosłeś🥲.
      </p>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        <span className="font-bold">
          {" "}
          Pragnę być nietypowy, niepowtarzalny, jednorazowy i oryginalny{" "}
        </span>
        - jak to rapował Fokus w Paktofonice. Gimby nie znajo.
      </p>
      <PostTextBold text="I co tam jeszcze wariacie w repertuarze?" />
      <PostText text="Możemy zrobić też coś co bardzo łatwo zdarzyć się może w koreańskim szpitalu na oddziale położniczym, tzn. podmienić bobasa (po naszemu wartość)." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> babyOne = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Pak Choi"</span>,
            <span className="text-warning"> isLovely</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> male</span>:
            <span className="text-error"> true</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> myBaby = {"{"}
            <span className="text-neutral">...babyOne</span>,
            <span className="text-warning"> name</span>:
            <span className="text-success"> "Ding Dong"</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">myBaby</span>)
            <span className="text-base-300">
              {" "}
              // {"{"} name: 'Ding Dong', isLovely: true, male: true{"}"}
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Jak widzisz matuchna, która dostanie myBaby, nie będzie miała nawet pojęcia, że to był maluszek - Pak Choi, bo pielęgniarka zdążyła mu przylepić metryczkę - Ding Dong." />
      <PostText text="Mówiąc bardziej technicznie, jeśli klucz występuje w spread i taki sam klucz występuje po spread, to wartością jaką będzie miał klucz będzie ostatnia wartość jaka się pojawiła. Ding Dong. " />
      <PostSubtitle subtitle="Stringi a spread" />
      <PostText text="To tak na szybciora, bo mamy jeszcze argumenty do omówienia." />
      <PostText text="Jeśli mamy stringa i użyjemy na nim spread w tablicy, poszatkuje nam cały string na tycie literki, cyferki czy co tam mamy." />
      <PostText text="Przykład:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> youtuber ={" "}
            <span className="text-success">"Klocuch"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> array = [
            <span className="text-neutral">...youtuber</span>]
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">array</span>)
            <span className="text-base-300">
              {" "}
              // ["K", "l", "o", "c", "u", "c", "h"]
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Nie zaimponujesz tym dziewczynie, ale przynajmniej będziesz mógł popatrzeć sobie na stringi." />
      <PostSubtitle subtitle="Argumenty a spread" />
      <PostText text="Spread możesz zaaplikować podczas wywoływania funkcji w miejsce, gdzie podaje się argumenty." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> threeMusketeers = [
            <span className="text-success">"Mickey"</span>,
            <span className="text-success">"Goofy"</span>,
            <span className="text-success">"Donald"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> getDisneyCharacters ={" "}
            <span className="text-info">
              (<span className="text-neutral">a, b, c, d = 'Pluto'</span>)
            </span>{" "}
            <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">a</span>)
            <span className="text-base-300">// "Mickey"</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">b</span>)
            <span className="text-base-300">// "Goofy"</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">c</span>)
            <span className="text-base-300">// "Donald"</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">d</span>)
            <span className="text-base-300">// "Pluto"</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">getDisneyCharacters</span>
            <span className="text-info">
              (<span className="text-neutral">...threeMusketeers</span>)
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Jako, że tablica składała się z trzech stringów, tak na prawdę podczas wywoływania funkcji getDisneyCharacters właśnie one trafiają jako parametry do funkcji." />
      <PostText text="Nasza poczciwa psina Pluto podstawił się za czwarty parametr jako wartość domyślna. W przeciwnym przypadku dostalibyśmy undefined." />
      <PostText text="Gdyby nasza tablica muszkieterów miała tylko dwa stringi, a parametrów byśmy nie ruszali to otrzymalibyśmy:" />
      <PostTextBold text='"Mickey", "Goofy", undefined, "Pluto"' />
      <PostText text="Sorry Donald, nie tym razem." />
      <PostText text="Gdyby nasza tablica muszkieterów miała natomiast aż 4 stringi (np. czwarty string to Daisy), no to wiadomix, że Pluto by się nie pokazał." />
      <PostTextBold text='"Mickey", "Goofy", "Donald", "Daisy"' />
      <PostText text="To chyba tyle." />
      <PostSubtitle subtitle="Na koniec..." />
      <PostText text="Pocieszę Cię, już więcej infantylnych przykładów na dziś nie zaznasz, ale tak, kłębią się one po mojej głowie i wyskoczą w najmniej oczekiwanym momencie." />
      <PostText text="Wiesz też, że trzy kropki to coś więcej niż przerwana wypowiedź - to sposób na ułatwienie życia niejednemu programiście." />
      <PostTextBold text="Rest zbiera resztki, a spread rozpiernicza." />
      <PostText text="Czołem, do następnego." />
    </div>
  );
};
export default Post7;
