import { useState } from "react";
import { Section, SectionTitle } from "../components/index";
import { PostPreview, PostCategories } from "../components/blog/index";
import { postsData } from "../posts-data";
import { PostType } from "../types";
const Blog = () => {
  const [posts, setPosts] = useState<PostType[]>(postsData);

  return (
    <>
      <Section
        id="blog-1"
        bgColor="bg-neutral"
        height="h-fit"
        isLastChild={true}
      >
        <div className="relative mx-8 flex flex-col md:mt-14 lg:mt-20">
          <div className="prose z-10">
            <SectionTitle title="Blog osobisty" />
          </div>
          <div className="z-10 w-full font-protest text-base tracking-wide text-primary/95 selection:bg-accent selection:text-secondary ph:text-xl md:w-11/12 md:text-2xl leading-loose ph:leading-loose sm:leading-loose md:tracking-wider md:leading-loose lg:text-3xl lg:leading-relaxed lg:tracking-wider">
            <h3 className="mb-5 md:mb-8 lg:mb-10">
              <span className="border-b-4 border-accent bg-accent/30">
                "Czołem w klawiaturę"
              </span>{" "}
              powstało w celach edukacyjnych i humorystycznych. Na spokojnie
              sprawdzam dane zagadnienie i wyciągam wnioski. Wyznaję zasadę, że
              im prościej tym lepiej.
            </h3>
            <h3 className="mb-2 hidden lg:ml-24 ph:flex md:mb-2 lg:mb-3">
              Wybierz kategorię:
            </h3>
          </div>
          <PostCategories setPosts={setPosts} />
          <div className="last:mb-[100px] last:sm:mb-[400px] last:md:mb-[300px] last:lg:mb-[500px]">
            {posts.length === 0 ? (
              <div className="my-40 w-full text-center font-protest text-2xl tracking-wide selection:bg-accent selection:text-secondary md:text-3xl md:leading-relaxed md:tracking-wider lg:px-20 lg:text-4xl lg:leading-relaxed lg:tracking-wider">
                Obecnie nie ma postu o tej kategorii, ale szare komórki już
                pracują, by się pojawił, cierpliwości...{" "}
              </div>
            ) : (
              posts.map((post) => <PostPreview key={post.id} post={post} />)
            )}
          </div>
        </div>
      </Section>
    </>
  );
};
export default Blog;
