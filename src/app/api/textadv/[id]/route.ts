import TextAdvCash from "@/etc/cash/TextAdvCash";
import { TextAdvModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(TextAdvModel, TextAdvCash);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(TextAdvModel, TextAdvCash);
  return handler.PUT(id, req, "Ads Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(TextAdvModel, TextAdvCash);
  return handler.DELETE(id, "Ads Deleted successfully");
}
