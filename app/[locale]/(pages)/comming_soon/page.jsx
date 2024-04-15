import Link from "next/link";
import React from "react";

const CommingSoon = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">بزودی</h1>
        <Link href="/" className="text-gray-600 text-lg ">
          برگشت به صحفه حانه
        </Link>
     
      </div>
    </div>
  );
};

export default CommingSoon;
