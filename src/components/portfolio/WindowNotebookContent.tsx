import { useState, useEffect } from "react";

const WindowNotebookContent = () => {
  const [notes, setNotes] = useState<string>(
    () => localStorage.getItem("window-notebook-notes") || "",
  );

  useEffect(() => {
    localStorage.setItem("window-notebook-notes", notes);
  }, [notes]);

  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <textarea
        className="min-h-[500px] w-full resize-none bg-base-100 font-protest text-2xl p-20 tracking-widest selection:bg-base-200 selection:text-primary text-secondary/75 focus:outline-none"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Miejsce na Twoje notatki..."
      />
    </div>
  );
};
export default WindowNotebookContent;
