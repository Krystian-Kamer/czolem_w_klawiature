import { useLocation } from "react-router-dom";
import footerImg from "../assets/footer-img.png";
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";

const Footer = () => {
  const { pathname } = useLocation();

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
    <footer className="absolute text-primary bottom-0 z-20 w-full selection:bg-secondary selection:text-accent">
      <div
        className='mx-auto relative max-w-7xl flex-col items-baseline justify-center gap-y-2'
      >
        <div className="flex w-full items-center justify-center gap-x-6">
          {footerLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <a
                key={id}
                href={href}
                className="cursor-custom-pointer rounded-full p-1 text-2xl duration-300 hover:scale-105 hover:bg-primary hover:text-accent active:hover:scale-125 md:text-4xl"
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
          className='z-10 self-center text-center font-protest text-xs leading-3 md:-translate-x-10 md:text-sm'
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
