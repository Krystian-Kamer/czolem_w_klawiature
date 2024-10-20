import ownerImg from "../assets/owner-image.png";
import pinImg from "../assets/pin.png";
import { SectionTitle } from "./index";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-48">
        <div className="prose w-1/2">
          <SectionTitle title={"Czołem!"} />
          <h2 className="text-3xl">Z tej strony Krystian Kamer.</h2>
          <h3 className="text-3xl">
            Jestem{" "}
            <div
              className="tooltip tooltip-right tooltip-accent"
              data-tip="zajebistym"
            >
              <span className="underline"> Frontend Developerem.</span>
            </div>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aut
            ullam? Commodi, id sed delectus nemo ipsam cumque veritatis dolores
            cupiditate voluptas aut, consectetur, repudiandae repellendus in vel
            minus fugiat sequi veniam eius error ex quae. Laboriosam voluptas
            cumque pariatur aperiam aliquam, quibusdam laudantium, aspernatur,
            eum maiores minus est? Dolorum ea at unde facere. Quis culpa
            pariatur ipsam, corrupti odit modi minus commodi in magni inventore,
            sapiente illo maiores quasi vel laboriosam ad sed dolore reiciendis
            iste libero cupiditate. Omnis deleniti temporibus soluta obcaecati
            quasi culpa odit similique consectetur! Eum quis ipsam aspernatur
            magni id sed qui quibusdam quam nemo!
          </p>
        </div>
        <div className="relative w-[28%] rotate-12 rounded-sm border-8 border-white bg-accent drop-shadow-[25px_25px_10px_rgba(0,0,0,0.3)]">
          <img
            src={pinImg}
            alt="pin"
            className="absolute -left-7 -top-3 z-10 w-20 drop-shadow-[3px_10px_3px_rgba(0,0,0,0.6)]"
          />
          <img src={ownerImg} alt="" className="" />
        </div>
      </div>
      <div>hello</div>
    </>
  );
};
export default About;
