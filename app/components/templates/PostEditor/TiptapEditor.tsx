"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { IoIosRedo, IoIosUndo } from "react-icons/io";
import "./tiptap.css";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  const canUndo = editor?.can().chain().focus().undo().run() || false;
  const canRedo = editor?.can().chain().focus().redo().run() || false;

  if (!editor) {
    return null;
  }

  return (
    <div id="tiptap-style">
      <div className="mb-2 flex items-center shadow-[0_2px_1px_-1px_rgba(0,0,0,0.1)] justify-between flex-wrap gap-2  border-b border-[#c8ccd1]">
        <div>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!canUndo}
            type="button"
            className={`w-10 h-10 cursor-pointer place-items-center ${!canUndo ? "opacity-[0.3]" : "opacity-100"}`}
          >
            <IoIosUndo />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!canRedo}
            type="button"
            className={`w-10 h-10 cursor-pointer place-items-center ${!canRedo ? "opacity-[0.3]" : "opacity-100"}`}
          >
            <IoIosRedo />
          </button>
        </div>
        <div>
          <button className="p-3 bg-[#36c] text-white font-bold">
            Publish
          </button>
        </div>
      </div>
      <EditorContent
        editor={editor}
        className="prose max-w-none"
        id="news_body"
      />
    </div>
  );
};

export default TiptapEditor;
