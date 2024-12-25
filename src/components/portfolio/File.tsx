import { Link } from "react-router-dom";
import { FileType } from "../../types";
import { useRef, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RiDragDropLine } from "react-icons/ri";
import pdfCvFile from "../../assets/Krystian Kamer CV.pdf";
import { useFilesStore } from "../../store/filesSlice";

type FileProps = {
  file: FileType;
  setIsWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setWindowContent: React.Dispatch<React.SetStateAction<string>>;
};

const File = ({ file, setIsWindowOpen, setWindowContent }: FileProps) => {
  const moveFileToTrash = useFilesStore((state) => state.moveFileToTrash);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { icon, name, focus, href, to, id } = file;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const handleRenameClick = () => {
    setIsWindowOpen(false);
    if (inputRef.current) {
      inputRef.current.placeholder = "";
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const saveNameOnEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    name: string,
  ) => {
    if (e.key === "Enter" && inputRef.current) {
      inputRef.current.blur();
      inputRef.current.disabled = true;
      if (inputRef.current.value === "") {
        inputRef.current.value = name;
      }
    }
  };

  return (
    <div className="group relative h-fit" ref={setNodeRef} style={style}>
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
            className="pointer-events-none my-1 w-full bg-neutral text-center font-protest text-sm tracking-widest text-secondary/95 placeholder:text-secondary/95"
            placeholder={name}
            disabled={true}
            onKeyDown={(e) => saveNameOnEnter(e, name)}
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
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
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
                Przejdź
              </Link>
            ) : name === "CV" ? (
              <a
                href={pdfCvFile}
                download="krystian-kamer-cv.pdf"
                className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
              >
                Pobierz
              </a>
            ) : (
              <button
                className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
                onClick={() => {
                  setIsWindowOpen(false);
                  setIsDropdownOpen(false);
                  setWindowContent(name);
                  setTimeout(() => setIsWindowOpen(true), 0);
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
              <button
                className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
                onClick={() => moveFileToTrash(id)}
              >
                Przenieś do kosza
              </button>
            )}
          </div>
        )}
      </div>
      <button
        {...attributes}
        {...listeners}
        title="Przenieś folder"
        className="absolute right-1 top-0 cursor-move text-xl opacity-0 duration-200 group-hover:opacity-100 group-active:text-sm"
      >
        <RiDragDropLine className="pointer-events-none" />
      </button>
    </div>
  );
};

export default File;
