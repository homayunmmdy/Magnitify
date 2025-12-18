import React from "react";
import { EditorType } from "@/app/types/PropsTypes";
import { IoIosRedo, IoIosUndo } from "react-icons/io";

const UndoRedoButtons: React.FC<EditorType> = ({ editor }) => {
  const canUndo = editor?.can().chain().focus().undo().run() || false;
  const canRedo = editor?.can().chain().focus().redo().run() || false;

  return (
    <>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!canUndo}
        type="button"
        className={`w-10 h-10 cursor-pointer place-items-center ${
          !canUndo ? "opacity-[0.3]" : "opacity-100"
        }`}
      >
        <IoIosUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!canRedo}
        type="button"
        className={`w-10 h-10 cursor-pointer place-items-center ${
          !canRedo ? "opacity-[0.3]" : "opacity-100"
        }`}
      >
        <IoIosRedo />
      </button>
    </>
  );
};

export default UndoRedoButtons;
