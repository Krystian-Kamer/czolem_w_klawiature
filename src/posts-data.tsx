import { Post1, Post2, Post3, Post4, Post5, Post6 } from "./posts/index";
import { PostType } from "./types";

export const postsData: PostType[] = [
  {
    id: "to-nie-tinder-ale-poznajmy-sie-blizej",
    title: "To nie Tinder, ale poznajmy się bliżej",
    post: <Post1 />,
    imageSmall: "/post-assets/post-1-small.jpg",
    imageBig: "/post-assets/post-1-big.jpeg",
    text: "Jest to pierwszy post prezentujący moją osobę. Kim jestem, dokąd zmierzam i dlaczego rozpocząłem prowadzenie bloga? Zapraszam.",
    date: "13.01.25",
    category: "rozkminy",
  },
  {
    id: "typy-prymitywne-i-te-eleganckie-oraz-ich-referencje",
    title: "Typy prymitywne i te eleganckie oraz ich referencje",
    post: <Post2 />,
    imageSmall: "/post-assets/post-2-small.jpg",
    imageBig: "/post-assets/post-2-big.jpg",
    text: "Omawiam typy proste i te złożone, w prosty a nie złożony sposób oraz tłumaczę co to jest referencja.",
    date: "16.01.25",
    category: "javascript",
  },
  {
    id: "js-owy-zycia-krag",
    title: "Frontendowy życia krąg",
    post: <Post3 />,
    imageSmall: "/post-assets/post-3-small.jpeg",
    imageBig: "/post-assets/post-3-big.jpeg",
    text: "Przyglądam się bliżej mechanizmowi Event Loop w JavaScript.",
    date: "20.01.25",
    category: "javascript",
  },
  {
    id: "czy-studia-z-informatyki-daja-plus-10-do-wisdom-na-start-oraz-dostepne-sciezki-nauki",
    title:
      "Czy studia z informatyki dają +10 do wisdom na start oraz dostępne ścieżki nauki",
    post: <Post4 />,
    imageSmall: "/post-assets/post-4-small.jpeg",
    imageBig: "/post-assets/post-4-big.jpeg",
    text: "Moja analiza dostępnych ścieżek do zdobycia pracy jako programista i przemyślenia o studiach.",
    date: "23.01.25",
    category: "nauka",
  },
  {
    id: "dlaczego-programowanie-zniszczylo-moj-zwiazek",
    title:
      "Dlaczego programowanie zniszczyło mój związek",
    post: <Post5 />,
    imageSmall: "/post-assets/post-5-small.jpeg",
    imageBig: "/post-assets/post-5-big.jpeg",
    text: "Będzie to smutna historia o pięknej miłości zniszczonej przez kod i o mutacjach tablic w JavaScript, ale to tak przy okazji.",
    date: "27.01.25",
    category: "javascript",
  },
  {
    id: "funkcje-i-ich-funkcje-oraz-parametry-i-argumenty",
    title:
      "Funkcje i ich funkcje oraz parametry i argumenty",
    post: <Post6 />,
    imageSmall: "/post-assets/post-6-small.jpg",
    imageBig: "/post-assets/post-6-big.jpg",
    text: "Tycie kompendium o funkcjach, argumentach i parametrach na przykładach z życia wziętych.",
    date: "03.02.25",
    category: "javascript",
  },
].reverse() as PostType[];
