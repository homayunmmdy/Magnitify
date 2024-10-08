import { FaFire } from "react-icons/fa";
const PriorityDisplay = ({ priority }: {priority: number}) => {
  return (
    <div className="flex justify-start align-baseline gap-2">
      <FaFire
      size={20}
        className={` pr-1 ${
          priority > 0 ? " text-red-500" : " text-slate-500"
        }`}
      />
      <FaFire
      size={20}
        className={` pr-1 ${
          priority > 1 ? " text-red-500" : " text-slate-500"
        }`}
      />
      <FaFire
      size={20}
        className={`  pr-1 ${
          priority > 2 ? " text-red-500" : " text-slate-500"
        }`}
      />
      <FaFire
      size={20}
        className={` pr-1 ${
          priority > 3 ? " text-red-500" : " text-slate-500"
        }`}
      />
      <FaFire
      size={20}
        className={` ${priority > 4 ? " text-red-500" : " text-slate-500"}`}
      />
    </div>
  );
};
export default PriorityDisplay;