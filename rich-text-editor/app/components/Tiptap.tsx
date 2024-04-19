"use client";
import "./style.css"
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Underline from "@tiptap/extension-underline";
import Text from "@tiptap/extension-text";
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import Bold from '@tiptap/extension-bold'
import Image from '@tiptap/extension-image'
import Blockquote from '@tiptap/extension-blockquote'
import { useEditor, EditorContent } from "@tiptap/react";
import { LuUnderline } from "react-icons/lu";
import { RiMarkPenLine } from "react-icons/ri";
import { useCallback } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { BsTypeBold } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa6";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Bold,
      Text,
      Image,
      Underline,
      Blockquote,
      Highlight.configure({ multicolor: true }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: `
        
      `,
  });

  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="mb-2  flex items-center gap-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`btn ${editor.isActive('bold') ? 'is-active' : ''}`}
      >
        <BsTypeBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`btn ${editor.isActive('blockquote') ? 'is-active' : ''}`}
      >
        <FaQuoteRight />
      </button>
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
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`btn ${editor.isActive('highlight') ? 'is-active' : ''}`}
      >
        <RiMarkPenLine />
      </button>
      <button className="btn" onClick={addImage}><BiSolidImageAdd /></button>
      </div>
      <div className=" p-2">
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default Tiptap;
