"use client";
import { TicketCard } from "@/components";
import { TICKETS_API_URL } from "@/etc/config/apiConstants";
import { TICKETS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import { checkMaster } from "@/util/checkMaster";

const AdminTicketsPage = () => {
  const { data: tickets } = useFetch(TICKETS_QUERY_KEY, TICKETS_API_URL);
  let master = checkMaster();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* @ts-ignore */}
        {tickets?.map((ticket) => (
          <TicketCard ticket={ticket} master={master} />
        ))}
      </div>
    </>
  );
};
export default AdminTicketsPage;
