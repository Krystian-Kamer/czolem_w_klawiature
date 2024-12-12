import { useState } from "react";
import { desktopFiles } from "../../data";
import { File, Window } from "./index";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { BsWindows } from "react-icons/bs";

const Desktop = () => {
  const [files, setFiles] = useState(desktopFiles);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [windowContent, setWindowContent] = useState<string>("");

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setFiles((files) => {
        const prevIndex = files.findIndex((file) => file.id === active.id);
        const newIndex = files.findIndex((file) => file.id === over.id);
        return arrayMove(files, prevIndex, newIndex);
      });
    }
  };

  return (
    <div className="relative hidden h-[70vh] grid-flow-col grid-cols-10 grid-rows-6 gap-4 selection:bg-accent selection:text-secondary lg:grid">
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
          <BsWindows className="h-full w-full drop-shadow-lg text-secondary hover:text-primary duration-1000" />
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
