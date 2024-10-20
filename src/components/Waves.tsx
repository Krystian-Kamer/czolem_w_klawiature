import wavesDark from "../assets/waves-dark.svg";
import wavesLight from "../assets/waves-light.svg";

const Waves = ({ bgColor }: { bgColor: string }) => {
  return (
    <div className="animated-movement overflow-hidden absolute bottom-0">
      {bgColor === "bg-neutral" ? (
        <img src={wavesDark} alt="dark waves" />
      ) : (
        <img src={wavesLight} alt="light waves" />
      )}
    </div>
  );
};
export default Waves;
