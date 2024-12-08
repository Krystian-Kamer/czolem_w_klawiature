import { Section, SectionTitle } from "../components/index";
import { Desktop, Project } from "../components/portfolio/index";
import Slider from "react-slick";
import { projects } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Portfolio = () => {
  const slidesToShow = window.innerWidth >= 640 ? 2.1 : 1.1;
  const visibleDots = window.innerWidth >= 390 ? true : false;

  return (
    <Section
      id="blog-1"
      bgColor="bg-neutral"
      height="h-screen"
      isLastChild={true}
    >
      <div>
        <div className="flex flex-col md:mt-14 lg:mx-8 lg:mt-20">
          <div className="prose select-none mx-8">
            <SectionTitle title="Portfolio" />
          </div>
          <div className="slider-container lg:hidden">
            <Slider
              {...{
                dots: visibleDots,
                infinite: true,
                speed: 500,
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
                initialSlide: 1,
              }}
            >
              {projects.map((project) => {
                return <Project key={project.id} project={project} />;
              })}
            </Slider>
          </div>
          <Desktop />
        </div>
      </div>
    </Section>
  );
};
export default Portfolio;
