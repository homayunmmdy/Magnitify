import TicketsCash from "@/etc/cash/TicketsCash";
import { TicketModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.Post(req, "Ticket Created successfully");
}
