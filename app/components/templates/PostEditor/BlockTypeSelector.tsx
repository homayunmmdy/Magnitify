import { EditorType } from "@/app/types/PropsTypes";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const BlockTypeSelector: React.FC<EditorType> = ({ editor }) => {
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
  );
};

export default BlockTypeSelector;
