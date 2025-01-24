import TextAdvCash from "@/cash/TextAdvCash";
import { TextAdvModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(TextAdvModel, TextAdvCash);
  return handler.Get(id);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(TextAdvModel, TextAdvCash);
  return handler.PUT(id, req, "Ads Update Successfully");
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(TextAdvModel, TextAdvCash);
  return handler.DELETE(id, "Ads Deleted successfully");
}
