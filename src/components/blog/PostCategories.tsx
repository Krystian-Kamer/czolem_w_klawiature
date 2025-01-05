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
  console.log("first");
  return (
    <>
      <p className="mb-2 font-protest tracking-wide text-primary selection:bg-secondary selection:text-accent md:mb-2 md:text-2xl lg:mb-3 lg:text-2xl">
        Wybierz kategorię:
      </p>
      <div className="mb-20 self-center border-8 border-dotted border-primary bg-base-100/70 px-2 pb-8 pt-2 md:px-4 md:pt-6 lg:px-8 lg:pt-2">
        <div className="relative mb-4 text-center font-protest text-2xl uppercase tracking-wider md:mb-8 md:text-3xl lg:mt-6 lg:text-4xl">
          <p className="absolute left-[50.3%] top-1 w-full -translate-x-1/2 text-primary selection:bg-accent selection:text-primary/95 md:top-2">
            #{activeCategory}
          </p>
          <h3 className="z-10 select-none text-accent">#{activeCategory}</h3>
        </div>
        <div className="z-10 flex flex-wrap items-center justify-center gap-1 gap-y-3 sm:px-4 md:gap-x-2 lg:gap-y-4">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className="cursor-custom-pointer w-fit min-w-28 flex-auto select-none rounded-full bg-primary py-1 font-protest text-base tracking-wide text-neutral duration-200 hover:bg-primary/90 md:w-fit md:px-4 md:text-xl md:tracking-widest lg:min-w-48 lg:flex-none lg:px-7 lg:text-2xl lg:tracking-wide"
                onClick={() => filterPosts(category)}
              >
                <span className="text-accent">#</span>
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PostCategories;
