import { useLocation } from "react-router-dom";
import footerImg from "../assets/footer-img.png";
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";
import { useContext } from "react";

const Footer = () => {
  const { pathname } = useLocation();
  const { windowHeight } = useContext<ContextBgValue>(AppContext);
  const footerLinks = [
    {
      id: "footer-1",
      href: "mailto:texen24@gmail.com",
      icon: <RiMailFill className="pointer-events-none" />,
    },
    {
      id: "footer-2",
      href: "https://github.com/Krystian-Kamer",
      icon: <RiGithubFill className="pointer-events-none" />,
    },
    {
      id: "footer-3",
      href: "https://www.linkedin.com/in/krystian-kamer-0aa148279/",
      icon: <RiLinkedinFill className="pointer-events-none" />,
    },
  ];

  return (
    <footer className="absolute bottom-0 z-20 w-full selection:bg-secondary selection:text-accent">
      <div
        className={`relative mx-auto flex ${windowHeight <= 360 ? "h-[20vh]" : windowHeight > 600 ? "h-[10vh]" : "h-[14vh]"} max-w-7xl flex-col items-baseline justify-center gap-y-2`}
      >
        <div className="flex w-full items-center justify-center gap-x-6">
          {footerLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <a
                key={id}
                href={href}
                className="cursor-custom-pointer rounded-full p-1 text-2xl duration-300 hover:scale-105 hover:bg-primary hover:text-accent active:hover:scale-125 ph:text-3xl ph:hover:scale-110 md:text-4xl"
                target={href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
              >
                {icon}
              </a>
            );
          })}
        </div>
        <p
          className={`z-10 self-center text-center font-protest text-xs leading-3 md:-translate-x-8 md:text-sm tb:-translate-x-20 tb:text-lg tb:leading-none ${windowHeight <= 600 ? "lg:-translate-x-16 xl:translate-x-0" : "lg:translate-x-0"}`}
        >
          Polityka Prywatności © {new Date().getFullYear()} Krystian Kamer. All
          right reserved.
        </p>
        <img
          src={footerImg}
          alt="Hero image"
          className={`z-30 hidden w-1/2 max-w-[320px] sm:w-2/5 md:absolute md:bottom-0 md:right-0 md:flex md:w-1/3 ${pathname === "/" ? "pointer-events-none opacity-0" : "opacity-100"}`}
        />
      </div>
      <div className="absolute bottom-0 -z-10 h-[5vh] w-full bg-accent 2xl:bg-transparent"></div>
    </footer>
  );
};
export default Footer;
