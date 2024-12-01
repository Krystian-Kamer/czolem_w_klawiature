import { PostType } from "../../types";
import { postsData } from "../../posts-data";
import { useState } from "react";

type PostProps = {
  setPosts: (newPosts: PostType[]) => void;
};

const PostCategories = ({ setPosts }: PostProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("wszystko");
  const categories = [
    "wszystko",
    "nauka",
    "javascript",
    "książka",
    "typescript",
    "rozkminy",
    "react",
    "narzędzia",
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
    <div className="mb-20 rounded-lg border-8 border-dotted border-primary px-2 bg-base-100/70 pb-8 pt-2 md:px-4 md:pt-6 lg:px-8 lg:pt-2">
      <div className="relative mb-4 text-center font-protest text-3xl uppercase tracking-wider md:mb-8 md:text-5xl lg:my-12 lg:text-6xl">
        <p className="absolute left-[50.3%] top-1 w-full -translate-x-1/2 text-primary selection:bg-accent selection:text-primary/95 md:top-2">
          #{activeCategory}
        </p>
        <h3 className="z-10 select-none text-accent">#{activeCategory}</h3>
      </div>
      <div className="z-10 flex flex-wrap items-center justify-center gap-1 gap-y-3 md:gap-x-2 lg:gap-y-4">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className="cursor-custom-pointer w-fit flex-auto min-w-28 lg:min-w-48 select-none rounded-full bg-primary px-4 py-1 font-protest text-xl tracking-wide text-neutral duration-200 hover:bg-primary/90 ph:px-6 ph:tracking-wider md:w-fit md:px-4 md:text-2xl md:tracking-widest  lg:flex-none lg:px-7 lg:text-3xl lg:tracking-wide"
              onClick={() => filterPosts(category)}
            >
              <span className="text-accent">#</span>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default PostCategories;
