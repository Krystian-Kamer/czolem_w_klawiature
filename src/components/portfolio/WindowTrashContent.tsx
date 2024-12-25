import { useFilesStore } from "../../store/filesSlice";
import { useState } from "react";

const WindowTrashContent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const trashFiles = useFilesStore((state) => state.trashFiles);
  const restoreFile = useFilesStore((state) => state.restoreFile);

  return (
    <div className="relative flex min-h-[500px] items-center justify-center rounded-none bg-base-100">
      <div className="">
        {!trashFiles.length ? (
          <p className="font-protest text-2xl tracking-wider">
            Kosz obecnie jest pusty.
          </p>
        ) : (
          <div
            className={`grid ${
              trashFiles.length > 3
                ? "grid-cols-4"
                : trashFiles.length === 3
                  ? "grid-cols-3"
                  : `grid-cols-${trashFiles.length}`
            } grid-rows-2 items-center justify-items-center gap-4 selection:bg-accent selection:text-secondary`}
          >
            {trashFiles.map((file) => (
              <div key={file.id} className="h-fit">
                <div className="dropdown dropdown-right">
                  <div
                    tabIndex={0}
                    role="button"
                    className={`cursor-custom-pointer flex w-28 flex-col items-center justify-center rounded-btn text-primary/95 shadow-md duration-200 hover:shadow-lg`}
                    onClick={() => setIsDropdownOpen(true)}
                  >
                    <div className={`pointer-events-none mt-4 text-6xl`}>
                      {file.icon}
                    </div>
                    <p className="pointer-events-none my-1 w-full bg-transparent text-center font-protest text-sm tracking-widest text-secondary/95 placeholder:text-secondary/95">
                      {file.name}
                    </p>
                  </div>
                  {isDropdownOpen && (
                    <div
                      tabIndex={0}
                      className="menu dropdown-content z-[1] -ml-4 mt-2 w-40 rounded-lg bg-neutral shadow"
                    >
                      <button
                        className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
                        onClick={() => restoreFile(file.id)}
                      >
                        Przywróć
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WindowTrashContent;
