import footerImg from "../assets/footer-img.png";
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="cursor-dark w-full cursor-none bg-accent">
      <div className="relative mx-auto flex h-[16vh] max-w-7xl items-center bg-accent pl-8 md:justify-center">
        <div className="flex w-1/2 items-center justify-center gap-x-6 sm:w-3/5 md:w-2/3">
          <a
            href=""
            className="cursor-none rounded-full p-1 duration-300 hover:scale-110 hover:bg-primary hover:text-accent"
          >
            <RiMailFill className="text-3xl lg:text-4xl" />
          </a>
          <a
            href=""
            className="cursor-none rounded-full p-1 duration-300 hover:scale-110 hover:bg-primary hover:text-accent"
          >
            <RiGithubFill className="text-3xl lg:text-4xl" />
          </a>
          <a
            href=""
            className="cursor-none rounded-full p-1 duration-300 hover:scale-110 hover:bg-primary hover:text-accent"
          >
            <RiLinkedinFill className="text-3xl lg:text-4xl" />
          </a>
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
  )
}
export default Footer;
