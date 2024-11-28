import { useParams } from "react-router-dom";
import { postsData } from "../posts-data";
import { Section } from "./index";

const PostWrapper = () => {
  const { id: postId } = useParams();
  const correctPost = postsData.find((post) => post.id === postId);
  const postComponent = correctPost!.post;

  const { title, imageSmall, imageBig, text, date, category } = correctPost!;

  return (
    <div className="bg-sky-300">
      <Section
        id="blog-1"
        bgColor="bg-neutral"
        height="h-fit"
        isLastChild={true}
      >
        <div className="mx-4 mb-36 mt-20 flex flex-col overflow-hidden rounded-lg drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] ph:mx-6 ph:mt-24 md:mx-14 md:mb-52 md:mt-32 lg:mx-20 lg:mb-96 lg:mt-32 lg:overflow-visible lg:rounded-none lg:drop-shadow-none">
          <div className="relative self-center overflow-hidden p-10 lg:mb-16 lg:w-2/3 lg:rotate-6 ">
            <div className="absolute left-0 top-12 z-40 hidden h-10 w-32 -rotate-[45deg] justify-center rounded-sm bg-base-100 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] lg:flex">
              <div className="h-full bg-orange-800/25 w-2/5 self-center shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"></div>
            </div>
            <div className="absolute bottom-12 right-0 z-40 hidden h-10 w-32 -rotate-[45deg] justify-center rounded-sm bg-base-100 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] lg:flex">
              <div className="h-full bg-orange-800/25 w-2/5 self-center shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"></div>
            </div>
            <img
              src={imageSmall}
              alt="post image"
              className="scale-125 rounded-lg object-cover opacity-[97%] md:hidden"
            />
            <img
              src={imageBig}
              alt="post image"
              className="hidden select-none object-cover opacity-[97%] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.8)] md:flex"
            />
          </div>
          <div className="h-fit bg-white/80 px-5 py-6 selection:bg-accent/80 ph:px-6 ph:py-8 md:px-8 md:py-12 lg:rounded-badge lg:px-16 lg:py-20 lg:drop-shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between font-protest text-lg italic tracking-wider text-primary lg:text-2xl">
              <p>#{category}</p>
              <p>{date} r.</p>
            </div>
            <div className="relative mb-2 mt-10 w-full text-center font-protest text-2xl uppercase tracking-wide md:mt-16 md:text-3xl lg:mb-8 lg:mt-20 lg:text-4xl">
              <h1 className="text-primary">{title}</h1>
              <p className="absolute left-[50.3%] top-1 -z-10 w-full -translate-x-1/2 select-none text-accent/85">
                {title}
              </p>
            </div>
            <p className="text-lg text-secondary text-center leading-relaxed md:mt-4 lg:mb-10 lg:text-2xl">
              {text}
            </p>
            <hr />
            {postComponent}
          </div>
        </div>
      </Section>
    </div>
  );
};
export default PostWrapper;
