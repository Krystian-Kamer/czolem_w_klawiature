import { Post1 } from "./posts/index";
import { PostType } from "./types";

export const postsData: PostType[] = [
  {
    id: "to-nie-tinder-ale-poznajmy-sie-blizej",
    title: "To nie Tinder, ale poznajmy się bliżej",
    post: <Post1 />,
    imageSmall: "/post-assets/post-1-small.jpg",
    imageBig: "/post-assets/post-1-big.jpeg",
    text: "Jest to pierwszy post prezentujący moją osobę. Kim jestem, dokąd zmierzam i dlaczego rozpocząłem prowadzenie bloga? Zapraszam.",
    date: "21.11.24",
    category: "rozkminy",
  },
].reverse() as PostType[];
