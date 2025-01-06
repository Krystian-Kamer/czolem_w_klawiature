import { useEffect, useState } from "react";
import { ProjectType } from "../../types";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { ContextValue } from "../../types";
import { AppContext } from "../../App";
const Project = ({ project }: { project: ProjectType }) => {
  const { windowHeight } = useContext<ContextValue>(AppContext);

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
      className="mockup-window mb-10 max-w-[330px] justify-self-center overflow-hidden bg-accent shadow-md"
    >
      <div
        className={`card w-[200%] ${
          isVideoVisible ? "-translate-x-1/2" : "translate-x-0"
        } h-fit flex-row overflow-hidden rounded-none bg-white/95 duration-1000`}
      >
        <div className="w-full">
          <figure className="h-2/5">
            <img src={img} alt={name} className="h-full w-full opacity-[89%]" />
          </figure>
          <div className="card-body h-3/5 px-4 py-1">
            <h2 className="card-title font-bold capitalize tracking-wider">
              {name}
            </h2>
            <p>
              <span className="font-bold">Opis:</span>{" "}
              <span
                className={`${windowHeight <= 320 || window.innerWidth <= 320 ? "text-sm tracking-tight" : "text-base"}`}
              >
                {description}
              </span>
            </p>
            <div>
              <p className={`${windowHeight <= 320 && "hidden"}`}>
                <span className="font-bold">Użyłem:</span>{" "}
                <span
                  className={`${windowHeight <= 320 || window.innerWidth <= 320 ? "text-sm tracking-tight" : "text-base"}`}
                >
                  {technology}
                </span>
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
                  className={`${windowHeight <= 320 && "hidden"} cursor-custom-pointer badge badge-accent capitalize`}
                  onClick={() => setIsVideoVisible(true)}
                >
                  video
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <video
            src={mobileVideo}
            autoPlay
            playsInline
            loop
            muted
            className="h-full w-full object-cover"
          ></video>
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
