import { Post1, Post2 } from "./posts/index";
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
].reverse() as PostType[];
