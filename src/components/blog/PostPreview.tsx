import { Link, useNavigate } from "react-router-dom";
import { PostType, ContextValue } from "../../types";
import { useInView } from "react-intersection-observer";
import { AppContext } from "../../App";
import { useContext } from "react";
const PostPreview = ({ post }: { post: PostType }) => {
  const { windowHeight } = useContext<ContextValue>(AppContext);
  const { id, title, imageSmall, imageBig, text, date, category } = post;
  const { ref: postPreview, inView: isPostPreviewInView } = useInView();
  const navigate = useNavigate();

  const scrollToTop = () => {

  };

  return (
    <div
      ref={postPreview}
      className={`relative mb-16 mt-0 flex h-fit flex-col justify-center overflow-hidden duration-500 sm:drop-shadow-md md:mb-28 md:h-96 md:flex-row lg:drop-shadow-lg ${isPostPreviewInView ? "translate-x-0" : "translate-x-1/2"}`}
    >
      <img
        src={imageSmall}
        loading="lazy"
        alt="post image"
        className="rounded-t-lg border-x-[1px] border-t-[1px] border-primary sm:border-none border-transparent object-cover opacity-95 sm:prose sm:w-5/6 sm:self-center md:hidden md:w-2/6 md:rounded-l-badge md:rounded-tr-none"
      />
      <img
        src={imageBig}
        loading="lazy"
        alt="post image"
        onClick={() => navigate(`/blog/${id}`)}
        className="cursor-custom-pointer hidden rounded-t-lg object-cover opacity-95 duration-300 hover:opacity-85 md:flex md:w-2/5 md:rounded-l-badge md:rounded-tr-none lg:w-2/6"
      />
      <div className="prose flex h-full flex-col self-center rounded-b-lg border-[1px] border-primary sm:border-none border-transparent bg-white/80 px-4 py-3 sm:w-5/6 md:w-3/5 md:rounded-r-badge md:rounded-bl-none md:p-8 lg:w-3/6">
        <div className="prose">
          <h3
            className={`font-protest ${windowHeight <= 320 && "text-lg"} text-2xl uppercase tracking-wide selection:bg-accent md:text-2xl lg:text-3xl`}
          >
            <Link
              className="cursor-custom-pointer no-underline hover:text-primary/90"
              to={`/blog/${id}`}
            >
              {title}
            </Link>
          </h3>
        </div>
        <p className="mt-1 w-fit bg-accent px-2 font-protest text-sm selection:text-black md:mt-2 md:text-base">
          #{category}
        </p>
        <p className="mt-2 h-1/2 text-lg selection:bg-accent md:mt-0 md:text-xl md:leading-relaxed">
          {text}
        </p>
        <div className={`flex items-center justify-between`}>
          <p
            className={`select-none font-semibold italic tracking-widest text-secondary/30 md:text-lg lg:text-xl`}
          >
            {date} r.
          </p>
          <Link
            to={`/blog/${id}`}
            className={`cursor-custom-pointer ${windowHeight <= 320 && "text-sm"} w-fit select-none rounded-md bg-primary px-4 py-1 font-protest text-lg uppercase text-neutral no-underline duration-200 hover:bg-primary/90 hover:text-white sm:text-xl md:px-8 md:py-2 md:text-2xl`}
            onClick={() => scrollToTop()}
          >
            Czytaj...
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostPreview;
