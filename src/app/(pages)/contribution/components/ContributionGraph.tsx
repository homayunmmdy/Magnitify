import { Button } from "@/components";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { DeleteBlock } from "../../admin/components/elements";

// @ts-ignore
const ContributionGraph = ({ contributions }) => {
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  const daysArray = Array.from({ length: 365 }, (_, i) => {
    const date = new Date(oneYearAgo);
    date.setDate(date.getDate() + i);
    return date;
  });

  const getContributionCount = (date: Date) => {
    // @ts-ignore
    return contributions?.filter((contribute) => {
      const contributionDate = new Date(contribute.date);
      return contributionDate.toDateString() === date.toDateString();
    }).length;
  };

  const getColor = (count: number) => {
    if (count === 0) return "bg-gray-100";
    if (count < 3) return "bg-green-200";
    if (count < 5) return "bg-green-300";
    if (count < 7) return "bg-green-400";
    return "bg-green-500";
  };

  const formatDate = (date: Date): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contribution Graph</h2>
      <div className="flex flex-wrap gap-1">
        {daysArray.map((date, index) => (
          <div
            key={index}
            className={`w-3 h-3 ${getColor(getContributionCount(date))}`}
            title={`${formatDate(date)}: ${getContributionCount(
              date
            )} contributions`}
          />
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Contributions</h3>
        {contributions?.length > 0 ? (
          <ul className="space-y-2">
            {/* @ts-ignore */}
            {contributions?.map((contribute, index) => (
              <li key={index} className="border p-2 rounded">
                <a
                  href={contribute.link}
                  className="text-blue-500 hover:underline"
                >
                  {contribute.title}
                </a>
                <div className="flex gap-2">
                {/* <Link
                  href={`/admin/contribution/${contribute._id}`}
                  style={{ display: "contents" }}
                >
                  <Button
                    title={<FaEdit />}
                    color="btn-warning"
                    type="button"
                  />
                </Link> */}
                <DeleteBlock path="contribution" id={contribute._id} />
                </div>
                <p className="text-sm text-gray-600">
                  {contribute.description}
                </p>
                <p className="text-xs text-gray-400">
                  {formatDate(new Date(contribute.date))}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No contributions yet.</p>
        )}
      </div>
    </div>
  );
};

export default ContributionGraph;
