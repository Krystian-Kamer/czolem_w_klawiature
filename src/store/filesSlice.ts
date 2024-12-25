import { create } from "zustand";
import { desktopFiles } from "../data";
import { FileType } from "../types";
import { arrayMove } from "@dnd-kit/sortable";

type Files = {
  files: FileType[];
  trashFiles: FileType[];
};

type Actions = {
  reorderFiles: (activeId: string, overId: string) => void;
  moveFileToTrash: (fileId: number) => void;
  restoreFile: (fileId: number) => void;
};

export const useFilesStore = create<Files & Actions>((set) => ({
  files: desktopFiles,
  trashFiles: [],
  reorderFiles: (activeId, overId) =>
    set((state) => {
      const prevIndex = state.files.findIndex(
        (file) => file.id === Number(activeId),
      );
      const newIndex = state.files.findIndex(
        (file) => file.id === Number(overId),
      );
      return {
        files: arrayMove(state.files, prevIndex, newIndex),
      };
    }),
  moveFileToTrash: (fileId) =>
    set((state) => {
      const fileToMove = state.files.find((file) => file.id === fileId);
      if (!fileToMove) return state;
      return {
        files: state.files.filter((file) => file.id !== fileId),
        trashFiles: [...state.trashFiles, fileToMove],
      };
    }),
  restoreFile: (fileId) =>
    set((state) => {
      const fileToRestore = state.trashFiles.find((file) => file.id === fileId);
      if (!fileToRestore) return state;
      return {
        files: [...state.files, fileToRestore],
        trashFiles: state.trashFiles.filter((file) => file.id !== fileId),
      };
    }),
}));
