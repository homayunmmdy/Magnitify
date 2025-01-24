import "@/app/tiptap.css";
import { Button } from "@/components";
import CharacterCount from "@tiptap/extension-character-count";
import CodeBlock from "@tiptap/extension-code-block";
import Highlight from "@tiptap/extension-highlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useCallback } from "react";
import { GrOrderedList } from "react-icons/gr";
import { IoMdCode, IoMdLink } from "react-icons/io";
import {
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatQuote,
  MdFormatUnderlined,
  MdLinkOff,
  MdOutlineFormatBold,
  MdOutlineHorizontalRule,
  MdOutlineImage,
  MdStrikethroughS,
} from "react-icons/md";
import { PiHighlighterFill } from "react-icons/pi";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}
const limit = 9999;

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      CodeBlock,
      HorizontalRule,
      Image,
      Highlight.configure({ multicolor: true }),
      CharacterCount.configure({
        limit,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const percentage = editor
    ? Math.round((100 / limit) * editor.storage.characterCount.characters())
    : 0;

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-md border border-indigo-500 p-2" id="tiptap-style">
      <div className="mb-2 flex flex-wrap gap-2 px-3">
        <Button
          type="button"
          color="btn-ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
          H1
        </Button>
        <Button
          type="button"
          color="btn-ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
          H2
        </Button>

        <Button
          type="button"
          color="btn-ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        >
          H3
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          type="button"
          color="btn-ghost"
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <MdOutlineFormatBold size={20} />
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          type="button"
          color="btn-ghost"
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <MdStrikethroughS size={20} />
        </Button>

        <Button
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <MdFormatQuote size={20} />
        </Button>
        <div className="control-group">
          <div className="button-group">
            <Button
              type="button"
              color="btn-ghost"
              onClick={setLink}
              className={editor.isActive("link") ? "is-active" : ""}
            >
              <IoMdLink size={20} />
            </Button>
            <Button
              type="button"
              color="btn-ghost"
              onClick={() => editor.chain().focus().unsetLink().run()}
              disabled={!editor.isActive("link")}
            >
              <MdLinkOff size={20} />
            </Button>
          </div>
        </div>
        <Button
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <MdFormatUnderlined size={20} />
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          type="button"
          color="btn-ghost"
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <MdFormatItalic size={20} />
        </Button>
        <Button
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <GrOrderedList size={20} />
        </Button>

        <Button
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <MdFormatListBulleted size={20} />
        </Button>
        <Button
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlight") ? "is-active" : ""}
        >
          <PiHighlighterFill size={20} />
        </Button>
        <Button
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <IoMdCode size={20} />
        </Button>
        <Button type="button" color="btn-ghost" onClick={addImage}>
          <MdOutlineImage size={20} />
        </Button>
        <Button
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <MdOutlineHorizontalRule size={20} />
        </Button>
      </div>
      <EditorContent editor={editor} className="prose max-w-none" id="news_body"/>

      <div
        className={`character-count${
          editor.storage.characterCount.characters() === limit
            ? "character-count--warning"
            : ""
        }`}
      >
        <svg height="20" width="20" viewBox="0 0 20 20">
          <circle r="10" cx="10" cy="10" fill="#e9ecef" />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
            transform="rotate(-90) translate(-20)"
          />
          <circle r="6" cx="10" cy="10" fill="white" />
        </svg>
        {editor.storage.characterCount.characters()} / {limit} characters
        <span className="mx-3"></span>
        {editor.storage.characterCount.words()} words
      </div>
    </div>
  );
};

export default TiptapEditor;
