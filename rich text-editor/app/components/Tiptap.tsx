"use client";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Underline from "@tiptap/extension-underline";
import Text from "@tiptap/extension-text";
import { useEditor, EditorContent } from "@tiptap/react";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Underline],
    content: `
        
      `,
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`btn btn-neutral ${editor.isActive("underline") ? "is-active" : ""}`}
      >
        toggleUnderline
      </button>
      <div className="border-2 border-gray-700 p-2">
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default Tiptap;
