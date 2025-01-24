import { PriceItemType } from "@/types/entities";
import Link from "next/link";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const PriceItem = ({ item }: { item: PriceItemType }) => {
  return (
    <div
      className={`mx-auto flex max-w-lg flex-col items-start space-y-8 rounded-3xl border ${
        item.special ? "border-indigo-700 border-2 shadow-xl" : "border-gray-200"
      }  p-6  xl:p-8`}
    >
      <h3 className="text-lg font-normal">{item.titr}</h3>
      <div className="my-8 flex items-baseline justify-center">
        <span className="mr-2 text-5xl font-extrabold">$0</span>
        <span>/month</span>
      </div>

      <p className="font-light sm:text-sm">{item.description}</p>
      <Link
        href="/admin"
        className="w-full cursor-pointer rounded-md bg-gray-900 p-3 text-center text-sm font-semibold text-white shadow-sm hover:-translate-y-1"
      >
        Get started
      </Link>
      <ul role="list" className="mb-8 space-y-4 text-left text-sm">
        {item.features.map((feature) => (
          <li key={feature.id} className="flex items-center space-x-3">
            {feature.mark ? (
              <IoCheckmarkCircleSharp color="green" size={24} />
            ) : (
              <MdCancel color="red" size={24} />
            )}
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceItem;
