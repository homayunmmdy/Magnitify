const MDXCode = ({ code }: { code: string }) => {
  return (
    <>
      <div className="mockup-code my-4 md:my-8 w-full lg:w-fit mx-auto">
        <pre className="p-4">
          <code>{code}</code>
        </pre>
      </div>
    </>
  );
};

export default MDXCode;