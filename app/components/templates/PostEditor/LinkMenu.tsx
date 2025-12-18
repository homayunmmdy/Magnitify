import { EditorType } from "@/app/types/PropsTypes";
import React, { useCallback } from "react";
import { FaLink } from "react-icons/fa";


const LinkMenu: React.FC<EditorType> = ({ editor }) => {
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

  return (
    <button
      type="button"
      onClick={setLink}
      className="w-10 h-10 cursor-pointer place-items-center"
    >
      <FaLink />
    </button>
  );
};

export default LinkMenu;