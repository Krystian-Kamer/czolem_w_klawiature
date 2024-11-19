const PostCategories = () => {
  const categories = [
    "wszystko",
    "javascript",
    "typescript",
    "nauka programowania",
    "react",
  ];
  return (
    <>
      <div className="flex flex-col flex-wrap items-center gap-y-3 md:flex-row md:gap-x-2 lg:gap-y-4">
        {categories.map((category) => {
          return (
            <button className="cursor-custom-pointer w-4/5 flex-auto rounded-full bg-primary py-1 font-protest text-xl tracking-wide text-neutral duration-200 hover:bg-primary/90 ph:tracking-wider md:w-fit md:px-4 md:text-2xl md:tracking-widest lg:flex-none lg:px-8 lg:text-3xl lg:tracking-wide">
              <span className="text-accent">#</span>
              {category}
            </button>
          );
        })}
      </div>
      <h4 className="mx-auto my-16 font-protest text-4xl uppercase tracking-wider text-primary/40 md:text-5xl lg:my-24 lg:text-6xl">
        -Wszystko-
      </h4>
    </>
  );
};
export default PostCategories;
