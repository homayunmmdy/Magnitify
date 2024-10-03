import TicketsCash from "@/etc/cash/TicketsCash";
import { TicketModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.PUT(id, req, "Ticket Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.DELETE(id, "Ticket Deleted successfully");
}
