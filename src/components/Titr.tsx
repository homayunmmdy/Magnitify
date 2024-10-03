import { TitrType } from "@/types/entities";
import React from "react";

const Titr: React.FC<TitrType> = ({ title, item, style }: TitrType) => {
  return (
    <h2 className={`border-b-2 border-gray-600 font-bold my-3 p-2  ${item} ${style}`}>
      {title}
    </h2>
  );
};

export default Titr;
