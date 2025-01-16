import { useParams } from "react-router-dom";
import { postsData } from "../../posts-data";
import { Section } from "../index";

const PostWrapper = () => {
  const { id: postId } = useParams();
  const chosenPost = postsData.find((post) => post.id === postId);
  const postComponent = chosenPost!.post;
  const { title, imageSmall, imageBig, text, date, category } = chosenPost!;

    return (
    <Section id="post-wrapper" bgColor="bg-neutral" height="h-fit" isLastChild={true}>
      <div className="mb-40 mt-20 flex flex-col justify-self-center overflow-hidden rounded-lg shadow-[0px_0px_3px_rgba(0,0,0,0.2)] max-w-full sm:max-w-[95%] md:max-w-full md:mx-14 md:mb-96 md:mt-32 lg:mx-20 lg:mt-32 lg:overflow-visible lg:rounded-none lg:shadow-none">
        <div className="relative self-center overflow-hidden lg:mb-16 lg:w-2/3 lg:rotate-6 lg:p-10">
          <div className="absolute left-0 top-12 z-40 hidden h-10 w-32 -rotate-[45deg] justify-center rounded-sm bg-base-100 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] lg:flex">
            <div className="h-full w-2/5 self-center bg-orange-800/25 shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"></div>
          </div>
          <div className="absolute bottom-12 right-0 z-40 hidden h-10 w-32 -rotate-[45deg] justify-center rounded-sm bg-base-100 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] lg:flex">
            <div className="h-full w-2/5 self-center bg-orange-800/25 shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"></div>
          </div>
          <img
            src={imageSmall}
            loading="lazy"
            alt="post image"
            className="scale-110 rounded-lg object-cover opacity-[97%] md:hidden"
          />
          <img
            src={imageBig}
            loading="lazy"
            alt="post image"
            className="hidden select-none object-cover opacity-[97%] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.8)] md:flex"
          />
        </div>
        <div className="h-fit bg-white/80 px-5 py-6 selection:bg-accent/80 md:px-8 md:py-12 lg:rounded-badge lg:px-16 lg:py-20 lg:drop-shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
          <div className="flex justify-between font-protest text-lg italic tracking-wider text-primary lg:text-2xl">
            <p>#{category}</p>
            <p>{date} r.</p>
          </div>
          <div className="relative mb-2 mt-10 w-full text-center font-protest text-2xl uppercase tracking-wide md:mt-16 md:text-3xl lg:mb-8 lg:mt-20 lg:text-4xl">
            <h1 className="select-none text-accent/85">{title}</h1>
            <p className="absolute -top-1 left-[50.3%] z-0 w-full -translate-x-1/2 text-primary">
              {title}
            </p>
          </div>
          <p className="text-center text-lg leading-relaxed text-secondary md:mt-4 lg:mb-10 lg:text-2xl">
            {text}
          </p>
          <hr className="mt-8" />
          {postComponent}
        </div>
      </div>
    </Section>
  );
};
export default PostWrapper;
