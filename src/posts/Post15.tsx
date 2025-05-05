import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";

const Post15 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Wylądowaliśmy szczęśliwie" />
      <PostText text="Tak, spadochron się otworzył i wylądowaliśmy w środku typescriptowej dżungli. Mamy już pierwszy temat z TS za sobą. Wchodzimy w głębszy ląd, przecinając maczetą kupę chaszczy." />
      <PostText text="Będąc w projekcie grupowym natrafiłem na obcą cywilizację, która w swoim codziennym egzystowaniu programistycznym używa enumów. Postanowiłem zbadać to zjawisko." />
      <PostText text="To właśnie Ci tubylcy pokazali mi, że enum to jednak przyjaciel a nie wróg, choć początkowo myślałem, że trzeba to zestrzelić jak zombie, pojedynczym celnym strzałem w głowę. Bang!" />
      <PostSubtitle subtitle="Enum" />
      <PostText text="Enum to przebiegła bestia w TypeScript, która przybiera wiele form." />
      <PostText text="ChatGPT wskazuje, że jest wyliczanka, specjalny typ danych, który pozwala definiować zestaw nazwanych wartości stałych. Brzmi skomplikowanie." />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">enum</span> HeroClass {"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Warrior</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Wizard</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Mage</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Witch</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Knight</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
      </div>
      <PostText text="Domyślnie to działa jak z tablicą, której index odlicza się od 0. Każda z tych postaci ma przypisaną wartość numeryczną." />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> myHero:{" "}
            <span className="text-accent">HeroClass</span> ={" "}
            <span className="text-warning">HeroClass</span>.Wizard
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(<span>myHero</span>){" "}
            <span className="text-base-300">// 1</span>
          </code>
        </pre>
      </div>

      <PostText text="Tak działa to domyślnie." />
      <PostText text="Możemy też zrobić odwrotnie, na podstawie indexu (w sensie wartości numerycznej) dostać się do klucza." />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-accent">
              HeroClass
              <span className="text-info">
                [<span className="text-neutral">2</span>]
              </span>
            </span>
            ){" "}
            <span className="text-base-300">
              // "Mage" - to jest typu string
            </span>
          </code>
        </pre>
      </div>

      <PostText text="Możemy też zmienić wartości domyślne w podany poniżej sposób:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">enum</span> ClassSpellDamage {"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Warrior</span> ={" "}
            <span className="text-info">10</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Wizard</span> ={" "}
            <span className="text-info">130</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Mage</span> ={" "}
            <span className="text-info">150</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Witch</span> ={" "}
            <span className="text-info">100</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Knight</span> ={" "}
            <span className="text-info">15</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> witchDmg:{" "}
            <span className="text-accent">ClassSpellDamage</span> ={" "}
            <span className="text-warning">ClassSpellDamage</span>.Witch
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(<span>witchDmg</span>
            ) <span className="text-base-300">// 100</span>
          </code>
        </pre>
      </div>
      <PostText text="Widzisz już, że nasza hipotetyczna wiedźma rzucając EXPELLIARMUS zada 100 dmg oraz, że enumy mają wiele zastosowań. Żeby je wszystkie poznać potrzeba praktyki." />
      <PostText text="Jeśli dodalibyśmy kolejną postać bez przypisanej wartości, to zerknij:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">enum</span> ClassSpellDamage {"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Warrior</span> ={" "}
            <span className="text-info">10</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Wizard</span> ={" "}
            <span className="text-info">130</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Mage</span> ={" "}
            <span className="text-info">150</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Witch</span> ={" "}
            <span className="text-info">100</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Knight</span> ={" "}
            <span className="text-info">15</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Barbarian</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> barbarianDmg:{" "}
            <span className="text-accent">ClassSpellDamage</span> ={" "}
            <span className="text-warning">ClassSpellDamage</span>.Barbarian
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>barbarianDmg</span>){" "}
            <span className="text-base-300">// 16</span>
          </code>
        </pre>
      </div>
      <PostText text="Więc tutaj TypeScript sobie patrzy jaka ostatnia wartość pojawiła się w enumie i dodaje +1 do tego, dlatego mamy 16." />
      <PostText text="Pewnie zastanawiasz się co by było, gdyby np. nasz Warrior miał również 16. W takiej sytuacji, oba zadane dmg wynosiłby 16 a TypeScript nie zwróciłby błędu." />
      <PostText text="Co dalej?" />
      <PostText text="Gra, którą tworzymy wymaga atrybutów, które będą po stronie programistycznej po angielsku (klasyka) a po stronie przeglądarki po polsku." />
      <PostTextBold text="Idealnie do tego nadaje się enum!" />
      <PostText text="Zerknij jak można to łatwo zrobić:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">enum</span> CharacterAttributeLabel{" "}
            {"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Agility</span> ={" "}
            <span className="text-success">"zwinność"</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Strength</span> ={" "}
            <span className="text-success">"krzepa"</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Intellect</span> ={" "}
            <span className="text-success">"umysł"</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Endurance</span> ={" "}
            <span className="text-success">"wytrzymałość"</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Perception</span> ={" "}
            <span className="text-success">"percepcja"</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Speed</span> ={" "}
            <span className="text-success">"szybkość"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> strengthLabel:{" "}
            <span className="text-accent">CharacterAttributeLabel</span> ={" "}
            <span className="text-warning">CharacterAttributeLabel</span>
            .Strength
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span>strengthLabel</span>){" "}
            <span className="text-base-300">// "krzepa"</span>
          </code>
        </pre>
      </div>
      <PostText text="Właśnie w ten sposób możemy dostać się do krzepy." />
      <PostText text="Czytasz sobie, patrzysz, wygląda fajnie, ale pewnie zastanawiasz się - a po co to komu, a dlaczego? Skąd wiem? Bo sam się zastanawiałem." />
      <PostText text="Może wróćmy się o krok i zastanówmy się do czego służy TypeScript - oprócz utrudnienia i ułatwienia nam życia jednocześnie - coś jak z żoną, która opieprzy, ale zrobi też kanapki." />
      <PostTextBold text="TypeScript głównie służy do ochrony Ciebie przed Twoją własną głupotą." />
      <PostText text="To nie tak, że od teraz wychwalam enumy pod niebiosa, ale dostrzegam ich plusy." />
      <PostSubtitle subtitle="Plusy enumów" />
      <PostText text="Wyobraź sobie, że jesteś szarym robakiem w wielkim korporacyjnym biznesie." />
      <PostText text="O, na przykład, że pracujesz dla Allegro i mądre głowy z biznesu wymyśliły, że zamiast słowa Produkty wolą używać słowa Przedmioty." />
      <PostText text="Wyobraź też sobie, że nie używacie w projekcie enumów. Teraz, w pierdyliardzie dokumentów musisz poszukać słowa Produkty i zamienić go ręcznie na Przedmioty." />
      <PostTextBold text="Biada wam powiadam, oj biada." />
      <PostText text="Super zabawa, nie? Wystarczy wpisać w VSC: ctrl + shift + f i masz giga produktywną pracę w ciągu całego dnia albo i dni - gwarantowaną!" />
      <PostText text="A teraz wyobraź sobie sytuację, gdzie masz enumy w projekcie, szukasz sobie enuma odpowiedzialnego za polskie nazewnictwo czy coś w ten deseń i zamiast:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">enum</span> WhateverPolishLabel {"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Payment</span> ={" "}
            <span className="text-success">"kupno"</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Selling</span> ={" "}
            <span className="text-success">"sprzedaż"</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Items</span> ={" "}
            <span className="text-success">"produkty"</span>,
          </code>
        </pre>
        <pre>
          <code>
            <span className="ml-4 text-warning">Purchased</span> ={" "}
            <span className="text-success">"zakupione"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
      </div>
      <PostText text="Zmieniasz sobie tylko w tym jednym miejscu produkty na przedmioty, ot, koniec pracy. Gdzie moja podwyżka? Gdzie oklaski od PM-a i biznesu?" />
      <PostText text="Jeśli nie jesteś jeszcze przekonany, wyobraź sobie sytuację, gdy nie używasz enumów i wszystko robisz z palca." />
      <PostText text="Robisz sobie prostą instrukcję z if-em, no chociażby taką:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-info">if</span> (
            <span className="text-warning">item</span> ==={" "}
            <span className="text-success">'but'</span>){"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-base-300">// "jakaś logika"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
      </div>
      <PostText text="I musiałeś do łazienki za potrzebą, zapominasz, robisz co innego, wstajesz, wyłączasz czajnik z gwizdkiem, bo siedzisz na zdalnym, przychodzisz do komputera i klepiesz dalej. 50 minut później zauważasz, że jakaś funkcja działa nie tak jak powinna! WTFFFFF!" />
      <PostText text="Myślisz sobie, cholera, 51 minut wcześniej ten syf działał. Co się odwaliło? Szperasz, szukasz, no diabeł ogonem zakrył tą linijkę kodu!" />
      <PostText text="W końcu po 43 godzinach, 7 kawach, 3 croissantach, wkurw*e stulecia znalazłeś to tycie badziewie. Jeden drobny szczególik, za to jaki upierdliwy! Zauważasz, że powinno być:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-info">if</span> (
            <span className="text-warning">item</span> ==={" "}
            <span className="text-success">'buty'</span>){"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-base-300">// "jakaś logika"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
      </div>
      <PostText text="A mogłeś tego uniknąć, bardzo prostyk kosztem. Jak?" />
      <PostTextBold text="Dokładnie, używając enuma. Jakie to proste! Brawo!" />
      <PostText text="Czary mary naszej hipotetycznej wiedźmy z paru przykładów wcześniej i puf:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-info">if</span> (
            <span className="text-warning">item</span> ==={" "}
            <span className="text-accent">ItemPolishLabel</span>.Shoes){"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-base-300">// "jakaś logika"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
      </div>
      <PostText text="Już samo wpisanie w kod ItemPolishLabel i kropka da nam wszystkie opcje jakie znajdują się w tym enumie, więc masz pewność, że się nie pomylisz." />
      <PostText text="Słowo buty to jeszcze pół biedy. Ale co gdy mamy:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-info">if</span> (
            <span className="text-warning">heroClass</span> ==={" "}
            <span className="text-info">2</span>){"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-base-300">// "jakaś logika"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
      </div>
      <PostText text="Możemy domniemywać na podstawie tego heroClass co to jest, ale no wygląda to lipnie. Trzeba patrzeć w papiery, dokumentację, wenrwiać się, napić się meliski, dramat." />
      <PostText text="Taka ww. liczba jest nazywana magic number. Jest to zła praktyka w kodzie, jak zbieranie grzybów z blaszkami (no chyba, że kanie czy opieńki). Reasumując, jest to nieczytelne." />
      <PostText text="Ładniej i czytelniej wygląda:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-info">if</span> (
            <span className="text-warning">heroClass</span> ==={" "}
            <span className="text-accent">HeroClass</span>.Mage){"{"}
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-base-300">// "jakaś logika"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>{"}"}</span>
          </code>
        </pre>
      </div>
      <PostText text="Poza tym, jeśli jesteś juniorem i chcesz połechtać swego seniora, który nazwał już swoje dzieci w przypływie euforii Enum i Interface, to wiesz już co robić." />
      <PostText text="Jakiego pięknego ma Pan Enuma, gratuluję. Wykapany tata. Chciałbym mieć kiedyś tak fajnego i mądrego enuma jak Pan." />
      <PostSubtitle subtitle="Minusy enumów" />
      <PostText text="Tak, wiem, jest to very very much upierdliwe używanie tego." />
      <PostText text="I to tylko po to, by się później nie mylić! Często chciałoby się rzec, walić to badziewie, używam prostych i nieskomplikowanych stringów!" />
      <PostText text="Możesz, ale coś za coś. Jak kupisz komuś jeansy, to... no właśnie, coś za coś." />
      <PostSubtitle subtitle="Tak to wygląda" />
      <PostText text="Możesz je lubić, możesz ich nie lubić, możesz ich używać, a możesz ich nie używać. Brzmi jak zagadka Sphinxa, ale nie, chodzi o Enumy." />
      <PostText text="Enumy najbardziej przypominają obiekty, ale takie obiekty na TS-owych sterydach. Wartości w enumach, są readonly, więc nie można ich nadpisać." />
      <PostText text="Czołem, do następnego!" />
    </div>
  );
};
export default Post15;
