import { useState } from "react";
import { File, Window } from "./index";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { BsWindows } from "react-icons/bs";
import { useFilesStore } from "../../store/filesSlice";
import { ContextValue } from "../../types";
import { AppContext } from "../../App";
import { useContext } from "react";
const Desktop = () => {
  const files = useFilesStore((state) => state.files);
  const reorderFiles = useFilesStore((state) => state.reorderFiles);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [windowContent, setWindowContent] = useState<string>("");
  const { windowHeight, windowWidth } = useContext<ContextValue>(AppContext);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      reorderFiles(String(active.id), String(over.id));
    }
  };

  return (
    <div
      className={`relative hidden ${windowWidth > windowHeight && windowHeight <= 360 ? "h-[170vh]" : windowWidth > windowHeight && windowHeight <= 800 ?  "h-[110vh]" : "h-[70vh]"} grid-flow-col sm:grid-cols-6 md:grid-cols-7 grid-rows-6 gap-4 selection:bg-accent selection:text-secondary sm:mx-8 sm:grid lg:mx-0 lg:grid-cols-10`}
    >
      <DndContext onDragEnd={handleDragEnd} autoScroll={false}>
        <SortableContext items={files}>
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
        </SortableContext>

        <div className="absolute left-1/2 top-[40%] h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2">
          <BsWindows className="h-full w-full text-secondary drop-shadow-lg duration-1000 hover:text-primary" />
        </div>

        {isWindowOpen && (
          <Window
            setIsWindowOpen={setIsWindowOpen}
            windowContent={windowContent}
          />
        )}
      </DndContext>
    </div>
  );
};
export default Desktop;
