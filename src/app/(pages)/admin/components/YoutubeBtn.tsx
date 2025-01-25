import { Button } from "@/components";
import React from "react";
import { FaYoutube } from "react-icons/fa";

export const YoutubeBtn = ({ editor }: any) => {

  if (!editor) {
    return null;
  }

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: Math.max(320, 480) || 640,
        height: Math.max(180, 640) || 480,
      });
    }
  };

  return (
    <Button id="add" onClick={addYoutubeVideo} type="button" color="btn-ghost">
      <FaYoutube size={20} />
    </Button>
  );
};
