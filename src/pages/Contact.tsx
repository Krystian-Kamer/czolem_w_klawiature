import { Section, SectionTitle, Footer } from "../components/index";
const Contact = () => {
  return (
    <>
      <Section
        id="blog-1"
        bgColor="bg-neutral"
        height="h-[90vh]"
        isLastChild={true}
      >
        <div className="mx-8 flex flex-col md:mt-14 lg:mt-20">
          <div className="prose">
            <SectionTitle title="Kontakt" />
          </div>
          <form className="md:mt- prose flex h-[60vh] w-full flex-col justify-around self-center border-4 border-dashed border-primary bg-accent p-8 md:w-4/5 md:border-8 lg:w-1/2">
            <h1 className="text-lg uppercase text-primary lg:text-2xl">
              Pogadajmy
            </h1>
            <label className="input flex items-center gap-2 rounded-none bg-neutral font-protest text-lg tracking-wider focus:outline-none focus:ring-fuchsia-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Imię" />
            </label>

            <label className="input flex items-center gap-2 rounded-none bg-neutral font-protest text-lg tracking-wider focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow border-none"
                placeholder="Email"
              />
            </label>
            <textarea
              className="textarea h-[30vh] w-full resize-none rounded-none bg-neutral font-protest text-lg tracking-wider"
              placeholder="O czym chciałbyś pogadać?"
            ></textarea>
            <div className="flex items-center justify-between">
              <p className="font-protest text-xl tracking-wider text-primary">
                Uzupełnij wszystkie pola!
              </p>
              <button
                type="submit"
                className="cursor-custom-pointer rounded-sm border-4 border-primary bg-primary px-10 py-2 font-protest text-xl uppercase tracking-widest text-accent duration-700 hover:bg-accent hover:text-primary"
              >
                Prześlij
              </button>
            </div>
          </form>
        </div>
      </Section>
      <Footer />
    </>
  );
};
export default Contact;
