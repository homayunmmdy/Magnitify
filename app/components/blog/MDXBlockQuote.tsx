const MDXBlockQuote = ({ children }: { children: string }) => {
  return (
    <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
      <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
        {children}
      </p>
    </blockquote>
  );
};

export default MDXBlockQuote;