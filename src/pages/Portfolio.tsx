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
  const { windowWidth, windowHeight } = useContext<ContextValue>(AppContext);
  const slidesToShow = windowWidth >= 600 ? 2.1 : 1.1;
  const visibleDots = windowWidth >= 390 ? true : false;
  
  const sectionHeight = () => {
    if (
      windowHeight <= 360 ||
      (windowWidth > windowHeight && windowHeight <= 600)
    ) {
      return "h-[200vh]";
    } else if (windowWidth > windowHeight && windowHeight <= 800) {
      return "h-[150vh]";
    } else if (
      windowHeight <= 658 ||
      (windowWidth > windowHeight && windowHeight <= 1065)
    ) {
      return "h-[120vh]";
    } else {
      return "h-screen";
    }
  };
  return (
    <Section
      id="blog-1"
      bgColor="bg-neutral"
      height={sectionHeight()}
      isLastChild={true}
    >
      <div>
        <div className="flex flex-col md:mt-14 lg:mx-10 lg:mt-20">
          <div className="prose">
            <SectionTitle title="Portfolio" />
          </div>
          <div className="slider-container md:hidden">
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
