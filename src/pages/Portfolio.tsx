import { Section, SectionTitle } from "../components/index";
import { Desktop, Project } from "../components/portfolio/index";
import Slider from "react-slick";
import { projects } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { ContextValue } from "../types";
import { AppContext } from "../App";

const Portfolio = () => {
  const slidesToShow = window.innerWidth >= 600 ? 2 : 1;
  const { windowHeight } = useContext<ContextValue>(AppContext);

  return (
    <Section
      id="blog-1"
      bgColor="bg-neutral"
      height={`${
        windowHeight < 1174
          ? "h-fit md:pb-[300px] lg:pb-[250px]"
          : "md:h-screen"
      }`}
      isLastChild={true}
    >
      <div>
        <div className="relative flex flex-col">
          <div className="prose">
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
