import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";
import frodoImg from "/post-assets/post-9-frodo.jpg";
import { Link } from "react-router-dom";
const Post9 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Czym się charakteryzuje redukcja?" />
      <PostText text="Wbijasz smutny widelec w jeszcze jedną garść smutnej zielonej sałaty, myśląc o nowym burgerze Drwala z McDonalda🍔." />
      <PostText text="W tematyce sportowej jest to zmniejszenie tkanki tłuszczowej (także nadal możesz zjeść ociekającego tłuszczem burgera, tylko że musisz przyjąć w ciągu dnia mniej kalorii niż wymaga tego Twój organizm)." />
      <PostText text="Z kolei słownik języka polskiego podaje, że redukcja to:" />
      <PostTextBold text='"sprowadzenie czegoś do mniejszych rozmiarów; zmniejszenie"' />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        W programowaniu jest podobnie. Głównym zastosowaniem metody reduce na
        naszej tablicy jest{" "}
        <span className="font-bold">
          {" "}
          sprowadzenie czegoś do pojedynczej wartości
        </span>
        , może to być string, liczba, tablica, obiekt, co tam sobie wymarzysz.
      </p>
      <PostSubtitle subtitle="Przygody sportowca Krzyśka" />
      <PostText text="Krzysiek w łapie nie ma sobie równych💪, ale nie każdy musi być we wszystkim orłem." />
      <PostText text="Chłopina w podstawówce nie uważał na matmie, shit happens." />
      <PostText text="Krzysiek ma też pewną słabość, jest ździebko uzależniony od pączków. Kapkę mu to przeszkadza w jego redukcji." />
      <PostText text="Choć to nie klub Myszki Mickey, pomóżmy Krzyśkowi policzyć ile kilokalorii przyjął w ciągu tego tygodnia, wynikających ze zjedzenia słodziutkich, kalorycznych, polanych lukrem pączurów." />
      <PostText text="Może ta liczba pomoże mu się ogarnąć." />
      <PostSubtitle subtitle="Potrzebne narzędzia" />
      <PostText text="Tutaj właśnie na białym rumaku wjeżdża metoda reduce." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-info">reduce</span>
            <span className="text-success">{"("}</span>
            callbackFn
            <span className="text-success">{")"}</span>
          </code>
        </pre>
      </div>
      <PostText text="Używamy jej na tablicy, a wewnątrz niej wstawiamy callback function, czyli funkcję z instrukcją co ma się zadziać." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> donutsKcal = [
            <span className="text-success">350</span>,
            <span className="text-success"> 200</span>,
            <span className="text-success"> 400</span>,
            <span className="text-success"> 450</span>,
            <span className="text-success"> 350</span>,
            <span className="text-success"> 550</span>,
            <span className="text-success"> 300</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> totalKcal = donutsKcal
            <span className="text-info">.</span>
            <span className="text-info">reduce</span>
            <span className="text-success">{"("}</span>
            <span className="text-accent">{"("}</span>total, kcal
            <span className="text-accent">{")"}</span>
            <span>{" => "}total + kcal</span>
          </code>
          <span className="text-success">{")"}</span>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">totalKcal</span>)
            <span className="text-base-300">// 2600</span>
          </code>
        </pre>
      </div>
      <PostText text="Krzysiek, byku! To przecież rozpusta w biały dzień (a nawet tydzień) ! Gdzie sałatka? Gdzie marzenia o kaloryferze? Miała być forma na lato!" />
      <PostText text="Przeanalizujmy co się zadziało, oprócz tego, że nasz siłacz zaprzepaszcza swoją wymarzoną sylwetkę." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Mamy tutaj tzw. implicit return. Było o nim w poście o{" "}
        <Link
          className="cursor-custom-pointer text-info"
          to={"/blog/funkcje-i-ich-funkcje-oraz-parametry-i-argumenty"}
        >
          funkcjach
        </Link>
        . Na pewno mój wierny czytelniku czytałeś (or am I wrong ?!).
      </p>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Jak widzisz metoda reduce przyjmuje
        <span className="font-bold"> dwa parametry</span> w funkcji.
      </p>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        <span className="font-bold">Akumulator</span> to pierwszy parametr. W
        naszym przypadku to total. Jest to coś co jest zwracane po każdej
        iteracji a zarazem nasz końcowy wynik po ostatniej iteracji.
      </p>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        <span className="font-bold">currentValue</span> to drugi parametr. W
        naszym przypadku to kcal. Jest to każdy element po kolei z tablicy, na
        której iterujemy.
      </p>
      <PostText text="Te dwa parametry są obligatoryjne. Pozostałe dwa opcjonalne to - index i array." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        <span className="font-bold">Iterację</span> masz wtedy, gdy używasz
        jakiejś metody i ona kolejno skacze po każdym elemencie i coś tam z nim
        robi (jak moja była, nie wracajmy do tego, nadal boli😔).
      </p>
      <PostTextBold text="Co się dzieje łopatologicznie w każdej iteracji:" />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>total = 0 + kcal = 350, total więc 350</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>total = 350 + kcal = 200, total więc 550</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>3</th>
              <td>total = 550 + kcal = 400, total więc 950</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>4</th>
              <td>total = 950 + kcal = 450, total więc 1400</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>5</th>
              <td>total = 1400 + i tak dalej, do ostatniego elementu.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostText text="Jako, że nie podaliśmy żadnej początkowej wartości, za total w pierwszej iteracji podstawia się zero." />
      <PostSubtitle subtitle="Uzależnienie kontratakuje" />
      <PostText text="Jeśli uzależnienie Krzyśka jest większe niż by się mogło wydawać, warto mieć na względzie, że mógł potajemnie wtranżolić jeszcze jednego pączka🍩." />
      <PostText text="Wartość początkową umieszczamy po callback function." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-info">reduce</span>
            <span className="text-success">{"("}</span>
            callbackFn, initialValue
            <span className="text-success">{")"}</span>
          </code>
        </pre>
      </div>
      <PostText text="Przyjmując, że potajemny pączek to wartość początkowa, która ma 400 kcal, nasz przykład wyglądałby następująco:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> donutsKcal = [
            <span className="text-success">350</span>,
            <span className="text-success"> 200</span>,
            <span className="text-success"> 400</span>,
            <span className="text-success"> 450</span>,
            <span className="text-success"> 350</span>,
            <span className="text-success"> 550</span>,
            <span className="text-success"> 300</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> totalKcal = donutsKcal
            <span className="text-info">.</span>
            <span className="text-info">reduce</span>
            <span className="text-success">{"("}</span>
            <span className="text-accent">{"("}</span>total, kcal
            <span className="text-accent">{")"}</span>
            <span>{" => "}total + kcal, 400</span>
          </code>
          <span className="text-success">{")"}</span>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">totalKcal</span>)
            <span className="text-base-300">// 3000</span>
          </code>
        </pre>
      </div>
      <PostText text="Madre mía, amigo! Qué pasa? Tak nie można! Z tego przedsięwzięcia to tylko dentysta i piekarnia się ucieszą!" />
      <PostTextBold text="Co na chłopski rozum piekarza się tu zadziewa?" />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>total = 400 + kcal = 350, total więc 750</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>total = 750 + kcal = 200, total więc 950</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>3</th>
              <td>total = 950 + kcal = 400, total więc 1350</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>4</th>
              <td>total = 1350 + kcal = 450, total więc 1800</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>5</th>
              <td>total = 1800 + i tak dalej, do ostatniego elementu.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostText text="Sam widzisz, przy pierwszej iteracji do total zostało zapodane 400 kcal." />
      <PostSubtitle subtitle="Nigdy się nie poddawaj" />
      <PostText text="Nasz strongman jest jednak twardym zawodnikiem i mimo, że zjadł 8 pączurów, to nadal uczęszcza 5 razy w tygodniu na siłkę. " />
      <PostText text="Krzychu to sprytna bestia. Nasze wyliczenia zmotywowały go tak bardzo, że poprosił nas o jeszcze jedną małą przysługę." />
      <PostTextBold text='"Krystian, Ty umiesz w te komputery. Wylicz mi co ja tam przyjąłem na wczorajszy obiad, z podziałem na białko, tłuszcze i tak dalej."' />
      <PostText text="Nie odmawiamy przyjacielowi w potrzebie!" />
      <PostText text="Dla tego jeśli jesteś rekruterem, to uznaj mnie za swego przyjaciela, który potrzebuje pomocy w znalezieniu pracy🥲 jako junior frontend developer (wink wink)." />
      <PostText text="Na wymiętej kartce dostaliśmy od naszego pakera listę co zjadł na wczorajszy obiad, a są to:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> dinner = {"["}
          </code>
        </pre>
        <pre>
          {"{"}
          <span className="text-warning">name</span>:
          <span className="text-success"> "ryż"</span>,
          <span className="text-warning"> proteins</span>:
          <span className="text-accent"> 4.8</span>,
          <span className="text-warning"> carbs</span>:
          <span className="text-accent"> 53.16</span>,
          <span className="text-warning"> fat</span>:
          <span className="text-accent"> 0.4</span>,
          <span className="text-warning"> kcal</span>:
          <span className="text-accent"> 240</span>
          {"}"},
        </pre>
        <pre>
          {"{"}
          <span className="text-warning">name</span>:
          <span className="text-success"> "pierś kurczaka"</span>,
          <span className="text-warning"> proteins</span>:
          <span className="text-accent"> 43</span>,
          <span className="text-warning"> carbs</span>:
          <span className="text-accent"> 0</span>,
          <span className="text-warning"> fat</span>:
          <span className="text-accent"> 6</span>,
          <span className="text-warning"> kcal</span>:
          <span className="text-accent"> 196</span>
          {"}"},
        </pre>
        <pre>
          {"{"}
          <span className="text-warning">name</span>:
          <span className="text-success"> "surówka coleslaw"</span>,
          <span className="text-warning"> proteins</span>:
          <span className="text-accent"> 1.2</span>,
          <span className="text-warning"> carbs</span>:
          <span className="text-accent"> 6.3</span>,
          <span className="text-warning"> fat</span>:
          <span className="text-accent"> 6.6</span>,
          <span className="text-warning"> kcal</span>:
          <span className="text-accent"> 101</span>
          {"}"},
        </pre>
        <pre>
          {"{"}
          <span className="text-warning">name</span>:
          <span className="text-success"> "shake proteinowy"</span>,
          <span className="text-warning"> proteins</span>:
          <span className="text-accent"> 22.6</span>,
          <span className="text-warning"> carbs</span>:
          <span className="text-accent"> 9</span>,
          <span className="text-warning"> fat</span>:
          <span className="text-accent"> 3.4</span>,
          <span className="text-warning"> kcal</span>:
          <span className="text-accent"> 158</span>
          {"}"}
        </pre>
        <pre>
          <code>{"]"}</code>
        </pre>
      </div>
      <PostText text="I to to ja szanuję, Krzysiu. Zwracam honor." />
      <PostText text="Teraz użyjmy naszej magicznej metody:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> countedDinner = dinner
            <span className="text-info">.</span>
            <span className="text-info">reduce</span>
            <span className="text-success">{"("}</span>
            <span className="text-accent">{"("}</span>total, ingredient
            <span className="text-accent">{")"}</span>
            <span>{" => "}</span>
          </code>
          <span className="text-info">{"{"}</span>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-accent">const</span>
            <span className="text-success">{" {"}</span>
            proteins, carbs, fat, kcal
            <span className="text-success">{"}"}</span> = ingredient
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            total<span className="text-info">.</span>proteins
            <span className="text-accent"> +=</span> proteins
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            total<span className="text-info">.</span>carbs
            <span className="text-accent"> +=</span> carbs
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            total<span className="text-info">.</span>fat
            <span className="text-accent"> +=</span> fat
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            total<span className="text-info">.</span>kcal
            <span className="text-accent"> +=</span> kcal
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-success">return</span> total
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-info">
              {"}"}, {"{"}{" "}
              <span className="text-neutral">
                proteins: 0, carbs: 0, fat: 0, kcal :0
              </span>{" "}
              {"}"}
            </span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">countedDinner</span>)
            <span className="text-base-300">
              {" "}
              //{"{ proteins: 71.6, carbs: 68.46, fat: 16.4, kcal: 695 }"}
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Zadziało się tu sporo rzeczy, ale spokojnie. Słonia je się po kawałku." />
      <PostText text="Linijka pierwsza jest Ci już znana, pogadajmy więc o drugiej:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span>
            <span className="text-success">{" {"}</span>
            proteins, carbs, fat, kcal
            <span className="text-success">{"}"}</span> = ingredient
          </code>
        </pre>
      </div>
      <PostText text="To jest tzw. destrukturyzacja obiektu." />
      <PostText text="W skrócie (bo nie chcę zaczynać nowego wątku, bo ten post trwałby w nieskończoność) jest to stworzenie zmiennych na podstawie podanego obiektu i przypisanie do nich odpowiedniej wartości." />
      <PostText text="Czyli mogę bezpośrednio w kodzie posługiwać się np. proteins zamiast ingredient.proteins." />
      <PostText text="Żeby bardziej ogarnąć co się dzieje wewnątrz, zobacz czym początkowo jest nasz total:" />
      <PostTextBold text="{ proteins: 0, carbs: 0, fat: 0, kcal: 0 }" />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Nikt nie powiedział, że nasz{" "}
        <span className="font-bold"> initialValue</span>, to ma być typ prosty,
        może to być równie dobrze <span className="font-bold"> obiekt </span>{" "}
        lub
        <span className="font-bold"> tablica</span>.
      </p>
      <PostText text="W naszym przypadku jest to obiekt. Można nawet rzec, że obiekt pożądania, bo pożądamy, by został wypełniony wartościami." />
      <PostText text="A przecież przynoszenie wartości w tym świecie jest mega ważne! Tak się tworzy biznes, znajomości i pełny brzuszek u mojego kotka." />
      <PostText text="Zostały nam do zbadania poniższe hieroglify:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            total<span className="text-info">.</span>proteins
            <span className="text-accent"> +=</span> proteins
          </code>
        </pre>
        <pre>
          <code>
            total<span className="text-info">.</span>carbs
            <span className="text-accent"> +=</span> carbs
          </code>
        </pre>
        <pre>
          <code>
            total<span className="text-info">.</span>fat
            <span className="text-accent"> +=</span> fat
          </code>
        </pre>
        <pre>
          <code>
            total<span className="text-info">.</span>kcal
            <span className="text-accent"> +=</span> kcal
          </code>
        </pre>
      </div>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Zapis <span className="font-bold"> total.proteins += proteins </span>
        jest równoznaczny z zapisem:
      </p>
      <PostTextBold text="total.proteins = total.proteins + proteins" />
      <img
        src={frodoImg}
        alt="meme image"
        className="my-8 w-full max-w-[500px] justify-self-center shadow-md"
      />
      <PostText text="One example to rule them all, więc skupmy się na samym proteins i ogarniesz resztę." />
      <PostText text="Więc iteracja każdego proteins wygląda tak:" />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>
                total.proteins (czyli 0) = total.proteins(0) + proteins(4.8), co
                daje 4.8
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>
                total.proteins (czyli 4.8) = total.proteins(4.8) + proteins(43),
                co daje 47.8
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>3</th>
              <td>
                total.proteins (czyli 47.8) = total.proteins(47.8) +
                proteins(1.2), co daje 49
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>4</th>
              <td>
                total.proteins (czyli 49) = total.proteins(49) + proteins(22.6),
                co daje 71,6
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostText text="Tak się oczywiście dzieje z każdym składem - carbs, fat, kcal." />
      <PostText text="Wszystko by jednak stanęło w ogniu, gdyby po każdej iteracji nie było return, ale my mamy także bez paniki." />
      <PostTextBold text="To właśnie return sprawia, że akumulator (nasz total) jest updatowany." />
      <PostText text="Najpierw nadpisujemy pojedyncze wartości, a na końcu zwracamy nasz cały obiekt, który przetrwa do następnej iteracji." />
      <PostText text="Pomogliśmy Krzyśkowi ogarnąć ten syf, żeby on nie musiał a dodatkowo sami nauczyliśmy się nowych rzeczy." />
      <PostText text="Chłopina już wie ile przyjął tłuszczu, białka, węglowodanów i kilokalorii." />
      <PostSubtitle subtitle="Tablica przyrostu bicka" />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Jest jedna rzecz, której Krzysiek się boi, nie są to męskie łzy, nie
        jest to klaustrofobia ani arachnofobia, jest to
        <span className="font-bold"> większobickofobia 😱</span>.
      </p>
      <PostText text="Ostatnio okazało się, że na jego siłkę zjawił się nowy ziomek - Andrzej. Krzysiek nie mając sobie równych w łapie, dostrzegł, że łapa Andrzeja ma podobne rozmiary." />
      <PostText text="Nie muszę Ci chyba opisywać jak bardzo zimny pot przeszedł mu po plecach." />
      <PostText text="Krzychu usłyszał ukradkiem jak Andrzej powiedział, że pół roku temu miał w łapie 50 cm. Nasz Krzysiek obecnie ma 56 cm." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Nasz przyjazny strongman z sąsiedztwa zobaczył też, że Andrzej robi
        notatki i ma w nich
        <span className="font-bold"> tablicę przyrostu bica</span>. Ogarnął, że
        pomiary są robione co miesiąc i zrobił ukradkiem zdjęcie tych notatek.
      </p>
      <PostText text="Oto tablica przyrostu bica Andrzeja z ostatnich 6 miesięcy:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> bicepGains = [
            <span className="text-success">1.2</span>,
            <span className="text-success"> 0.9</span>,
            <span className="text-success"> 0.8</span>,
            <span className="text-success"> 1.2</span>,
            <span className="text-success"> 0.6</span>,
            <span className="text-success"> 1.1</span>]
          </code>
        </pre>
      </div>
      <PostText text="Krzychu zwrócił się do nas z prośbą o przedstawienie mu tabeli z normalnymi centymetrami obwodu bicka Andrzeja, nie przyrostu." />
      <PostText text="Mistrzu, dla Ciebie wszystko:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> bicepSizeSixMonthsAgo ={" "}
            <span className="text-warning">50</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> bicepGains = [
            <span className="text-success">1.2</span>,
            <span className="text-success"> 0.9</span>,
            <span className="text-success"> 0.8</span>,
            <span className="text-success"> 1.2</span>,
            <span className="text-success"> 0.6</span>,
            <span className="text-success"> 1</span>]
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> bicepMeasurements =
            bicepGains
            <span className="text-info">.</span>
            <span className="text-info">reduce</span>
            <span className="text-success">{"("}</span>
            <span className="text-accent">{"("}</span>total, cm, index
            <span className="text-accent">{")"}</span>
            <span>{" => "}</span>
          </code>
          <span className="text-info">{"{"}</span>
        </pre>
        <pre className="ml-6">
          <span>
            if <span className="text-success">{"("}</span>index{" "}
            <span className="text-accent">{"==="}</span> 0
            <span className="text-success">{")"}</span>
          </span>{" "}
          <span className="text-error">{"{"}</span>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-accent">const</span> firstMeasurement =
            bicepSizeSixMonthsAgo
            <span className="text-warning"></span>{" "}
            <span className="text-warning">+</span> cm
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-accent">total</span>
            <span className="text-info">.</span>
            <span className="text-info">push</span>
            <span className="text-success">{"("}</span>firstMeasurement
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-error">{"}"}</span>
          </code>
        </pre>

        <pre className="ml-6">
          <span>
            if <span className="text-success">{"("}</span>index{" "}
            <span className="text-accent">{"!=="}</span> 0
            <span className="text-success">{")"}</span>
          </span>{" "}
          <span className="text-error">{"{"}</span>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-accent">const</span> newMeasurement = total
            <span className="text-info">{"["}</span>total
            <span className="text-success">.</span>
            <span className="text-info">length</span>
            <span className="">{" - "}</span>1
            <span className="text-info">{"]"}</span>
            <span className="text-warning"> +</span> cm
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-accent">total</span>
            <span className="text-info">.</span>
            <span className="text-info">push</span>
            <span className="text-success">{"("}</span>newMeasurement
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-error">{"}"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-success">return</span> total
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-info">{"}"}, []</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">bicepMeasurements</span>)
            <span className="text-base-300">
              {" "}
              //[51.2, 52.1, 52.9, 54.1, 54.7, 55.7]
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Nawet nie wiesz jak mocno nasz siłacz ścisnął mi rękę, dziękując za te obliczenia." />
      <PostText text="Jego oczy pokryły się wzruszeniem, ponieważ okazuje się, że to on jest nadal największą bestią na siłce, która nie ma sobie równych (wygrywa z tycim Andrzejkiem o 0.3 cm)." />
      <PostText text="Wszystko ładnie, pięknie, powiesz, ale nadal nie ogarniam co jest w kodzie. Śpieszę Ci na ratunek!" />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Pamiętasz? Trzecim parametrem w reduce jest
        <span className="font-bold"> index</span>, który wskazuje na obecną
        iterację. Index liczony jest od 0.
      </p>
      <PostText text="Przy pierwszej iteracji, gdzie index jest właśnie równy 0 wykonywany jest kod z pierwszego if-a, przy każdej innej kod z drugiego if-a." />
      <PostTextBold text="Co się dzieje w pierwszej iteracji?" />
      <PostText text="Tworzymy zmienną o nazwie firstMeasurement, która jest sumą obwodu bicka pół roku temu (50 cm) i przyrostu (1.2 cm), więc 51.2 cm i dodajemy ją do tablicy." />
      <PostTextBold text="Co się dzieje w kolejnych iteracjach?" />
      <PostText text="Tworzymy zmienną o nazwie newMeasurement, która jest sumą ostatniego pomiaru bicka i przyrostu, następnie dodajemy ją do tablicy." />
      <PostText text="O ile dodanie elementu do tablicy (push) pewnie już rozumiesz, to tutaj może pojawić się problem:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> newMeasurement = total
            <span className="text-info">{"["}</span>total
            <span className="text-success">.</span>
            <span className="text-info">length</span>
            <span className="">{" - "}</span>1
            <span className="text-info">{"]"}</span>
            <span className="text-warning"> +</span> cm
          </code>
        </pre>
      </div>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Ogólnie
        <span className="font-bold"> total[total.length - 1]</span> wskazuje
        zawsze na ostatni element tablicy.
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>
                Po pierwszej iteracji nasz total wygląda tak: [51.2], długość
                tej tablicy to 1
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>
                W drugiej iteracji total[total.length - 1] oznacza total[0],
                więc odwołujemy się do pierwszego elementu tablicy, czyli do
                51.2 i dodajemy aktualne cm, czyli 0.9 co daje 52.1 - to właśnie
                pushowane jest do tablicy total
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>3</th>
              <td>
                W trzeciej iteracji total[total.length - 1] oznacza total[1],
                więc odwołujemy się do drugiego elementu tablicy...
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>4</th>
              <td>I tak dalej, i tak dalej...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostText text="Niezależnie czy mamy if-a pierwszego czy if-a drugiego, tak czy siak potrzebujemy dalej naszego return total, ale to już wiesz z poprzedniego przykładu." />
      <PostSubtitle subtitle="Słowo końcowe" />
      <PostText text="Programowanie to nie tylko pisanie kodu. Programowanie to pomoc oraz rozwiązanie czyjegoś problemu. Nie zapominajmy o tym." />
      <PostText text="Wiele rzeczy kosztuje krocie: mieszkanie, samochód, nowy iPhone, natomiast uśmiech Krzyśka - bezcenny." />
      <PostText text="Pomogliśmy dziś Krzyśkowi się ogarnąć. " />
      <PostText text="Mam nadzieję, że pomogłem też Tobie zrozumieć bardziej metodę reduce😃. " />
      <PostText text="Czołem, do następnego. " />
    </div>
  );
};
export default Post9;
