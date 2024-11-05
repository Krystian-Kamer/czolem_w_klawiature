import {
  SiReact,
  SiReactrouter,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiChessdotcom,
  SiReactquery,
} from "react-icons/si";
import { Skill } from "./types";

export const skills: Skill[] = [
  {
    name: "React",
    id: "React",
    icon: (
      <SiReact className="p-1 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-2" />
    ),
    checked: true,
    text: "Z Reacta korzystam codziennie. Już jako dziecko lubiłem się bawić klockami Lego i zostało mi to  do dziś, tylko, że zamiast Lego mam komponenty, a zamiast dziecięcej niewinności rachunki do opłacenia. Uważam, że biblioteka ta znacznie przyspiesza wytwarzanie kodu.",
  },
  {
    name: "HTML",
    id: "HTML",
    icon: (
      <SiHtml5 className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Od tego zaczęła się moja przygoda, a było to w 2022 roku, kiedy postanowiłem, że chcę zmienić coś w swoim życiu. Kupiłem pierwszy kurs na Udemy i przerabiałem tutorial. Powoli nabierałem świadomości co się kryje pod maską strony internetowej.",
  },
  {
    name: "CSS",
    id: "CSS",
    icon: (
      <SiCss3 className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Stary dobry CSS. Podstawa do dalszego rozwoju. Ostylowaliśmy razem niejeden projekt, ale nasze drogi trochę się rozeszły. On wolał zostać na przedmieściach i karmić kaczki w jeziorze a ja wolałem wyruszyć w świat z przetartym plecakiem jak Włóczykij. Czasem mimochodem na siebie wpadniemy, pomachamy sobie z oddali i pójdziemy dalej, każdy w swoją stronę.",
  },
  {
    name: "JavaScript",
    id: "JavaScript",
    icon: (
      <SiJavascript className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Idealny świat powstał w 7 dni a biorąc pod uwagę work-life balance, w 6 dni. JavaScript, mimo, że powstał (jeśli wierzyć plotkom) w 10 dni, już taki nie jest. Jest to niebezpieczne miejsce najeżone pułapkami. Im dłużej jesteś na tym froncie tym bardziej rozumiesz jak rozbroić jakąś kodową js-ową minę. I choć stringi kojarzyły mi się tylko z jednym, to i te tu, polubiłem.",
  },
  {
    name: "React Router",
    id: "React Router",
    icon: (
      <SiReactrouter className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Powiem szczerze, że czekałem na to. Pisząc swoją pierwszą stronę w JS (wyszukiwarkę filmów) zauważyłem, że po kliknięciu w button przeładowuje mi całą stronę, a fetchowanie danych nie angażuje paska u góry. Bardzo to spowalniało przeładowywanie strony. React w połączeniu z React Router rozwiazuje ten problem. Tool ten działa bardzo intuicyjnie.",
  },

  {
    name: "TypeScript",
    id: "TypeScript",
    icon: (
      <SiTypescript className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "TypeScript. Kiedyś w nielicznych ofertach o pracę potrzebny, dziś jest to must-have. W sumie to się nie dziwię. Pomaga dostrzec problemy w czasie rzeczywistym, co jest jego najlepszą zaletą. Jednak jest z nim czasem jak ze związkiem. Czasem mnie wnerwia, bo nie wiem o co mu chodzi, ale jakoś się dogadujemy. Ja robię to czego on chce a on przestaje narzekać. Synergia zachowana.",
  },
  {
    name: "Redux Toolkit",
    id: "Redux Toolkit",
    icon: (
      <SiRedux className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Narzędzie do zarządzania stanem aplikacji. Przydatne w większych projektach. Jeśli wiele komponentów będzie korzystało z jakiejś logiki a są porozrzucane po całym projekcie to już wiesz, w które drzwiczki zapukać.",
  },
  {
    name: "Tailwind",
    id: "Tailwind",
    icon: (
      <SiTailwindcss className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Bardzo przydatna biblioteka CSS. Główną zaletą jest to, że nie trzeba przeskakiwać w projekcie między plikiem .css a plikiem .jsx/.tsx, bo wszystko jest w jednym miejscu. Drugą jest to, że można zapomnieć o wymyślaniu nazw klas, a tym bardziej o metodologi BEM. Dokumentacja jest napisana bardzo dobrze.",
  },
  {
    name: "React Query",
    id: "React Query",
    icon: (
      <SiReactquery className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Ciężko samemu zdefiniować co to jest, ale jest to bardzo przydatne. W skrócie przyspiesza działanie strony i zapewnia prostą obsługę ściągniętych danych. Przez to, że zapamiętuje ściągnięte dane nie ma konieczności ponownego ich fetchowania. Przydatne też, gdy chcemy zrobić infinite scroll, jak w Instagramie, Facebooku, czy w mojej apce Pickle Rick (znajdź na blogu).",
  },
  {
    name: "Pozostałe",
    id: "Others",
    icon: (
      <SiChessdotcom className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Gita uczyłem się z kursu na Youtube Hello Romana oraz z darmowego kursu na Udemy Samuraja. Git-a traktuję jak maszynę co cofania w czasie, która pozwala na zmianę przyszłości i przeniesienia się na inną gałąź multiversum. Liznąłem jeszcze bootstrapa, scss, styled components, BEM, firebase, daisyUI (z którego korzystam w tym projekcie), react toastify.",
  },
];
