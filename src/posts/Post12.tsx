import { Link } from "react-router-dom";
import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";

const Post12 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Honey, I'm Home!" />
      <PostText text="No proszę! Jeszcze programistyczne marzenia Krystiana o pierwszej pracy na stanowisku frontend developera nadal żyją. Nadal tworzy. Jeszcze ma nadzieję, że jego cel się ziści." />
      <PostTextBold text="Mam tak, że jak już coś zaplanuję, to tego dokonam." />
      <PostText text="Najwyżej dostanę pracę w IT z siwą brodą i będąc pampersowanym, ale dostanę." />
      <PostText text="Tak jak obiecałem, 2 posty w miesiącu. Mamy 31 marca 2025 r. Krystian Ty skurczybyku. Może wrzuć ten syf o 23:59 z sekundami jak już tak się bawisz." />
      <PostText text="Dobra wiem, nie było tu contentu całe wieki, ale spokojnie, 7 kwiecień to pierwszy poniedziałek kwietnia, także słowa dotrzymam, post będzie." />
      <PostTextBold text="Nawet nie wiesz jak cieżko wytłumaczyć AI, że prawa postać ma być bez biustu." />
      <PostText text="Niestety narzęcie z którego korzystam (Playground AI) ma jakiś dziwny fetysz i wszystkie kobiety wytwarza z biustem. Creep." />
      <PostText text="Nie zadziałały prompty - right woman flat chest, breastless, bust-free, bustless, także mamy to co mamy, dwie atrakcyjne kobiety z piersiami." />
      <PostText text="Zepsuło mi to ciutkę efekt, ale nie będę się z Playground AI kłócił, w końcu jest za darmo. Don't blame the player, blame the game, albo w tym przypadku - blame AI." />
      <PostSubtitle subtitle="Metoda flat" />
      <PostText text="Jak sama nazwa wskazuje, metofa flat coś spłaszcza. W JavaScript metody flat używamy na tablicach." />
      <PostText text="Szczególnie takich tablicach, gdzie mamy znestowane tablice wewnątrz." />
      <PostText text="Warto dodać, że metofa flat nie mutuje tablicy, na której jest wykonywana." />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Jeśli nie wiesz co to mutowanie tablicy, zapuść żurawia do mojego posta
        o tym{" "}
        <Link
          className="cursor-custom-pointer text-info"
          to={"/blog/dlaczego-programowanie-zniszczylo-moj-zwiazek"}
        >
          Dlczego programowanie zniszczyło mój związek
        </Link>
        .
      </p>
      <PostText text="Tutaj giga prosty przykład o co mi chodzi:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> scoobyDooTeam = [
            <span className="text-success">"Fred"</span>,
            <span className="text-success"> "Daphne"</span>,
            <span className="text-success">
              {" "}
              <span className="text-accent">[</span>
              <span className="text-success">"Scooby-Doo"</span>,
              <span className="text-success"> "Shaggy"</span>
              <span className="text-accent">]</span>
            </span>
            ,<span className="text-success"> "Velma"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> flattenedScoobyDooTeam =
            scoobyDooTeam
            <span className="text-info">.</span>
            <span className="text-info">flat</span>
            <span className="text-success">{"("}</span>
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">scoobyDooTeam</span>)
            <span className="text-base-300">
              // ["Fred", "Daphne", ["Scooby-Doo", "Shaggy"], "Velma"]
            </span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">flattenedScoobyDooTeam</span>)
            <span className="text-base-300">
              {" "}
              // ["Fred", "Daphne", "Scooby-Doo", "Shaggy", "Velma"]
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Jak widzisz pierwotna tablica pozostaje nietknięta. Ma ona długość równą 4." />
      <PostText text="Index 2 tej tablicy, czyli scoobyDooTeam[2] - wskazuje na tablicę wewnętrzną ze Scooby-Doo i Kudłatym." />
      <PostText text="Spłaszczona tablica jest już... spłaszczona i ma 5 elementów, bo kolokwialnie mówiąc wypuściliśmy naszych głodomorów na zewnątrz." />
      <PostTextBold text="Metoda flat spłaszcza zagnieżdżenia." />
      <PostText text="Wejdźmy w to głębiej." />
      <PostSubtitle subtitle="Podróż do wnętrza ziemi" />
      <PostText text="Zostańmy jeszcze przy przykładzie ze Scooby-Doo, bo nie chcę Ci bardziej namieszać." />
      <PostText text="Z kwestii technicznych, flat może przyjać wewnątrz wywołania jeden parametr - depth." />
      <PostTextBold text="array.flat(depth)" />
      <PostText text="Defaultowo depth jest ustawione na 1." />
      <PostText text="Tym razem zagnieździłem jeszcze bardziej naszego Scooby-Doo, zobacz:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> scoobyDooTeam = [
            <span className="text-success">"Fred"</span>,
            <span className="text-success"> "Daphne"</span>,
            <span className="text-success">
              {" "}
              <span className="text-accent">[</span>
              <span className="text-success">
                <span className="text-error">[</span>"Scooby-Doo"
                <span className="text-error">]</span>
              </span>
              ,<span className="text-success"> "Shaggy"</span>
              <span className="text-accent">]</span>
            </span>
            ,<span className="text-success"> "Velma"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> onceFlattenedTeam =
            scoobyDooTeam
            <span className="text-info">.</span>
            <span className="text-info">flat</span>
            <span className="text-success">{"("}</span>
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">onceFlattenedTeam</span>)
            <span className="text-base-300">
              // ["Fred", "Daphne", ["Scooby-Doo"], "Shaggy", "Velma"]
            </span>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>
            <span className="text-accent">const</span> twiceFlattenedTeam =
            scoobyDooTeam
            <span className="text-info">.</span>
            <span className="text-info">flat</span>
            <span className="text-success">{"("}</span>2
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">twiceFlattenedTeam</span>)
            <span className="text-base-300">
              // ["Fred", "Daphne", "Scooby-Doo", "Shaggy", "Velma"]
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Jak widzisz onceFlattenedTeam zostało pozbawione jednego zagnieżdżenia, dlatego nasz Scooby jest dalej wewnątrz tablicy." />
      <PostText text="W twiceFlattenedTeam podaliśmy głębię równą 2, a więc pozbawiliśmy naszej tablicy 2 zagnieżdżeń. " />
      <PostText text="Mommy like it." />
      <PostSubtitle subtitle="Neverending story" />
      <PostText text="Jeśli od samego liczenia ilu zagnieżdżeń musisz się pozbyć boli Cię łepetyna, możesz użyć haka czy też chwytu ratującego życie, w postaci Infinity." />
      <PostText text="To tak jak z Simsami, gdy nie stać Cie na wymarzone mieszkanie i wpisujesz kod, żeby simoleony w nieewyobrażalnej kwocie wpłynęły na konto." />
      <PostTextBold text="array.flat(Infinity)" />
      <PostText text="Upieczę dwie pieczenie na jednym ogniu, bo pokażę Ci również, że metoda flat usuwa puste sloty, tzw. empty slots." />
      <PostText text="Here we go again:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> scoobyDooTeam = [
            <span className="text-success">"Fred"</span>, ,
            <span className="text-success">
              {" "}
              <span className="text-info">[</span> "Daphne"
            </span>
            ,
            <span className="text-success">
              {" "}
              <span className="text-accent">[</span>
              <span className="text-success">
                <span className="text-error">[</span>"Scooby-Doo"
                <span className="text-error">]</span>
              </span>
              ,<span className="text-success"> "Shaggy"</span>
              <span className="text-accent">]</span>
            </span>
            ,
            <span className="text-success">
              {" "}
              "Velma" <span className="text-info">]</span>
            </span>
            ]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> maxFlattenedTeam =
            scoobyDooTeam
            <span className="text-info">.</span>
            <span className="text-info">flat</span>
            <span className="text-success">{"("}</span>Infinity
            <span className="text-success">{")"}</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">maxFlattenedTeam</span>)
            <span className="text-base-300">
              // ["Fred", "Daphne", "Scooby-Doo", "Shaggy", "Velma"]
            </span>
          </code>
        </pre>
      </div>
      <PostText text="W tablicy scoobyDooTeam na miejscu drugim, a więc scoobyDooTeam[1] mamy empty slot, który jak damy console.log da nam undefined." />
      <PostText text="Po metodzie flat pusty slot został usunięty." />
      <PostText text="Co do Infinity, nie jest to rocket science. Wszytkie zagnieżdżenia po kontakcie z nieskończonością zostają unicestwione. Wpdają do czarnej dziury, kaput, adieu." />
      <PostText text="Dostajemy ostatecznie schludną, niezagnieżdżoną tablicę. Płaskie jest piękne." />
      <PostSubtitle subtitle="Kontrowersyjnie?" />
      <PostText text="Może. Chyba oprócz poczucia humoru moją supermocą jest również wymyślanie clicbaitowych tytułów." />
      <PostText text="W codziennym życiu mamy swoje preferencje, w które nie będziemy wnikać😉. Każdy lubi różne owoce, niektórzy lubią arbuzy, niektórzy melony a niektórzy cytrynki." />
      <PostText text="Lekarz potrzebuje skalpela by sprawić, że niepłaskie stanie się płaskie, a my programiści, potrzebujemy metody flat." />
      <PostText text="Czołem, do następnego!" />
    </div>
  );
};
export default Post12;
