import { useState } from "react";
import { File, Window } from "./index";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useFilesStore } from "../../store/filesSlice";
import { BsWindows } from "react-icons/bs";

const Desktop = () => {
  const files = useFilesStore((state) => state.files);
  const reorderFiles = useFilesStore((state) => state.reorderFiles);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [windowContent, setWindowContent] = useState<string>("");

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      reorderFiles(String(active.id), String(over.id));
    }
  };

  return (
    <div className="relative hidden min-h-[800px] grid-flow-col grid-rows-6 gap-4 selection:bg-accent selection:text-secondary sm:grid sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10">
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
        {isWindowOpen && (
          <Window
            setIsWindowOpen={setIsWindowOpen}
            windowContent={windowContent}
          />
        )}
      </DndContext>
      <div className="absolute left-[53%] top-[50%] sm:h-60 sm:w-60 md:h-72 md:w-72 -translate-x-1/2 -translate-y-1/2">
        <BsWindows className="h-full w-full text-secondary drop-shadow-lg duration-1000 hover:text-primary" />
      </div>
    </div>
  );
};
export default Desktop;
