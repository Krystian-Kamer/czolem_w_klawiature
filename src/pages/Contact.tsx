import { Section, SectionTitle } from "../components/index";
const Contact = () => {
  const windowHeight = window.innerHeight;
  return (
    <>
      <Section
        id="blog-1"
        bgColor="bg-neutral"
        height={`${
          windowHeight <= 320
            ? "h-[185vh]"
            : windowHeight < 640
              ? "h-[120vh]"
              : "h-screen"
        }`}
        isLastChild={true}
      >
        <div className="mx-8 flex flex-col selection:bg-secondary selection:text-accent md:mt-14 lg:mt-20">
          <div className="prose">
            <SectionTitle title="Kontakt" />
          </div>
          <form
            className="prose flex h-fit w-full flex-col justify-around self-center border-[6px] border-dashed border-primary bg-accent px-4 py-2 ph:mt-5 sm:mt-8 md:mt-16 md:w-3/5 lg:w-1/2 lg:p-8"
            target="_blank"
            action="https://formsubmit.co/6ee327a787b46a2edd4ee628298c9ecf"
            method="POST"
          >
            <h1 className="mt-1 text-lg uppercase text-primary ph:mt-2 ph:text-xl tb:text-2xl">
              Pogadajmy
            </h1>
            <label className="input mb-1 flex h-8 items-center gap-2 rounded-none bg-neutral font-protest text-sm tracking-wider ph:text-base md:h-12 tb:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Imię"
                name="name"
              />
            </label>

            <label className="input my-1 flex h-8 items-center gap-2 rounded-none bg-neutral font-protest text-sm tracking-wider ph:text-base md:h-12 tb:text-lg">
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
                name="email"
                required
              />
            </label>
            <textarea
              className="textarea my-1 min-h-[30vh] w-full resize-none rounded-none bg-neutral font-protest text-sm tracking-wider ph:text-base tb:text-lg"
              placeholder="O czym chciałbyś pogadać?"
              name="message"
            ></textarea>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Dzięki za zostawienie wiadomości, na pewno się z nią zapoznam."
            />
            <div className={`flex ${windowHeight <=320 ? 'flex-col' : 'flex-row'} items-center justify-between gap-x-1`}>
              <p className="font-protest text-sm tracking-wider text-primary ph:text-base lg:text-xl">
                Uzupełnij wszystkie pola!
              </p>
              <button
                type="submit"
                className="cursor-custom-pointer rounded-sm border-4 border-primary bg-primary px-4 py-1 font-protest text-sm uppercase md:text-base tracking-widest text-accent duration-300 hover:bg-accent hover:text-primary ph:px-6 lg:px-10 lg:py-2 lg:text-xl"
              >
                Prześlij
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};
export default Contact;
