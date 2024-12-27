import { Section, SectionTitle } from "../components/index";
import { Desktop, Project } from "../components/portfolio/index";
import Slider from "react-slick";
import { projects } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextValue } from "../types";
import { AppContext } from "../App";
import { useContext } from "react";
const Portfolio = () => {
  const { windowWidth, sectionHeight } = useContext<ContextValue>(AppContext);
  const slidesToShow = windowWidth >= 600 ? 2 : 1;

  return (
    <Section
      id="blog-1"
      bgColor="bg-neutral"
      height={sectionHeight('/portfolio')}
      isLastChild={true}
    >
      <div>
        <div className="flex flex-col mb-28 vmd:mb-0 md:mt-14 lg:mx-10 lg:mt-20">
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
