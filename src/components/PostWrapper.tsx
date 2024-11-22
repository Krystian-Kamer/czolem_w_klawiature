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
        <div className="mx-20 mb-96 flex h-[390vh] flex-col md:mt-14 lg:mt-32">
          <div
            className='mb-10 w-2/3 self-center overflow-hidden rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'
          >
            <img
              src={imageBig}
              alt="post image"
              className={`scale-110 ${date} rounded-lg object-cover opacity-[97%]`}
            />
          </div>
          <div className="h-[200vh] rounded-badge bg-white/80 px-16 py-16 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between font-protest text-2xl italic tracking-wider text-primary">
              <p>#{category}</p>
              <p>{date}</p>
            </div>
            <h1 className="mt-20 mb-8 px-8 text-center font-protest text-4xl uppercase tracking-wide text-primary">
              {title}
            </h1>
            <div>
              <div className="mb-20 text-2xl leading-relaxed">
                <p>{text}</p>
              </div>
            </div>
            {postComponent}
          </div>
        </div>
      </Section>
    </div>
  );
};
export default PostWrapper;
