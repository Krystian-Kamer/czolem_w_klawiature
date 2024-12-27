import { useEffect, useState } from "react";
import { ProjectType } from "../../types";
import { useInView } from "react-intersection-observer";
import { ContextValue } from "../../types";
import { AppContext } from "../../App";
import { useContext } from "react";
const Project = ({ project }: { project: ProjectType }) => {
  const { name, img, description, technology, github, live, mobileVideo } =
    project;
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const { ref: projectRef, inView: isProjectInView } = useInView();
  const { windowHeight } = useContext<ContextValue>(AppContext);

  useEffect(() => {
    setIsVideoVisible(false);
  }, [isProjectInView]);

  return (
    <div
      ref={projectRef}
      className={`mockup-window justify-self-center mx-6 overflow-hidden mb-4 vmd:mb-10 bg-accent shadow-md ph:h-[565px] ph:w-[290px]`}
    >
      <div
        className={`card w-[200%] ${
          isVideoVisible ? "-translate-x-1/2" : "translate-x-0"
        } h-full flex-row overflow-hidden rounded-none bg-white/95 duration-1000`}
      >
        <div className="w-full">
          <figure className="h-2/5">
            <img src={img} alt={name} className="h-full w-full opacity-[89%]" />
          </figure>
          <div className="card-body h-3/5 px-4 py-1 ph:py-4">
            <h2 className="card-title font-bold capitalize tracking-wider">
              {name}
            </h2>
            <p
              className={`${description.length > 150 && "leading-5 ph:leading-normal"}`}
            >
              <span className="font-bold">Opis:</span> {description}
            </p>
            <div className={`${windowHeight<=320 && 'opacity-0'}`}>
              <p
                className={`${description.length > 150 && "leading-5 ph:leading-normal"} mb-2`}
              >
                <span className="font-bold">Użyłem:</span> {technology}
              </p>

              <div className="card-actions mb-2 justify-end gap-2">
                <a
                  className="cursor-custom-pointer badge badge-accent capitalize"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  className="cursor-custom-pointer badge badge-accent capitalize"
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live
                </a>
                <button
                  className="cursor-custom-pointer badge badge-accent capitalize"
                  onClick={() => setIsVideoVisible(true)}
                >
                  video
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <video src={mobileVideo} autoPlay loop muted></video>
          <button
            className="cursor-custom-pointer badge badge-accent absolute bottom-6 left-1/2 -translate-x-1/2 capitalize"
            onClick={() => setIsVideoVisible(false)}
          >
            Wstecz
          </button>
        </div>
      </div>
    </div>
  );
};
export default Project;
