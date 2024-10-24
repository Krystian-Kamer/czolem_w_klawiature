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
  return (
    <div className="animated-movement pointer-events-none absolute bottom-0 z-20 overflow-hidden">
      {lastChild ? (
        <img src={wavesAccent} alt="accent waves" />
      ) : bgColor === "bg-neutral" ? (
        <img src={wavesDark} alt="dark waves" />
      ) : (
        <img src={wavesLight} alt="light waves" />
      )}
    </div>
  );
};
export default Waves;
