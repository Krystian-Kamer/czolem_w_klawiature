const PostCategories = () => {
  const categories = [
    "wszystko",
    "javascript",
    "typescript",
    "nauka programowania",
    "react",
  ];
  return (
    <div className="flex flex-col flex-wrap items-center gap-y-3 lg:gap-y-4 md:flex-row md:gap-x-2 mb-32">
      {categories.map((category) => {
        return (
          <button className="cursor-custom-pointer w-4/5 flex-auto rounded-full bg-primary py-1 font-protest text-xl tracking-wide ph:tracking-wider text-neutral md:w-fit md:px-4 md:text-2xl md:tracking-widest lg:tracking-wide lg:flex-none lg:px-8 lg:text-3xl hover:bg-primary/90 duration-200">
            <span className="text-accent">#</span>
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default PostCategories;
