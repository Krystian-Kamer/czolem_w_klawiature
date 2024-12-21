import wavesDark from "../assets/waves-dark.svg";
import wavesLight from "../assets/waves-light.svg";
import wavesAccent from "../assets/waves-accent.svg";

const Waves = ({
  bgColor,
  lastChild,
}: {
  bgColor: string;
  lastChild: boolean;
}) => {
  let imgSrc;

  if (!lastChild) {
    if (bgColor === "bg-neutral") {
      imgSrc = wavesDark;
    } else if (bgColor === "bg-primary") {
      imgSrc = wavesLight;
    }
  } else if (lastChild) {
    imgSrc = wavesAccent;
  }

  return (
    <div
      className={`animated-waves pointer-events-none absolute ${lastChild ? "bottom-[calc(5vh)] 2xl:-bottom-3" : "bottom-0 2xl:-bottom-8"} z-20 overflow-hidden`}
    >
      <img src={imgSrc} alt="waves" />
    </div>
  );
};
export default Waves;
