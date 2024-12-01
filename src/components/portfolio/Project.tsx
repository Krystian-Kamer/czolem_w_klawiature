import { useEffect, useState } from "react";
import { ProjectType } from "../../types";
import { useInView } from "react-intersection-observer";

const Project = ({ project }: { project: ProjectType }) => {
  const { name, img, description, technology, github, live, mobileVideo } =
    project;
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const { ref: projectRef, inView: isProjectInView } = useInView();

  useEffect(() => {
    setIsVideoVisible(false);
  }, [isProjectInView]);

  return (
    <div
      ref={projectRef}
      className="mockup-window mb-2 ml-12 h-[500px] w-fit min-w-[300px] overflow-hidden bg-accent shadow-md ph:mb-10 ph:ml-14 ph:mt-6 ph:h-[585px] sm:my-16 tb:my-24 tb:ml-16"
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
            <h2 className="card-title font-bold tracking-wider">{name}</h2>
            <p
              className={`${description.length > 150 && "leading-5 ph:leading-normal"}`}
            >
              <span className="font-bold">Opis:</span> {description}
            </p>
            <div>
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
        <div className="relative w-full">
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
