import Link from "next/link";
import React from "react";

interface Props {
  siteName: string;
}

const CopyRight: React.FC<Props> = ({ siteName }: Props) => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-center">
        <span className="text-sm" data-testid='copyrightText'>
          Copyright@{new Date().getFullYear()} All Right Reserved by{" "}
          <Link href="/" title={siteName}>{siteName}</Link>
        </span>
      </div>
    </div>
  );
};

export default CopyRight;
