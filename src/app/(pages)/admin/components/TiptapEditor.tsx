import "@/app/tiptap.css";
import { Button } from "@/components";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { GrOrderedList } from "react-icons/gr";
import {
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatQuote,
  MdFormatUnderlined,
  MdOutlineFormatBold,
  MdStrikethroughS,
} from "react-icons/md";
import { PiHighlighterFill } from "react-icons/pi";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight.configure({ multicolor: true }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-md border border-indigo-500 p-2" id="tiptap-style">
      <div className="mb-2 flex flex-wrap gap-2 px-3">
        <Button
          title={"H1"}
          type="button"
          color="btn-ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          style={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        />
        <Button
          title={"H2"}
          type="button"
          color="btn-ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          style={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        />

        <Button
          title={"H3"}
          type="button"
          color="btn-ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          style={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        />

        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          title={<MdOutlineFormatBold size={20} />}
          type="button"
          color="btn-ghost"
          style={editor.isActive("bold") ? "is-active" : ""}
        />

        <Button
          title={<MdStrikethroughS size={20} />}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          type="button"
          color="btn-ghost"
          style={editor.isActive("strike") ? "is-active" : ""}
        />

        <Button
          title={<MdFormatQuote size={20} />}
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          style={editor.isActive("blockquote") ? "is-active" : ""}
        />

        <Button
          title={<MdFormatUnderlined size={20} />}
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          style={editor.isActive("underline") ? "is-active" : ""}
        />

        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title={<MdFormatItalic size={20} />}
          type="button"
          color="btn-ghost"
          style={editor.isActive("italic") ? "is-active" : ""}
        />
        <Button
          title={<GrOrderedList size={20} />}
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          style={editor.isActive("orderedList") ? "is-active" : ""}
        />
        <Button
          title={<MdFormatListBulleted size={20} />}
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          style={editor.isActive("bulletList") ? "is-active" : ""}
        />
        <Button
          title={<PiHighlighterFill size={20} />}
          type="button"
          color="btn-ghost"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          style={editor.isActive("highlight") ? "is-active" : ""}
        />
      </div>
      <EditorContent editor={editor} className="prose max-w-none" />
    </div>
  );
};

export default TiptapEditor;