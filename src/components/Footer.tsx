import footerImg from "../assets/footer-img.png";
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";

const Footer = () => {
  const footerLinks = [
    {
      id: "footer-1",
      href: "mailto:texen24@gmail.com",
      icon: <RiMailFill  className="pointer-events-none"/>,
    },
    {
      id: "footer-2",
      href: "https://github.com/Krystian-Kamer",
      icon: <RiGithubFill  className="pointer-events-none"/>,
    },
    {
      id: "footer-3",
      href: "https://www.linkedin.com/in/krystian-kamer-0aa148279/",
      icon: <RiLinkedinFill  className="pointer-events-none"/>,
    },
  ];

  return (
    <footer className="w-full bg-accent">
      <div className="relative mx-auto flex h-[16vh] max-w-7xl items-center bg-accent pl-8 md:justify-center">
        <div className="flex w-1/2 items-center justify-center gap-x-6 sm:w-3/5 md:w-2/3">
          {footerLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <a
                key={id}
                href={href}
                className=" cursor-custom-pointer rounded-full p-1 text-3xl duration-300 hover:scale-110 hover:bg-primary hover:text-accent active:hover:scale-125 md:text-4xl"
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
        <p className="absolute bottom-0 mb-5 w-1/2 text-center font-protest text-sm sm:w-3/5 md:mr-32 lg:mr-0">
          Polityka Prywatności © {new Date().getFullYear()} Krystian Kamer. All
          right reserved.
        </p>
        <img
          src={footerImg}
          alt="Hero image"
          className="absolute bottom-0 right-0 w-1/2 max-w-[320px] sm:w-2/5 md:w-1/3"
        />
      </div>
    </footer>
  );
};
export default Footer;
