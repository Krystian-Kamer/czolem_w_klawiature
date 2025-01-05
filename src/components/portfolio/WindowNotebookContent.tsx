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
        className="min-h-[500px] w-full resize-none bg-base-100 p-20 text-2xl font-semibold tracking-widest text-secondary/75 selection:bg-base-200 selection:text-primary focus:outline-none"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Miejsce na Twoje notatki...

        ...Ps. Jeśli chcesz to możesz przeciągać pliki najeżdżając na prawy górny kwadrat."
      />
    </div>
  );
};
export default WindowNotebookContent;
