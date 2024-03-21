import React from "react";
import TicketCard from "./TicketCard";
import GetTicket from "./GetTicket";
import PostsSkelton from "./PostsSkelton";

const Posts = async () => {
  const data = await GetTicket();

  if (!data?.tickets) {
    return <PostsSkelton />;
  }

  const tickets = data.tickets;

  return (
    <div className="p-5">
      <div>
        {tickets && (
          <div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tickets.map((Ticket, _index) => (
                <TicketCard id={_index} key={_index} ticket={Ticket} />
              ))}
            </div>
          </div>
        )}
        <div id="pos-article-display-94687"></div>
      </div>
    </div>
  );
};

export default Posts;
