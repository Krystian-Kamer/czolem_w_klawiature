import { useParams } from "react-router-dom";
import { postsData } from "../posts-data";
import { Section } from "./index";
const PostWrapper = () => {
  const { id: postId } = useParams();
  const correctPost = postsData.find((post) => post.id === postId);
  const postComponent = correctPost!.post;

  const { title, imageSmall, imageBig, text, date, category } = correctPost;
  console.log(title);
  return (
    <div className="bg-sky-300">
      <Section
        id="blog-1"
        bgColor="bg-neutral"
        height="h-fit"
        isLastChild={true}
      >
        <div className="mx-20 mb-96 flex h-[390vh] flex-col overflow-hidden rounded-badge bg-white/80 drop-shadow-[0px_-5px_15px_rgba(0,0,0,0.2)] md:mt-14 lg:mt-32">
          <img src={imageSmall} alt="" className="object-cover px-20 pt-20 bg-accent opacity-95 rounded-t-badge" />
            <h1 className="bg-accent px-8 py-8 text-center font-protest text-4xl uppercase tracking-wide text-primary">
              {title}
            </h1>
          <div>
            <div className="px-10">
              <p>{text}</p>
            </div>
          </div>
          {postComponent}
        </div>
      </Section>
    </div>
  );
};
export default PostWrapper;
