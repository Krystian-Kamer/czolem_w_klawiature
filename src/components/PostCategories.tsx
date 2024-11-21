import { PostType } from "../types";
import { postsData } from "../posts-data";
import { useState } from "react";

type PostProps = {
  setPosts: (newPosts: PostType[]) => void;
};

const PostCategories = ({ setPosts }: PostProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("wszystko");
  const categories = [
    "wszystko",
    "javascript",
    "typescript",
    "nauka programowania",
    "react",
  ];

  const filterPosts = (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    if (category === "wszystko") return setPosts(postsData);
    const filteredPosts = postsData.filter(
      (post) => post.category === category,
    );
    return setPosts(filteredPosts);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap items-center gap-y-3 md:flex-row md:gap-x-2 lg:gap-y-4">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className="cursor-custom-pointer w-4/5 flex-auto select-none rounded-full bg-primary py-1 font-protest text-xl tracking-wide text-neutral duration-200 hover:bg-primary/90 ph:tracking-wider md:w-fit md:px-4 md:text-2xl md:tracking-widest lg:flex-none lg:px-8 lg:text-3xl lg:tracking-wide"
              onClick={() => filterPosts(category)}
            >
              <span className="text-accent">#</span>
              {category}
            </button>
          );
        })}
      </div>
      <h4 className="mx-auto my-16 font-protest text-4xl uppercase tracking-wider text-primary/40 md:text-5xl lg:my-24 lg:text-6xl">
        -{activeCategory}-
      </h4>
    </>
  );
};
export default PostCategories;
