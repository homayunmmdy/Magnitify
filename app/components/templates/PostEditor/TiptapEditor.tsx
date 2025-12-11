"use client"

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit"; // You need to install this
import { EditorContent } from "@tiptap/react";
import React from "react";
import "./tiptap.css";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit, 
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const canUndo = editor?.can().chain().focus().undo().run() || false;
  const canRedo = editor?.can().chain().focus().redo().run() || false;

  if (!editor) {
    return null;
  }

  return (
    <div id="tiptap-style">
      <div className="mb-2 flex flex-wrap gap-2 px-3">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!canUndo}
          type="button"
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!canRedo}
          type="button"
        >
          Redo
        </button>
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