import React from "react";

interface Props {
  title: string;
  number: number;
  icon: JSX.Element;
}

const Stat: React.FC<Props> = ({ title, number, icon }: Props) => {
  return (
    <>
      <div className="btn h-full w-full px-2 py-7 shadow-lg">
        <span>{icon}</span>
        {title}
        <div className="badge badge-primary text-white">+{number}</div>
      </div>
    </>
  );
};

export default Stat;
