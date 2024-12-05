import { Link } from "react-router-dom";
import { FileType } from "../../types";
import { useRef, useState } from "react";

type FileProps = {
  file: FileType;
  setIsWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setWindowContent: React.Dispatch<React.SetStateAction<string>>;
};

const File = ({ file, setIsWindowOpen, setWindowContent }: FileProps) => {
  const { icon, name, focus, href, to } = file;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleRenameClick = () => {
    setIsWindowOpen(false);
    if (inputRef.current) {
      inputRef.current.placeholder = "";
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const saveNameOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      inputRef.current.blur();
      inputRef.current.disabled = true;
    }
  };

  return (
    <div className="dropdown dropdown-right">
      <div
        tabIndex={0}
        role="button"
        className={`cursor-custom-pointer group flex flex-col items-center justify-center rounded-btn text-primary/95 shadow-md duration-200 hover:shadow-lg ${
          focus
        } active:scale-90`}
        onClick={() => setIsDropdownOpen(true)}
      >
        <div className={`pointer-events-none mt-4 text-6xl`}>{icon}</div>
        <input
          ref={inputRef}
          type="text"
          className="pointer-events-none my-1 w-full bg-neutral text-center font-protest text-sm tracking-widest text-secondary/95 placeholder:text-secondary/95 focus-visible:ring-red-600"
          placeholder={name}
          disabled={true}
          onKeyDown={(e) => saveNameOnEnter(e)}
        />
      </div>
      {isDropdownOpen && (
        <div
          tabIndex={0}
          className="menu dropdown-content z-[1] -ml-4 mt-2 w-40 rounded-lg bg-neutral shadow"
        >
          {name === "github" || name === "linkedIn" ? (
            <a
              href={href}
              className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {setIsDropdownOpen(false)}}
            >
              Otwórz
            </a>
          ) : name === "blog" ? (
            <Link
              className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
              to={to as string}
              onClick={() => {
                setIsDropdownOpen(false);
              }}
            >
              Otwórz
            </Link>
          ) : (
            <button
              className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
              onClick={() => {
                setIsWindowOpen(true);
                setIsDropdownOpen(false);
               setWindowContent(name);
              }}
            >
              Otwórz
            </button>
          )}

          <button
            className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
            onClick={() => {
              handleRenameClick();
              setIsDropdownOpen(false);
            }}
          >
            Zmień nazwę
          </button>
          {name !== "kosz" && (
            <button className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80">
              Przenieś do kosza
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default File;
