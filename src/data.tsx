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
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

export const skills: Skill[] = [
  {
    name: "JavaScript",
    id: "JavaScript",
    icon: (
      <SiJavascript className="sm:h-20 sm:w-20 p-2 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: true,
    text: "Idealny świat powstał w 7 dni a biorąc pod uwagę work-life balance, w 6. JavaScript, mimo, że powstał (jeśli wierzyć plotkom) w 10 dni, już taki nie jest. Jest to niebezpieczne miejsce najeżone pułapkami. I choć stringi kojarzyły mi się tylko z jednym, to i te tu, polubiłem.",
  },
  {
    name: "HTML",
    id: "HTML",
    icon: (
      <SiHtml5 className="sm:h-20 sm:w-20 p-2 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Kiedy zaczynasz to nie wiesz ile nie wiesz. Na etapie HTML-a myślisz, że wiele wiesz, a wiesz niewiele. Potem idąc dalej, wiesz już, że niewiele wiesz, ale wiesz czego masz się dowiedzieć. Idąc jeszcze dalej coraz więcej wiesz i coraz więcej nie wiesz.",
  },
  {
    name: "CSS",
    id: "CSS",
    icon: (
      <SiCss3 className="sm:h-20 sm:w-20 p-2 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Stary dobry CSS. Podstawa do dalszego rozwoju. Ostylowaliśmy razem niejeden projekt, ale nasze drogi trochę się rozeszły. On wolał zostać na przedmieściach i karmić kaczki przy jeziorze a ja wolałem wyruszyć w świat z przetartym plecakiem. Czasem na siebie wpadniemy, pomachamy sobie z oddali i pójdziemy dalej, każdy w swoją stronę.",
  },
  {
    name: "React",
    id: "React",
    icon: (
      <SiReact className="sm:h-20 sm:w-20 p-1 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-2" />
    ),
    checked: false,
    text: "Z Reacta korzystam codziennie. Miłość do klocków Lego została mi do dziś, tylko, że zamiast Lego mam komponenty, a zamiast dziecięcej niewinności rachunki do opłacenia i żeby kot miał co jeść. Uważam, że biblioteka ta znacznie przyspiesza wytwarzanie kodu.",
  },
  {
    name: "React Router",
    id: "React Router",
    icon: (
      <SiReactrouter className="sm:h-20 sm:w-20 p-2 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "React bez React Routera jest jak Hanka bez kartonów. Daleko nie pojedziesz.",
  },
  {
    name: "TypeScript",
    id: "TypeScript",
    icon: (
      <SiTypescript className="sm:h-20 sm:w-20 p-2 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Kiedyś w nielicznych ofertach o pracę potrzebny, dziś jest to must-have. TS pomaga dostrzec problemy w czasie rzeczywistym, co jest jego najlepszą zaletą. Chociaż jest z nim jak ze związkiem. Czasem mnie wnerwia, bo nie wiem o co mu chodzi, ale jakoś się dogadujemy. Ja robię to czego on chce a on przestaje narzekać. Synergia zachowana.",
  },
  {
    name: "Redux Toolkit",
    id: "Redux Toolkit",
    icon: (
      <SiRedux className="sm:h-20 sm:w-20 p-2 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Jeśli wiele komponentów będzie korzystało z jakiejś logiki a są porozrzucane po całym projekcie to już wiesz, w które drzwiczki zapukać.",
  },
  {
    name: "Tailwind",
    id: "Tailwind",
    icon: (
      <SiTailwindcss className="sm:h-20 sm:w-20 p-2 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Uwielbiam, bo nie trzeba przeskakiwać w projekcie między plikiem .css a plikiem .jsx/.tsx, wszystko jest w jednym miejscu. Do tego można zapomnieć o wymyślaniu nazw klas, a tym bardziej o metodologii BEM. Dokumentacja też na plus.",
  },
  {
    name: "React Query",
    id: "React Query",
    icon: (
      <SiReactquery className="sm:h-20 sm:w-20 p-2 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Przyspiesza działanie strony i zapewnia prostą obsługę ściągniętych danych. Przez to, że zapamiętuje ściągnięte dane nie ma konieczności ponownego ich fetchowania. Przydatne też, gdy chcemy zrobić infinite scroll, jak w Instagramie czy Facebooku.",
  },
  {
    name: "Pozostałe",
    id: "Others",
    icon: (
      <SiChessdotcom className="sm:h-20 sm:w-20 p-2 lg:h-28 lg:w-28 xl:h-36 xl:w-36 xl:p-4" />
    ),
    checked: false,
    text: "Gita uczyłem się z kursu na Youtube Hello Romana oraz z darmowego kursu na Udemy Samuraja. Liznąłem jeszcze bootstrapa, scss, styled components, BEM, firebase, daisyUI (z którego korzystam w tym projekcie), react toastify, dnd kit.",
  },
];

export const recruitment: Recruitment[] = [
  {
    id: 1,
    question: "Dlaczego programowanie?",
    answer:
      "Jestem kreatywny. Lubię wiedzieć jak coś działa, lubię też tworzyć. Uważam, że programowanie to naturalny sposób na realizację moich nabytych talentów.",
    isAsked: false,
    order: null,
  },
  {
    id: 2,
    question: "JAKIM ZWIERZĘCIEM JESTEŚ?",
    answer:
      "A jednak mityczne pytanie padło! No dobrze, myślę, że jestem niedźwiedziem. Niedźwiedź kojarzony jest różnie. Dla bliskich jestem przyjacielskim misiem, dla ludzi nieuprzejmych groźnym grizzly a na osobności leżakującym na słońcu niedźwiadkiem. Wszystko zależy od kontekstu 🐻.",
    isAsked: false,
    order: null,
  },
  {
    id: 3,
    question: "Jakie są twoje słabe strony?",
    answer:
      "Czyli to ten moment, w którym zamieniam zaletę na wadę, żeby ostatecznie zwiększyć swoje szanse na zatrudnienie? Mam poczucie humoru. Jednym się to podoba, innym nie. W sytuacjach wymagających powagi można jednak na mnie liczyć.",
    isAsked: false,
    order: null,
  },
  {
    id: 4,
    question: "Jakie masz oczekiwania finansowe?",
    answer:
      "W początkowej fazie kariery ważniejsze jest dla mnie zdobycie doświadczenia aniżeli zarobki, jednak są one również ważne. I chociaż nie jestem mediatorem to jestem gotów do negocjacji w tym temacie.",
    isAsked: false,
    order: null,
  },
  {
    id: 5,
    question: "Dlaczego chcesz u nas pracować?",
    answer:
      "Jeżeli ktoś dotarł aż do tej strony, wyklikał co mógł wyklikać, a przy tym dobrze się bawił, to znaczy, że nie stawia na ilość a na jakość. A to tak jak ja! Szukam firmy, gdzie będę mógł się realizować. Mam nadzieję, że dobrze trafiłem.",
    isAsked: false,
    order: null,
  },
  {
    id: 6,
    question: "Co Cię wyróżnia jako pracownika?",
    answer:
      "Uważam, że jest to zdolność do dogadania się z każdym. Ponadto, w sytuacji stresowej nie tracę pozytywnego myślenia. Potrafię słuchać ze zrozumieniem i wyciągać wnioski.",
    isAsked: false,
    order: null,
  },
  {
    id: 7,
    question: "Gdzie widzisz się za 5 lat?",
    answer:
      "Moim celem na 2025 rok jest zostanie pełnoprawnym junior frontend developerem. Do 5 lat wprzód mam nadzieję zostać już seniorem.",
    isAsked: false,
    order: null,
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "pickle rick",
    img: "/portfolio-assets/pickle_rick.png",
    description:
      "Aplikacja do przeglądania postaci, lokacji i odcinków z uniwersum Rick&Morty, postacie wyszukiwane po kryteriach, możliwość założenia konta i zalogowania. ",
    technology:
      "React, TypeScript, React Router, Redux Toolkit, React Query, Tailwind, React Toastify, Firebase",
    github: "https://github.com/Krystian-Kamer/picklerick",
    live: "https://picklerick-1sbq.vercel.app/",
    mobileVideo: "/portfolio-assets/rick phone.mp4",
    desktopVideo: "/portfolio-assets/rick desktop.mp4",
    thoughts:
      "Największy mój projekt jak do tej pory (nie licząc bloga). Stałem się bardziej świadomy React Query i React Router. Dodatkowo zrobiłem Infinite Scroll, tak jak w Facebooku i Instagramie, z czego jestem zadowolony. Jeśli chodzi o strukturę plików to aplikacja jest bardzo przyjazna, tzn. łatwo można się będzie w niej odnaleźć. Po czasie stwierdzam, że brak w projekcie animacji ożywiających stronę sprawia, że jest ona zdziebko nudna.",
  },
  {
    id: 2,
    name: "vid-x",
    img: "/portfolio-assets/vid-x.png",
    description:
      "Wyszukiwarka filmów i seriali. Możliwość wyszukania filmu po nazwie, kategorii, sortowanie, dodawanie filmów do swojej biblioteki, z wykorzystaniem  localStorage. ",
    technology: "HTML, CSS, JavaScript",
    github: "https://github.com/Krystian-Kamer/vid-x",
    live: "https://vid-x.vercel.app/",
    mobileVideo: "/portfolio-assets/vid-x phone.mp4",
    desktopVideo: "/portfolio-assets/vid-x desktop.mp4",
    thoughts: "Mój pierwszy samodzielny projekt. Gdy go ukończyłem, byłem z jego wyglądu bardzo zadowolony. Dodałem bardzo dużo funkcjonalności i wszystko działało! Rzecz w tym, że praktycznie wszystko jest zależne od czegoś, większość kodu znajduje się w jednym pliku. Patrząc z perspektywy utrzymania tego, byłaby to katorga. Projekt nauczył mnie tego, że im mniej wzajemnych zależności tym lepiej oraz że podział na mniejsze klocki, jak to jest w Reakcie, naprawdę robi robotę.",
  },
  {
    id: 3,
    name: "pentago",
    img: "/portfolio-assets/pentago.png",
    description:
      "Jest to odwzorowanie gry Pentago, którą mam w domu (do grania z osobą towarzyszącą). Przypomina bardziej skomplikowane kółko i krzyżyk.",
    technology: "React, CSS",
    github: "https://github.com/Krystian-Kamer/pentago-game",
    live: "https://pentago-eta.vercel.app/",
    mobileVideo: "/portfolio-assets/pentago phone.mp4",
    desktopVideo: "/portfolio-assets/pentago desktop.mp4",
    thoughts: "Bardzo lubię gry planszowe. Zawsze myślałem, że jakąś stworzę (może jeszcze będzie okazja). Odkąd zacząłem uczyć się JavaScript-u chciałem odwzorować grę Pentago i udało mi się. To co był zmienił to zarządzaniem stanem, bo w Projekcie używam Reactowego Contextu a mógłbym użyć czegoś co bardziej odpowiada. Większą uważność przykułbym też do strony wizualnej. Niemniej jestem zadowolony, że spełniłem swoje marzenie o odwzorowaniu mechaniki gry.",
  },
  {
    id: 4,
    name: "rachunki",
    img: "/portfolio-assets/charges.png",
    description:
      "Stworzyłem tę aplikację do zarządzania swoimi stałymi miesięcznymi wydatkami. Również korzysta z localStorage.",
    technology: "React, Tailwind",
    github: "https://github.com/Krystian-Kamer/charges",
    live: "https://charges.vercel.app/",
    mobileVideo: "/portfolio-assets/rachunki phone.mp4",
    desktopVideo: "/portfolio-assets/rachunki desktop.mp4",
    thoughts: "Pierwszy projekt, który miał mi posłużyć na dłużej i tak było... przez jakiś czas, do czasu aż nie przerzuciłem się na kalendarz, w którym wszystko obecnie zapisuję. Pomyślałem, że skoro to będzie prosty projekt to wystarczy posłużyć się przekazywaniem propsów w dół. Zrobiła się z tego wielka Podróż do Wnętrza Ziemi. Nie polecam. Projekt nauczył mnie tego, by wpierw pomyśleć o architekturze, to znaczy o tym co tak na prawdę chcę osiągnąć.",
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
  {
    id: 11,
    name: "CV",
    icon: <BsFillFileEarmarkPersonFill />,
    focus: "focus:text-emerald-600",
  },
];
