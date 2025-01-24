const SelectFiledSkeleton = ({ label }: { label: string }) => {
  return (
    <>
      <label>{label}</label>
      <div className="skeleton mb-2 h-12 w-full"></div>
    </>
  );
};

export default SelectFiledSkeleton;
