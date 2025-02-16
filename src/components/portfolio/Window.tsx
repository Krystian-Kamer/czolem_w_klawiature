import { IoCloseOutline } from "react-icons/io5";
import {
  WindowTrashContent,
  WindowNotebookContent,
  WindowProjectContent,
  WindowToDoContent,
} from "./index";

type WindowProps = {
  windowContent: string;
  setIsWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Window = ({ windowContent, setIsWindowOpen }: WindowProps) => {
  const renderWindowContent = () => {
    switch (windowContent) {
      case "pickle rick":
      case "vid-x":
      case "rachunki":
      case "pentago":
        return <WindowProjectContent project={windowContent} />;
      case "kosz":
        return <WindowTrashContent />;
      case "notatnik":
        return <WindowNotebookContent />;
      case "to-do":
        return <WindowToDoContent />;
    }
  };

  return (
    <div className="mockup-browser z-10 absolute right-0 top-0 h-fit w-full lg:w-[75%] border-2 border-secondary/60 bg-accent">
      <div className="mockup-browser-toolbar flex w-40 justify-between">
        <p className="capitalize italic tracking-wider text-secondary/60">
          {windowContent}
        </p>
        <button
          className="cursor-custom-pointer select-none rounded-full bg-neutral p-1 text-lg text-secondary/80 hover:animate-spin"
          style={{ animationDuration: "1.7s" }}
          onClick={() => setIsWindowOpen(false)}
        >
          <IoCloseOutline className="pointer-events-none" />
        </button>
      </div>
      {renderWindowContent()}
    </div>
  );
};
export default Window;
