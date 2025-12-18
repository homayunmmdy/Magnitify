"use client";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { TfiLayoutAccordionMerged } from "react-icons/tfi";
import "../../../[locale]/tiptap.css";
import BlockTypeSelector from "./BlockTypeSelector";
import LinkMenu from "./LinkMenu";
import UndoRedoButtons from "./UndoRedoButtons";

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
  onImageUrlChange,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
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

  const [dialogueOpen, setDialogueOpen] = useState(false);

  const toggleDialogue = () => {
    setDialogueOpen(!dialogueOpen);
  };

  if (!editor) {
    return null;
  }

  return (
    <div id="tiptap-style" className="relative">
      <div className="mb-2 flex items-center md:flex-nowrap shadow-[0_2px_1px_-1px_rgba(0,0,0,0.1)] justify-between flex-wrap gap-2  border-b border-[#c8ccd1]">
        <div className="flex w-3/5">
          <UndoRedoButtons editor={editor} />
          <BlockTypeSelector editor={editor} />
          <LinkMenu editor={editor} />
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
