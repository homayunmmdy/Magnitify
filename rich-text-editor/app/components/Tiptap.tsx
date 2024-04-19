"use client";
import "./style.css"
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Underline from "@tiptap/extension-underline";
import Text from "@tiptap/extension-text";
import Heading from '@tiptap/extension-heading'
import { useEditor, EditorContent } from "@tiptap/react";
import { LuUnderline } from "react-icons/lu";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Underline,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: `
        
      `,
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="mb-2  flex items-center gap-4">
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`btn ${editor.isActive("underline") ? "is-active" : ""}`}
        >
          <LuUnderline />
        </button>
        <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`btn ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
        title="Control + Alt + 1"
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`btn ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`btn ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
      >
        H3
      </button>
      </div>
      <div className=" p-2">
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default Tiptap;
