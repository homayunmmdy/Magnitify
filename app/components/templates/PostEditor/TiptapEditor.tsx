"use client";
import Heading from "@tiptap/extension-heading";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoIosRedo, IoIosUndo } from "react-icons/io";
import "./tiptap.css";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
    ],
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

  const getCurrentBlockType = () => {
    if (editor.isActive("heading", { level: 1 })) return "h1";
    if (editor.isActive("heading", { level: 2 })) return "h2";
    if (editor.isActive("heading", { level: 3 })) return "h3";
    if (editor.isActive("heading", { level: 4 })) return "h4";
    if (editor.isActive("heading", { level: 5 })) return "h5";
    if (editor.isActive("heading", { level: 6 })) return "h6";
    if (editor.isActive("paragraph")) return "p";
    return "p";
  };

  const handleBlockTypeChange = (value: string) => {
    switch (value) {
      case "p":
        editor.chain().focus().setParagraph().run();
        break;
      case "h1":
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case "h2":
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case "h3":
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        break;
      case "h4":
        editor.chain().focus().toggleHeading({ level: 4 }).run();
        break;
      case "h5":
        editor.chain().focus().toggleHeading({ level: 5 }).run();
        break;
      case "h6":
        editor.chain().focus().toggleHeading({ level: 6 }).run();
        break;
      default:
        editor.chain().focus().setParagraph().run();
    }
  };

  const blockTypeOptions = [
    { value: "p", label: "Paragraph", className: "text-base text-gray-700" },
    {
      value: "h1",
      label: "Heading 1",
      className: "text-2xl font-bold text-gray-900",
    },
    {
      value: "h2",
      label: "Heading 2",
      className: "text-xl font-bold text-gray-800",
    },
    {
      value: "h3",
      label: "Heading 3",
      className: "text-lg font-bold text-gray-700",
    },
    {
      value: "h4",
      label: "Heading 4",
      className: "text-base font-bold text-gray-700",
    },
    {
      value: "h5",
      label: "Heading 5",
      className: "text-sm font-bold text-gray-600",
    },
    {
      value: "h6",
      label: "Heading 6",
      className: "text-xs font-bold text-gray-600",
    },
  ];

  return (
    <div id="tiptap-style">
      <div className="mb-2 flex items-center shadow-[0_2px_1px_-1px_rgba(0,0,0,0.1)] justify-between flex-wrap gap-2  border-b border-[#c8ccd1]">
        <div className="flex">
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
       
          <div className="relative inline-block">
            <select
              value={getCurrentBlockType()}
              onChange={(e) => handleBlockTypeChange(e.target.value)}
              className="border-x appearance-none pr-7 cursor-pointer border-[#c8ccd1] text-sm p-3"

              // className="w-full max-w-sm appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-12 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 cursor-pointer transition-all duration-200"
            >
              {blockTypeOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className={`${option.className} py-2`}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <BiChevronDown size={16} />
            </div>
          </div>
        </div>
        <div>
          <button className="p-3 bg-[#36c] text-white cursor-pointer font-bold">
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
