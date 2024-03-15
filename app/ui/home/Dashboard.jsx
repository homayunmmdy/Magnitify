import React from "react";
import TicketCard from "./TicketCard";
import GetTicket from "./GetTicket";

const Dashboard = async () => {
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
            <div key={categoryIndex} className="mb-4">
              <div className="flex flex-wrap items-center justify-between mb-8">
                <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl" id={uniqueCategory}>
                  {uniqueCategory}
                </h2>
              </div>
              <div className="lg:grid grid-cols-2 xl:grid-cols-3 ">
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
            </div>
          ))}
          <div id="pos-article-display-94687"></div>
      </div>
    </div>
  );
};

export default Dashboard;
