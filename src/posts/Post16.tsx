import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";

const Post16 = () => {

  return (
    <div>
      <PostSubtitle subtitle="Jest ciało, jest robota do zrobienia, szef kazał" />
      <PostText text="I tak oto spotykamy się w tej nieciekawej sytuacji rodem z gry Mafia II. Dostaliśmy proste instrukcje. Odzyskać kasę po dobroci lub nie po dobroci. " />
      <PostText text="Partner czeka przy wozie. Zaczyna kropić. Dokańczamy fajkę i ruszamy naszym czerwonym garbusem do następnego delikwenta. Zobaczymy czy ma trochę oleju w głowie. " />
      <PostText text="Jeszcze nie było 15:00 a dotarliśmy pod zakład starego lichwiarza. Wysiadamy. Idziemy spokojnym krokiem pod drzwi. Nie pukamy, po prostu wchodzimy." />
      <PostText text="Partner rozgląda się wkoło. Klienci widząc nas wchodzących, od razu zaczęli nerwowo kierować się do wyjścia." />
      <PostText text="Nawet ten typ, co płacił właśnie właścicielowi, schował szybko pieniądze do kieszeni, skinął głową na nasz widok w geście przywitania i nie oglądając się za siebie, wyszedł." />
      <PostText text="No proszę, jesteśmy sławni." />
      <PostText text="-Mike, kopę lat, jak interesy? Szef o Ciebie pytał -rzekłem." />
      <PostText text="-Ja zdobędę pieniądze, dajcie mi 3 dni, błagam! - wydukał Mike, padając na kolana." />
      <PostText text="-Mike, Mike... Mike. To samo mówiłeś 3 dni temu." />
      <PostText text="Parę błagań później i nadal bez gotówki w ręce Mike był już niedysponowalny. Partner nie lubi marudzenia. Uważa, że czyny znaczą więcej niż słowa. Wyjaśnił to lichwiarzowi." />
      <PostText text="To była jego ostatnia lekcja." />
      <PostSubtitle subtitle="Closure" />
      <PostText text="Closure to mechanizm, który pozwala funkcji przechowywać dostęp do zmiennych ze swojego otoczenia nawet po zakończeniu działania funkcji zewnętrznej." />
      <PostText text="Popatrzmy na to:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> openTrunk ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-warning">let</span> bodyCounter ={" "}
            <span className="text-info">0</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="ml-6 text-warning">const</span> addBody ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          bodyCounter<span className="text-info">++</span>
        </pre>
        <pre className="ml-6">
          console<span className="text-info">.log</span>(
          <span className="text-success">bodyCounter</span>)
        </pre>
        <pre className="ml-6">
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre className="ml-6">
          <code>
            return <span className="text-info">addBody</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> leaveBodyInOurTrunk ={" "}
            <span className="text-accent">openTrunk</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent"></span>leaveBodyInOurTrunk
            <span className="text-info">()</span>
            <span className="text-base-300"> // 1</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent"></span>leaveBodyInOurTrunk
            <span className="text-info">()</span>
            <span className="text-base-300"> // 2</span>
          </code>
        </pre>
      </div>
      <PostText text="Mike i ja mamy dwie funkcje. Pierwsza - zewnętrzna, to nasz bagażnik. Druga - wewnętrzna, to funkcja wrzucająca ciało do bagażnika." />
      <PostText text="Funkcja zewnętrzna ma zmienną let bodyCounter z początkową wartością równą zero, ma również funkcję wewnętrzną, którą zwraca." />
      <PostText text="Funkcja wewnętrzna natomiast zwiększa licznik ciał w bagażniku o 1." />
      <PostText text="Więc const leaveBodyInOurTrunk = openTrunk() sprawia, że tworzony jest nowy bagażnik, który zwraca funkcję addBody, a następnie wywołujemy ją dwukrotnie." />
      <PostSubtitle subtitle="Zakres" />
      <PostText text="Ogólnie, gdy jakaś funkcja się wywoła to wszystkie zadeklarowane w niej zmienne przepadają - są usuwane przez garbage collector." />
      <PostText text="W przypadku closure, funkcja addBody pamięta środowisko, w jakim została zadeklarowana, czyli pamięta zmienne z funkcji zewnętrznej." />
      <PostText text="Osobiście Ci powiem czytelniku, że ciężko było mi to zrozumieć. Robiłem console.log(leaveBodyInOurTrunk) i pokazywała mi się funkcja addBody." />
      <PostText text="Jak jakiś klocek myślałem, że leaveBodyInOurTrunk = addBody." />
      <PostText text="Ale tu właśnie jest ta magia. Mimo, że openTrunk() zwraca funkcję wewnętrzną, to najpierw tworzy nam zmienną, potem ta funkcja addBody szuka sobie bodyCounter, bo ma ją zainkrementować (++), ale lipa, nie ma jej, więc patrzy wyżej. Znajduje ją wyżej." />
      <PostTextBold text="TO JEST WŁAŚNIE nasze openTrunk(), nie zwykła funkcja addBody, ale cały jej bagażnik, całe to środowisko." />
      <PostSubtitle subtitle="Domykamy temat" />
      <PostText text="Dobra, Mike i ja mamy towarzystwo. Szef zatrudnił innych lamusów. Gonią nas, oj gonią, ale nas nie dogoniat, buraki." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> openTrunk ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-warning">let</span> bodyCounter ={" "}
            <span className="text-info">0</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="ml-6 text-warning">const</span> addBody ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          bodyCounter<span className="text-info">++</span>
        </pre>
        <pre className="ml-6">
          console<span className="text-info">.log</span>(
          <span className="text-success">bodyCounter</span>)
        </pre>
        <pre className="ml-6">
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre className="ml-6">
          <code>
            return <span className="text-info">addBody</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> leaveBodyInOurTrunk ={" "}
            <span className="text-accent">openTrunk</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> leaveBodyInTheirTrunk ={" "}
            <span className="text-accent">openTrunk</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent"></span>leaveBodyInOurTrunk
            <span className="text-info">()</span>
            <span className="text-base-300"> // 1</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent"></span>leaveBodyInOurTrunk
            <span className="text-info">()</span>
            <span className="text-base-300"> // 2</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent"></span>leaveBodyInTheirTrunk
            <span className="text-info">()</span>
            <span className="text-base-300"> // 1</span>
          </code>
        </pre>
      </div>
      <PostText text="Jeśli już ogarniasz czemu znajduje się w ich bagażniku jeden trup, to moja misja została skończona. Możesz zamknąć tę stronę i napić się drogiego szampana." />
      <PostText text="Jeśli natomiast jeszcze nie do końca to łapiesz, to śpieszę z pomocą." />
      <PostText text="Te dwa consty poniżej tworzą dwa nowe stany, niezależne od siebie." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> leaveBodyInOurTrunk ={" "}
            <span className="text-accent">openTrunk</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> leaveBodyInTheirTrunk ={" "}
            <span className="text-accent">openTrunk</span>
            <span className="text-info">()</span>
          </code>
        </pre>
      </div>
      <PostText text="Na nasz mafiny język - mamy dwie oddzielne fury i każda ma swoje trupy w bagażniku." />
      <PostText text="Funkcja openTrunk była tylko narzędziem, a my z niego zbudowaliśmy dwie fury." />
      <PostSubtitle subtitle="A po co to komu?" />
      <PostText text="Zadaj sobie teraz pytanie, jak możesz dostać się do bodyCount. Zerknij sobie na kod wyżej." />
      <PostText text="Minęło ile, 10 sekund, 50 a może 10 minut? Rozwiązanie zagadki brzmi - nie możesz bezpośrednio dostać się do bodyCounter z zewnątrz." />
      <PostText text="Możemy to zrobić tylko poprzez closure. Reasumując nasza zmienna jest prywatna." />
      <PostText text="Bo też po co gapie mają wiedzieć ile trupów wieziemy?" />
      <PostText text="Nasz przykład akurat pozwalał jedynie zwiększać licznik ciał, ale nic nie stoi na przeszkodzie, żeby wypakować trupy czy po prostu zerknąć do bagażnika. Obczaj:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> openTrunk ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            <span className="text-warning">let</span> bodyCounter ={" "}
            <span className="text-info">0</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="ml-6 text-warning">const</span> addBody ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          bodyCounter<span className="text-info">++</span>
        </pre>
        <pre className="ml-6">
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="ml-6 text-warning">const</span> removeBody ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          bodyCounter<span className="text-info">--</span>
        </pre>
        <pre className="ml-6">
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="ml-6 text-warning">const</span> checkTrunk ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          console.<span className="text-info">log</span>(<span className='text-success'>bodyCounter</span>)
        </pre>
        <pre className="ml-6">
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre className="ml-6">
          <code> return {"{"} <span className="text-info">addBody</span>,{" "}
    <span className="text-info">removeBody</span>,{" "}
    <span className="text-info">checkTrunk</span>{"}"}</code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> ourTrunk ={" "}
            <span className="text-accent">openTrunk</span>
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent"></span>ourTrunk.addBody
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent"></span>ourTrunk.removeBody
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent"></span>ourTrunk.addBody
            <span className="text-info">()</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent"></span>ourTrunk.checkTrunk
            <span className="text-info">()</span>
            <span className="text-base-300"> // 1</span>
          </code>
        </pre>
      </div>
      <PostText text="Brudna robota, nie polecam. " />
      <PostSubtitle subtitle="Dla fanów Reacta" />
      <PostText text="Kojarzysz useState?" />
      <PostTextBold text="Stary lichwiarz nie kojarzył. Nie bądź jak stary lichwiarz." />
      <PostText text="Jeśli kojarzysz, to możesz zabłysnąć na rozmowie rekrutacyjnej i powiedzieć, że useState pod spodem korzysta właśnie z closure!" />
      <PostText text="W pokrętny sposób tak właśnie jest przechowywany stan między re-renderami." />
      <PostSubtitle subtitle="Zakończenie" />
      <PostText text="W Prison Break ziomek miał mapę więzienia na plecach, ja u siebie stawiam na dwa pomysły - albo rozpisanie czym jest closure albo event loop." />
      <PostText text="Czołem, do następnego!" />
    </div>
  );
};
export default Post16;