import React from "react";

const ErrorText = ({ children }: { children: React.ReactNode }) => {
  return <p className="my-3 text-center font-bold text-red-600">{children}</p>;
};

export default ErrorText;
