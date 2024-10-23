import React from 'react';
import { FaFire } from "react-icons/fa";

interface Props {
  priority: number
}

const PriorityDisplay: React.FC<Props> = ({ priority }: Props) => {
  return (
    <div className="flex justify-start align-baseline gap-2">
      <FaFire
      size={20}
        className={` pr-1 ${
          priority > 0 ? " text-red-500" : " text-slate-500"
        }`}
        data-testid="icon"
      />
      <FaFire
      size={20}
        className={` pr-1 ${
          priority > 1 ? " text-red-500" : " text-slate-500"
        }`}
        data-testid="icon"
      />
      <FaFire
      size={20}
        className={`  pr-1 ${
          priority > 2 ? " text-red-500" : " text-slate-500"
        }`}
        data-testid="icon"
      />
      <FaFire
      size={20}
        className={` pr-1 ${
          priority > 3 ? " text-red-500" : " text-slate-500"
        }`}
        data-testid="icon"
      />
      <FaFire
      size={20}
        className={` ${priority > 4 ? " text-red-500" : " text-slate-500"}`}
        data-testid="icon"
      />
    </div>
  );
};
export default PriorityDisplay;