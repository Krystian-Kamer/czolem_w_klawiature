import {
  Section,
  PostPreview,
  PostCategories,
  SectionTitle,
} from "../components/index";

const Blog = () => {
  return (
    <Section
      id="blog-1"
      bgColor="bg-neutral"
      height="h-[400vh]"
      isLastChild={true}
    >
      <div className="mx-8 flex flex-col md:mt-14 lg:mt-20">
        <div className="prose">
          <SectionTitle title="Blog" />
        </div>
        <div className="w-full font-protest text-lg tracking-wide selection:bg-accent selection:text-secondary ph:text-xl md:w-4/5 md:text-2xl md:leading-relaxed md:tracking-wider lg:text-3xl lg:leading-relaxed lg:tracking-wider">
          <h3 className="mb-5 md:mb-8 lg:mb-10">
            "Czołem w klawiaturę" powstało w celach stricte humorystycznych. Bez
            spiny sprawdzam dane zagadnienie i wyciągam wnioski. Wyznaję zasadę,
            że im prościej tym lepiej.
          </h3>
          <h3 className="mb-5 md:mb-8 lg:mb-10">
            Masz jakieś pytania? Napisz, chętnie przeczytam.
          </h3>
        </div>
        <PostCategories />
        <PostPreview />
      </div>
    </Section>
  );
};
export default Blog;
