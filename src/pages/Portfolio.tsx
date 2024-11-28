import { Project, Section, SectionTitle } from "../components/index";
import movie from "../assets/rick phone.mp4";
import { projects } from "../data";

const Portfolio = () => {
  return (
    <Section
      id="blog-1"
      bgColor="bg-neutral"
      height="h-fit lg:h-screen"
      isLastChild={true}
    >
      <div>
        <div className="mx-8 flex flex-col md:mt-14 lg:mt-20 lg:h-screen">
          <div className="prose">
            <SectionTitle title="Portfolio" />
          </div>
          <div className="flex flex-col mt-16 mb-36 gap-y-10">
            {projects.map((project) => {
              return <Project project={project} />;
            })}
          </div>



          <div className="mb-40 hidden h-1/5 min-h-96 w-full overflow-hidden rounded-lg border-[3px] border-primary bg-accent shadow-[-10px_15px_5px_rgba(0,0,0,1)]">
            <div className="flex gap-x-2 border-b-2 border-secondary bg-neutral/80 py-2 pl-3">
              <div className="h-3 w-3 rounded-full border-2 border-primary bg-red-500"></div>
              <div className="h-3 w-3 rounded-full border-2 border-primary bg-yellow-300"></div>
              <div className="h-3 w-3 rounded-full border-2 border-primary bg-lime-400"></div>
            </div>
            <div role="tablist" className="tabs rounded-full bg-accent">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-primary [--tab-text:red]"
                aria-label="Opis"
                defaultChecked
              />
              <div role="tabpanel" className="tab-content h-96 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis quidem, magnam nesciunt quis quae cumque aliquam ex.
                Fuga, accusamus odio?
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Film"
              />
              <div role="tabpanel" className="tab-content p-3">
                <video
                  className="rounded-box object-cover opacity-90"
                  src={movie}
                  autoPlay
                  loop
                  muted
                ></video>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Technologia"
              />

              <div role="tabpanel" className="tab-content">
                Lorem ipsum dolor sit amet.
              </div>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Linki"
              />

              <div role="tabpanel" className="tab-content">
                Linki ipsum dolor sit amet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Portfolio;
