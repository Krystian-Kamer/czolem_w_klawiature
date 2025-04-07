import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";

const Post13 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Wstęp" />
      <PostText text="W końcu zasilam inną kategorię na blogu niż rozkminy i JavaScript, szeregi zabawnych postów rosną w siłę." />
      <PostText text="By przejść do tematu głównego płynnie należy poruszyć pobieżnie temat TypeScript-a." />
      <PostText text="Chyba mądrzej byłoby nawet napisać post o tym czym jest TypeScript a dopiero potem napisać o Interface." />
      <PostSubtitle subtitle="Czym jest TypeScript" />
      <PostText text="Właśnie zboczyliśmy z głównego szlaku dobrze oznakowanego, by wrąbać się w gąszcz badyli i chaszczy, by dotrzeć do definicji TypeScript-a." />
      <PostText text="Przemierzając JavaScriptową dżunglę gołym okiem zauważysz, że zmienne mogą być czym chcą, raz mogą być stringiem, raz typem number. Wolna Amerykanka." />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">let</span> cost ={" "}
            <span className="text-success">"dwanaście groszy"</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">typeof</span>{" "}
            <span className="text-success">cost</span>)
            <span className="text-base-100/50"> //string</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            cost =<span className="text-success"> 12</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">typeof</span>{" "}
            <span className="text-success">cost</span>)
            <span className="text-base-100/50"> //number</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            cost =<span className="text-success"> false</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">typeof</span>{" "}
            <span className="text-success">cost</span>)
            <span className="text-base-100/50"> //boolean</span>
          </code>
        </pre>
      </div>
      <PostText text="Mówi się przez to, że JavaScript jako język programowania jest słabo typowany." />
      <PostText text="Wszystko może okazać się wszystkim, jak w Tajlandii, gdy chciałeś pojeść brzoskwinię, a kelner podał Ci bakłażana." />
      <PostText text="TypeScript to JavaScript na sterydach. Cechuje go silne typowanie. Tyle i aż tyle." />
      <PostText text="Jak to wygląda w praktyce?" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">let</span> isHeMoron{" "}
            <span className="text-info">: string</span> ={" "}
            <span className="text-success">"Yep"</span>
          </code>
        </pre>
        <pre>
          <code>
            isHeMoron =<span className="text-success"> true</span>
            <span className="text-base-100/50">
              {" "}
              //Type 'boolean' is not assignable to type 'string'
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Ogólnie zrobi to o co go prosisz i zamieni naszego Yep na true, ale po drodze wywali ten soczysty error na twarz." />
      <PostText text="Warto też pamiętać, że jeśli będziesz miał w kodzie errory wynikające z TypeScripta, to nie będziesz mógł puścić swojej świeżej jak bułeczki aplikacji w świat, bo TypeScript Cię nie przepuści." />
      <PostText text="To bardzo dobry wartownik, a największą jego zaletą jest to, że na bieżąco sprawdza co odwalasz w kodzie i wytknie Ci każdy, nawet najmniejszy duperelowaty błąd." />
      <PostText text="Więc jeśli chcesz być sam zadowolony, musisz wpierw zadowolić TypeScript. Coś jak z żoną. Jeśli ją masz to wiesz o czym mówię😉" />
      <PostSubtitle subtitle="Wracamy na szlak" />
      <PostText text="Ten post trwałby w nieskończoność, gdybym miał omówić każde zagadnienie z TS-a." />
      <PostText text="Dzisiaj skupiamy się wyłącznie na porównywaniu naszych dwóch zawodników🥊" />
      <PostTextBold text="W lewym narożniku mamy el mui mui loco Interface, ważący... nie wiadomo ile,  jednak znający się tylko na jednym - na typowaniu obiektów." />
      <PostText text="Co dalej?" />
      <PostTextBold text="W prawym narożniku mamy Type Alias, wagni nieznanej, który wykracza poza marne typowanie obiektów. Jest gibki jak wąż i potrafi przyjąć więcej na klatę." />
      <PostText text="Nie jest to gra Tekken ani Mortal Kombat, ale zacznijmy pojedynek. Niech wygra najlepszy!" />
      <PostSubtitle subtitle="Interface" />
      <PostText text="Służy do otypowania obiektu i głównie do tego. Składnia wygląda mniej więcej tak:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">interface</span> Pokemon {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> string</span>;
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> boolean</span>;
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> string</span>
            {"}"}
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> charizard{" "}
            <span className="text-info">: Pokemon</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Charizard"</span>,
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> "fire"</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> pikachu{" "}
            <span className="text-info">: Pokemon</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Pikachu"</span>,
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> "electric"</span>
            {"}"}{" "}
          </code>
        </pre>
      </div>
      <PostText text="Może być wiele interfejsów o tej samej nazwie. Wtedy po prostu stają się one zmergowane w jeden - tzn. nakładają się na siebie." />
      <PostText text="Przykład:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">interface</span> Pokemon {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> string</span>;
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> boolean</span>;
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> string</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">interface</span> Pokemon {"{"}
            <span className="text-warning">form</span>:
            <span className="text-success"> number</span>
            {"}"}
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> charizard{" "}
            <span className="text-info">: Pokemon</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Charizard"</span>,
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> "fire"</span>,
            <span className="text-warning"> form</span>:
            <span className="text-success"> 3</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> pikachu{" "}
            <span className="text-info">: Pokemon</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Pikachu"</span>,
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> "electric"</span> {"}"}{" "}
            <span className="text-base-100/50">
              //Property 'form' is missing in type...
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Jak widzisz TypeScriptowi już nie pasuje, że Pikaczu nie ma podanej formy. W tym przykładzie forma ewolucji pokemona stała się już obligatoryjna." />
      <PostText text="Chyba Pikaczu jest formą drugą tak na prawdę, bo był jeszcze Piczu, ale cholera wie czy to osobny pokemon czy wcześniejsza forma, whateva." />
      <PostText text="Nowy Interface można też rozszerzyć przy użyciu extends. Jedziemy:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">interface</span> Person {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> string</span>;
            <span className="text-warning"> isFunny</span>:
            <span className="text-error"> boolean</span>;
            <span className="text-warning"> age</span>:
            <span className="text-success"> number</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">interface</span> Developer{" "}
            <span className="text-info">extends</span> Person {"{"}
            <span className="text-warning"> isSmart</span>:
            <span className="text-error"> boolean</span>
            {"}"}
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> janusz{" "}
            <span className="text-info">: Person</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Janusz"</span>,
            <span className="text-warning"> isFunny</span>:
            <span className="text-error"> false</span>,
            <span className="text-warning"> age</span>:
            <span className="text-success"> 42</span>
            {"}"}
          </code>
        </pre>

        <pre>
          <code>
            <span className="text-accent">const</span> bartosz{" "}
            <span className="text-info">: Developer</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Bartosz"</span>,
            <span className="text-warning"> isFunny</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> age</span>:
            <span className="text-success"> 26</span>,
            <span className="text-warning"> isSmart</span>:
            <span className="text-error"> true</span>
            {"}"}
          </code>
        </pre>
      </div>
      <PostText text="Nie musimy mieć wiedzy o inteligencji Janusza, bo w Person nie jest to wymagane." />
      <PostText text="Ale jeśli chcemy, by Bartosz był rasowym Developerem, musimy wiedzieć, że jest człowiekiem (Person) a nie SI oraz czy jest bystry. W tym przypadku jest." />
      <PostText text="Jeśli jesteś fanem Batmana🦇, to poniższy przykład będzie dla Ciebie jak znalazł, bo znajdziemy mu Catwoman🐈‍⬛:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">interface</span> Cat {"{"}
            <span className="text-warning"> hasClaws</span>:
            <span className="text-error"> boolean</span>,
            <span className="text-warning"> hasFurr</span>:
            <span className="text-error"> boolean</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">interface</span> Woman {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> string</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">interface</span> Catwoman{" "}
            <span className="text-info">extends</span> Cat, Woman {"{"}
            <span className="text-warning"> age</span>:
            <span className="text-success"> number</span>
            {"}"}
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> selina{" "}
            <span className="text-info">: Catwoman</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Selina"</span>,
            <span className="text-warning"> hasClaws</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> hasFurr</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> age</span>:
            <span className="text-success"> 26</span>
            {"}"}
          </code>
        </pre>
      </div>
      <PostText text="No i powstała kobieta kot. Nie wiem jakie Batman ma preferencje, szczególnie te bardzo specyficzne (wink wink), ale Selina ma furr ustawione na true. Także jak nie ta to może Trujący Bluszcz🌱?" />
      <PostText text="Możesz też za pomocą Interface określić typy argumentów i zwracanych wartości Posłużmy się starym dobrym przykładem:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">interface</span> HireFunction
            <span>{" {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            (<span className="text-warning">name</span> :{" "}
            <span className="text-success">string</span>) :{" "}
            <span className="text-success">string</span>
          </code>
        </pre>
        <pre>
          <span>{"}"}</span>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> hireMePlz{" "}
            <span className="text-info">: HireFunction</span> ={" "}
            <span className="text-info">
              (<span className="text-neutral">name</span>)
            </span>{" "}
            <span>{"=> {"}</span>
          </code>
        </pre>
        <pre className="ml-6">
          <code>
            return <span className="text-warning">name</span> +
            <span className="text-success"> ", masz tę pracę."</span>
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
            <span className="text-base-300">// "Krystian, masz tę pracę."</span>
          </code>
        </pre>
      </div>
      <PostText text="W tym przykładzie wskazaliśmy jasno jaki typ ma mieć argument oraz jaki typ ma zostać zwrócony." />
      <PostText text="Interfejsów też możesz użyć do implementacji przez klasy - nie bedę jednak tego syfu tykał, bo na myśl o klasach dostaję epilepsji." />
      <PostSubtitle subtitle="Type Alias" />
      <PostText text="Aliasy typów (paskudna nazwa) mają większe możliwości, bo nie ograniczają się tylko do obiektów." />
      <PostText text="Możemy tak samo określić nasze pokemony jak z interface, luknij:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">type</span> Pokemon = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> string</span>;
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> boolean</span>;
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> string</span>
            {"}"}
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> charizard{" "}
            <span className="text-info">: Pokemon</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Charizard"</span>,
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> "fire"</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> pikachu{" "}
            <span className="text-info">: Pokemon</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Pikachu"</span>,
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> "electric"</span>
            {"}"}{" "}
          </code>
        </pre>
      </div>
      <PostText text="O ile mając pierdyliard interface o nazwie Pokemon było spoko, Type Alias może być tylko jeden. Nie ma, że:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">type</span> Pokemon = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> string</span>;
            <span className="text-warning"> isInPokedex</span>:
            <span className="text-error"> boolean</span>;
            <span className="text-warning"> typeOfPokemon</span>:
            <span className="text-success"> string</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">type</span> Pokemon = {"{"}
            <span className="text-warning">form</span>:
            <span className="text-success"> number</span>
            {"}"}
          </code>
        </pre>
      </div>
      <PostText text="To nie przejdzie." />
      <PostText text="Type Alias inaczej też radzi sobie z dziedziczeniem. Nie ma tu extends, ale jest za to &." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">type</span> Person = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> string</span>;
            <span className="text-warning"> isFunny</span>:
            <span className="text-error"> boolean</span>;
            <span className="text-warning"> age</span>:
            <span className="text-success"> number</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">type</span> Developer = Person
            <span className="text-info"> &</span> {"{"}
            <span className="text-warning"> isSmart</span>:
            <span className="text-error"> boolean</span>
            {"}"}
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> janusz{" "}
            <span className="text-info">: Person</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Janusz"</span>,
            <span className="text-warning"> isFunny</span>:
            <span className="text-error"> false</span>,
            <span className="text-warning"> age</span>:
            <span className="text-success"> 42</span>
            {"}"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> bartosz{" "}
            <span className="text-info">: Developer</span> = {"{"}
            <span className="text-warning">name</span>:
            <span className="text-success"> "Bartosz"</span>,
            <span className="text-warning"> isFunny</span>:
            <span className="text-error"> true</span>,
            <span className="text-warning"> age</span>:
            <span className="text-success"> 26</span>,
            <span className="text-warning"> isSmart</span>:
            <span className="text-error"> true</span>
            {"}"}
          </code>
        </pre>
      </div>
      <PostText text="Mimo innej składni, efekt jest ten sam." />
      <PostTextBold text="Co jeszcze potrafi to cudeńko?" />
      <PostText text="A no, type alias potrafi  typować nie tylko obiekty, ale też zwykłe klasyczne zmienne." />
      <PostText text="Tym bije na głowę Interface tak mocno, że mamy pierwszy nokaut!!! Drodzy Państwo co za widowisko!" />
      <PostText text="Na przykład możemy określić, że nasza zmienna może miec typ string lub boolean:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">type</span> Animal =
            <span className="text-warning"> string</span> |
            <span className="text-warning"> boolean</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">let</span> isItBird{" "}
            <span className="text-info">: Animal</span> ={" "}
            <span className="text-success">"tak, to paputek"</span>
          </code>
        </pre>
        <pre>
          <code>
            isItBird =<span className="text-warning"> true</span>
          </code>
        </pre>
      </div>
      <PostText text="Dobra, przyznam, że może akurat ten example nie jest do końca udany, ale chociaż ogarniasz, że można przydzielić zmiennej parę typów. Między string a boolean jest pionowa kreska, czyli nasze lub." />
      <PostText text="Możemy też określić bardziej precyzyjnie czym nasza zmienna może być:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">type</span> Theme =
            <span className="text-warning"> 'light'</span> |
            <span className="text-warning"> 'dark'</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">let</span> theme{" "}
            <span className="text-info">: Theme</span> ={" "}
            <span className="text-success">"dark"</span>
          </code>
        </pre>
        <pre>
          <code>
            theme =<span className="text-success"> 'light'</span>
          </code>
        </pre>
      </div>
      <PostText text="W tym przypadku nasza zmienna może być albo stringiem o nazwie dark albo stringiem o nazwie light. Sprytne." />
      <PostText text="Oprócz tego typu rzeczy, Type Alias może przechowywać inne Type Aliasy, czyli taka incepcja:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">type</span> Animal =
            <span className="text-warning"> string</span> |
            <span className="text-warning"> boolean</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">type</span> Theme =
            <span className="text-warning"> 'light'</span> |
            <span className="text-warning"> 'dark'</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">type</span> WeirdShit =
            <span className="text-warning"> Animal</span> |
            <span className="text-warning"> Theme</span>
          </code>
        </pre>
      </div>
      <PostSubtitle subtitle="Więcej grzechów nie pamiętam" />
      <PostText text="Z rzeczy wspólnych to oba te sposoby mogą typować klasy." />
      <PostText text="Mam jakąś awersję do klas, dlatego nie będzie przykładu. Będe musiał obagadać to na psychoterapii, bo widoczny jest opór😏" />
      <PostText text="To są właśnie najważniejsze różnice. A kto wygrał?" />
      <PostTextBold text="To zależy." />
      <PostText text="Jeśli znasz Type Alias, a nie znasz Interface, to poradzisz sobie. W drugą stronę będzie ciężko..." />
      <PostText text="Gołym okiem widać, że typy aliasów mają więcej bajerów, jak te kalkukatory z 40 innymi przyciskami, sinus, cosinus, liczenie Pi, ryczałtu i podatków na zawołanie." />
      <PostText text="Z drugiej strony jak wiesz, że obiekt może być rozszerzony w przyszości to możesz szybko dodać drugi Inteface o tej samej nazwie i się zmergują." />
      <PostText text="Do czego ja używam Interface zazwyczaj? No więc do typowania propsów w komponencie reactowym oraz do typowania obiektów np. pochodzących z API." />
      <PostTextBold text="Gdzie diabeł Interface użyć nie może tam Type Alias pośle." />
      <PostText text="Wiele natomiast zależy od specyfiki projektu i jak dołączysz do zespołu, gdzie psy🐶 szczekają dupami to będziesz szczekać razem z nimi i schowasz dumę w kieszeń." />
      <PostText text="No chyba, że będziesz mieć respekt na programistycznej dzielni +50. Wtedy możesz poruszyć ten temat." />
      <PostText text="Na pewno o czymś zapomniałem, a jeśli tak, to resztę dopowie dokumentacja📜" />
      <PostText text="Czołem, do następnego!" />
    </div>
  );
};
export default Post13;
