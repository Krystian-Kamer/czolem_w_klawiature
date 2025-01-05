import { Section, SectionTitle } from "../components/index";
import { useContext } from "react";
import { ContextValue } from "../types";
import { AppContext } from "../App";
const Contact = () => {
  const { windowHeight } = useContext<ContextValue>(AppContext);
  return (
    <>
      <Section
        id="contact"
        bgColor="bg-neutral"
        height={`${
          windowHeight < 1174
            ? "h-fit md:pb-[300px] lg:pb-[250px]"
            : "md:h-screen"
        }`}
        isLastChild={true}
      >
        <div className="mb-40 flex flex-col selection:bg-secondary selection:text-accent">
          <div className="prose">
            <SectionTitle bgColor="bg-neutral" title="Kontakt" />
          </div>
          <form
            className="prose flex h-fit w-full max-w-[400px] flex-col justify-around self-center border-[6px] border-dashed border-primary bg-accent px-4 py-2 sm:mt-8 md:mt-16 md:w-3/5 md:max-w-none md:border-8 md:px-6 lg:w-1/2 lg:p-8"
            target="_blank"
            action="https://formsubmit.co/6ee327a787b46a2edd4ee628298c9ecf"
            method="POST"
          >
            <h1 className="mt-2 text-lg uppercase text-primary md:mt-4 md:text-xl lg:text-2xl">
              Pogadajmy
            </h1>
            <label className="input mb-1 flex h-8 items-center gap-2 rounded-none bg-neutral font-protest text-sm tracking-wider md:h-12 md:text-lg lg:text-xl">
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

            <label className="input my-1 flex h-8 items-center gap-2 rounded-none bg-neutral font-protest text-sm tracking-wider md:h-12 md:text-lg lg:text-xl">
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
              className="textarea mt-1 min-h-[30vh] w-full resize-none rounded-none bg-neutral font-protest text-sm tracking-wider md:text-lg lg:text-xl"
              placeholder="O czym chciałbyś pogadać?"
              name="message"
            ></textarea>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Dzięki za zostawienie wiadomości, na pewno się z nią zapoznam."
            />
            <div className="flex flex-col items-center justify-between gap-x-1 sm:mt-3 sm:flex-row md:mt-4">
              <p className="my-2 font-protest text-base tracking-wider text-primary md:mb-4 md:text-lg lg:text-2xl">
                Uzupełnij wszystkie pola!
              </p>
              <button
                type="submit"
                className="cursor-custom-pointer mb-2 w-full rounded-sm border-4 border-primary bg-primary py-1 font-protest text-sm uppercase tracking-widest text-accent duration-300 hover:bg-accent hover:text-primary sm:w-fit sm:px-6 md:px-8 md:text-base lg:px-10 lg:py-2 lg:text-xl"
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
