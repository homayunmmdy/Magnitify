import { Button, Input } from "@/components";
import { CategoryType } from "@/types/CashTypes";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  category: CategoryType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  onRemove: (id: number) => void;
}

const CategoryList = ({ category, onChange, onRemove }: Props) => (
  <div  className="flex items-center gap-2">
    <Input
      type="text"
      value={category.name}
      color="input-primary"
      onChange={(e) => onChange(e, category.id)}
      className="w-full"
      style="w-full"
    />
    <Button
      type="button"
      onClick={() => onRemove(category.id)}
      color="btn-error"
    >
      <MdDeleteOutline />
    </Button>
  </div>
);


export default CategoryList;
