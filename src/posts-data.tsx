import { Post1, Post2, Post3 } from "./post-pages/index";
import { PostType } from "./types";

export const postsData: PostType[] = [
  {
    id: "czolem-w-klawiature",
    title: "Czołem w klawiaturę",
    post: <Post1 />,
    imageSmall: "/post-assets/post-1.jpeg",
    imageBig: "/post-assets/post-1-big.jpeg",
    text: "To są Oblicza JavaScript, gdzie zapoznajemy się z ciekawymi danymi na temat funkcjonowania tego języka.",
    date: "2023-12-01",
    category: "javascript",
  },
  {
    id: "czemu-programowanie-zniszczylo-moj-zwiazek",
    title: "Czemu programowanie zniszczyło mój związek.",
    post: <Post2 />,
    imageSmall: "/post-assets/post-1.jpeg",
    imageBig: "/post-assets/post-1-big.jpeg",
    text: "Zadaję sobie pytanie dlaczego programowaie zniszczyło mój związek i czy mogłem coś na to zaradzić.",
    date: "2023-12-15",
    category: "typescript",
  },
  {
    id: "randomowa-nazwa-posta-numer-trzy",
    title: "Randomowa nazwa posta numer trzy",
    post: <Post3 />,
    imageSmall: "/post-assets/post-1.jpeg",
    imageBig: "/post-assets/post-1-big.jpeg",
    text: "Barwy, które kolorowy niesie wiatr, możesz zdobić świat lecz to będzie tylko świat, tylko świat, nie bary, które niesie wiatr",
    date: "2024-01-01",
    category: "react",
  },
].reverse() as PostType[];
