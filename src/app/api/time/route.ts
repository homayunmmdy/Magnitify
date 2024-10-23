
import TimeLineCash from "@/etc/cash/TimeLineCash";
import { TimeLineModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.Post(req, "Ticket Created successfully");
}
