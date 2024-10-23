
import TimeLineCash from "@/etc/cash/TimeLineCash";
import { TimeLineModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.PUT(id, req, "Ticket Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.DELETE(id, "Ticket Deleted successfully");
}
