import { Input } from "@/components";
import { CollapseType } from "@/types/entities";

const Collapse = ({ data }: { data: CollapseType }) => {
  return (
    <>
      <div key={data.id} className="collapse collapse-arrow join-item border">
        <Input
          id={`nexca-question-${data.id}`}
          type="radio"
          name="my-accordion-4"
          defaultChecked={true}
        />
        <label
          htmlFor={`nexca-question-${data.id}`}
          className="collapse-title text-xl font-bold "
        >
          {data.label}
        </label>
        <div className="collapse-content">{data.body}</div>
      </div>
    </>
  );
};

export default Collapse;
