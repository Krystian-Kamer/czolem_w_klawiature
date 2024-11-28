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
    <div className="animated-movement pointer-events-none absolute bottom-0 z-20 overflow-hidden 2xl:-bottom-8">
      <img src={imgSrc} alt="waves" />
    </div>
  );
};
export default Waves;
