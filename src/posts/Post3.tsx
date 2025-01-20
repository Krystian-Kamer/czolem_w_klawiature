import { PostSubtitle, PostText } from "../components/blog/index";
import evenLoopImg from "/post-assets/post-3-event-loop.jpg";
import pennyImg from "/post-assets/post-3-penny.jpg";
const Post3 = () => {
  return (
    <div>
      <PostSubtitle subtitle="O czym należy wiedzieć na wstępie?" />
      <PostText text="Jest jeden wątek, który należy poruszyć przy omawianiu Event Loop a mianowicie taki, że... JavaScript jest jednowątkowy i może zajmować się jedną rzeczą na raz." />
      <PostText text="Np. gdy funkcja jest wywoływana, to w tle nie będzie obrabiał innych funkcji, tylko skupia się na tej tu i teraz, potem przechodzi do następnej." />
      <PostText text="To tak jak ja, gdy gram w grę na komputerze a partnerka mówi, żebym poszedł na zakupy." />
      <PostText text="Aktualnie jest przetwarzany mój wątek gry na komputerze, kiedy zostanie zakończony, zabiorę się za następny (zakupy)." />
      <PostSubtitle subtitle="Obczaj bez zawału serca poniższy rysunek" />
      <img
        src={evenLoopImg}
        className="my-8 justify-self-center shadow-md"
        alt="event loop image"
      />
      <PostText text="Nawet sam nie wiem co przeraża bardziej we śnie - Freddie Krueger czy ta grafika." />
      <PostText text="Podobne rzeczy wykuwano na ścianach w starożytnym Egipcie, tylko tamte były bardziej zrozumiałe." />
      <PostText text="Zauważyłeś pewnie panią Helenkę, spokojnie, do niej też przejdziemy, dziś pani Helenka zabłyśnie." />
      <PostText text="Niestety jest pare kluczowych słów, które musimy chociaż pobieżnie zrozumieć." />
      <PostText text="Umówmy się, że pokrótce opiszę Ci co każda definicja oznacza, przeczytasz sobie raz, potem przejdziemy do przykładu, który pomoże Ci to bardziej zrozumieć, a potem od Ciebie będzie zależało czy jeszcze raz do definicji powrócisz." />
      <PostSubtitle subtitle="Silnik JavaScript" />
      <PostText text="Masz sobie swój kod napisany w IDE, czyli aplikacji, w której sobie piszesz swój kod, najbardziej popularna to Visual Studio Code (VSC)." />
      <PostText text="Jeśli chcesz być bądź już jesteś frontendowcem, to tym bardziej ogarniesz o co chodzi." />
      <PostText text="Silnik JavaScript interpretuje Twój  kod i wykonuje go w przeglądarce (najczęstszym środowiskiem jest przeglądarka). Zależy to od przeglądarki jaki to jest konkretnie silnik (Google Chrome ma swój, Firefox też, etc.). Silnik ten ma do dyspozycji jeden wątek." />
      <PostText text="Jakże ciężkie i nieintuicyjne byłoby pisanie frontendu bez patrzenia w przeglądarkę. Cała strona wyglądałaby jak obraz Picassa, a tego oboje nie chcemy." />
      <PostText text="Dlatego właśnie każda przeglądarka ma swój silnik, który zczytuje Twoje wypociny i zamienia je w magię - jeśli jesteś dobrym czarodziejem." />
      <PostText text="Wewnątrz silnika są dwie rzeczy, na które musisz zwrócić uwagę - Heap i Call Stack." />
      <PostText text="Jeśli nie czytałeś poprzedniego postu, to polecam Ci do niego zajrzeć, bo omawiam tam zagadnienie referencji, a przydaje się ono do zrozumienia jak działa Heap i Call Stack." />
      <span className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Tu masz link:{" "}
      </span>
      <a
        className="cursor-custom-pointer mb-4 text-lg leading-relaxed text-info md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl"
        href="https://www.czolemwklawiature.com/blog/typy-prymitywne-i-te-eleganckie-oraz-ich-referencje"
      >
        referencje
      </a>
      <PostSubtitle subtitle="Heap" />
      <PostText text="Heap (na polskie sterta) przechowuje złożone struktury danych (takie jak obiekty, tablice, funkcje) i dane dynamiczne." />
      <PostText text="Weźmy na przykład tablicę:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> jsEngine = [
            <span className="text-success">"Heap"</span>,
            <span className="text-success">"Call Stack"</span>]
          </code>
        </pre>
      </div>
      <PostText text="Pamiętasz jak mówiliśmy, że referencja wskazuje na określone miejsce w pamięci? No właśnie, to miejsce znajduje się w pamięci Heap." />
      <PostText text="Sama nasza tablica znajduje się w pamięci Heap, ale nasza zmienna z referencją do tej tablicy jest już gdzie indziej - jeśli jest to zmienna globalna to znajdzie się w Global Execution Context a jeśli  lokalna to w tym zakresie, w którym jest." />
      <PostSubtitle subtitle="Global Execution Context" />
      <PostText text="Zanim przejdziemy do naszej wisienki, chwila o Global Execution Context (GEC)." />
      <PostText text="Nie chciałem aż tak wnikać w ten temat, ale bardzo mnie ciekawiło gdzie do cholery (żeby nie powiedzieć gorzej) są zmienne globalne. " />
      <PostText text="Myślałem, że trafiają do Call Stack, ale jednak tak nie jest - znaczy jest pośrednio." />
      <PostText text="Co mam na myśli?" />
      <PostText text="Z pokrętną pomocą przyszedł ChatGPT, który wyjaśnił mi, że zmienne zadeklarowane globalnie, trafiają do Global Execution Context (GEC), który następnie jako pierwszy trafia do Call Stack." />
      <PostText text="Czytałem pare blogów, ale aż tak nikt w to nie wnikał co się dzieje pod maską." />
      <PostText text="Zapewne ta wiedza nigdy Ci się nie przyda, ale jeśli tak, to już masz trop." />
      <PostText text="Przykład, żeby bardziej to rozjaśnić:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> hello ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-4">
          <code>
            <span className="text-accent">const</span> laboratory = [
            <span className="text-success">"Dexter"</span>,
            <span className="text-success">"Dee Dee"</span>]
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <span>hello</span>
          <span className="text-info">()</span>
        </pre>
      </div>
      <PostText text="Zakładamy, że nasza funkcja hello znajduje się w zakresie globalnym." />
      <PostText text="Zobaczmy krok po kroku co się zadziewa:" />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>
                Sama funkcja trafia do heap, a zmienna wraz z referencją do tej
                funkcji trafia do GEC.
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>
                Global Execution Context trafia do Call Stack jako pierwszy
                element.
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>3</th>
              <td>
                Funkcja hello jest wywoływana. Tworzony jest kontekst w call
                stack, czyli nasza funkcja wskakuje na samą górę naszego stosu
                wywołań, pozostawiając GEC poniżej.
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>4</th>
              <td>
                Silnik patrzy sobie co tam trzeba zrobić, spotyka zmienną
                laboratory i tworzy ją. Jako, że jest to zmienna o typie
                złożonym (skrót myślowy, bo sama zmienna nie ma typu, ale to już
                wiesz), tablica laboratory trafia do heap. Zmienna laboratory
                przechowuje referencję do tej tablicy i znajduje się nadal w
                kontekście funkcji.
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>5</th>
              <td>
                Po zakończeniu działania funkcji zmienna laboratory przestaje
                istnieć, bo była zmienną lokalną. Dodatkowo zamykany jest
                kontekst tej funkcji i przez to zwalnia się Call Stack.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostText text="Global Execution Context zawsze będzie w Call Stacku, ale dla ułatwienia zrozumienia Event Loop, po prostu nie używa się go w przykładach." />
      <PostText text="Wiedz jednak, że on tam jest. Jak cichy stalker albo jak klaun Pennywise w studzience, zawsze patrzy." />
      <img
        src={pennyImg}
        className="my-8 w-full max-w-[500px] justify-self-center shadow-md"
        alt="clown Pennywise image"
      />
      <PostText text="Global Execution Context nie blokuje wykonywania kodu asynchronicznego, dlatego mogłeś o nim nie słyszeć, jest po prostu niewidocznym tłem." />
      <PostSubtitle subtitle="Jedno ale..." />
      <PostText text="Tak jak mówiłem, ta wiedza zapewne nigdy Ci się nie przyda." />
      <PostText text="Gdyby jednak padło pytanie na rozmowie rekrutacyjnej gdzie znajdują się zmienne globalne w pamięci to możesz zabłysnąć. Gdybyś dostał potem pracę, to wiesz komu wysłać podziękowania (i dobre whisky)." />
      <PostText text='Jeśli zauważyłeś jakieś błędy to proszę strzelaj do ChatGPT i nie zabijaj posłańca, to nie Sparta, chociaż rzeczywiście "THIS IS MADNESS!".' />
      <PostText text="Mówię o tym, żeby potem jakiś senior nie stwierdził - O czym on p***li, w sensie mówi!?! Przecież jest tak i tak." />
      <PostText text="ChatGPT często się myli a mylić się jest rzeczą ludzką. Traktować go należy w tym sensie właśnie jak człowieka, który czasem nie ogarnia o czym mówi." />
      <PostSubtitle subtitle="Call Stack" />
      <PostText text="Call stack (na polskie stos wywołań) to miejsce do którego trafiają wywołania funkcji." />
      <PostText text="Wyżej już o nim wspomniałem, ale wiem, że wymaga to ogromnego poziomu abstrakcji, żeby wszystko to sobie poukładać." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <span className="text-base-300">
            // zadeklarowaliśmy sobie wcześniej funkcje a potem je wywołujemy
          </span>
        </pre>
        <pre>
          <span>hello</span>
          <span className="text-info">()</span>
        </pre>
        <pre>
          <span>hellNo</span>
          <span className="text-info">()</span>
        </pre>
        <pre>
          <span>hellYes</span>
          <span className="text-info">()</span>
        </pre>
      </div>
      <PostText text="Na naszym stosie pojawią się one w takiej kolejności w jakiej są wywoływane, natomiast będą usuwane z niego w odwrotnej kolejności. Na tym polega właśnie zasada LIFO (last in, first out). Czyli pierwsze co zostanie usunięte ze stosu to hellYes." />
      <PostText text="To tak jakbyś był kelnerem i nabijał rachunki na ten szpikulec w jadalni. Wiadomo, że potem musiałbyś wyjmować je poczynając od tego na samej górze." />
      <PostText text="Problem (zwał jak zwał, po prostu tak jest) pojawia się, gdy masz w kodzie zdarzenie asynchroniczne." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> hello1 ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">"czołem"</span> )
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> hello2 ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">"w"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> hello3 ={" "}
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">"klawiaturę"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre>
          <span>hello1</span>
          <span className="text-info">()</span>
        </pre>
        <pre>
          <span>setTimeout</span>
          <span className="text-info">{"("}</span>
          hello2, 1000
          <span className="text-info">{")"}</span>
        </pre>
        <pre>
          <span>hello3</span>
          <span className="text-info">()</span>
        </pre>
        <pre>
          <span className="text-base-300">// czołem</span>
        </pre>
        <pre>
          <span className="text-base-300">// klawiaturę</span>
        </pre>
        <pre>
          <span className="text-base-300">// w</span>
        </pre>
      </div>
      <PostText text="Samo hello2 nie jest funkcją asynchroniczną, ale setTimeout jest asynchroniczny." />
      <PostText text="Widzisz na przykładzie zatem, że najpierw wywołana jest funkcja hello1, potem hello3, a na samym końcu funkcja setTimeout z funkcją hello2 wewnątrz." />
      <PostText text="To 1000 to ilość milisekund po jakich zostanie wykonana funkcja. Gdyby było 0 milisekund to i tak funkcja zostałaby kolokwialnie mówiąc wyproszona z kolejki Call Stack, czyli w kolejności nic by się nie zmieniło." />
      <PostText text='Mogłoby się wydawać, że skoro ma zero sekund to jest natychmiastowa i powinna wyjść kolejność w konsoli "czołem" "w" "klawiaturę", ale tak się nie dzieje, bo setTimeout nadaje asynchroniczność.' />
      <PostText text="Zamiast tego setTimeout trafia początkowo do WEB API." />
      <PostSubtitle subtitle="API Przeglądarki (WEB API)" />
      <PostText text="Nie jest to bezpośredni element języka JavaScript, jest to API przeglądarki. Znaczy to tyle, że to przeglądarka ma wbudowane jakieś specjalne metody, właściwości, z których możemy korzystać w naszym kodzie, chociażby setTimeout, setInterval, fetch-e, eventy." />
      <PostText text="To właśnie API przeglądarki odlicza czas jednej sekundy i po upływie tego czasu przekazuje funkcję do Queue." />
      <PostSubtitle subtitle="Queue" />
      <PostText text="To nasza kolejka, w której przechowywane są zadania asynchroniczne, nasza kolejka rezerwowych. Kiedy piłkarze synchroniczni grają, nasz zawodnik asynchroniczny tu czeka." />
      <PostText text="Kiedy trener Event Loop gwizdnie w gwizdek, asynchroniczny zawodnik wchodzi do gry." />
      <PostText text="W Queue działa zasada FIFO (first in first out), która oznacza tyle, że element dodany jako pierwszy jest też pierwszym elementem, który opuszcza kolejkę." />
      <PostText text="Nasze Queue może obejmować dwa typy operacji - mikrotaski i makrotaski." />
      <PostSubtitle subtitle="Macrotask (callback) queue" />
      <PostText text="Jest to kolejka, która przechowuje callbacki z setTimeout, setInterval, zdarzeń DOM (np. walnięcie czołem w klawiaturę, czyli naciśnięcie klawiszy)." />
      <PostSubtitle subtitle="Microtask queue" />
      <PostText text="To kolejka o większym priorytecie. W niej znajdują się zadania związane z Promise i MutationObserver (nie zagłębiajmy się co to jest)." />
      <PostText text="Nie musisz tego wiedzieć, ale Promisy nie korzystają z Web API tylko bezpośrednio trafiają do queue." />
      <PostSubtitle subtitle="Zobacz lepiej na żywo:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">"Początkowe czołem"</span>)
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">setTimeout</span>
            <span className="text-success">{"("}</span>
            <span className="text-info">()</span> <span>{"=> {"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">"Timeoutowe czołem"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>, 0<span className="text-success">{")"}</span>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">Promise.resolve</span>
            <span className="text-info">()</span>.
            <span className="text-info">then</span>
            <span className="text-success">{"("}</span>
            <span>{"()=>"}</span> {"{"}
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">"Promisowe czołem"</span>)
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
          <span className="text-success">{")"}</span>
        </pre>
        <pre></pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">"Końcowe czołem"</span>)
          </code>
        </pre>
        <pre></pre>
        <pre>
          <span className="text-base-300">// Początkowe czołem</span>
        </pre>
        <pre>
          <span className="text-base-300">// Końcowe czołem</span>
        </pre>
        <pre>
          <span className="text-base-300">// Promisowe czołem</span>
        </pre>
        <pre>
          <span className="text-base-300">// Timeoutowe czołem</span>
        </pre>
      </div>
      <PostText text="Widzisz już teraz, że zarówno Promise i setTimeout zostały potraktowane jako zdarzenia asynchroniczne." />
      <PostText text="Funkcja setTimeout mimo, że była pierwsza w kodzie, wywołana została później od zdarzenia z Promisem, bo miała mniejszy priorytet (nawet z czasem rozpoczęcia 0 miliksekund!)." />
      <PostText text="Mikrotaski są przetwarzane przed makrotaskami." />
      <PostText text='Właśnie dlatego "Promisowe czołem" pokazane jest jako pierwsze, bo jest microtaskiem.' />

      <PostSubtitle subtitle="Event Loop" />
      <PostText text="Jest to mechanizm, który cały czas sprawdza czy Call Stack jest pusty (nie licząc klowna, który cały czas patrzy ze studzienki - Global Execution Context)." />
      <PostText text="Jeśli Call Stack jest pusty to wrzuca pierwszy element, który pojawił się w Queue (o ile jakiś się tam znajduje)." />
      <PostText text="Dlatego właśnie po wykonaniu funkcji synchronicznych widzisz console.log funkcji asynchronicznej." />
      <PostSubtitle subtitle="Kondolencje" />
      <PostText text="Wybacz, że musiałem Cię pomęczyć tymi definicjami. Sam mechanizm działania event loop jest intuicyjny." />
      <PostText text="Pokażę Ci to na przykładzie." />
      <PostSubtitle subtitle="Wózek już pełny, najmniejsza kolejka gdzie? O! Tam!" />
      <PostText text="Poszedłem do marketu." />
      <PostText text="Tutaj zaczyna się moja przygoda, a że to czytasz, to także i Twoja. Jeżeli byłeś kiedyś w Carrefourze, to mogłeś zauważyć, że dwie pierwsze kasy są uprzywilejowane dla pewnych osób." />
      <PostText text="Nie wiem dokładnie czy nadal tak jest, bo dziś mi bliżej do Lidla i Biedry, ale załóżmy że nadal tak jest." />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>
                Mówiąc o uprzywilejowanych osobach mam na myśli: osoby
                niepełnosprawne, osoby starsze, ludzi ze schorzeniami, kobiety w
                ciąży, osoby z ograniczoną mobilnością, etc.
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>Mówiąc o nieuprzywilejowanych osobach mam na myśli: mnie.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostText text="To rozróżnienie jest kluczowe dla zrozumienia działania event loop, ponieważ osoby uprzywilejowane odzwierciedlać będą funkcje synchroniczne a ja zdarzenie asynchroniczne." />
      <PostText text="Niestety dopadła mnie pomroczność i z automatu wbiłem się do kolejki dla osób uprzywilejowanych. To znaczy jestem samotną operacją  asynchroniczną pośród funkcji synchronicznych." />
      <PostSubtitle subtitle="Pani Helenka na straży" />
      <PostText text="Pani Helenka to stary wyga w naszym markecie. Nic jej nie umknie. Nic. Ludzie się śmieją, że ma oczy jak kameleon a głowę jak sowa, ale ona wie swoje. Wie, że ma robotę do wykonania." />
      <PostText text="Jakie są fakty:" />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>
                Stanąłem w złej kolejce i jestem sobie w Call Stack, gdzie
                znajduje się pomiędzy wywołaniami funkcji synchronicznych.
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>
                Jako, że jestem asynchroniczny, zostaję wyproszony do API
                przeglądarki bądź bezpośrednio do Queue, w zależności od tego
                jakim zdarzeniem jestem.
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>3</th>
              <td>Tak czy siak -trafiam w końcu do Queue i sobie czekam.</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>4</th>
              <td>
                Pani kasjerka Helenka (Event Loop) ma bardzo ważne zadanie. Co
                chwila łypie okiem i patrzy czy wszystkie osoby uprzywilejowane
                już opuściły kasę. Jeśli tak zaprasza mnie, bo jestem pierwszy w
                Queue.
              </td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>5</th>
              <td>
                Niechętnie zostaję obsłużony i płacę niebotyczne pieniądze, bo
                inflacja jak cholera i źle mi się z oczu patrzyło.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostSubtitle subtitle="Czego się dziś nauczyliśmy" />
      <PostText text="Po pierwsze, ChatGPT to nie wyrocznia." />
      <PostText text="Po drugie, mogłem iść na psychiatrę albo psychologa, ale za bardzo lubię babrać się w kodzie." />
      <PostText text="Po trzecie, klown z IT patrzy, mimo, że go nie widać." />
      <PostText text="Po czwarte, wiesz już jak działa Event Loop i silnik JavaScript. " />
      <PostText text="Po piąte, pani Helenka da Ci zniżkę 5% na kolejne zakupy, jeśli polajkujesz jakikolwiek mój post na LinkedIn albo napiszesz do mnie prywatnie." />
    </div>
  );
};
export default Post3;
