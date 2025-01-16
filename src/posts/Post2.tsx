import { PostSubtitle, PostText } from "../components/blog/index";

const Post2 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Typy prymitywne" />
      <PostText text='Typy prymitywne często można spotkać pod sklepem monopolowym, charakteryzuje je piwerko w ręce oraz przepity głos i mimo, że używają dostojnych słów ("Królu złoty", "Uszanowanko", "Madmłazel") to są to typy proste.' />
      <PostText text="Typy prymitywne występują również w programowaniu, gdzie są bardziej na porządku dziennym (choć jeśli mieszkałbyś w Łodzi to występowanie jednych i drugich jest porównywalne - jak twierdzi Bogusław Linda)." />
      <PostText text="Nietechnicznie rzecz ujmując, typy proste (prymitywne) składają się z jednej pojedynczej rzeczy, tzn. wartości. Typem prostym może być string, wartość boolean, liczba, null bądź undefined. Mniej popularne typy proste to bigInt i Symbol." />
      <PostText text="Oczywiście wszystko o czym tu dziś czytasz tyczy się programowania w języku JavaScript." />
      <PostText text="Do sprawdzenia typów idealnie nadaje się typeof." />
      <PostText text="Spójrzmy na przykład:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">let</span> alien
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> salaryOfMietek =
            <span className="text-success"> null</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">typeof</span>{" "}
            <span className="text-success">"zero siedemset"</span>)
            <span className="text-base-100/50"> //string</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">typeof</span>{" "}
            <span className="text-success">880</span>)
            <span className="text-base-100/50"> //number</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">typeof</span>{" "}
            <span className="text-success">true</span>)
            <span className="text-base-100/50"> //boolean</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">typeof</span>{" "}
            <span className="text-success">alien</span>)
            <span className="text-base-100/50"> //undefined</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">typeof</span>{" "}
            <span className="text-success">salaryOfMietek</span>)
            <span className="text-base-100/50"> //'object'</span>
          </code>
        </pre>
      </div>
      <PostSubtitle subtitle="Typ string" />
      <PostText text="Jak widzisz jest to tekst, który znajduje się pomiędzy cudzysłowem, apostrofami bądź grawisami - wybór dowolny." />
      <PostText text="Ale żeby nie być gołosłownym masz tu te 3 sposoby:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"Bójka"</span>)
            <span className="text-base-100/50"> //Bójka</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">'Bajka'</span>)
            <span className="text-base-100/50"> //Bajka</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">`Brawurka`</span>)
            <span className="text-base-100/50"> //Brawurka</span>
          </code>
        </pre>
      </div>
      <PostText text="Na mojej to-do liście znajduje się już post z omówieniem stringów (i nie mam na myśli części garderoby), także cierpliwości." />
      <PostSubtitle subtitle="Typ number" />
      <PostText text="Na teraz wiedz, że prawie wszystko co związane z liczbą ma typ number." />
      <PostText text="W osobnym poście opowiem Ci więcej o tym typie." />
      <PostSubtitle subtitle="Typ boolean" />
      <PostText text="Kiedyś w szkole bądź na studiach grało się w grę prawda czy wyzwanie. Typ boolean ma podobnie, tylko zamiast wyzwania mamy fałsz. A więc true oraz false będą miały typ boolean." />
      <PostText text="Praktycznie wszystko co porównujemy zwraca nam typ boolean." />
      <PostSubtitle subtitle="Krótka wzmianka o operatorze porównania" />
      <PostText text="Operator porównania porównuje lewą stronę z prawą." />
      <PostText text="Jeśli używasz operatora porównania, to lepiej z potrójnym znakiem ===, który oprócz wartości porównuje również typy danych. Daje to większą kontrolę, a programista lubi (w tym przypadku) być jak Christian Grey. Takie porównanie nazywamy porównaniem ścisłym." />
      <PostText text="Zerknij tutaj:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"2"</span>
            <span className="text-accent"> {"=="}</span>
            <span className="text-success"> 2</span>)
            <span className="text-base-100/50"> //true</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"2"</span>
            <span className="text-accent"> {"==="}</span>
            <span className="text-success"> 2</span>)
            <span className="text-base-100/50"> //false</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">""</span>
            <span className="text-accent"> {"=="}</span>
            <span className="text-success"> 0</span>)
            <span className="text-base-100/50"> //true</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">""</span>
            <span className="text-accent"> {"==="}</span>
            <span className="text-success"> 0</span>)
            <span className="text-base-100/50"> //false</span>
          </code>
        </pre>
      </div>
      <PostText text="Jak widzisz podwójny znak porównania totalnie ma wywalone na typ." />
      <PostText text="Luźne porównanie (tj. nasze ==) przed samym porównaniem robi konwersję. Po nietechnicznemu konwersja to sprowadzenie różnych typów do jednego wspólnego typu. W tym przypadku sprowadzenie stringa i number do typu number." />
      <PostText text='Oba przykłady z luźnym porównaniem działają na tej samej zasadzie. Wpierw "2" jest zamieniane na 2 a potem następuje porównanie z 2, dlatego mamy true. I analogicznie, pusty string "" jest zamieniany na 0, bo tak działa JavaScript, a następnie następuje porównanie 0 z 0, dlatego true.' />
      <PostText text="Możesz pozbyć się bólu głowy wywołanego powyższym wyjaśnieniem, stosując jeden bardzo prosty trick, używaj porównania ścisłego (===), sprawdzającego również TYP." />
      <PostText text="Nie ma konwersji, gdy używasz porównania ścisłego. Mam nadzieję, że przekonałem." />
      <PostText text="Ale kim ja jestem, żeby Ci mówić co masz robić, ryzykuj, sprawdzaj, do odważnych świat należy, tylko potem nie wracaj z podkulonym ogonem." />
      <PostSubtitle subtitle="Typ undefined" />
      <PostText text="Jest to typ domyślny (czyli jak mało który facet, tak słyszałem) a występuje, gdy nie podamy żadnej wartości przy deklaracji zmiennej." />
      <PostText text="Łoł, hola, hola. Miało być w prosty sposób!" />
      <PostText text="Wartości, deklaracji zmiennej? Chcesz mnie zabić tym technicznym żargonem?" />
      <PostText text="Zerknijmy na kod poniżej:" />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">let</span> person
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> item =
            <span className="text-success"> "gold"</span>
          </code>
        </pre>
      </div>
      <PostText text="Rozbijmy to na czynniki pierwsze." />
      <PostText text="Przykład z let to właśnie deklaracja zmiennej bez przypisania wartości." />
      <PostText text="Deklaracja zmiennej składa się z określonej zmiennej (w JavaScript jest to var, const lub let) oraz  nazwy. Program sam nada wartość undefined podczas wczytywania kodu." />
      <PostText text='Przykład z const to  deklaracja zmiennej z przypisaniem wartości ("gold"), a jak oboje wiemy złoto jest wartościowe.' />
      <PostSubtitle subtitle="Typ null" />
      <PostText text="Jeśli patrząc na pierwszy przykład w artykule pokazujący, że typeof z null jest równy 'object' przeszedł Cię spider-sense to punkt za czujność." />
      <div className="mockup-code bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span>{" "}
            niceProgrammingGroupOnFacebook =
            <span className="text-success"> null</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-warning">typeof</span>{" "}
            <span className="text-success">niceProgrammingGroupOnFacebook</span>
            )<span className="text-base-100/50"> //'object'</span>
          </code>
        </pre>
      </div>
      <PostText text="Wpierw jednak dowiedzmy się co to jest ten null." />
      <PostText text="Typ null oznacza celowe tj. intencjonalne przypisanie braku wartości do deklaracji zmiennej." />
      <PostText text="Co do tego, że konsola wskazuje na 'obiekt', jest to po prostu historyczny błąd w JavaScript. Ot, jedna z anomalii, która była utworzona kiedyś, a której już nie można poprawić. Występuje tu kompatybilność wsteczna (to tak jak raz zobaczone, nie może zostać odzobaczone, np. gdy za młodu zobaczyłeś babcię bez stanika)." />
      <PostText text="Wracając, nadałem tę wartość świadomie, undefined jest nadawane z automatu." />
      <PostSubtitle subtitle="Typ bigInt i Symbol" />
      <PostText text="Są to tak rzadko występujące typy, że w górach na Alasce częściej widuje się Yeti niż je w kodzie." />
      <PostText text="Jeśli jesteś nimi zainteresowany, to  please poczytaj o tym w internecie." />
      <PostText text="Co do typu bigInt to pamiętaj tylko, że dotyczy giga ultra mega wielkich liczb, przy których już typ number odwraca się na pięcie." />
      <PostSubtitle subtitle="Specjalne metody" />
      <PostText text="Oczywiście, temat jest istotny i pewnie kiedyś pojawi się o tym post, ale wiedzieć musisz na teraz, że są pewne metody przeznaczone wyłącznie dla danego typu." />
      <PostText text="Jest to oczywiście coś logicznego, bo nie sprawisz, że liczba będzie napisana drukowanymi tak jak nie zaokrąglisz stringa." />
      <PostText text="Śmieszki na pewno napisałyby mi - jak to nie, a kod poniżej?" />
      <div className="mockup-code mt-4 bg-primary text-neutral">
        <pre>
          <code>
            console<span className="text-info">.log</span>(
            <span className="text-success">"osiemnaście"</span>.
            <span className="text-info">toUpperCase()</span>)
            <span className="text-base-100/50"> //OSIEMNAŚCIE</span>
          </code>
        </pre>
      </div>
      <PostText text="Tak, sprawiłeś, że liczba napisana jest drukowanymi literami. Gratulacje, przejdźmy dalej, shall we?" />
      <PostSubtitle subtitle="Typy złożone" />
      <PostText text="Na wstępie tego akapitu muszę Cię rozczarować. Nie ma w JavaScript typów eleganckich. Użyłem tego przymiotnika, bo pasował mi do tytułu artykułu." />
      <PostText text="Jednak chcąc Cię pocieszyć - na typy złożone możemy też mówić referencyjne i zaraz przekonasz się dlaczego." />
      <PostText text="O ile typ prymitywny porównałem do pojedynczej rzeczy, tak typ złożony porównać można do opakowania na coś." />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> books = [
            <span className="text-success">"Atomowe Nawyki"</span>,
            <span className="text-success">"Praca Głęboka"</span>,
            <span className="text-success">"Esencjalista"</span>,
            <span className="text-success">"Upór"</span>]
          </code>
        </pre>
      </div>
      <PostText text="Typem referencyjnym mogą być obiekty, tablice, funkcje oraz Ci z dalszej strony rodziny, co to nie zawsze się ich zaprasza na święta, jak Map-y i Set-y." />
      <PostSubtitle subtitle="Referencje" />
      <PostText text="Żeby lepiej zrozumieć czym jest referencja spójrz najpierw na poniższy kod:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> name =
            <span className="text-success">"Róża"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> flower =
            <span className="text-success">"Róża"</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> persons = [
            <span className="text-success">"Jagoda"</span>,
            <span className="text-success">"Wacek"</span>,
            <span className="text-success">"Róża"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> notPersons = [
            <span className="text-success">"Jagoda"</span>,
            <span className="text-success">"Wacek"</span>,
            <span className="text-success">"Róża"</span>]
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(name
            <span className="text-warning"> ===</span> flower)
            <span className="text-base-100/50"> //true</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(persons
            <span className="text-warning"> ===</span> notPersons)
            <span className="text-base-100/50"> //false</span>
          </code>
        </pre>
      </div>
      <PostText text="W przypadku typów prostych porównywana jest wartość a nie referencja. Skoro wartości są takie same mamy w konsoli true." />
      <PostText text="W przypadku typów złożonych dochodzi do porównania referencji a referencje tych dwóch tablic są różne, mimo, że ich zawartość wygląda tak samo." />
      <PostText text="To tak jakbyś był w sklepie i przeglądał t-shirty. No są takie same, mają ten sam nadruk, ale t-shirt w lewej ręce i t-shirt w prawej to jednak dwa odrębne przedmioty." />
      <PostText text="To tak jakbyś miał żonę, która ma siostrę bliźniaczkę i doszłoby do ogromnego nieporozumienia." />
      <PostText text="Co tam się dalej zadzieje to zostawiam to Twojej wyobraźni..." />
      <PostText text="Co innego, gdy mamy przykład taki:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> cartoonCharacters = [
            <span className="text-success">"Krowa"</span>,
            <span className="text-success">"Kurczak"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> animals ={" "}
            <span className="text-success">cartoonCharacters</span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(cartoonCharacters
            <span className="text-warning"> ===</span> animals)
            <span className="text-base-100/50"> //true</span>
          </code>
        </pre>
      </div>
      <PostText text="Tutaj mogłoby się wydawać, że stworzyliśmy kopię tablicy cartoonCharacters, ale tak nie jest. Nasz animals dalej będzie wskazywał na to samo miejsce w pamięci co cartoonCharacters." />
      <PostText text="Jeśli więc będziemy edytować naszą tablicę animals, zmiany będą widoczne w cartoonCharacters, ponieważ obie mają te same referencje (wskazują na to samo miejsce w pamięci)." />
      <PostSubtitle subtitle="Przykład, który zrozumie każdy" />
      <PostText text="Jeśli jesteś na początku drogi to oczywistym jest, że pewne zagadnienia mogą zająć trochę dłużej do opanowania niż inne." />
      <PostText text="Jeśli więc nie do końca jeszcze rozumiesz czym jest referencja albo po prostu chcesz dowiedzieć się więcej o perypetiach młodego Jimmiego, to zapraszam." />
      <PostText text="Wyobraźmy sobie, że Jimmy Junior ma na swoim komputerze folder:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> physics = [
            <span className="text-success">"Siła tarcia"</span>,
            <span className="text-success">"Wzajemne oddziaływanie ciał"</span>,
            <span className="text-success">"Ruch jednostajny"</span>]
          </code>
        </pre>
      </div>
      <PostText text="Oboje wiemy, że w folderze fizyka nie za bardzo znajdują się rzeczy związane z przedmiotem w szkole, choć z ciałem działającym na inne ciało już prędzej. " />
      <PostText text="Zawsze kiedy Jimmy uczy się fizyki zamyka drzwi i ścisza głośniki, pewnie lubi pracę w skupieniu." />
      <PostText text="Jimmy utworzył sobie dwa skróty physicsFolder i folderWithPhysics. Jeden umieścił w obrazach, a drugi na pulpicie." />
      <PostText text="Przekładając to na kod wyglądałoby to  tak:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> physics = [
            <span className="text-success">"Siła tarcia"</span>,
            <span className="text-success">"Wzajemne oddziaływanie ciał"</span>,
            <span className="text-success">"Ruch jednostajny"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> physicsFolder =
            <span className="text-success"> physics</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> folderWithPhysics =
            <span className="text-success"> physics</span>
          </code>
        </pre>
      </div>
      <PostText text='Zawsze kiedy "tworzysz" tablicę, na podstawie istniejącej już tablicy, to nie robisz jej kopii, to bardziej tak jakbyś tworzył skrót do tablicy, którą już wcześniej utworzyłeś.' />
      <PostText text='Jimmy ściągnął sobie wypracowanie z fizyki o nazwie "Rozmnażanie", dziwne że o typie pliku .mp4, ale nie wnikajmy. Młody otworzył sobie skrót o nazwie physicsFolder i tam wkleił nowo ściągnięty plik.' />
      <PostText text="Po programistycznemu zadziało się to:" />
      <div className="mockup-code mb-4 bg-primary text-neutral">
        <pre>
          <code>
            <span className="text-accent">const</span> physics = [
            <span className="text-success">"Siła tarcia"</span>,
            <span className="text-success">"Wzajemne oddziaływanie ciał"</span>,
            <span className="text-success">"Ruch jednostajny"</span>]
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">const</span> physicsFolder =
            <span className="text-success"> physics</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className="text-accent">physicsFolder</span>
            .push("Rozmnażanie")
            <span className="text-success"></span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(physics)
            <span className="text-base-100/50">
              {" "}
              //["Siła tarcia", "Wzajemne oddziaływanie ciał", "Ruch
              jednostajny", "Rozmnażanie"]
            </span>
          </code>
        </pre>
        <pre>
          <code>
            console<span className="text-info">.log</span>(physicsFolder)
            <span className="text-base-100/50">
              {" "}
              //["Siła tarcia", "Wzajemne oddziaływanie ciał", "Ruch
              jednostajny", "Rozmnażanie"]
            </span>
          </code>
        </pre>
      </div>
      <PostText text="Widzisz? Nasz physicsFolder zadziałał jak zwykły typowy skrót na pulpicie, do którego dorzuciliśmy jakiś plik." />
      <PostText text="Analogicznie, gdybym usunął pierwszy element z tablicy physics, to usunąłby się w obu tych tablicach." />
      <PostText text="Jimmy już wie, że dzieje się tak dlatego, że tak naprawdę działamy na określonym miejscu w pamięci, niezależnie od tego czy działamy na oryginalnej tablicy czy też tablicy powstałej z oryginalnej tablicy." />
      <PostSubtitle subtitle="Czego się dziś nauczyliśmy" />
      <PostText text="Po pierwsze, wiesz już czym są typy proste i złożone, wiesz też co to jest referencja i jak działa." />
      <PostText text="Po drugie, wiesz że Jimmy w folderze z fizyką nie ma rzeczy związanych z przedmiotem szkolnym." />
      <PostText text="Po trzecie, wiesz że podwójny znak == jest moim red flagiem, gdy patrzę na czyjś kod." />
      <PostText text="Po czwarte, tworząc posty, nigdy nie mam intencji urażenia kogoś, więc jeżeli poczułeś się dotknięty w jakiś sposób, to wiedz, że nie chciałem." />
      <PostText text="Po ostatnie, jeśli spodobał Ci się ten artykuł, to napisz do mnie prywatnie bądź zostaw komentarz pod postem na LinkedIn. Będzie mi bardzo miło." />
    </div>
  );
};
export default Post2;
