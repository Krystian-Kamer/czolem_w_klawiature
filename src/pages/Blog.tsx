import { useState } from "react";
import { Section, SectionTitle } from "../components/index";
import { PostPreview, PostCategories } from "../components/blog/index";
import { postsData } from "../posts-data";
import { PostType } from "../types";
import { Typewriter } from "react-simple-typewriter";

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
        <div
          className='flex flex-col'
        >
          <div className="prose z-10">
            <SectionTitle bgColor="bg-neutral" title="Blog osobisty" />
          </div>
          <div className="z-10 w-full font-protest text-base leading-loose tracking-wide text-primary/95 selection:bg-accent selection:text-secondary sm:leading-loose md:w-11/12 md:text-2xl md:leading-loose md:tracking-wider lg:w-full lg:leading-relaxed lg:tracking-wider">
            <h3 className="mb-5 md:mb-8 lg:mb-10">
              <span className="border-b-4 border-accent bg-accent/30">
                "Czołem w klawiaturę"
              </span>{" "}
              powstało w celach edukacyjnych i humorystycznych. Na spokojnie
              sprawdzam dane zagadnienie i wyciągam wnioski. Wyznaję zasadę, że
              im prościej tym lepiej.
            </h3>
          </div>
          <PostCategories setPosts={setPosts} />
          <div className="last:mb-[100px] last:sm:mb-[400px] last:md:mb-[300px] last:lg:mb-[500px]">
            {posts.length === 0 ? (
              <div className="my-40 w-full text-center font-protest text-lg tracking-wide selection:bg-accent selection:text-secondary md:text-2xl md:leading-relaxed md:tracking-wider lg:px-20 lg:leading-relaxed lg:tracking-wider">
                <Typewriter
                  typeSpeed={20}
                  words={[
                    "Obecnie nie ma postu w tej kategorii, ale szare komórki już pracują, by się pojawił, cierpliwości...",
                  ]}
              />	
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
