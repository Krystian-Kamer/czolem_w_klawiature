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
import { BiSolidMovie } from "react-icons/bi";
import { GiPickle, GiNotebook } from "react-icons/gi";
import { FaBowlingBall, FaKeyboard } from "react-icons/fa";
import { FaMoneyBill1Wave, FaTrashCan, FaLinkedin } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { PiGithubLogoFill } from "react-icons/pi";
import { Skill, Recruitment, ProjectType, FileType } from "./types";

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
    text: "Stary dobry CSS. Podstawa do dalszego rozwoju. Ostylowaliśmy razem niejeden projekt, ale nasze drogi trochę się rozeszły. On wolał zostać na przedmieściach i karmić kaczki przy jeziorze a ja wolałem wyruszyć w świat z przetartym plecakiem jak Włóczykij. Czasem mimochodem na siebie wpadniemy, pomachamy sobie z oddali i pójdziemy dalej, każdy w swoją stronę.",
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
    text: "Szczerze, czekałem na to. Pisząc swoją pierwszą stronę w JS (wyszukiwarkę filmów) zauważyłem, że po kliknięciu w button przeładowuje mi całą stronę, a fetchowanie danych nie angażuje paska u góry. Bardzo to spowalnia przeładowywanie strony. React w połączeniu z React Router rozwiazuje ten problem.",
  },

  {
    name: "TypeScript",
    id: "TypeScript",
    icon: (
      <SiTypescript className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Kiedyś w nielicznych ofertach o pracę potrzebny, dziś jest to must-have. W sumie to się nie dziwię. Pomaga dostrzec problemy w czasie rzeczywistym, co jest jego najlepszą zaletą. Chociaż jest z nim jak ze związkiem. Czasem mnie wnerwia, bo nie wiem o co mu chodzi, ale jakoś się dogadujemy. Ja robię to czego on chce a on przestaje narzekać. Synergia zachowana.",
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
    text: "Przyspiesza działanie strony i zapewnia prostą obsługę ściągniętych danych. Przez to, że zapamiętuje ściągnięte dane nie ma konieczności ponownego ich fetchowania. Przydatne też, gdy chcemy zrobić infinite scroll, jak w Instagramie czy Facebooku.",
  },
  {
    name: "Pozostałe",
    id: "Others",
    icon: (
      <SiChessdotcom className="p-2 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Gita uczyłem się z kursu na Youtube Hello Romana oraz z darmowego kursu na Udemy Samuraja. Liznąłem jeszcze bootstrapa, scss, styled components, BEM, firebase, daisyUI (z którego korzystam w tym projekcie), react toastify.",
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
      "A jednak mityczne pytanie padło! No dobrze, myślę, że jestem niedźwiedziem. Niedźwiedź kojarzony jest różnie - może być przytulaskowym misiem, groźnym grizzly, chodzącym w swoje strony niedźwiadkiem. W zależności od kontekstu jestem jednym z nich 🐻.",
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
    answer:
      "Uważam, że jest to zdolność do dogadania się z każdym. Ponadto, w sytuacji stresowej nie tracę pozytywnego myślenia. Słucham ze zrozumieniem i wyciągam wnioski.",
    isAsked: false,
    order: null,
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "Pickle Rick",
    img: "/portfolio-assets/pickle_rick.png",
    description:
      "Aplikacja do przeglądania postaci, lokacji i odcinków z uniwersum Rick&Morty, postacie wyszukiwane po kryteriach, możliwość założenia konta i zalogowania. ",
    technology:
      "React, TypeScript, React Router, Redux Toolkit, React Query, Tailwind, React Toastify, Firebase",
    github: "https://github.com/Krystian-Kamer/picklerick",
    live: "https://picklerick-1sbq.vercel.app/",
    mobileVideo: "/portfolio-assets/rick phone.mp4",
    desktopVideo: "/portfolio-assets/rick desktop.mp4",
  },
  {
    id: 2,
    name: "VID-X",
    img: "/portfolio-assets/vid-x.png",
    description:
      "Wyszukiwarka filmów i seriali. Możliwość wyszukania filmu po nazwie, kategorii, z sortowaniem, możliwość dodania filmu do swojej biblioteki, z wykorzystaniem  localStorage. ",
    technology: "HTML, CSS, JavaScript",
    github: "https://github.com/Krystian-Kamer/vid-x",
    live: "https://vid-x.vercel.app/",
    mobileVideo: "/portfolio-assets/vid-x phone.mp4",
    desktopVideo: "/portfolio-assets/vid-x desktop.mp4",
  },
  {
    id: 3,
    name: "Pentago",
    img: "/portfolio-assets/pentago.png",
    description:
      "Jest to odwzorowanie gry Pentago, którą mam w domu (do grania z osobą towarzyszącą). Przypomina bardziej skomplikowane kółko i krzyżyk.",
    technology: "React, CSS",
    github: "https://github.com/Krystian-Kamer/pentago-game",
    live: "https://pentago-eta.vercel.app/",
    mobileVideo: "/portfolio-assets/pentago phone.mp4",
    desktopVideo: "/portfolio-assets/pentago desktop.mp4",
  },
  {
    id: 4,
    name: "Rachunki",
    img: "/portfolio-assets/charges.png",
    description:
      "Stworzyłem tę aplikację do zarządzania swoimi stałymi miesięcznymi wydatkami. Również korzysta z localStorage.",
    technology: "React, Tailwind",
    github: "https://github.com/Krystian-Kamer/charges",
    live: "https://charges.vercel.app/",
    mobileVideo: "/portfolio-assets/rachunki phone.mp4",
    desktopVideo: "/portfolio-assets/rachunki desktop.mp4",
  },
];

export const desktopFiles: FileType[] = [
  {
    id: 1,
    name: "pickle rick",
    icon: <GiPickle />,
    focus: "focus:text-lime-700",
  },
  {
    id: 2,
    name: "vid-x",
    icon: <BiSolidMovie />,
    focus: "focus:text-red-900",
  },
  {
    id: 3,
    name: "pentago",
    icon: <FaBowlingBall />,
    focus: "focus:text-violet-800",
  },
  {
    id: 4,
    name: "rachunki",
    icon: <FaMoneyBill1Wave />,
    focus: "focus:text-lime-900",
  },
  {
    id: 5,
    name: "notatnik",
    icon: <GiNotebook />,
    focus: "focus:text-amber-800",
  },
  { id: 6, name: "kosz", icon: <FaTrashCan />, focus: "focus:text-gray-500" },
  {
    id: 7,
    name: "github",
    icon: <PiGithubLogoFill />,
    focus: "focus:text-emerald-700",
    href: "https://github.com/Krystian-Kamer",
  },
  {
    id: 8,
    name: "linkedIn",
    icon: <FaLinkedin />,
    focus: "focus:text-blue-600",
    href: "https://www.linkedin.com/in/krystian-kamer-0aa148279/",
  },
  {
    id: 9,
    name: "blog",
    icon: <FaKeyboard />,
    focus: "focus:text-gray-600",
    to: "/blog",
  },
  {
    id: 10,
    name: "to-do",
    icon: <LuListTodo />,
    focus: "focus:text-red-600",
    to: "/blog",
  },
];
