"use client"
import { Button } from "@/components";
import useReadText from "@/hooks/useReadText";
import { useEffect } from "react";
import { FaPlay, FaStop } from "react-icons/fa";

const ReadPost = ({ text }: { text: string }) => {
  const { isSpeaking, handleReadText, handleStopReading, cleanup } =
    useReadText(text);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);
  return (
    <>
      {!isSpeaking ? (
        <Button
          className="rounded-full text-white"
          onClick={isSpeaking ? handleStopReading : handleReadText}
          color="btn-primary"
          ariaLabel="reading post button"
        ><FaPlay /></Button>
      ) : (
        <Button
          className="rounded-full text-white"
          onClick={isSpeaking ? handleStopReading : handleReadText}
          color="btn-primary"
          ariaLabel="stop reading post button"
        ><FaStop /></Button>
      )}
    </>
  );
};

export default ReadPost;
