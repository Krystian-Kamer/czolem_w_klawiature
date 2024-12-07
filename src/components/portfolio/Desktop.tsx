import { useState } from "react";
import { desktopFiles } from "../../data";
import { File, Window } from "./index";

const Desktop = () => {
  const [files, setFiles] = useState(desktopFiles);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [windowContent, setWindowContent] = useState<string>("");

  return (
    <div className="relative hidden h-[70vh] grid-flow-col grid-cols-10 grid-rows-6 gap-4 selection:bg-accent selection:text-secondary lg:grid">
      {files.map((file) => {
        return (
          <File
            key={file.id}
            file={file}
            setIsWindowOpen={setIsWindowOpen}
            setWindowContent={setWindowContent}
          />
        );
      })}
      {isWindowOpen && (
          <Window
            setIsWindowOpen={setIsWindowOpen}
            windowContent={windowContent}
          />
      )}
    </div>
  );
};
export default Desktop;
