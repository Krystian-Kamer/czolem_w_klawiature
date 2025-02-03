import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";
import terminatorImg from "/post-assets/post-6-terminator.jpg";

const Post6 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Co to funkcja" />
      <PostText text="Nie wiem czy już masz czarny pas we Frontendzie, ale jeśli nie to powiem Ci że..." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        <span className="font-bold">Funkcja</span> to instrukcja w kodzie. Jeśli
        wywołujemy funkcję, wszystkie zależności wewnątrz instrukcji wykonają
        się. Simple.
      </p>
      <PostText text="Na przykład mam nieprzyjemną funkcję:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> womanSaidDoTheDishes ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"umyj naczynia"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
      </div>
      <PostText text="Jak widzisz jest to tak naprawdę instrukcja do zrobienia, ale nie oznacza to, że pozmywam teraz te gary." />
      <PostText text="Oznacza to tylko tyle, że ta instrukcja jest, istnieje. Siedzi sobie w pamięci i czeka na wywołanie." />
      <PostText text="Jak Twoja wybranka życia w końcu się wnerwi, zagrozi rozwodem i wydrze się niemiłosiernie na cały blok, żebyś pozmywał te cholerne gary zdziadziały klocu, tak naprawdę chodzi jej o to, abyś wywołał funkcję, to znaczy ją wykonał." />
      <PostText text="Robisz to przez dopisanie nawiasów do funkcji." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> womanSaidDoTheDishes ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"umyj naczynia"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <span>womanSaidDoTheDishes</span>
          <span className="text-info">()</span>{" "}
          <span className="text-base-300">// "umyj naczynia"</span>
        </pre>
      </div>
      <PostText text="Pięknie, wiesz już co to funkcja i masz jednocześnie pozmywane, wygrałeś życie. Dziewczyna na pewno to doceni." />
      <PostText text="Chyba że nie domyłeś patelni, wtedy:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <span>slapThatMoronHardOnTheHead</span>
          <span className="text-info">()</span>
        </pre>
      </div>
      <PostText text="Auć!" />
      <PostSubtitle subtitle="3 opcje, ale i tak wybierzesz ostatnią" />
      <PostText text="Wyróżniamy trzy sposoby na zapisanie funkcji." />
      <PostText text="Niektóre z tych funkcji charakteryzują się specjalnymi zasadami, dlatego omówimy je wszystkie jedna po drugiej." />
      <PostText text="Obczaj to:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <span className="text-base-300">// deklaracja funkcji</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">function</span> eat
            <span className="text-info">()</span> <span>{"{"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"jedz"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre>
          <span className="text-base-300">// wyrażenie funkcyjne</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> sleep ={" "}
            <span className="text-accent">function</span>
            <span className="text-info">()</span>
            <span>{" {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"śpij"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre>
          <span className="text-base-300">// funkcja strzałkowa</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> repeat ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"powtórz"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre>
          <span>eat</span>
          <span className="text-info">()</span>{" "}
          <span className="text-base-300">// "jedz"</span>
        </pre>
        <pre>
          <span>sleep</span>
          <span className="text-info">()</span>{" "}
          <span className="text-base-300">// "śpij"</span>
        </pre>
        <pre>
          <span>repeat</span>
          <span className="text-info">()</span>{" "}
          <span className="text-base-300">// "powtórz"</span>
        </pre>
      </div>
      <PostText text="Jak widzisz dzięki tym różnym składniom możesz uzyskać ten sam efekt. Istnieją natomiast pewne tycie wyjątki." />
      <PostText text='Jak na przykład wtedy, gdy laska, która Ci się podoba pisze do Ciebie pierwsza "nie mam nic na sobie tygrysie", ale następna jej wiadomość to - "sorry, miało być do Kacpra, pomyliłam się 😉".' />
      <PostText text="Boli, ale spokojnie, funkcja nie boli, funkcja rozumie, funkcja nigdy Cię nie zrani, chyba że kogoś wnerwiłeś, a zaprogramował on Terminatora." />
      <img
        src={terminatorImg}
        className="my-8 w-full max-w-[500px] justify-self-center shadow-md"
      />
      <PostText text="Teraz to się nie dziwię. Hasta la vista, baby!" />
      <PostSubtitle subtitle="#1 Deklaracja funkcji (function declaration)" />
      <PostText text="Deklaracja funkcji wygląda w ten sposób:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">function</span> wasteTime
            <span className="text-info">()</span> <span>{"{"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">
              "idź na film z Karolakiem w roli głównej"
            </span>
            )
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
      </div>
      <PostText text="Nie ma tu var, const czy let. Po prostu jest słowo kluczowe function i następnie deklaracja (nazwa z nawiasem a wewnątrz nawiasów klamrowych cała logika)." />
      <PostText text="Tej funkcji z uwagi na treść console.log'a wewnątrz lepiej jest nie wywoływać😏." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Deklaracja funkcji podlega{" "}
        <span className="font-bold">hoistingowi</span>, ale o tym później.
      </p>
      <PostSubtitle subtitle="#2 Wyrażenie funkcyjne (function expression)" />
      <PostText text="Jest to anonimowa funkcja przypisana do zmiennej." />
      <PostText text="To be 100% clear, ta funkcja nie ma nazwy, zmienna ją ma." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> makeDinner ={" "}
            <span className="text-accent">function</span>
            <span className="text-info">()</span>
            <span>{" {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">
              "obierz malutkiego korniszonka i wstrzymaj łzy na myśl co jeszcze
              masz małego"
            </span>
            )
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
      </div>
      <PostSubtitle subtitle="#3 Funkcja strzałkowa (arrow function)" />
      <PostText text="Jeśli rozmawialibyśmy o prahistorii to powyższe funkcje (deklaracja i wyrażenie funkcyjne) były dinozaurami, w które pierdutnął meteoryt." />
      <PostText text="Meteoryt to w naszym przypadku ES6 (ECMAScript 2015), czyli w skrócie wielki update JavaScript-u." />
      <PostText text="Funkcja strzałkowa to nie jedyny bajer. ES6 wprowadził zmienne const i let (wcześniej był tylko var) oraz destrukturyzację obiektów i tablic, Map, Set, Promise, domyślne parametry, pętlę For/of i wiele innych." />
      <PostText text="Funkcja strzałkowa jest anonimowa i wygląda tak:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> readBook ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">
              "poczytaj książkę Koń z Valony"
            </span>
            )
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
      </div>
      <PostText text="Nie trzeba używać słowa kluczowego function, jest krótka i szybka w zapisie, a i książkę dzięki niej można poczytać." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Z ważnych informacji, funkcja strzałkowa inaczej trochę traktuje{" "}
        <span className="font-bold">this</span>, ale o tym kiedy indziej, na
        razie f*ck <span className="font-bold">this</span> shit.
      </p>
      <PostText text="This w funkcji strzałkowej w typowym przykładzie wskazuje na obiekt globalny - window." />
      <PostText text="Jeśli obudzą się we mnie sadomasochistyczne skłonności, to pojawi się artykuł o this." />
      <PostSubtitle subtitle="#4 Konstruktor (function constructor) ?!?" />
      <PostText text="Wiem, tam były 3 sposoby, tu dałeś czwarty, dyskalkulia czy IQ ziemniaka?" />
      <PostText text="Po prostu ucząc się frontendu od ponad 2 lat, widziałem takie hieroglify raz. Moim zdaniem zatem szkoda na to czasu, także w ramach ciekawostki raczej sobie zobacz." />
      <PostText text="Wygląda to w ten sposób:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> sayWhat = new{" "}
            <span className="text-accent">Function</span>('return "WTF co to
            jest!"')
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>
              sayWhat<span className="text-info">()</span>
            </span>
            ) <span className="text-base-300">// "WTF co to jest!"</span>
          </code>
        </pre>
      </div>
      <PostText text="Zapewne widzisz ten sposób na stworzenie funkcji pierwszy i ostatni raz." />
      <PostText text="Jak Cię to zaciekawiło nerdzie to poczytaj więcej na necie." />
      <PostSubtitle subtitle="Zwracanie wartości" />
      <PostText text="Tak jak i Ty możesz po kilku głębszych zwracać świąteczną sałatkę ciotki Krysi, tak i funkcja może coś zwracać." />
      <PostText text="Domyślnie funkcja po wykonaniu zadania zwraca undefined." />
      <PostText text="Jeśli użyjesz instrukcji return, funkcja zwróci to na co wskazuje return, kończąc jednocześnie dalsze działanie funkcji." />
      <PostText text="Żeby nie być gołosłownym:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> think ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"myśl, myśl, myśl"</span>){" "}
            <span className="text-base-300">// "myśl, myśl, myśl"</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> thinkAgain ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            return <span className="text-success">"czaję bazę"</span>
          </code>
          <pre>
            console<span className="text-info">.log</span>(
            <span className="text-success">
              "rzucam to programowanie w cholerę"
            </span>
            )
          </pre>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> firstThought ={" "}
            <span className="text-accent">think</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> secondThought ={" "}
            <span className="text-accent">thinkAgain</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>firstThought</span>){" "}
            <span className="text-base-300">// undefined</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>secondThought</span>){" "}
            <span className="text-base-300">// "czaję bazę"</span>
          </code>
        </pre>
      </div>
      <PostText text='Widzisz, w przykładzie z funkcją think przypisaliśmy wywołanie funkcji do zmiennej firstThought. Funkcja się wykonuje więc nasz console.log się pojawi. Jako, że nie ma "jawnego" return, funkcja zwróciła domyślnie undefined. ' />
      <PostText text="W drugim przykładzie, gdzie do zmiennej secondThought przypisaliśmy wywołanie funkcji thinkAgain, wygląda to zdziebko inaczej." />
      <PostText text="Zmienna secondThought zawiera to co było w return a więc nasz string. Możesz sobie zrobić typeof secondThought - wyjdzie string." />
      <PostTextBold text="A co z rzuceniem programowania w cholerę?" />
      <PostText text="Tak jak mówiłem, ta linijka kodu nie wykona się, bo linijkę wyżej masz return, który kończy działanie funkcji." />
      <PostText text="Wychodzi na to, że nadal będę Cię nawiedzał moimi postami w co każdy poniedziałek, tak jak psycho-była, która nie do końca zrozumiała, że potrzebujesz czasu dla siebie." />
      <PostTextBold text="Funkcja strzałkowa a return" />
      <PostText text="Jeśli masz większą logikę to spokojnie użyj funkcji z jawnym return, a więc w nawiasach klamrowych:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> cryInTheShower ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            return{" "}
            <span className="text-success">"nie ma pracy dla juniorów"</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> notGoodConclusion ={" "}
            <span className="text-accent">cryInTheShower</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>notGoodConclusion</span>){" "}
            <span className="text-base-300">
              // "nie ma pracy dla juniorów"
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Ten płacz jest zrozumiały. Serio. Mężczyznom wolno płakać, tak słyszałem. No chyba, że jest się na pierwszej randce albo na rozmowie rekrutacyjnej, wtedy gorzej." />
      <PostText text="Chociaż może to jest jakiś sposób, żeby się wyróżnić! Weźmy rekrutera na litość! Dasz mi prace? Będę dobrym programistą. Proszę, proooooszę!" />
      <PostText text="Powiem Ci jeszcze, że możesz też użyć krótszego zapisu gdzie występuje tzw. implicit return." />

      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> cryInTheShower ={" "}
            <span className="text-info">()</span> {"=>"}{" "}
            <span className="text-success">"nie ma pracy dla juniorów"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> notGoodConclusion ={" "}
            <span className="text-accent">cryInTheShower</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>notGoodConclusion</span>){" "}
            <span className="text-base-300">
              // "nie ma pracy dla juniorów"
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Jest to skrócona wersja tego samego co powyżej. Return w tym przykładzie jest ukryty, ale jest, mimo, że go nie widać. Tak jak widełki wynagrodzenia na wielu portalach pracy." />
      <PostText text="Gdybym miał współpracę z No Fluff Jobs to pewnie bym napisał - takie rzeczy nie zdarzają się na portalu NFJ, ponieważ każda oferta ma podane widełki!" />
      <PostText text="Ale na razie jestem płotką i to nie z Wiedźmina." />
      <PostSubtitle subtitle="Hoisting" />
      <PostText text="Odnoszę wrażenie, że kiedy poruszam jeden wątek, nagle należy wyjaśnić również następny." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        <span className="font-bold">Hoisting</span> to taki mechanizm, który
        wynosi deklaracje zmiennych i deklaracje funkcji na samą górę zakresu.
      </p>
      <PostText text="Jest to temat na osobny post. Mówię o nim tylko i wyłącznie ze względu na deklarację funkcji." />
      <PostText text="Jeśli na rekrutacji dostaniesz na twarz pytanie czym się różni deklaracja funkcji od wyrażenia funkcyjnego to odpowiedz - deklaracja funkcji podlega hoistingowi, dlatego mogę wywołać funkcję przed jej deklaracją. " />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <span>drinkCoffee</span>
          <span className="text-info">()</span>{" "}
          <span className="text-base-300">// "wypij kawę"</span>
        </pre>
        <pre>
          <span>drinkTea</span>
          <span className="text-info">()</span>{" "}
          <span className="text-base-300">
            // "Wyskoczy error - Cannot access 'drinkTea' before initialization"
          </span>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">function</span> drinkCoffee
            <span className="text-info">()</span> <span>{"{"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"wypij kawę"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> drinkTea ={" "}
            <span className="text-accent">function</span>
            <span className="text-info">()</span>
            <span>{" {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"wypij herbatę"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
      </div>
      <PostText text="W tej właśnie chwili rekruter wyciąga spod laty najlepszego szampana, wpada General Director od Company i gratulują Ci ciepłej posady za 15k na start, sponsorowane wakacje, owocowe środy i pizza piątki." />
      <PostText text="Brawo Ty." />
      <PostSubtitle subtitle="Parametry i argumenty" />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        <span className="font-bold">Parametry</span> to to czego funkcja
        oczekuje.
      </p>
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        <span className="font-bold">Argumenty</span> to to co podajesz przy
        wywoływaniu.
      </p>
      <PostText text="Zerknij:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> hireMePlz ={" "}
            <span className="text-info">
              (<span className="text-neutral">name</span>)
            </span>{" "}
            <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            return <span className="text-warning">name</span> +
            <span className="text-success"> ", masz tę pracę byku."</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> welcomeAboard ={" "}
            <span className="text-accent">hireMePlz</span>
            <span className="text-info">
              (<span className="text-success">"Krystian"</span>)
            </span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>welcomeAboard</span>){" "}
            <span className="text-base-300">
              // "Krystian, masz tę pracę byku."
            </span>
          </code>
        </pre>
      </div>
      <PostText text="I takie przykłady to ja lubię." />
      <PostText text="Argumentem w tym przykładzie jest tendencyjne imię Krystian. Argument ten podajemy przy wywołaniu funkcji." />
      <PostText text="Jak widzisz funkcja oczekuje jednego parametru o nazwie name. Za name podstawia się moje imię." />
      <PostText text="Gdyby nie podać argumentu, z automatu podstawi się undefined." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> welcomeAboard ={" "}
            <span className="text-accent">hireMePlz</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>welcomeAboard</span>){" "}
            <span className="text-base-300">
              // "undefined, masz tę pracę byku."
            </span>
          </code>
        </pre>
      </div>
      <PostText text="My jednak wolimy, aby Krystian a nie jakiś random dostał pracę, nie?" />
      <PostText text="Jeśli odpowiedziałeś nie, to wiedz, że gdzieś tam na dole znajduje się specjalny kocioł dla ludzi niewspierających tego bloga." />
      <PostSubtitle subtitle="Wartości domyślne w funkcji" />
      <PostText text="Pisałem wcześniej, że ES6 wprowadziło wiele rewolucyjnych rozwiązań, jedną z nich są właśnie wartości domyślne." />
      <PostText text="Kiedy nie podamy argumentu przy wywołaniu funkcji, a funkcja go oczekuje, możemy wstawić wartość domyślną przy parametrze. Wtedy funkcja skorzysta z tej wartości." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> makeConnection ={" "}
            <span className="text-info">
              (
              <span className="text-neutral">
                name1 = 'Romeo', name2 = 'Julia'
              </span>
              )
            </span>{" "}
            <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            return <span className="text-warning">name1</span> +
            <span className="text-success"> " i " </span>+
            <span className="text-warning"> name2 </span>+
            <span className="text-success"> " to idealne połączenie"</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> perfectCouple ={" "}
            <span className="text-accent">makeConnection</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> ourCouple ={" "}
            <span className="text-accent">makeConnection</span>
            <span className="text-info">
              (<span className="text-success">"Mój but"</span>,{" "}
              <span className="text-success">"twoja dupa"</span>)
            </span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> weirdCouple ={" "}
            <span className="text-accent">makeConnection</span>
            <span className="text-info">
              (<span className="text-success">"Mój but"</span>)
            </span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>perfectCouple</span>){" "}
            <span className="text-base-300">
              // "Romeo i Julia to idealne połączenie"
            </span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>ourCouple</span>)
            <span className="text-base-300">
              {" "}
              // "Mój but i twoja dupa to idealne połączenie"
            </span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>weirdCouple</span>)
            <span className="text-base-300">
              {" "}
              // "Mój but i Julia to idealne połączenie"
            </span>
          </code>
        </pre>
      </div>
      <PostTextBold text="Do perfectCouple" />
      <PostText text="Udało nam się połączyć naszych zakochanych w parę, używając wartości domyślnych. Jako, że nie przekazaliśmy argumentów przy wywołaniu, podstawiły się wartości domyślne." />
      <PostTextBold text="Do ourCouple" />
      <PostText text="Jest to bolesny dla zwieraczy przykład. Przez to, że przekazaliśmy dwa argumenty, za parametr pierwszy wstawił się - Mój but, za drugi - twoja dupa." />
      <PostTextBold text="Do weirdCouple" />
      <PostText text="Jako, że przekazaliśmy jeden argument, wstawi się on pod parametr name1 (a więc Mój but), drugi parametr zaś użyje wartości domyślnej (Julia)." />
      <PostSubtitle subtitle="Dotrwałeś do końca, gratulacje" />
      <PostText text="Przeżyliśmy dziś niejedną przygodę - pozmywaliśmy naczynia, obraliśmy malutkiego korniszonka, poczytaliśmy książkę, ponarzekaliśmy, że nie ma pracy dla juniorów, wysłaliśmy mój but w miejsce, gdzie słońce nie dochodzi! " />
      <PostText text="Dodatkowo, nauczyłeś się wielu rzeczy na temat funkcji! " />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        W przyszłości będzie jeszcze post o operatorze spread, rest oraz czym
        jest callback, jak działa funkcja asynchroniczna, innymi słowy
        <span className="font-bold"> ciąg dalszy nastąpi...</span>
      </p>
      <PostText text="Czołem, do następnego." />
    </div>
  );
};
export default Post6;
