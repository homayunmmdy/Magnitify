import React from "react";

const FormLayout = ({
  title,
  children,
  isLoading,
}: {
  title: string;
  children: React.ReactNode;
  isLoading?: boolean;
}) => (
  <div className="flex w-full flex-col items-center justify-center">
    {isLoading && (
      <span className="loading loading-ring loading-lg absolute"></span>
    )}
    <div className="mb-4 w-full text-center md:w-6/12">
      <h3 className="rounded-lg bg-indigo-700 p-2 text-2xl font-semibold text-white">
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default FormLayout;
