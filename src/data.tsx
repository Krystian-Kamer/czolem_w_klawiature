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
import { Skill, Recruitment } from "./types";

export const skills: Skill[] = [
  {
    name: "JavaScript",
    id: "JavaScript",
    icon: (
      <SiJavascript className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: true,
    text: "Idealny świat powstał w 7 dni a biorąc pod uwagę work-life balance, w 6. JavaScript, mimo, że powstał (jeśli wierzyć ploteczkom) w 10 dni, już taki nie jest. Jest to niebezpieczne miejsce najeżone pułapkami. Im dłużej jesteś na tym froncie tym bardziej rozumiesz jak rozbroić jakąś kodową js-ową minę. I choć stringi kojarzyły mi się tylko z jednym, to i te tu, polubiłem ;)",
  },
  {
    name: "HTML",
    id: "HTML",
    icon: (
      <SiHtml5 className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Od tego zaczęła się moja przygoda, a było to w 2022 roku. Kupiłem pierwszy kurs na Udemy i przerabiałem tutorial. Potem następny i następny. Powoli stopniowo dowiadywałem się co kryje się pod maską strony internetowej.",
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
    name: "React",
    id: "React",
    icon: (
      <SiReact className="p-1 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-2" />
    ),
    checked: false,
    text: "Z Reacta korzystam codziennie. Już jako dziecko lubiłem się bawić klockami Lego i zostało mi to  do dziś, tylko, że zamiast Lego mam komponenty, a zamiast dziecięcej niewinności rachunki do opłacenia. Uważam, że biblioteka ta znacznie przyspiesza wytwarzanie kodu.",
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
    text: "Bardzo przydatna biblioteka CSS. Główną zaletą jest to, że nie trzeba przeskakiwać w projekcie między plikiem .css a plikiem .jsx/.tsx, bo wszystko jest w jednym miejscu. Drugą jest to, że można zapomnieć o wymyślaniu nazw klas, a tym bardziej o metodologi BEM. Dokumentacja jest napisana w bardzo przystępny sposób.",
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

export const recruitment: Recruitment[] = [
  {
    id: 1,
    question: "Dlaczego programowanie?",
    answer:
      "Myślę, że jestem kreatywny. Lubię wiedzieć jak coś działa, lubię też tworzyć. Uważam, że programowanie to naturalny sposób na realizację moich nabytych talentów.",
    isAsked: false,
    order: null,
  },
  {
    id: 2,
    question: "JAKIM ZWIERZĘCIEM JESTEŚ?",
    answer:
      "A jednak mityczne pytanie padło! No dobrze, myślę, że jestem niedźwiedziem. Przemawia za tym postura. Z charakteru to jestem bardziej takim nieszkodliwym niedźwiadkiem z ZOO, chociaż jak mnie ktoś zdenerwuję to mogę być jak grizzly🐻. Może też jestem trochę pająkiem (ale takim sprytnym co to nie dostanie tak łatwo laćkiem), bo lubię siedzieć w webie...",
    isAsked: false,
    order: null,
  },
  {
    id: 3,
    question: "Jakie są twoje słabe strony?",
    answer:
      "Czyli to ten moment, w którym zamieniam zaletę na wadę, żeby ostatecznie zwiększyć swoje szanse na zatrudnienie. Mam poczucie humoru. Jednym się to podoba, innym nie. W sytuacjach wymagających powagi jestem poważny. Po drugie jestem szczery. Jest to miecz obosieczny a nie każdy lubi rozmowy prosto z mostu.",
    isAsked: false,
    order: null,
  },
  {
    id: 4,
    question: "Jakie masz oczekiwania finansowe?",
    answer:
      "Jestem realistą, dlatego uważam, że moje oczekiwania nie są wygórowane a więc oscylują w przedziale od 4 do 6.5 tys. zł netto miesięcznie. W początkowej fazie kariery ważniejsze jest dla mnie zdobycie doświadczenia aniżeli zarobki.",
    isAsked: false,
    order: null,
  },
  {
    id: 5,
    question: "Dlaczego interesuje Cię nasza firma?",
    answer:
      "Jeżeli ktoś dotarł aż do tej strony, wyklikał co mógł wyklikać, a przy tym dobrze się bawił, to znaczy, że nie stawia na ilość a na jakość. A to tak jak ja! Szukam firmy, gdzie będę mógł się realizować. Mam nadzieję, że dobrze trafiłem😃.",
    isAsked: false,
    order: null,
  },
  {
    id: 6,
    question: "Jake są twoje mocne strony?",
    answer: "XXX",
    isAsked: false,
    order: null,
  },
];
