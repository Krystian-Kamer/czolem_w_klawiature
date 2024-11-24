import { Link } from "react-router-dom";
import { PostType } from "../types";
import { useInView } from "react-intersection-observer";

const PostPreview = ({ post }: { post: PostType }) => {
  const { id, title, imageSmall, imageBig, text, date, category } = post;
  const { ref: postPreview, inView: isPostPreviewInView } = useInView({
    triggerOnce: true,
  });

  const [day, month, year] = date.split(".");

  return (
    <div
      ref={postPreview}
      className={`relative mt-0 mb-16 flex opacity-0 h-fit w-full flex-col justify-center overflow-hidden drop-shadow-[0px_0px_5px_rgba(0,0,0,0.2)] duration-500 hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] md:mb-28 md:h-96 md:flex-row ${isPostPreviewInView ? "animate-fadeIn" : "ml-16 sm:ml-28 md:ml-52 lg:ml-96"}`}
    >
      <img
        src={imageSmall}
        alt="post image"
        className="rounded-t-lg object-cover opacity-95 md:hidden md:w-2/6 md:rounded-l-badge md:rounded-tr-none"
      />
      <img
        src={imageBig}
        alt="post image"
        className="hidden rounded-t-lg object-cover opacity-95 md:flex md:w-3/6 lg:w-2/6 md:rounded-l-badge md:rounded-tr-none"
      />
      <div className="prose flex flex-col rounded-b-lg bg-white/80 px-4 py-3 md:w-4/6 md:rounded-r-badge md:rounded-bl-none md:p-8 lg:w-3/6">
        <div className="prose">
          <h3 className="font-protest text-2xl uppercase tracking-wide selection:bg-accent md:text-3xl">
            {title}
          </h3>
        </div>
        <p className="mt-1 w-fit bg-accent px-2 font-protest text-sm selection:text-black md:mt-2 md:text-base">
          #{category}
        </p>
        <p className="mt-2 h-1/2 text-lg selection:bg-accent md:mt-auto md:text-xl md:leading-relaxed">
          {text}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-protest italic tracking-wider text-secondary/50 md:text-lg md:tracking-widest lg:opacity-0">
            {date} r.
          </p>
          <Link
            to={`/blog/${id}`}
            className="cursor-custom-pointer w-fit select-none rounded-sm bg-primary px-4 py-1 font-protest text-xl uppercase text-neutral no-underline duration-200 hover:bg-primary/90 hover:text-white md:px-8 md:py-2 md:text-2xl"
          >
            Czytaj...
          </Link>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 hidden w-[10%] -translate-y-1/2 select-none flex-col items-center justify-center gap-y-2 font-mono text-2xl italic text-secondary opacity-20 lg:flex">
        <p>{day}</p>
        <p>{month}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};
export default PostPreview;
