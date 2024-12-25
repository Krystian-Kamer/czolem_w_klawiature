import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const WindowToDoContent = () => {
  const { ref: toDoContentRef, inView: isToDoContentInView } = useInView();

  return (
    <div ref={toDoContentRef} className="flex min-h-[500px] items-center justify-center bg-base-100 px-20">
      <div className="grid grid-cols-2 overflow-hidden items-center justify-center gap-6">
        <p className={`bg-primary/90 ${isToDoContentInView ? 'translate-y-0': '-translate-y-[200%] '} duration-500  border-2 border-primary hover:bg-base-100 hover:text-primary px-5 rounded-box py-2 text-2xl tracking-wider text-neutral`}>
          Otworzyłeś właśnie kartę pułapkę, a raczej folder pułapkę!
        </p>
        <p className={`bg-primary/90 ${isToDoContentInView ? 'translate-y-0': '-translate-y-[200%] '} duration-500 border-2 border-primary hover:bg-base-100 hover:text-primary px-5 rounded-box py-2 text-2xl tracking-wider text-neutral`}>
          Wszędzie tylko te to-do listy. Ile można? Trzeba czymś się wybić.
        </p>
        <p className={`bg-primary/90 ${isToDoContentInView ? 'translate-y-0': '-translate-y-[200%] '} duration-500 border-2 border-primary hover:bg-base-100 hover:text-primary px-5 rounded-box py-2 text-2xl tracking-wider text-neutral`}>
          Szkoda czasu na to-do listę, kiedy tyle ciekawych technologii czeka na
          zbadanie!
        </p>

        <p className={`bg-primary/90 ${isToDoContentInView ? 'translate-y-0': '-translate-y-[200%] '} duration-500 border-2 border-primary hover:bg-base-100 hover:text-primary px-5 rounded-box py-2 text-2xl tracking-wider text-neutral group`}>
          Jeśli masz podobnie to{" "}
          <Link
            className="cursor-custom-pointer font-semibold group-hover:text-primary text-accent duration-500"
            to="/kontakt"
          >
            pogadajmy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
export default WindowToDoContent;
