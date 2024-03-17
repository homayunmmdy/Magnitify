import React from "react";
import TicketCard from "../../ui/admin/post/AdminPost";
import GetTicket from "../../ui/home/GetTicket";


const Posts = async () => {
  const data = await GetTicket();

  // Make sure we have tickets needed for production build.
  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }

  const tickets = data.tickets;

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
            <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div
              key={categoryIndex}
              className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full"
            >
                <div className="mb-8 w-full">
                  <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                    {uniqueCategory}
                  </h4>
                </div>
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
