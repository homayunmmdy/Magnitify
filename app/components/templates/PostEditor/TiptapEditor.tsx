"use client";
import Heading from "@tiptap/extension-heading";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoIosRedo, IoIosUndo } from "react-icons/io";
import { TfiLayoutAccordionMerged } from "react-icons/tfi";
import { FaLink } from "react-icons/fa";
import Image from "next/image";
import "./tiptap.css";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  formData?: any;
  onTitleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageUrlChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ 
  content, 
  onChange,
  formData,
  onTitleChange,
  onImageUrlChange 
}) => {
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

  const [dialogueOpen, setDialogueOpen] = useState(false);

  const toggleDialogue = () => {
    setDialogueOpen(!dialogueOpen);
  };

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
    <div id="tiptap-style" className="relative">
      <div className="mb-2 flex items-center flex-nowrap shadow-[0_2px_1px_-1px_rgba(0,0,0,0.1)] justify-between flex-wrap gap-2  border-b border-[#c8ccd1]">
        <div className="flex w-3/5">
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
        <div className="flex w-2/5 justify-end relative">
          <button 
            className="w-10 h-10 cursor-pointer place-items-center"
            onClick={toggleDialogue}
            type="button"
          >
            <TfiLayoutAccordionMerged />
          </button>
          <button
            form="post-form"
            type="submit"
            className="p-2.5 bg-[#36c] text-white cursor-pointer font-bold"
          >
            Publish
          </button>
          
          {/* Dialogue positioned absolutely on the right side */}
          {dialogueOpen && (
            <div className="absolute top-full right-0 mt-1 z-10">
              <div className="p-1 border border-[#a2a9b1] bg-white max-w-[380px]  overflow-hidden">
                {/* Title input - Wikipedia style */}
                <div className="mb-1">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full p-1 border border-[#a2a9b1] bg-[#f8f9fa] text-black font-bold text-sm"
                    value={formData?.title || ""}
                    onChange={onTitleChange}
                    required
                    placeholder="Enter title"
                  />
                </div>
                
                {/* Image preview - Wikipedia style */}
                <div className="mb-1 border border-[#a2a9b1] p-1 bg-[#f8f9fa]">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={formData?.imgurl}
                      alt={formData?.title || "Post image"}
                      title={formData?.title || "Post image"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 380px) 380px, 380px"
                    />
                  </div>
                </div>
                
                {/* Image URL input - Wikipedia style */}
                <div className="border border-[#a2a9b1] p-1 bg-[#f8f9fa]">
                  <div className="flex items-center">
                    <div className="mr-1 text-[#36c]">
                      <FaLink size={14} />
                    </div>
                    <input
                      id="imgurl"
                      type="url"
                      name="imgurl"
                      className="w-full p-1 bg-transparent text-sm border-none outline-none"
                      placeholder="Enter image URL"
                      value={formData?.imgurl || ""}
                      onChange={onImageUrlChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
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