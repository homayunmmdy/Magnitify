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
        حق نشر © {new Date().getFullYear()} - تمامی حقوق برای <Link href="/" title={siteName}>{siteName}</Link> محفوظ است
          
        </span>
      </div>
    </div>
  );
};

export default CopyRight;
