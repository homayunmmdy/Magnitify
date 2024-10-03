import { FullHoverAnimationType } from "@/types/entities";
import Link from "next/link";
import React from "react";

const FullHoverAnimation: React.FC<FullHoverAnimationType> = ({
  link,
  text,
}: FullHoverAnimationType) => {
  return (
    <>
      <div className="cursor-pointer relative before:absolute before:bg-indigo-500 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
        {link ? (
          <Link href={link} className="relative">
            {text}
          </Link>
        ) : (
          <span className="relative">{text}</span>
        )}
      </div>
    </>
  );
};

export default FullHoverAnimation;
