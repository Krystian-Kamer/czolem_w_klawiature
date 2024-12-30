import { Section, SectionTitle } from "../components/index";
import { Desktop, Project } from "../components/portfolio/index";
import Slider from "react-slick";
import { projects } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {

  const slidesToShow = window.innerWidth >= 600 ? 2 : 1;

  return (
    <Section
      id="blog-1"
      bgColor="bg-neutral"
      height="h-fit md:h-screen"
      isLastChild={true}
    >
      <div>
        <div className="flex flex-col">
          <div className="prose mx-6">
            <SectionTitle title="Portfolio" />
          </div>
          <div className="slider-container sm:hidden">
            <Slider
              {...{
                dots: true,
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
